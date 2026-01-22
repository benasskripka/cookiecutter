import svgPaths from "./svg-tq9sxiwrov";

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

function Frame1() {
  return (
    <div className="content-stretch flex h-[36px] items-center justify-center relative shrink-0 w-full">
      <IconGlyphHistory />
    </div>
  );
}

function NavLayer1() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center p-[12px] relative rounded-[32px] shrink-0 size-[48px]" data-name="Nav Layer">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.15)] border-solid inset-[-1px] pointer-events-none rounded-[33px] shadow-[0px_5px_15px_0px_rgba(0,0,0,0.1)]" />
      <Frame1 />
    </div>
  );
}

function IconGlyphClose() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Icon glyph / close">
      <div className="absolute aspect-[14/14] left-1/4 right-[5%] top-[calc(50%+2px)] translate-y-[-50%]" data-name="Glyph">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
          <path d={svgPaths.pfb67300} fill="var(--fill-0, black)" id="Glyph" />
        </svg>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0 size-[20px]" data-name="Icon">
      <IconGlyphClose />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Icon />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex h-full items-center justify-center px-[12px] py-[6px] relative rounded-[24px] shrink-0">
      <div aria-hidden="true" className="absolute border-[0.75px] border-[rgba(244,245,252,0.05)] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <Frame3 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex h-[36px] items-center justify-center relative shrink-0 w-full">
      <Frame4 />
    </div>
  );
}

function NavLayer2() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center p-[12px] relative rounded-[32px] shrink-0 size-[48px]" data-name="Nav Layer">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.15)] border-solid inset-[-1px] pointer-events-none rounded-[33px] shadow-[0px_5px_15px_0px_rgba(0,0,0,0.1)]" />
      <Frame2 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <NavLayer1 />
      <NavLayer2 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="absolute content-stretch flex flex-col items-end left-[24px] top-[24px] w-[408px]">
      <Frame7 />
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
    <div className="absolute bg-[#1668e3] content-stretch flex gap-[7.6px] items-center justify-center left-[349px] overflow-clip p-[11.4px] rounded-[38000px] top-[74.05px]" data-name="_ / Button / Container">
      <ButtonIcon />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute bg-white h-[130px] left-[24px] rounded-[32px] top-[623px] w-[405px]">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <ButtonContainer />
        <p className="absolute css-ew64yg font-['CentraNo2',sans-serif] font-medium leading-[18px] left-[159px] not-italic text-[14px] text-black text-center top-[20px] translate-x-[-50%]">Show me places that are really traditional|</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.15)] border-solid inset-[-1px] pointer-events-none rounded-[33px] shadow-[0px_5px_15px_0px_rgba(0,0,0,0.1)]" />
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

function Pill() {
  return (
    <div className="bg-[#f2f8fd] content-stretch flex gap-[8px] items-center overflow-clip px-[24px] py-[16px] relative rounded-[32px] shrink-0" data-name="pill2">
      <div className="flex h-[18.773px] items-center justify-center relative shrink-0 w-[20.03px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-[359.907deg]">
          <ButtonPrimaryIconOnly />
        </div>
      </div>
      <div className="css-g0mm18 flex flex-col font-['CentraNo2',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#191e3b] text-[14px]">
        <p className="css-ew64yg leading-[1.25]">Add Santa Fe plaza</p>
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

function Pill1() {
  return (
    <div className="bg-[#f2f8fd] content-stretch flex gap-[8px] items-center overflow-clip px-[24px] py-[16px] relative rounded-[32px] shrink-0" data-name="pill3">
      <div className="flex h-[18.773px] items-center justify-center relative shrink-0 w-[20.03px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-[359.907deg]">
          <ButtonPrimaryIconOnly1 />
        </div>
      </div>
      <div className="css-g0mm18 flex flex-col font-['CentraNo2',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#191e3b] text-[14px]">
        <p className="css-ew64yg leading-[1.25]">Show cheapest first</p>
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

function ButtonContainerIconOnly2() {
  return (
    <div className="absolute h-[18.238px] left-[-10.8px] top-[-0.25px] w-[40.42px]" data-name="_ / Button / Container / Icon only">
      <div className="absolute left-0 size-[40.42px] top-[-10.59px]" data-name="Background">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Background" />
        </svg>
      </div>
      <div className="absolute flex items-center justify-center left-[10.07px] size-[20.243px] top-[0.07px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[0.093deg]">
          <InputIconLeft2 />
        </div>
      </div>
    </div>
  );
}

function ButtonPrimaryIconOnly2() {
  return (
    <div className="h-[18.74px] relative w-[20px]" data-name="Button / Primary / Icon only">
      <ButtonContainerIconOnly2 />
    </div>
  );
}

function Pill2() {
  return (
    <div className="bg-[#f2f8fd] content-stretch flex gap-[8px] items-center overflow-clip px-[24px] py-[16px] relative rounded-[32px] shrink-0" data-name="pill3">
      <div className="flex h-[18.773px] items-center justify-center relative shrink-0 w-[20.03px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-[359.907deg]">
          <ButtonPrimaryIconOnly2 />
        </div>
      </div>
      <div className="css-g0mm18 flex flex-col font-['CentraNo2',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#191e3b] text-[14px]">
        <p className="css-ew64yg leading-[1.25]">Where’s best to stay?</p>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] items-start justify-center left-[24px] top-[422px]">
      <Pill />
      <Pill1 />
      <Pill2 />
    </div>
  );
}

function NavLayer() {
  return (
    <div className="absolute bg-white h-[782px] left-0 top-0 w-[453px]" data-name="Nav Layer">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Frame6 />
        <Frame />
        <Frame5 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.15)] border-solid inset-[-1px] pointer-events-none shadow-[0px_5px_15px_0px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

export default function Frame8() {
  return (
    <div className="relative size-full">
      <NavLayer />
    </div>
  );
}