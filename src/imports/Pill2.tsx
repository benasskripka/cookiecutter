import svgPaths from "./svg-ujtb498f3x";

function InputIconLeft() {
  return (
    <div className="relative size-[20.21px]" data-name="_ / Input / Icon left">
      <div className="absolute aspect-[21.2274/20] left-[8.33%] right-[3.22%] top-[calc(50%-0.95px)] translate-y-[-50%]" data-name="Glyph">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 17">
          <path clipRule="evenodd" d={svgPaths.p1dfd7800} fill="var(--fill-0, #191E3B)" fillRule="evenodd" id="Glyph" />
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
          <g id="Background"></g>
        </svg>
      </div>
      <div className="absolute flex items-center justify-center left-[10.07px] size-[20.243px] top-[0.07px]" style={{ "--transform-inner-width": "20.203125", "--transform-inner-height": "20.203125" } as React.CSSProperties}>
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

export default function Pill() {
  return (
    <div className="bg-[#f2f8fd] relative rounded-[32px] size-full" data-name="pill2">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center overflow-clip px-[24px] py-[16px] relative size-full">
          <div className="flex h-[18.773px] items-center justify-center relative shrink-0 w-[20.03px]" style={{ "--transform-inner-width": "20", "--transform-inner-height": "18.734375" } as React.CSSProperties}>
            <div className="flex-none rotate-[359.907deg]">
              <ButtonPrimaryIconOnly />
            </div>
          </div>
          <div className="flex flex-col font-['CentraNo2',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#191e3b] text-[14px] text-nowrap">
            <p className="leading-[1.25] whitespace-pre">More like this</p>
          </div>
        </div>
      </div>
    </div>
  );
}