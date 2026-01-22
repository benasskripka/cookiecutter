import svgPaths from "../imports/svg-tq9sxiwrov";
import historySvgPaths from "../imports/svg-nvrcqljctv";
import chatSvgPaths from "../imports/svg-o5vj1bfswy";
import { useState, useRef, useEffect } from "react";

export interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
}

export interface AIAction {
  id: string;
  text: string;
  type: string;
}

function IconGlyphHistory() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon glyph / history">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon glyph / history">
          <g id="Glyph">
            <path d={svgPaths.p32baa500} fill="var(--fill-0, black)" />
            <path d={svgPaths.pab0d800} fill="var(--fill-0, black)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconGlyphChat() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon glyph / chat">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon glyph / chat">
          <g id="Glyph">
            <path clipRule="evenodd" d={chatSvgPaths.p220f1e80} fill="var(--fill-0, black)" fillRule="evenodd" />
            <path d={chatSvgPaths.p4acc900} fill="var(--fill-0, black)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconGlyphClose() {
  return (
    <div className="size-full relative flex items-center justify-center" data-name="Icon glyph / close">
      <div className="relative size-[14px]" data-name="Glyph">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
          <path d={svgPaths.pfb67300} fill="var(--fill-0, black)" id="Glyph" />
        </svg>
      </div>
    </div>
  );
}

function IconGlyphArrowForward() {
  return (
    <div className="absolute inset-[0_-5.26%_-5.26%_0]" data-name="Icon glyph / arrow_forward">
      <div className="absolute aspect-[16/16] left-[22.22%] right-[-11.11%] top-[calc(50%+3px)] translate-y-[-50%]" data-name="Glyph">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <path d={svgPaths.p14168ea0} fill="var(--fill-0, white)" id="Glyph" />
        </svg>
      </div>
    </div>
  );
}

function InputIconLeft() {
  return (
    <div className="relative size-[20.21px]" data-name="_ / Input / Icon left">
      <div className="absolute aspect-[16/19.5] left-[16.67%] right-[16.67%] top-[calc(50%-0.32px)] translate-y-[-50%]" data-name="Glyph">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.4734 16.4207">
          <path clipRule="evenodd" d={svgPaths.p14da7a80} fill="var(--fill-0, #191E3B)" fillRule="evenodd" id="Glyph" />
        </svg>
      </div>
    </div>
  );
}

function InputIconLeft1() {
  return (
    <div className="relative size-[20.21px]" data-name="_ / Input / Icon left">
      <div className="absolute aspect-[18/18] left-[12.5%] right-[12.5%] top-[calc(50%-0.11px)] translate-y-[-50%]" data-name="Glyph">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.1575 15.1575">
          <g id="Glyph">
            <path clipRule="evenodd" d={svgPaths.p1b974c00} fill="var(--fill-0, #191E3B)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p127fd900} fill="var(--fill-0, #191E3B)" fillRule="evenodd" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function InputIconLeft2() {
  return (
    <div className="relative size-[20.21px]" data-name="_ / Input / Icon left">
      <div className="absolute aspect-[20/20] left-[8.33%] right-[8.33%] top-[calc(50%-0.11px)] translate-y-[-50%]" data-name="Glyph">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.8417 16.8417">
          <path clipRule="evenodd" d={svgPaths.p211abf00} fill="var(--fill-0, #191E3B)" fillRule="evenodd" id="Glyph" />
        </svg>
      </div>
    </div>
  );
}

function HistoryPinIcon() {
  return null;
}

function HistoryUndoIcon() {
    return (
        <div className="h-[18.74px] relative w-[20px]" data-name="Button / Primary / Icon only">
            <div className="absolute h-[18.238px] left-[-10.8px] top-[-0.25px] w-[40.42px]" data-name="_ / Button / Container / Icon only">
                <div className="absolute flex items-center justify-center left-[10.07px] size-[20.243px] top-[0.07px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
                    <div className="flex-none rotate-[0.093deg]">
                         <div className="relative size-[20.21px]" data-name="_ / Input / Icon left">
                           <div className="absolute aspect-[16.000696182250977/19] left-[16.66%] right-[16.67%] top-[calc(50%-0.53px)] translate-y-[-50%]" data-name="Glyph">
                             <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.4739 15.9996">
                               <path d={historySvgPaths.p17e6d700 || "M0 0h24v24H0z"} fill="var(--fill-0, #191E3B)" id="Glyph" />
                             </svg>
                           </div>
                         </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Reusable components
function IconButton({ children, onClick, className }: { children: React.ReactNode, onClick?: () => void, className?: string }) {
  return (
    <div 
      onClick={onClick}
      className={`bg-white flex items-center justify-center relative rounded-[32px] shrink-0 size-[48px] cursor-pointer hover:bg-gray-50 transition-colors ${className}`}
    >
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.15)] border-solid inset-[-1px] pointer-events-none rounded-[33px] shadow-[0px_5px_15px_0px_rgba(0,0,0,0.1)]" />
      <div className="flex items-center justify-center size-full">
        {children}
      </div>
    </div>
  );
}

function Pill({ icon, text }: { icon: React.ReactNode, text: string }) {
  return (
    <div className="bg-[#f2f8fd] content-stretch flex gap-[8px] items-center overflow-clip px-[24px] py-[16px] relative rounded-[32px] shrink-0 cursor-pointer hover:bg-[#e5f2fb] transition-colors">
      <div className="flex h-[18.773px] items-center justify-center relative shrink-0 w-[20.03px]">
        {icon}
      </div>
      <div className="flex flex-col font-['CentraNo2',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#191e3b] text-[14px]">
        <p className="leading-[1.25]">{text}</p>
      </div>
    </div>
  );
}

// History View Components
function HistoryItem({ text }: { text: string }) {
    return (
        <div className="bg-[#f2f8fd] content-stretch flex items-center justify-between overflow-clip px-[24px] py-[16px] relative rounded-[32px] shrink-0 w-full mb-3">
             <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                <div className="flex h-[18.773px] items-center justify-center relative shrink-0 w-[20.03px]">
                     <HistoryPinIcon />
                </div>
                <div className="flex flex-col font-['CentraNo2',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#191e3b] text-[14px]">
                    <p className="leading-[1.25]">{text}</p>
                </div>
            </div>
            <div className="flex h-[18.773px] items-center justify-center relative shrink-0 w-[20.03px] cursor-pointer hover:opacity-70 transition-opacity">
                <HistoryUndoIcon />
            </div>
        </div>
    );
}

function HistoryView({ actions, onBack }: { actions: AIAction[], onBack: () => void }) {
    return (
        <div className="flex flex-col h-full w-full">
             <div className="flex-1 overflow-y-auto px-[24px] pt-4 pb-[200px]">
                 {actions.length === 0 ? (
                    <div className="flex items-center justify-center h-[200px] text-[#191e3b] opacity-50 text-[14px]">
                        No actions or changes yet
                    </div>
                 ) : (
                    actions.map(action => (
                        <HistoryItem key={action.id} text={action.text} />
                    ))
                 )}
             </div>
             {/* Bottom Card Area omitted as user wants input area to persist, 
                 so this area would overlap if kept here. 
                 The "Bottom Card" in the design was effectively the input area/footer.
                 We will render the persistent input footer below instead. 
             */}
        </div>
    );
}

export function ChatSheet({ 
    onClose, 
    messages, 
    onSendMessage, 
    isTyping,
    aiActions = [] 
}: { 
    onClose: () => void, 
    messages: Message[], 
    onSendMessage: (text: string) => void,
    isTyping: boolean,
    aiActions?: AIAction[]
}) {
  const [input, setInput] = useState("");
  const [showHistory, setShowHistory] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages, isTyping]);

  const handleSend = (text: string) => {
    if (!text.trim()) return;
    onSendMessage(text);
    setInput("");
    setShowHistory(false); // Switch back to chat on send
  };

  return (
    <div className="relative size-full bg-white h-full border-l border-gray-200 shadow-xl flex flex-col font-['CentraNo2',sans-serif] font-medium">
      {/* Header */}
      <div className="p-[24px] flex justify-between items-start shrink-0 z-10 bg-white">
        <IconButton onClick={() => setShowHistory(!showHistory)} className={showHistory ? "bg-gray-100" : ""}>
          {showHistory ? <IconGlyphChat /> : <IconGlyphHistory />}
        </IconButton>
        <IconButton onClick={onClose}>
            <div className="content-stretch flex items-center relative shrink-0 size-[20px]">
                 <IconGlyphClose />
            </div>
        </IconButton>
      </div>

      {/* Content Area (History or Chat) */}
      <div className="flex-1 relative w-full overflow-hidden flex flex-col">
        {showHistory ? (
            <HistoryView actions={aiActions} onBack={() => setShowHistory(false)} />
        ) : (
            <div className="flex-1 overflow-y-auto px-[24px] pb-[320px] pt-4 space-y-6">
                {messages.map((m) => (
                    <div key={m.id} className={`flex ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                        <div className={`max-w-[85%] text-[15px] leading-relaxed ${
                            m.sender === 'user' 
                            ? 'bg-[#F2F8FD] text-[#191E3B] p-4 rounded-2xl rounded-br-none font-normal' 
                            : 'bg-transparent text-[#191E3B] font-normal p-0'
                        }`}>
                            {m.text}
                        </div>
                    </div>
                ))}
                {isTyping && (
                    <div className="flex justify-start">
                        <div className="bg-transparent text-[#191E3B] text-[15px] p-0">
                            <span className="animate-pulse">...</span>
                        </div>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>
        )}

        {/* Persistent Input Footer */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-white via-white to-transparent pt-12 pb-[24px] px-[24px] z-20 pointer-events-none">
            <div className="pointer-events-auto">
                {/* Suggestions (only in Chat mode and few messages) */}
                {!showHistory && messages.length < 3 && (
                    <div className="flex flex-col gap-[12px] items-start mb-[16px]">
                    <div onClick={() => handleSend("Place a pin on Wailea")}>
                        <Pill icon={<InputIconLeft />} text="Place a pin on Wailea" />
                    </div>
                    <div onClick={() => handleSend("Show cheapest first")}>
                        <Pill icon={<InputIconLeft1 />} text="Show cheapest first" />
                    </div>
                    <div onClick={() => handleSend("Where is the best place to stay?")}>
                        <Pill icon={<InputIconLeft2 />} text="Where’s best to stay?" />
                    </div>
                    </div>
                )}

                {/* Input Box */}
                <div className="relative h-[130px] shrink-0">
                    <div className="absolute inset-0 bg-white rounded-[32px] border border-[rgba(0,0,0,0.15)] shadow-[0px_5px_15px_0px_rgba(0,0,0,0.1)] overflow-hidden transition-shadow focus-within:shadow-md">
                        <div className="relative size-full p-[24px]">
                            <textarea 
                                className="w-full h-full resize-none outline-none font-['CentraNo2',sans-serif] font-medium text-[14px] leading-[18px] text-black border-none p-0 placeholder-gray-400"
                                placeholder="Type what you would like to see or change"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter' && !e.shiftKey) {
                                        e.preventDefault();
                                        handleSend(input);
                                    }
                                }}
                            />
                            
                            {/* Send Button */}
                            <div 
                                onClick={() => handleSend(input)}
                                className={`absolute bottom-[20px] right-[20px] size-[40px] rounded-full flex items-center justify-center cursor-pointer transition-all ${
                                    input.trim() ? 'bg-[rgb(15,81,237)] hover:bg-[#1557c2]' : 'bg-gray-200'
                                }`}
                            >
                                <svg className="block size-[16px]" fill="none" viewBox="0 0 16 16">
                                        <path d={svgPaths.p14168ea0} fill="white" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
