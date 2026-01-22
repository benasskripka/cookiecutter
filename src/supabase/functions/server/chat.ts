import { Context } from "npm:hono";

interface ChatRequest {
  message: string;
}

interface ChatResponse {
  message: string;
  action?: {
    type: 'FILTER' | 'POI' | 'RESET';
    data: any;
  };
}

export const chatHandler = async (c: Context) => {
  try {
    const body = await c.req.json() as ChatRequest;
    const msg = body.message.toLowerCase().trim();
    
    // Check for OpenAI Key
    const openAiKey = Deno.env.get("OPENAI_API_KEY");
    
    if (openAiKey) {
      // Use OpenAI if available
      try {
        const response = await fetch("https://api.openai.com/v1/chat/completions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${openAiKey}`
          },
          body: JSON.stringify({
            model: "gpt-4o",
            messages: [
              {
                role: "system",
                content: `You are a helpful assistant for a property rental app on Maui.
You can control the app UI using JSON output.
If the user wants to filter properties, output JSON with "action": { "type": "FILTER", "data": { "query": "string" } }.
If the user wants to see a location on the map, output JSON with "action": { "type": "POI", "data": { "lat": number, "lng": number, "label": "string" } }.
If the user wants to reset filters, output JSON with "action": { "type": "RESET", "data": {} }.
For general questions, just answer in text.
Always include a "message" field with your text response to the user.
Limit your response to valid JSON only if you are triggering an action.
If you are just chatting, return a JSON object with "message".
Do not use markdown code blocks. Just raw JSON.`
              },
              { role: "user", content: body.message }
            ],
            response_format: { type: "json_object" }
          })
        });
        
        const data = await response.json();
        const content = data.choices[0].message.content;
        return c.json(JSON.parse(content));
      } catch (e) {
        console.error("OpenAI Error:", e);
        // Fallback to regex if OpenAI fails
      }
    }

    // Fallback Regex Logic
    let response: ChatResponse = {
      message: "I didn't quite get that. Try 'Show homes in Kihei' or 'Pin the airport'."
    };

    if (msg.includes("reset") || msg.includes("clear")) {
      response = {
        message: "I've reset your search.",
        action: { type: 'RESET', data: {} }
      };
    } else if (msg.match(/pin|place\s+pin|where\s+is/)) {
      // Extract location
      const location = msg.replace(/.*(?:pin|on|at|is)\s+/, "").replace(/\?/, "").trim();
      // Mock geocoding
      let lat = 20.7984; 
      let lng = -156.3319;
      let label = location;

      if (location.includes("airport") || location.includes("ogg")) {
        lat = 20.898; lng = -156.43; label = "Kahului Airport";
      } else if (location.includes("kihei")) {
        lat = 20.7644; lng = -156.445; label = "Kihei";
      } else if (location.includes("lahaina")) {
        lat = 20.8783; lng = -156.6825; label = "Lahaina";
      } else if (location.includes("wailea")) {
        lat = 20.69; lng = -156.44; label = "Wailea";
      } else if (location.includes("hana")) {
        lat = 20.75; lng = -155.99; label = "Hana";
      } else if (location.includes("santa fe")) {
        // Just for the demo pill
         lat = 35.6869; lng = -105.937; label = "Santa Fe Plaza";
      }

      response = {
        message: `I've placed a pin on ${label}.`,
        action: { type: 'POI', data: { lat, lng, label } }
      };
    } else if (msg.match(/show|find|search|homes|properties/)) {
      // Extract query
      const query = msg.replace(/.*(?:show|find|search|homes|properties|in|at)\s+/, "").trim();
      response = {
        message: `Showing properties for "${query}".`,
        action: { type: 'FILTER', data: { query } }
      };
    } else if (msg.includes("hello") || msg.includes("hi")) {
      response = { message: "Aloha! How can I help you explore Maui today?" };
    }

    return c.json(response);
    
  } catch (e) {
    return c.json({ message: "Something went wrong." }, 500);
  }
};
