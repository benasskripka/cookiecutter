import React from "react";

function Label({ text }: { text: string }) {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Label">
      <p className="css-ew64yg font-['CentraNo2',sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[14px] text-center text-white">
        {text}
      </p>
    </div>
  );
}

function MapPinContainerLabelLarge({ text, selected }: { text: string; selected?: boolean }) {
  const bgColor = selected ? '#191E3B' : '#0f51ed';
  return (
    <div 
      className="content-stretch flex h-[28px] items-center px-[8px] py-0 relative rounded-[40000px] shadow-[0px_0px_0px_0px_rgba(12,14,28,0)] shrink-0 whitespace-nowrap transition-colors" 
      style={{ backgroundColor: bgColor }}
      data-name="_ / ✏️ Map / Pin / Container / Label / Large"
    >
      <Label text={text} />
    </div>
  );
}

function MapPinTail({ selected }: { selected?: boolean }) {
  const fillColor = selected ? '#191E3B' : '#0F51ED';
  return (
    <div className="h-[4px] relative shrink-0 w-[6px]" data-name="_ / Map / Pin / Tail">
      <div className="absolute inset-[-50%_0_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
          <g id="_ / Map / Pin / Tail">
            <path d="M6 0H0L3.00004 5.1824L6 0Z" fill={fillColor} id="Triangle" />
          </g>
        </svg>
      </div>
    </div>
  );
}

export default function MapPinProductText({ text, selected, disableHoverScale }: { text: string; selected?: boolean; disableHoverScale?: boolean }) {
  return (
    <div 
      className={`content-stretch flex flex-col items-center relative drop-shadow-md transition-transform cursor-pointer ${disableHoverScale ? '' : 'hover:scale-110'}`} 
      data-name="Map / Pin / Product / Text"
    >
      <MapPinContainerLabelLarge text={text} selected={selected} />
      <MapPinTail selected={selected} />
    </div>
  );
}
