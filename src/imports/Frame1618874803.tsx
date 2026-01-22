import svgPaths from "./svg-3lgt4rt24h";
import imgScreenshot20260120At74233Am1 from "figma:asset/0803ccaedcc0b5b4e5617b8fe6e035aa7d7cdeba.png";

function IconGlyphCalendar() {
  return (
    <div className="absolute left-[74px] size-[20px] top-[122px]" data-name="Icon glyph / calendar">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon glyph / calendar">
          <g id="Glyph">
            <path d={svgPaths.p2fb86b00} fill="var(--fill-0, #0F51ED)" />
            <path d={svgPaths.p187b9700} fill="var(--fill-0, #0F51ED)" />
            <path d={svgPaths.p346de00} fill="var(--fill-0, #0F51ED)" />
            <path d={svgPaths.p2b10a072} fill="var(--fill-0, #0F51ED)" />
            <path d={svgPaths.p1d4f8b00} fill="var(--fill-0, #0F51ED)" />
            <path d={svgPaths.p5583540} fill="var(--fill-0, #0F51ED)" />
            <path clipRule="evenodd" d={svgPaths.p2b31dec0} fill="var(--fill-0, #0F51ED)" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconGlyphSubdirectoryArrowRight() {
  return (
    <div className="absolute left-[107px] size-[20px] top-[169px]" data-name="Icon glyph / subdirectory_arrow_right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon glyph / subdirectory_arrow_right">
          <path d={svgPaths.p1438baa0} fill="var(--fill-0, #1E2340)" id="Glyph" />
        </g>
      </svg>
    </div>
  );
}

function IconGlyphSubdirectoryArrowRight1() {
  return (
    <div className="absolute left-[107px] size-[20px] top-[217px]" data-name="Icon glyph / subdirectory_arrow_right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon glyph / subdirectory_arrow_right">
          <path d={svgPaths.p1438baa0} fill="var(--fill-0, #1E2340)" id="Glyph" />
        </g>
      </svg>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="relative size-full">
      <div className="absolute h-[469px] left-0 top-0 w-[1069px]" data-name="Screenshot 2026-01-20 at 7.42.33 am 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgScreenshot20260120At74233Am1} />
      </div>
      <p className="absolute css-ew64yg font-['Centra_No2:Medium',sans-serif] leading-[0] left-[207.5px] not-italic text-[14px] text-black text-center top-[62px] translate-x-[-50%]">
        <span className="leading-[18px]">{`A holiday home for `}</span>
        <span className="leading-[18px] text-[#0f51ed]">next month</span>
      </p>
      <div className="absolute bg-white h-[141px] left-[60px] top-[114px] w-[376px]" />
      <p className="absolute css-ew64yg font-['Centra_No2:Medium',sans-serif] leading-[18px] left-[200.5px] not-italic text-[#1e2340] text-[14px] text-center top-[170px] translate-x-[-50%]">Flexible in February</p>
      <p className="absolute css-ew64yg font-['Centra_No2:Medium',sans-serif] leading-[18px] left-[137px] not-italic text-[#0f51ed] text-[14px] text-center top-[123px] translate-x-[-50%]">Set dates</p>
      <p className="absolute css-ew64yg font-['Centra_No2:Medium',sans-serif] leading-[18px] left-[181px] not-italic text-[#1e2340] text-[14px] text-center top-[218px] translate-x-[-50%]">1 Feb - 28 Feb</p>
      <IconGlyphCalendar />
      <IconGlyphSubdirectoryArrowRight />
      <IconGlyphSubdirectoryArrowRight1 />
    </div>
  );
}