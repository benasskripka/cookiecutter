import svgPaths from "./svg-73heqtm1r3";

function Component() {
  return (
    <div className="absolute font-['Centra_No2:Medium',sans-serif] h-[18px] leading-[18px] left-[24px] not-italic text-[14px] text-[rgba(0,0,0,0.75)] text-center top-[20px] w-[170px]" data-name="Component 16">
      <p className="absolute css-ew64yg left-[103px] opacity-0 top-[-30px] translate-x-[-50%]">{`"Add Santa Fe plaza to the map"`}</p>
      <p className="absolute css-ew64yg left-[77.5px] top-0 translate-x-[-50%]">“Show only cozy places”</p>
      <p className="absolute css-ew64yg left-[110.5px] opacity-0 top-[30px] translate-x-[-50%]">{`"Where's best to stay in Santa Fe?"`}</p>
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

function ButtonIcon() {
  return (
    <div className="relative shrink-0 size-[17.1px]" data-name="_ / Button / Icon">
      <IconGlyphArrowForward />
    </div>
  );
}

function ButtonContainer() {
  return (
    <div className="absolute bg-[#1668e3] content-stretch flex gap-[7.6px] items-center justify-center left-[655.55px] opacity-56 overflow-clip p-[11.4px] rounded-[38000px] top-[9.05px]" data-name="_ / Button / Container">
      <ButtonIcon />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="bg-white relative rounded-[32px] size-full">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Component />
        <ButtonContainer />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.15)] border-solid inset-[-1px] pointer-events-none rounded-[33px] shadow-[0px_5px_15px_0px_rgba(0,0,0,0.1)]" />
    </div>
  );
}