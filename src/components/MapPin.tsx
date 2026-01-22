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

function MapPinContainerLabelLarge({ text }: { text: string }) {
  return (
    <div className="bg-[#0f51ed] content-stretch flex h-[28px] items-center px-[8px] py-0 relative rounded-[40000px] shadow-[0px_0px_0px_0px_rgba(12,14,28,0)] shrink-0 whitespace-nowrap" data-name="_ / ✏️ Map / Pin / Container / Label / Large">
      <Label text={text} />
    </div>
  );
}

function MapPinTail() {
  return (
    <div className="h-[4px] relative shrink-0 w-[6px]" data-name="_ / Map / Pin / Tail">
      <div className="absolute inset-[-50%_0_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
          <g id="_ / Map / Pin / Tail">
            <path d="M6 0H0L3.00004 5.1824L6 0Z" fill="var(--fill-0, #0F51ED)" id="Triangle" />
          </g>
        </svg>
      </div>
    </div>
  );
}

export default function MapPinProductText({ text }: { text: string }) {
  return (
    <div className="content-stretch flex flex-col items-center relative drop-shadow-md hover:scale-110 transition-transform cursor-pointer" data-name="Map / Pin / Product / Text">
      <MapPinContainerLabelLarge text={text} />
      <MapPinTail />
    </div>
  );
}
