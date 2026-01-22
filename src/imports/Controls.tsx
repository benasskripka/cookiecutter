import svgPaths from "./svg-llogyyk3eu";

function IconGlyphTune() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon glyph / tune">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon glyph / tune">
          <g id="Glyph">
            <path clipRule="evenodd" d={svgPaths.p170e200} fill="var(--fill-0, black)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p6665800} fill="var(--fill-0, black)" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Search() {
  return (
    <div className="bg-white relative rounded-[32px] shrink-0" data-name="search">
      <div className="content-stretch flex items-center justify-center overflow-clip p-[12px] relative rounded-[inherit]">
        <IconGlyphTune />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[32px]" />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon" opacity="0.75">
          <path d={svgPaths.p19727880} fill="var(--fill-0, #212121)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[12px] items-center px-[24px] py-[12px] relative rounded-[24px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#dfe0e4] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <Icon />
      <p className="css-ew64yg font-['CentraNo2',sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[14px] text-black text-center">Santa Fe</p>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_89_840)" id="Icon" opacity="0.75">
          <path d={svgPaths.p31076400} fill="var(--fill-0, #212121)" id="Union" />
        </g>
        <defs>
          <clipPath id="clip0_89_840">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[12px] items-center px-[24px] py-[12px] relative rounded-[24px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#dfe0e4] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <Icon1 />
      <p className="css-ew64yg font-['CentraNo2',sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[14px] text-black text-center">23-24 Jun</p>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_89_835)" id="Icon" opacity="0.75">
          <path d={svgPaths.p34958b80} fill="var(--fill-0, #212121)" id="Union" />
        </g>
        <defs>
          <clipPath id="clip0_89_835">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[12px] items-center px-[24px] py-[12px] relative rounded-[24px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#dfe0e4] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <Icon2 />
      <p className="css-ew64yg font-['CentraNo2',sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[14px] text-black text-center">3 people</p>
    </div>
  );
}

function Search1() {
  return (
    <div className="relative shrink-0 size-[44px]" data-name="search">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 44">
        <g id="search">
          <path d={svgPaths.p2b294d00} fill="var(--fill-0, #0F51ED)" />
          <g id="Union">
            <path clipRule="evenodd" d={svgPaths.p3f9af940} fill="var(--fill-0, white)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p13611580} fill="var(--fill-0, white)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p1588c280} fill="var(--fill-0, white)" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-white content-stretch flex gap-[12px] items-start overflow-clip px-[196px] py-0 relative rounded-[64px] shrink-0">
      <Search />
      <Frame1 />
      <Frame2 />
      <Frame3 />
      <Search1 />
    </div>
  );
}

export default function Controls() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center px-[24px] py-[16px] relative shadow-[0px_5px_20px_0px_rgba(0,0,0,0.1)] size-full" data-name="Controls">
      <Frame />
    </div>
  );
}