import svgPaths from "./svg-n4eje1cvhq";

function ButtonLabel() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0" data-name="_ / Button / Label">
      <p className="css-ew64yg font-['CentraNo2',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[16px] text-center text-white">Search</p>
    </div>
  );
}

function ButtonContainer() {
  return (
    <div className="absolute bg-[#1668e3] content-stretch flex gap-[8px] items-center justify-center left-[690px] overflow-clip px-[24px] py-[12px] rounded-[40000px] top-[8px]" data-name="_ / Button / Container">
      <ButtonLabel />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_75_1186)" id="Icon" opacity="0.75">
          <path d={svgPaths.p34a07370} fill="var(--fill-0, #212121)" id="Union" />
        </g>
        <defs>
          <clipPath id="clip0_75_1186">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex gap-[12px] items-center left-[26px] top-[20px]">
      <Icon />
      <p className="css-ew64yg font-['CentraNo2',sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[14px] text-black text-center">Santa Fe|</p>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_75_1178)" id="Icon" opacity="0.75">
          <path d={svgPaths.p31076400} fill="var(--fill-0, #212121)" id="Union" />
        </g>
        <defs>
          <clipPath id="clip0_75_1178">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute content-stretch flex gap-[12px] items-center left-[387px] top-[20px]">
      <Icon1 />
      <p className="css-ew64yg font-['CentraNo2',sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.5)] text-center">Add dates</p>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_75_1191)" id="Icon" opacity="0.75">
          <path d={svgPaths.p34958b80} fill="var(--fill-0, #212121)" id="Union" />
        </g>
        <defs>
          <clipPath id="clip0_75_1191">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute content-stretch flex gap-[12px] items-center left-[549px] top-[20px]">
      <Icon2 />
      <p className="css-ew64yg font-['CentraNo2',sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.5)] text-center">Add people</p>
    </div>
  );
}

export default function Bar() {
  return (
    <div className="bg-white relative rounded-[64px] size-full" data-name="Bar">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <ButtonContainer />
        <div className="absolute h-[60px] left-[517px] top-0 w-0">
          <div className="absolute inset-[0_-0.5px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 60">
              <path d="M0.5 0V60" id="Vector 1" stroke="var(--stroke-0, black)" strokeOpacity="0.1" />
            </svg>
          </div>
        </div>
        <div className="absolute h-[60px] left-[calc(50%-43px)] top-0 translate-x-[-50%] w-0">
          <div className="absolute inset-[0_-0.5px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 60">
              <path d="M0.5 0V60" id="Vector 1" stroke="var(--stroke-0, black)" strokeOpacity="0.1" />
            </svg>
          </div>
        </div>
        <Frame />
        <Frame1 />
        <Frame2 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.15)] border-solid inset-[-1px] pointer-events-none rounded-[65px] shadow-[0px_5px_25px_0px_rgba(0,0,0,0.1)]" />
    </div>
  );
}