import svgPaths from "./svg-o5vj1bfswy";

function IconGlyphChat() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon glyph / chat">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon glyph / chat">
          <g id="Glyph">
            <path clipRule="evenodd" d={svgPaths.p220f1e80} fill="var(--fill-0, black)" fillRule="evenodd" />
            <path d={svgPaths.p4acc900} fill="var(--fill-0, black)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex h-[36px] items-center justify-center relative shrink-0 w-full">
      <IconGlyphChat />
    </div>
  );
}

export default function NavLayer() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center p-[12px] relative rounded-[32px] size-full" data-name="Nav Layer">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.15)] border-solid inset-[-1px] pointer-events-none rounded-[33px] shadow-[0px_5px_15px_0px_rgba(0,0,0,0.1)]" />
      <Frame />
    </div>
  );
}