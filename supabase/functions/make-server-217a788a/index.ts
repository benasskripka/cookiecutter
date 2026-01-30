import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import { createClient } from "jsr:@supabase/supabase-js@2.49.8";
import { chatHandler } from "./chat.ts";
import OpenAI from "npm:openai";

const app = new Hono();

// Initialize Supabase client
const supabase = createClient(
  Deno.env.get("SUPABASE_URL") ?? "",
  Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
);

// Initialize OpenAI
const openai = new OpenAI({
  apiKey: Deno.env.get("OPENAI_API_KEY"),
});

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Property Types Mapping for intelligent filtering
const propertyTypeMap: Record<string, string[]> = {
  "villa": ["villa", "estate", "mansion"],
  "condo": ["condo", "apartment", "loft", "resort"],
  "house": ["house", "home", "cottage", "bungalow"],
  "studio": ["studio"],
  "townhouse": ["townhouse", "townhome"]
};

// Concept mapping for "relational" search (Amenities & Features)
const conceptMap: Record<string, string[]> = {
  "pool": ["pool", "swimming", "private pool", "plunge pool", "infinity pool"],
  "hot tub": ["hot tub", "jacuzzi", "spa", "whirlpool"],
  "beach": ["beach", "ocean", "sea", "waterfront", "coast", "shore", "beachfront"],
  "view": ["view", "scenic", "panorama", "vista", "mountain view", "ocean view"],
  "wifi": ["wifi", "internet", "broadband", "high speed"],
  "parking": ["parking", "garage", "carport", "driveway"],
  "ac": ["ac", "air conditioning", "hvac", "climate control", "cooling"],
  "kitchen": ["kitchen", "chef", "cooking", "stove", "oven", "full kitchen"],
  "family": ["family", "kids", "children", "bunk", "crib", "high chair", "family friendly"],
  "romantic": ["romantic", "couple", "honeymoon", "secluded"],
  "luxury": ["luxury", "high-end", "premium", "upscale"],
  "budget": ["budget", "cheap", "affordable", "economy", "value"],
  "pet": ["pet", "dog", "cat", "animal", "pet friendly"],
  "hiking": ["hiking", "trail", "nature", "walk"],
  "golf": ["golf", "course", "club", "fairway"],
  "tennis": ["tennis", "court", "sport"],
  "gym": ["gym", "fitness", "workout", "exercise"]
};

// Helper to parse query into structured requirements
function parseQuery(query: string) {
  const normalizedQuery = query.toLowerCase();
  const tokens = normalizedQuery.split(/\s+/).filter(t => t.length > 0);
  
  const targetTypes = new Set<string>();
  const targetConcepts = new Set<string>();
  const otherTerms = new Set<string>();

  tokens.forEach(token => {
    let matched = false;

    // Check for property types
    // We check if the token matches any key or value in propertyTypeMap
    for (const [type, variants] of Object.entries(propertyTypeMap)) {
      // Check exact match, partial match (token inside type), or type inside token (plurals like "villas")
      if (
        type === token || 
        type.includes(token) || 
        token.includes(type) || 
        variants.some(v => v.includes(token) || token.includes(v))
      ) {
        targetTypes.add(type);
        matched = true;
      }
    }

    // Check for concepts/amenities
    if (!matched) {
      for (const [concept, synonyms] of Object.entries(conceptMap)) {
        if (concept.includes(token) || synonyms.some(s => s.includes(token))) {
          targetConcepts.add(concept);
          // Add synonyms to search concepts for broader matching
          synonyms.forEach(s => targetConcepts.add(s));
          matched = true;
        }
      }
    }

    if (!matched) {
      otherTerms.add(token);
    }
  });

  return {
    targetTypes: Array.from(targetTypes),
    targetConcepts: Array.from(targetConcepts),
    otherTerms: Array.from(otherTerms)
  };
}

// Chat endpoint
app.post("/make-server-217a788a/chat", chatHandler);

// Parse Search Endpoint
app.post("/make-server-217a788a/parse-search", async (c) => {
  try {
    const { query } = await c.req.json();
    
    if (!query) {
      return c.json({ error: "Query required" }, 400);
    }

    const completion = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        {
          role: "system",
          content: `You are a search query parser for a vacation rental app in Maui.
          Analyze the user's search query and extract structured filters and remaining keywords.
          
          Available Filters:
          - propertyTypes: "House", "Condo", "Villa", "Cottage", "Studio", "Resort"
          - amenities: "Wifi", "Kitchen", "Washer", "Dryer", "Air conditioning", "Heating", "Pool", "Hot tub", "Patio", "BBQ grill"
          - priceRange: min and max (default 0 and 10000)
          - bedrooms: number (default 0)
          - beds: number (default 0)
          - bathrooms: number (default 0)
          
          Instructions:
          1. Extract any explicit property types (e.g., "villas" -> "Villa", "apartments" -> "Condo").
          2. Extract any explicit amenities (e.g., "with pool" -> "Pool", "ac" -> "Air conditioning").
          3. Extract numeric requirements (e.g., "2 bedrooms", "under $500").
          4. Everything else (adjectives like "luxury", "romantic", specific locations like "Kihei") goes into "concepts".
          5. If the user mentions "Maui" or the property type (e.g. "Villa") in the concepts, REMOVE them from the "concepts" list to keep it clean.
          6. If the user mentions a location other than Maui (e.g. "San Francisco"), ignore the location but keep the other intents.
          7. Return JSON only.
          
          Output Format:
          {
            "filters": {
              "priceRange": { "min": number, "max": number },
              "bedrooms": number,
              "beds": number,
              "bathrooms": number,
              "propertyTypes": string[],
              "amenities": string[]
            },
            "concepts": string[]
          }`
        },
        {
          role: "user",
          content: query
        }
      ],
      response_format: { type: "json_object" }
    });

    const result = JSON.parse(completion.choices[0].message.content || "{}");
    return c.json(result);

  } catch (error) {
    console.error("Error parsing search:", error);
    // Fallback to basic heuristics if OpenAI fails
    return c.json({
      filters: {
        priceRange: { min: 0, max: 10000 },
        bedrooms: 0,
        beds: 0,
        bathrooms: 0,
        propertyTypes: [],
        amenities: []
      },
      concepts: [query]
    });
  }
});

// Generate Description Endpoint
app.post("/make-server-217a788a/generate-description", async (c) => {
  try {
    const { query, properties } = await c.req.json();
    
    if (!properties || properties.length === 0) {
      return c.json({ description: "" });
    }

    // Extract relevant data for the AI to analyze
    const propertiesData = properties.map((p: any) => ({
      title: p.title,
      type: p.type,
      highlight: p.highlight,
      amenities: p.amenities ? p.amenities.slice(0, 5) : [] // Top 5 amenities
    }));

    const completion = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        {
          role: "system",
          content: `You write the "About your results" blurb for a vacation rental search.

GOAL:
Give a quick, grounded “state of play” overview of the results — NOT destination poetry.

OUTPUT:
1–2 short sentences, max 45 words total.

INPUT:
- User Search Query: "${query}"
- Properties: titles, types, highlights, and up to 5 amenities per property.

MUST INCLUDE (in this order):
1) A brief “past preferences” line (imaginary but plausible) that fits the query (e.g., “you usually go for private pools, chef’s kitchens, and space”).
2) How we blended those preferences with the query intents (name 2–3 intents from the query).
3) What kind of results they’re seeing right now, grounded in the provided properties (types + shared themes from highlights/amenities).

RULES:
- Only mention features you can support from highlights/amenities/types provided.
- Do NOT mention property names.
- Mention availability carefully (e.g., “options that are still open around your dates”), without guaranteeing availability.
- Return ONLY the text (no quotes, no bullets).

TONE:
Clear, specific, lightly conversational; avoid fluff like “exquisite” / “serene” / “elegant escape”.

STYLE EXAMPLE (don’t copy verbatim):
"You usually lean toward privacy and high-end comforts, so we blended that with your search for beachfront luxury and surfaced mostly villas with private pools, ocean-view highlights, and full kitchens—plus options that still look open around your dates."`
        },
        {
          role: "user",
          content: JSON.stringify(propertiesData)
        }
      ]
    });

    const description = completion.choices[0].message.content?.trim();
    return c.json({ description });

  } catch (error) {
    console.error("Error generating description:", error);
    // Return null so frontend keeps the default or deterministic fallback
    return c.json({ description: null });
  }
});

// Health check endpoint
app.get("/make-server-217a788a/health", (c) => {
  return c.json({ status: "ok" });
});

// Properties endpoint with filtering
app.get("/make-server-217a788a/properties", async (c) => {
  try {
    const query = c.req.query('q');
    
    let dbQuery = supabase
      .from("Property listings")
      .select("*");
      
    const { data: allProperties, error } = await dbQuery;

    if (error) {
      console.error("Supabase error:", error);
      throw error;
    }
    
    if (!query || query.trim() === "") {
      return c.json(allProperties);
    }

    // Parse the query
    const { targetTypes, targetConcepts, otherTerms } = parseQuery(query);
    console.log(`Query Analysis for "${query}":`, { targetTypes, targetConcepts, otherTerms });

    // Step 1: Filter
    const filteredProperties = allProperties.filter(p => {
      const pType = (p.property_type || "").toLowerCase();
      const pTags = (p.tags || "").toLowerCase();
      const pText = `${p.name} ${p.long_highlight || ""}`.toLowerCase();

      // STRICT FILTER: If user specifies a property type, only return that type
      if (targetTypes.length > 0) {
        // Check if property type matches any of the target types or their variants
        const matchesType = targetTypes.some(targetType => {
           const variants = propertyTypeMap[targetType] || [];
           return pType.includes(targetType) || variants.some(v => pType.includes(v));
        });
        
        if (!matchesType) return false;
      }

      // If we have other terms (concepts or keywords), at least one must match
      // unless we only have a type filter (e.g. "Villas")
      if (targetConcepts.length > 0 || otherTerms.length > 0) {
        const hasConcept = targetConcepts.some(c => pTags.includes(c) || pText.includes(c));
        const hasTerm = otherTerms.some(t => pText.includes(t) || pTags.includes(t) || (p.location && p.location.toLowerCase().includes(t)));
        
        // "Maui" matches everything implicitly in this context, so we don't strict filter on "otherTerms" usually
        // But for relevance, we want to ensure *something* matches if it's not a stop word.
        // For now, if types are matched, we are good. If no types, we need concept/term match.
        if (targetTypes.length === 0 && !hasConcept && !hasTerm) {
          return false;
        }
      }

      return true;
    });
    
    // Step 2: Score
    const scoredProperties = filteredProperties.map(p => {
      let score = 0;
      const pTags = (p.tags || "").toLowerCase();
      const pText = `${p.name} ${p.long_highlight || ""} ${p.property_type}`.toLowerCase();
      
      // Points for Concept Matches (Amenities)
      targetConcepts.forEach(concept => {
        if (pTags.includes(concept)) score += 10; // High value for tag match
        else if (pText.includes(concept)) score += 5; // Text match
      });

      // Points for Other Terms (Keywords like "Maui", "Kihei")
      otherTerms.forEach(term => {
        if (pText.includes(term)) score += 3;
        // Boost if term matches location specifically (if location field exists, assuming implicit logic)
        // If "Maui" is in text, it gets points.
      });
      
      return { ...p, _score: score };
    });
    
    // Sort by score descending
    scoredProperties.sort((a, b) => b._score - a._score);

    // Remove internal score before sending
    const result = scoredProperties.map(({ _score, ...p }) => p);

    return c.json(result);
  } catch (error) {
    console.error("Error fetching properties:", error);
    return c.json({ error: "Failed to fetch properties" }, 500);
  }
});

Deno.serve(app.fetch);
