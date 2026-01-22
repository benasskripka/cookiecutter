import svgPaths from "./svg-ab2pa14a0g";

function Search() {
  return (
    <div className="relative shrink-0 size-[50px]" data-name="search">
      <div className="absolute inset-[-22%_-32%_-42%_-32%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 82 82">
          <g filter="url(#filter0_d_7_192)" id="search">
            <path d={svgPaths.pb133900} fill="var(--fill-0, white)" shapeRendering="crispEdges" />
            <path d={svgPaths.p196c0470} shapeRendering="crispEdges" stroke="var(--stroke-0, black)" strokeOpacity="0.1" />
            <path d={svgPaths.p367cca80} fill="var(--fill-0, black)" id="Union" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="82" id="filter0_d_7_192" width="82" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="5" />
              <feGaussianBlur stdDeviation="7.5" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_7_192" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_7_192" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function ButtonIcon() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="_ / Button / Icon">
      <div className="absolute aspect-[16/16] left-[22.22%] right-[-11.11%] top-[calc(50%+3px)] translate-y-[-50%]" data-name="Glyph">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <path d={svgPaths.p14168ea0} fill="var(--fill-0, white)" id="Glyph" />
        </svg>
      </div>
    </div>
  );
}

function ButtonContainer() {
  return (
    <div className="absolute bg-[#1668e3] box-border content-stretch flex gap-[8px] items-center justify-center left-[654.5px] overflow-clip p-[12px] rounded-[40000px] top-[8px]" data-name="_ / Button / Container">
      <ButtonIcon />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex gap-[12px] items-center left-[23.5px] top-[20px]">
      <p className="font-['Centra_No2:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[14px] text-black text-center text-nowrap whitespace-pre">|</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-white h-[58px] relative rounded-[32px] shrink-0 w-[705px]">
      <div className="h-[58px] overflow-clip relative rounded-[inherit] w-[705px]">
        <ButtonContainer />
        <Frame />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-[-1px] pointer-events-none rounded-[33px] shadow-[0px_5px_15px_0px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Search />
      <Frame1 />
    </div>
  );
}

export default function Frame2() {
  return (
    <div className="relative size-full" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 1725 122\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'1\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(4.4141e-14 -11.879 50.782 2.3017e-13 864.69 122)\\\'><stop stop-color=\\\'rgba(255,255,255,1)\\\' offset=\\\'0\\\'/><stop stop-color=\\\'rgba(255,255,255,0)\\\' offset=\\\'1\\\'/></radialGradient></defs></svg>')" }}>
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center justify-center px-[24px] py-[32px] relative size-full">
          <Frame3 />
        </div>
      </div>
    </div>
  );
}