import svgPaths from "./svg-x8ycsi1j6p";

function Pill() {
  return (
    <div className="bg-[#f2f8fd] content-stretch flex items-center overflow-clip px-[24px] py-[16px] relative rounded-[32px] shrink-0" data-name="pill2">
      <div className="css-g0mm18 flex flex-col font-['Centra_No2:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191e3b] text-[14px]">
        <p className="css-ew64yg leading-[1.25]">Not this time</p>
      </div>
    </div>
  );
}

function InputIconLeft() {
  return (
    <div className="relative size-[20.21px]" data-name="_ / Input / Icon left">
      <div className="absolute aspect-[20/18.000001907348633] left-[8.33%] right-[8.33%] top-[calc(50%-0.11px)] translate-y-[-50%]" data-name="Glyph">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.8417 15.1575">
          <path clipRule="evenodd" d={svgPaths.pf6fab00} fill="var(--fill-0, #191E3B)" fillRule="evenodd" id="Glyph" />
        </svg>
      </div>
    </div>
  );
}

function ButtonContainerIconOnly() {
  return (
    <div className="absolute h-[18.238px] left-[-10.8px] top-[-0.25px] w-[40.42px]" data-name="_ / Button / Container / Icon only">
      <div className="absolute left-0 size-[40.42px] top-[-10.59px]" data-name="Background">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Background" />
        </svg>
      </div>
      <div className="absolute flex items-center justify-center left-[10.07px] size-[20.243px] top-[0.07px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[0.093deg]">
          <InputIconLeft />
        </div>
      </div>
    </div>
  );
}

function ButtonPrimaryIconOnly() {
  return (
    <div className="h-[18.74px] relative w-[20px]" data-name="Button / Primary / Icon only">
      <ButtonContainerIconOnly />
    </div>
  );
}

function Pill1() {
  return (
    <div className="bg-[#f2f8fd] content-stretch flex gap-[8px] items-center overflow-clip px-[24px] py-[16px] relative rounded-[32px] shrink-0" data-name="pill3">
      <div className="flex h-[18.773px] items-center justify-center relative shrink-0 w-[20.03px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-[359.907deg]">
          <ButtonPrimaryIconOnly />
        </div>
      </div>
      <div className="css-g0mm18 flex flex-col font-['Centra_No2:Medium','Noto_Sans:Medium',sans-serif] justify-center leading-[0] relative shrink-0 text-[#191e3b] text-[14px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 500" }}>
        <p className="css-ew64yg leading-[1.25]">Kauaʻi (+3)</p>
      </div>
    </div>
  );
}

function InputIconLeft1() {
  return (
    <div className="relative size-[20.21px]" data-name="_ / Input / Icon left">
      <div className="absolute aspect-[20/18.000001907348633] left-[8.33%] right-[8.33%] top-[calc(50%-0.11px)] translate-y-[-50%]" data-name="Glyph">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.8417 15.1575">
          <path clipRule="evenodd" d={svgPaths.pf6fab00} fill="var(--fill-0, #191E3B)" fillRule="evenodd" id="Glyph" />
        </svg>
      </div>
    </div>
  );
}

function ButtonContainerIconOnly1() {
  return (
    <div className="absolute h-[18.238px] left-[-10.8px] top-[-0.25px] w-[40.42px]" data-name="_ / Button / Container / Icon only">
      <div className="absolute left-0 size-[40.42px] top-[-10.59px]" data-name="Background">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Background" />
        </svg>
      </div>
      <div className="absolute flex items-center justify-center left-[10.07px] size-[20.243px] top-[0.07px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[0.093deg]">
          <InputIconLeft1 />
        </div>
      </div>
    </div>
  );
}

function ButtonPrimaryIconOnly1() {
  return (
    <div className="h-[18.74px] relative w-[20px]" data-name="Button / Primary / Icon only">
      <ButtonContainerIconOnly1 />
    </div>
  );
}

function Pill2() {
  return (
    <div className="bg-[#f2f8fd] content-stretch flex gap-[8px] items-center overflow-clip px-[24px] py-[16px] relative rounded-[32px] shrink-0" data-name="pill3">
      <div className="flex h-[18.773px] items-center justify-center relative shrink-0 w-[20.03px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-[359.907deg]">
          <ButtonPrimaryIconOnly1 />
        </div>
      </div>
      <div className="css-g0mm18 flex flex-col font-['Centra_No2:Medium','Noto_Sans:Medium',sans-serif] justify-center leading-[0] relative shrink-0 text-[#191e3b] text-[14px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 500" }}>
        <p className="css-ew64yg leading-[1.25]">Oʻahu (+15)</p>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-center left-0 top-[96px]">
      <Pill />
      <Pill1 />
      <Pill2 />
    </div>
  );
}

function MoreInfoTrigger() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-start min-h-px min-w-px relative self-stretch" data-name="More info trigger">
      <p className="css-ew64yg font-['Centra_No2:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#191e3b] text-[18px]">Suggestion</p>
    </div>
  );
}

function LodgingContentPatternSearchResultSortDisclaimer() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Lodging / 🌈 Content Pattern / Search result sort disclaimer">
      <MoreInfoTrigger />
    </div>
  );
}

function ToggleDisclaimer() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-[468px]" data-name="Toggle + disclaimer">
      <LodgingContentPatternSearchResultSortDisclaimer />
    </div>
  );
}

function DisclaimerSort() {
  return (
    <div className="content-stretch flex gap-[21px] items-start relative shrink-0" data-name="_ / Disclaimer & sort">
      <ToggleDisclaimer />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <DisclaimerSort />
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-0 w-[832px]">
      <Frame />
    </div>
  );
}

export default function Frame3() {
  return (
    <div className="relative size-full">
      <Frame2 />
      <p className="absolute css-4hzbpn font-['Centra_No2:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#191e3b] text-[16px] top-[32px] tracking-[-0.32px] w-[662px]">I found two great options, but there are also some great matches just in the neighbouring islands —would you like to see them?</p>
      <Frame1 />
    </div>
  );
}