import svgPaths from "./svg-111x6lwme1";
import imgImg0 from "figma:asset/e92712bc243a61fc6787c7a6063dd0fb03cdda06.png";

function BadgeText() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Badge text">
      <p className="css-ew64yg font-['Centra_No2:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-white">Picked for you</p>
    </div>
  );
}

function TextOnly() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Text only">
      <BadgeText />
    </div>
  );
}

function ContentLargeText() {
  return (
    <div className="bg-[#191e3b] content-stretch flex items-start overflow-clip px-[12px] py-[6px] relative rounded-[8px] shrink-0" data-name="Content / Large / Text">
      <TextOnly />
    </div>
  );
}

function BadgeStandard() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Badge / Standard">
      <ContentLargeText />
    </div>
  );
}

function Score() {
  return (
    <div className="absolute content-stretch flex items-start left-[12px] top-[12px]" data-name="Score">
      <BadgeStandard />
    </div>
  );
}

function IconGlyphFavoriteBorder() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon glyph / favorite_border">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon glyph / favorite_border">
          <path clipRule="evenodd" d={svgPaths.p2b64aa80} fill="var(--fill-0, #191E3B)" fillRule="evenodd" id="Glyph" />
        </g>
      </svg>
    </div>
  );
}

function IconBackground() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center overflow-clip relative rounded-[40000px] shrink-0 size-[32px]" data-name="Icon background">
      <IconGlyphFavoriteBorder />
    </div>
  );
}

function TouchTarget() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[48px]" data-name="Touch target">
      <IconBackground />
    </div>
  );
}

function Favorite() {
  return (
    <div className="content-stretch flex items-start justify-end relative shrink-0" data-name=".Favorite">
      <TouchTarget />
    </div>
  );
}

function FavouriteWrapper() {
  return (
    <div className="absolute content-stretch flex items-start justify-end left-0 right-0 top-0" data-name="Favourite wrapper">
      <Favorite />
    </div>
  );
}

function OverlayContainer() {
  return (
    <div className="absolute h-[24px] left-1/2 top-0 translate-x-[-50%] w-[72px]" data-name="_ / Overlay container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 72 24">
        <g id="_ / Overlay container">
          <path d={svgPaths.p33772a80} fill="var(--fill-0, #191E3B)" id="overlay" opacity="0.75" />
        </g>
      </svg>
    </div>
  );
}

function Dot() {
  return (
    <div className="h-[24px] relative shrink-0 w-[12px]" data-name="_/ Dot">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 24">
        <g id="_/ Dot">
          <circle cx="6" cy="12" fill="var(--fill-0, white)" id="Dot" r="4" />
        </g>
      </svg>
    </div>
  );
}

function Dot1() {
  return (
    <div className="h-[24px] relative shrink-0 w-[12px]" data-name="_/ Dot">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 24">
        <g id="_/ Dot">
          <circle cx="6" cy="12" fill="var(--fill-0, white)" id="Dot" opacity="0.5" r="3" />
        </g>
      </svg>
    </div>
  );
}

function Dot2() {
  return (
    <div className="h-[24px] relative shrink-0 w-[12px]" data-name="_/ Dot">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 24">
        <g id="_/ Dot">
          <circle cx="6" cy="12" fill="var(--fill-0, white)" id="Dot" opacity="0.5" r="3" />
        </g>
      </svg>
    </div>
  );
}

function Dot3() {
  return (
    <div className="h-[24px] relative shrink-0 w-[12px]" data-name="_/ Dot">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 24">
        <g id="_/ Dot">
          <circle cx="6" cy="12" fill="var(--fill-0, white)" id="Dot" opacity="0.5" r="3" />
        </g>
      </svg>
    </div>
  );
}

function Dot4() {
  return (
    <div className="h-[24px] relative shrink-0 w-[12px]" data-name="_/ Dot">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 24">
        <g id="_/ Dot">
          <circle cx="6" cy="12" fill="var(--fill-0, white)" id="Dot" opacity="0.5" r="2" />
        </g>
      </svg>
    </div>
  );
}

function Dots() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[calc(50%-1px)] top-0 translate-x-[-50%]" data-name="dots">
      <Dot />
      <Dot1 />
      <Dot2 />
      <Dot3 />
      <Dot4 />
    </div>
  );
}

function OverlayDots() {
  return (
    <div className="absolute h-[24px] left-1/2 top-[158px] translate-x-[-50%] w-[72px]" data-name="_/ Overlay dots">
      <OverlayContainer />
      <Dots />
    </div>
  );
}

export default function ImgOptions() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative rounded-[16px] size-full" data-name="Img options">
      <div className="h-[194px] relative shrink-0 w-full" data-name="img_0">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImg0} />
      </div>
      <Score />
      <FavouriteWrapper />
      <OverlayDots />
    </div>
  );
}