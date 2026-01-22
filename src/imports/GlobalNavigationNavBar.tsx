import svgPaths from "./svg-zxlytcmomr";

function GlobalNavigationHeaderLogo() {
  return (
    <div className="h-[28px] relative shrink-0 w-[90px]" data-name="⚙️Global navigation / Header logo">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 90 28">
        <g id="âï¸Global navigation / Header logo">
          <path clipRule="evenodd" d={svgPaths.p1f6112f0} fill="var(--fill-0, #0F51ED)" fillRule="evenodd" id="Logo" />
        </g>
      </svg>
    </div>
  );
}

function LeftColumn() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Left column">
      <GlobalNavigationHeaderLogo />
    </div>
  );
}

function GlobalNavigationButtonLabel() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0" data-name="_ Global navigation / Button / Label">
      <p className="css-ew64yg font-['CentraNo2',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#191e3b] text-[16px] text-center">Support</p>
    </div>
  );
}

function GlobalNavigationButtonContainer() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex gap-[8px] items-center justify-center px-[8px] py-[14px] relative rounded-[40000px] shrink-0" data-name="_ Global navigation / Button / Container">
      <GlobalNavigationButtonLabel />
    </div>
  );
}

function GlobalNavigationButtonTertiaryStandard() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Global navigation / Button / Tertiary / Standard">
      <GlobalNavigationButtonContainer />
    </div>
  );
}

function GlobalNavigationButtonLabel1() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0" data-name="_ Global navigation / Button / Label">
      <p className="css-ew64yg font-['CentraNo2',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#191e3b] text-[16px] text-center">Sign in</p>
    </div>
  );
}

function GlobalNavigationButtonContainer1() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex gap-[8px] items-center justify-center px-[8px] py-[14px] relative rounded-[40000px] shrink-0" data-name="_ Global navigation / Button / Container">
      <GlobalNavigationButtonLabel1 />
    </div>
  );
}

function GlobalNavigationButtonTertiaryStandard1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Global navigation / Button / Tertiary / Standard">
      <GlobalNavigationButtonContainer1 />
    </div>
  );
}

function RightColumn() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-start justify-end min-h-px min-w-px relative" data-name="Right column">
      <GlobalNavigationButtonTertiaryStandard />
      <GlobalNavigationButtonTertiaryStandard1 />
    </div>
  );
}

function GlobalNavigationPrimary() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="🌈 Global navigation / Primary">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[24px] py-0 relative w-full">
          <LeftColumn />
          <RightColumn />
        </div>
      </div>
    </div>
  );
}

function MinHeight() {
  return <div className="absolute h-[72px] left-[1723.99px] top-0 w-[0.01px]" data-name="min-height" />;
}

function GlobalNavigationRowPrimaryMedium() {
  return (
    <div className="bg-white content-stretch flex h-[80px] items-center overflow-clip relative shrink-0 w-full" data-name="_ Global navigation / Row / Primary / Medium">
      <GlobalNavigationPrimary />
      <MinHeight />
    </div>
  );
}

export default function GlobalNavigationNavBar() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="Global navigation / Nav bar">
      <GlobalNavigationRowPrimaryMedium />
    </div>
  );
}
