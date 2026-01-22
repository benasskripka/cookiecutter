import svgPaths from "./svg-qohufkzzrq";

function ButtonLabel() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0" data-name="_ / Button / Label">
      <p className="font-['CentraNo2',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white whitespace-pre">Search</p>
    </div>
  );
}

function ButtonContainer() {
  return (
    <div className="absolute bg-[#1668e3] box-border content-stretch flex gap-[8px] items-center justify-center left-[690px] overflow-clip px-[24px] py-[12px] rounded-[40000px] top-[8px]" data-name="_ / Button / Container">
      <ButtonLabel />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_356)" id="Icon" opacity="0.75">
          <path d={svgPaths.p34a07370} fill="var(--fill-0, #212121)" id="Union" />
        </g>
        <defs>
          <clipPath id="clip0_1_356">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute content-stretch flex gap-[12px] items-center left-[26px] top-[20px]">
      <Icon />
      <p className="font-['CentraNo2',sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[14px] text-black text-center text-nowrap whitespace-pre">Santa Fe|</p>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_349)" id="Icon" opacity="0.75">
          <path d={svgPaths.p31076400} fill="var(--fill-0, #212121)" id="Union" />
        </g>
        <defs>
          <clipPath id="clip0_1_349">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute content-stretch flex gap-[12px] items-center left-[387px] top-[20px]">
      <Icon1 />
      <p className="font-['CentraNo2',sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.5)] text-center text-nowrap whitespace-pre">Add dates</p>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_344)" id="Icon" opacity="0.75">
          <path d={svgPaths.p34958b80} fill="var(--fill-0, #212121)" id="Union" />
        </g>
        <defs>
          <clipPath id="clip0_1_344">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute content-stretch flex gap-[12px] items-center left-[549px] top-[20px]">
      <Icon2 />
      <p className="font-['CentraNo2',sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.5)] text-center text-nowrap whitespace-pre">Add people</p>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="✏️  Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="âï¸  Icon">
          <path clipRule="evenodd" d={svgPaths.p28143280} fill="var(--fill-0, #191E3B)" fillOpacity="0.5" fillRule="evenodd" id="Glyph" />
        </g>
      </svg>
    </div>
  );
}

function ListItemText() {
  return (
    <div className="basis-0 content-stretch flex gap-[10px] grow items-start min-h-px min-w-px relative shrink-0" data-name="_ / ✏️ List item / Text">
      <p className="[white-space-collapse:collapse] basis-0 font-['CentraNo2',sans-serif] font-medium grow h-[18px] leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#191e3b] text-[14px] text-nowrap">
        <span className="font-['CentraNo2',sans-serif] leading-[20px]">{`Santa Fe `}</span>
        <span className="leading-[18px]">homes</span>
      </p>
    </div>
  );
}

function ListItemTextNested() {
  return (
    <div className="basis-0 content-stretch flex gap-[12px] grow items-center min-h-px min-w-px relative shrink-0" data-name="_ / ✏️ List item / Text + Nested">
      <Icon3 />
      <ListItemText />
    </div>
  );
}

function Content() {
  return (
    <div className="box-border content-stretch flex gap-[16px] items-center justify-center px-0 py-[12px] relative shrink-0 w-full" data-name="Content">
      <ListItemTextNested />
    </div>
  );
}

function ActionListItemNoSelectState() {
  return (
    <div className="content-stretch flex flex-col h-[48px] items-start overflow-clip relative shrink-0 w-[393px]" data-name="Action list item / No select state">
      <Content />
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="✏️  Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="âï¸  Icon">
          <path clipRule="evenodd" d={svgPaths.p1b11a100} fill="var(--fill-0, #191E3B)" fillOpacity="0.5" fillRule="evenodd" id="Glyph" />
        </g>
      </svg>
    </div>
  );
}

function ListItemText1() {
  return (
    <div className="basis-0 content-stretch flex gap-[10px] grow items-start min-h-px min-w-px relative shrink-0" data-name="_ / ✏️ List item / Text">
      <p className="[white-space-collapse:collapse] basis-0 font-['CentraNo2',sans-serif] font-medium grow h-[18px] leading-[18px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#191e3b] text-[14px] text-nowrap">Santa Fe, New Mexico</p>
    </div>
  );
}

function ListItemTextNested1() {
  return (
    <div className="basis-0 content-stretch flex gap-[12px] grow items-center min-h-px min-w-px relative shrink-0" data-name="_ / ✏️ List item / Text + Nested">
      <Icon4 />
      <ListItemText1 />
    </div>
  );
}

function Content1() {
  return (
    <div className="box-border content-stretch flex gap-[16px] items-center justify-center px-0 py-[12px] relative shrink-0 w-full" data-name="Content">
      <ListItemTextNested1 />
    </div>
  );
}

function ActionListItemNoSelectState1() {
  return (
    <div className="content-stretch flex flex-col h-[48px] items-start overflow-clip relative shrink-0 w-[393px]" data-name="Action list item / No select state">
      <Content1 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="✏️  Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="âï¸  Icon">
          <path clipRule="evenodd" d={svgPaths.p28143280} fill="var(--fill-0, #191E3B)" fillOpacity="0.5" fillRule="evenodd" id="Glyph" />
        </g>
      </svg>
    </div>
  );
}

function ListItemText2() {
  return (
    <div className="basis-0 content-stretch flex gap-[10px] grow items-start min-h-px min-w-px relative shrink-0" data-name="_ / ✏️ List item / Text">
      <p className="[white-space-collapse:collapse] basis-0 font-['CentraNo2',sans-serif] grow h-[18px] leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#191e3b] text-[14px] text-nowrap">
        <span className="leading-[20px]">{`Santa Fe `}</span>
        <span className="font-['CentraNo2',sans-serif] font-medium leading-[18px]">apartments</span>
      </p>
    </div>
  );
}

function ListItemTextNested2() {
  return (
    <div className="basis-0 content-stretch flex gap-[12px] grow items-center min-h-px min-w-px relative shrink-0" data-name="_ / ✏️ List item / Text + Nested">
      <Icon5 />
      <ListItemText2 />
    </div>
  );
}

function Content2() {
  return (
    <div className="box-border content-stretch flex gap-[16px] items-center justify-center px-0 py-[12px] relative shrink-0 w-full" data-name="Content">
      <ListItemTextNested2 />
    </div>
  );
}

function ActionListItemNoSelectState2() {
  return (
    <div className="content-stretch flex flex-col h-[48px] items-start overflow-clip relative shrink-0 w-[393px]" data-name="Action list item / No select state">
      <Content2 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[24px] top-[67px]">
      <ActionListItemNoSelectState />
      <ActionListItemNoSelectState1 />
      <ActionListItemNoSelectState2 />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="bg-white overflow-clip relative rounded-[30px] shadow-[0px_4px_50px_0px_rgba(0,0,0,0.2)] size-full">
      <div className="absolute border border-[#dfe0e4] border-solid h-[43px] left-[8px] rounded-[64px] top-[8px] w-[346px]" />
      <ButtonContainer />
      <Frame1 />
      <Frame2 />
      <Frame3 />
      <Frame4 />
    </div>
  );
}