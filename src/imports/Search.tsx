import svgPaths from "./svg-bd837eoyey";
import imgImg0 from "figma:asset/c1aa08f506afe3e7513cc4c68014de00f6de965b.png";
import imgImg1 from "figma:asset/e92712bc243a61fc6787c7a6063dd0fb03cdda06.png";
import imgImg2 from "figma:asset/48e18160157c42c91fec6e473f1d90c51559886e.png";
import imgImg3 from "figma:asset/c9cec5f6e2d36e8509913183cac3f14776f4ad8d.png";
import imgImg4 from "figma:asset/84471550455439c9cbea5e99f7a93ad8c05edce1.png";
import imgImg5 from "figma:asset/3a46bd7978b519105eacda89704e26caa3a94953.png";
import imgImg6 from "figma:asset/80990b356b9e9e491118a4ef4882ac84e158fef0.png";
import imgImg7 from "figma:asset/27105fb195be9104821dd995c76c988813842e35.png";
import imgYellowStreetViewPerson from "figma:asset/52b910891f35287852ef731753f5e92181b547f0.png";
import imgMap from "figma:asset/83db809fc4522f895aed303a645d24435fe80a10.png";

function MoreInfoTrigger() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-start min-h-px min-w-px relative self-stretch shrink-0" data-name="More info trigger">
      <p className="font-['Centra_No2:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#191e3b] text-[18px] text-nowrap whitespace-pre">Best matches</p>
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

function Frame3() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
      <DisclaimerSort />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame3 />
    </div>
  );
}

function MoreInfoTrigger1() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-start min-h-px min-w-px relative self-stretch shrink-0" data-name="More info trigger">
      <p className="font-['Centra_No2:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#676a7d] text-[14px] text-nowrap whitespace-pre">4 of 56 results</p>
    </div>
  );
}

function LodgingContentPatternSearchResultSortDisclaimer1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Lodging / 🌈 Content Pattern / Search result sort disclaimer">
      <MoreInfoTrigger1 />
    </div>
  );
}

function ToggleDisclaimer1() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-[468px]" data-name="Toggle + disclaimer">
      <LodgingContentPatternSearchResultSortDisclaimer1 />
    </div>
  );
}

function DisclaimerSort1() {
  return (
    <div className="content-stretch flex gap-[21px] items-start relative shrink-0" data-name="_ / Disclaimer & sort">
      <ToggleDisclaimer1 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
      <DisclaimerSort1 />
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame4 />
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <Frame1 />
      <Frame29 />
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
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 size-[48px]" data-name="Touch target">
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
      {[...Array(3).keys()].map((_, i) => (
        <Dot1 key={i} />
      ))}
      <Dot2 />
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

function ImgOptions() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start min-w-[130px] overflow-x-auto overflow-y-clip relative rounded-[16px] shrink-0 w-full" data-name="Img options">
      <div className="h-[194px] relative shrink-0 w-full" data-name="img_0">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImg0} />
      </div>
      <FavouriteWrapper />
      <OverlayDots />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading">
      <p className="-webkit-box font-['Centra_No2:Medium',sans-serif] leading-[1.25] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#191e3b] text-[16px] w-full">Charming guest house with a yard</p>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-end relative shrink-0 w-full">
      <Heading />
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Text">
      <p className="font-['Centra_No2:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#676a7d] text-[14px] text-nowrap whitespace-pre">House · 2 bedrooms · 4 beds</p>
    </div>
  );
}

function ValueProp() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative" data-name="Value Prop">
      <Text />
    </div>
  );
}

function ValuePropsContainer() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Value props container">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <ValueProp />
        </div>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative">
      <ValuePropsContainer />
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Text">
      <p className="basis-0 font-['Centra_No2:Regular',sans-serif] grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[#676a7d] text-[14px]">5 min walk to Historic Santa fe</p>
    </div>
  );
}

function HeadingContainer() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Heading Container">
      <Text1 />
    </div>
  );
}

function Row() {
  return (
    <div className="content-stretch flex gap-[10px] items-start justify-end relative shrink-0 w-full" data-name="Row">
      <HeadingContainer />
    </div>
  );
}

function BadgeText() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0" data-name="Badge text">
      <p className="font-['Centra_No2:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#191e3b] text-[12px] text-nowrap whitespace-pre">9.6</p>
    </div>
  );
}

function TextOnly() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="Text only">
      <BadgeText />
    </div>
  );
}

function ContentLargeText() {
  return (
    <div className="bg-[#ccf7d4] box-border content-stretch flex gap-[4px] items-start overflow-clip px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Content / Large / Text">
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
    <div className="content-stretch flex items-start relative shrink-0" data-name="Score">
      <BadgeStandard />
    </div>
  );
}

function ScoreContainer() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-center relative shrink-0" data-name="Score container">
      <Score />
    </div>
  );
}

function Text2() {
  return (
    <div className="content-stretch flex items-start relative self-stretch shrink-0" data-name="Text">
      <p className="font-['Centra_No2:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#676a7d] text-[14px] text-nowrap whitespace-pre">(103)</p>
    </div>
  );
}

function Secondary() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Secondary">
      <Text2 />
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex h-full items-center relative shrink-0" data-name="Content">
      <Secondary />
    </div>
  );
}

function UgcDisplay() {
  return (
    <div className="content-stretch flex gap-[6px] h-[18px] items-center relative shrink-0" data-name="UGC Display">
      <ScoreContainer />
      <Content />
    </div>
  );
}

function HeadingOptions() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Heading options">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <Frame12 />
        </div>
      </div>
      <Row />
      <UgcDisplay />
    </div>
  );
}

function Text3() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Text">
      <p className="font-['Centra_No2:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#191e3b] text-[16px] text-nowrap whitespace-pre">$217</p>
    </div>
  );
}

function LeadPrice() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="⚙️ Lead price">
      <Text3 />
    </div>
  );
}

function LeadPriceContainer() {
  return (
    <div className="content-center flex flex-wrap gap-[4px] items-center justify-end relative shrink-0 w-full" data-name=".Lead price container">
      <LeadPrice />
    </div>
  );
}

function PriceSummary() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full" data-name="Price summary">
      <LeadPriceContainer />
    </div>
  );
}

function DatedPriceSummary() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-end relative shrink-0 w-[149px]" data-name="Dated price summary">
      <PriceSummary />
    </div>
  );
}

function Text4() {
  return (
    <div className="content-stretch flex items-start justify-end relative shrink-0 w-full" data-name="Text">
      <p className="basis-0 font-['Centra_No2:Regular',sans-serif] grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[#676a7d] text-[14px] text-right">$869 for 4 nights</p>
    </div>
  );
}

function SecondaryPrice() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Secondary price">
      <Text4 />
    </div>
  );
}

function SmallTotalMultiNightRight() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name=".Small / Total multi-night / Right">
      <SecondaryPrice />
    </div>
  );
}

function HcomCwrE2EPriceSummary() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-end relative w-full" data-name="HCOM_CWR_E2E_Price_Summary">
      <DatedPriceSummary />
      <SmallTotalMultiNightRight />
    </div>
  );
}

function BottomContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Bottom container">
      <div className="flex items-center justify-center relative shrink-0 w-full">
        <div className="flex-none rotate-[180deg] scale-y-[-100%] w-full">
          <HcomCwrE2EPriceSummary />
        </div>
      </div>
    </div>
  );
}

function OffersAndPriceSection() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-end relative w-full" data-name="Offers and price section">
      <BottomContainer />
    </div>
  );
}

function Frame20() {
  return (
    <div className="box-border content-stretch flex items-end justify-between pb-0 pt-[8px] px-0 relative shrink-0 w-full">
      <HeadingOptions />
      <div className="basis-0 flex grow items-center justify-center min-h-px min-w-px relative shrink-0">
        <div className="flex-none rotate-[180deg] scale-y-[-100%] w-full">
          <OffersAndPriceSection />
        </div>
      </div>
    </div>
  );
}

function Content1() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Content">
      <div className="flex flex-col items-end justify-end size-full">
        <div className="box-border content-stretch flex flex-col items-end justify-end px-[8px] py-[16px] relative w-full">
          <Frame21 />
          <Frame20 />
        </div>
      </div>
    </div>
  );
}

function SearchResultsCard() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-end justify-end min-h-px min-w-px overflow-clip relative shrink-0" data-name="Search Results Card">
      <ImgOptions />
      <Content1 />
    </div>
  );
}

function BadgeText1() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0" data-name="Badge text">
      <p className="font-['Centra_No2:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre">Picked for you</p>
    </div>
  );
}

function TextOnly1() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="Text only">
      <BadgeText1 />
    </div>
  );
}

function ContentLargeText1() {
  return (
    <div className="bg-[#191e3b] box-border content-stretch flex gap-[4px] items-start overflow-clip px-[12px] py-[6px] relative rounded-[8px] shrink-0" data-name="Content / Large / Text">
      <TextOnly1 />
    </div>
  );
}

function BadgeStandard1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Badge / Standard">
      <ContentLargeText1 />
    </div>
  );
}

function Score1() {
  return (
    <div className="absolute content-stretch flex items-start left-[12px] top-[12px]" data-name="Score">
      <BadgeStandard1 />
    </div>
  );
}

function IconGlyphFavoriteBorder1() {
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

function IconBackground1() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center overflow-clip relative rounded-[40000px] shrink-0 size-[32px]" data-name="Icon background">
      <IconGlyphFavoriteBorder1 />
    </div>
  );
}

function TouchTarget1() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 size-[48px]" data-name="Touch target">
      <IconBackground1 />
    </div>
  );
}

function Favorite1() {
  return (
    <div className="content-stretch flex items-start justify-end relative shrink-0" data-name=".Favorite">
      <TouchTarget1 />
    </div>
  );
}

function FavouriteWrapper1() {
  return (
    <div className="absolute content-stretch flex items-start justify-end left-0 right-0 top-0" data-name="Favourite wrapper">
      <Favorite1 />
    </div>
  );
}

function OverlayContainer1() {
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

function Dot3() {
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

function Dot4() {
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

function Dot5() {
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

function Dots1() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[calc(50%-1px)] top-0 translate-x-[-50%]" data-name="dots">
      <Dot3 />
      {[...Array(3).keys()].map((_, i) => (
        <Dot4 key={i} />
      ))}
      <Dot5 />
    </div>
  );
}

function OverlayDots1() {
  return (
    <div className="absolute h-[24px] left-1/2 top-[158px] translate-x-[-50%] w-[72px]" data-name="_/ Overlay dots">
      <OverlayContainer1 />
      <Dots1 />
    </div>
  );
}

function ImgOptions1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start min-w-[130px] overflow-x-auto overflow-y-clip relative rounded-[16px] shrink-0 w-full" data-name="Img options">
      <div className="h-[194px] relative shrink-0 w-full" data-name="img_0">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImg1} />
      </div>
      <Score1 />
      <FavouriteWrapper1 />
      <OverlayDots1 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading">
      <p className="-webkit-box font-['Centra_No2:Medium',sans-serif] leading-[1.25] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#191e3b] text-[16px] w-full">{`Condo close to all amenities `}</p>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-end relative shrink-0 w-full">
      <Heading1 />
    </div>
  );
}

function Text5() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Text">
      <p className="font-['Centra_No2:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#676a7d] text-[14px] text-nowrap whitespace-pre">House · 2 bedrooms · 4 beds</p>
    </div>
  );
}

function ValueProp1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative" data-name="Value Prop">
      <Text5 />
    </div>
  );
}

function ValuePropsContainer1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Value props container">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <ValueProp1 />
        </div>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative">
      <ValuePropsContainer1 />
    </div>
  );
}

function Text6() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Text">
      <p className="basis-0 font-['Centra_No2:Regular',sans-serif] grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[#676a7d] text-[14px]">7 min walk to Historic Santa fe</p>
    </div>
  );
}

function HeadingContainer1() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Heading Container">
      <Text6 />
    </div>
  );
}

function Row1() {
  return (
    <div className="content-stretch flex gap-[10px] items-start justify-end relative shrink-0 w-full" data-name="Row">
      <HeadingContainer1 />
    </div>
  );
}

function BadgeText2() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0" data-name="Badge text">
      <p className="font-['Centra_No2:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#191e3b] text-[12px] text-nowrap whitespace-pre">9.8</p>
    </div>
  );
}

function TextOnly2() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="Text only">
      <BadgeText2 />
    </div>
  );
}

function ContentLargeText2() {
  return (
    <div className="bg-[#a4e9b0] box-border content-stretch flex gap-[4px] items-start overflow-clip px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Content / Large / Text">
      <TextOnly2 />
    </div>
  );
}

function BadgeStandard2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Badge / Standard">
      <ContentLargeText2 />
    </div>
  );
}

function Score2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Score">
      <BadgeStandard2 />
    </div>
  );
}

function ScoreContainer1() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-center relative shrink-0" data-name="Score container">
      <Score2 />
    </div>
  );
}

function Text7() {
  return (
    <div className="content-stretch flex items-start relative self-stretch shrink-0" data-name="Text">
      <p className="font-['Centra_No2:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#676a7d] text-[14px] text-nowrap whitespace-pre">(43)</p>
    </div>
  );
}

function Secondary1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Secondary">
      <Text7 />
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex h-full items-center relative shrink-0" data-name="Content">
      <Secondary1 />
    </div>
  );
}

function UgcDisplay1() {
  return (
    <div className="content-stretch flex gap-[6px] h-[18px] items-center relative shrink-0" data-name="UGC Display">
      <ScoreContainer1 />
      <Content2 />
    </div>
  );
}

function HeadingOptions1() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Heading options">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <Frame14 />
        </div>
      </div>
      <Row1 />
      <UgcDisplay1 />
    </div>
  );
}

function BadgeText3() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0" data-name="_ / Badge text">
      <p className="font-['Centra_No2:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#006ed6] text-[12px] text-nowrap whitespace-pre">$117 off</p>
    </div>
  );
}

function ContentSmallText() {
  return (
    <div className="bg-[rgba(0,110,214,0.05)] box-border content-stretch flex gap-[4px] items-center overflow-clip px-[6px] py-[2px] relative rounded-[6px] shrink-0" data-name="_ / Content / Small / Text">
      <BadgeText3 />
    </div>
  );
}

function BadgeProperties() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Badge properties">
      <ContentSmallText />
    </div>
  );
}

function BadgeSmall() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name=".Badge / Small">
      <BadgeProperties />
    </div>
  );
}

function LinkNeutralColorTeamTier() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0" data-name="🧪 Link - Neutral color (Team tier)">
      <p className="font-['Centra_No2:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#676a7d] text-[14px] text-nowrap text-right whitespace-pre">$342</p>
    </div>
  );
}

function NeutralLinkStrikethrough() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0" data-name="Neutral Link Strikethrough">
      <LinkNeutralColorTeamTier />
      <div className="absolute h-0 left-0 right-0 top-[calc(50%+1px)] translate-y-[-50%]" data-name="Strikethrough vector">
        <div className="absolute bottom-[-0.38px] left-0 right-0 top-[-0.38px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31 1">
            <path d="M0 0.375H31" id="Strikethrough vector" stroke="var(--stroke-0, #676A7D)" strokeWidth="0.75" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ReferencePrice() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="⚙️ Reference price">
      <NeutralLinkStrikethrough />
    </div>
  );
}

function Text8() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Text">
      <p className="font-['Centra_No2:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#191e3b] text-[16px] text-nowrap whitespace-pre">$313</p>
    </div>
  );
}

function LeadPrice1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="⚙️ Lead price">
      <Text8 />
    </div>
  );
}

function LeadPriceContainer1() {
  return (
    <div className="content-center flex flex-wrap gap-[4px] items-center justify-end relative shrink-0 w-full" data-name=".Lead price container">
      <ReferencePrice />
      <LeadPrice1 />
    </div>
  );
}

function PriceSummary1() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full" data-name="Price summary">
      <LeadPriceContainer1 />
    </div>
  );
}

function DatedPriceSummary1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-end relative shrink-0 w-[149px]" data-name="Dated price summary">
      <PriceSummary1 />
    </div>
  );
}

function Text9() {
  return (
    <div className="content-stretch flex items-start justify-end relative shrink-0 w-full" data-name="Text">
      <p className="basis-0 font-['Centra_No2:Regular',sans-serif] grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[#676a7d] text-[14px] text-right">$1,251 for 4 nights</p>
    </div>
  );
}

function SecondaryPrice1() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Secondary price">
      <Text9 />
    </div>
  );
}

function SmallTotalMultiNightRight1() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name=".Small / Total multi-night / Right">
      <SecondaryPrice1 />
    </div>
  );
}

function HcomCwrE2EPriceSummary1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-end relative w-full" data-name="HCOM_CWR_E2E_Price_Summary">
      <BadgeSmall />
      <DatedPriceSummary1 />
      <SmallTotalMultiNightRight1 />
    </div>
  );
}

function BottomContainer1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Bottom container">
      <div className="flex items-center justify-center relative shrink-0 w-full">
        <div className="flex-none rotate-[180deg] scale-y-[-100%] w-full">
          <HcomCwrE2EPriceSummary1 />
        </div>
      </div>
    </div>
  );
}

function OffersAndPriceSection1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-end relative w-full" data-name="Offers and price section">
      <BottomContainer1 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="box-border content-stretch flex items-end justify-between pb-0 pt-[8px] px-0 relative shrink-0 w-full">
      <HeadingOptions1 />
      <div className="basis-0 flex grow items-center justify-center min-h-px min-w-px relative shrink-0">
        <div className="flex-none rotate-[180deg] scale-y-[-100%] w-full">
          <OffersAndPriceSection1 />
        </div>
      </div>
    </div>
  );
}

function Content3() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Content">
      <div className="flex flex-col items-end justify-end size-full">
        <div className="box-border content-stretch flex flex-col items-end justify-end px-[8px] py-[16px] relative w-full">
          <Frame22 />
          <Frame23 />
        </div>
      </div>
    </div>
  );
}

function SearchResultsCard1() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-end justify-end min-h-px min-w-px overflow-clip relative shrink-0" data-name="Search Results Card">
      <ImgOptions1 />
      <Content3 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
      <SearchResultsCard />
      <SearchResultsCard1 />
    </div>
  );
}

function IconGlyphFavoriteBorder2() {
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

function IconBackground2() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center overflow-clip relative rounded-[40000px] shrink-0 size-[32px]" data-name="Icon background">
      <IconGlyphFavoriteBorder2 />
    </div>
  );
}

function TouchTarget2() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 size-[48px]" data-name="Touch target">
      <IconBackground2 />
    </div>
  );
}

function Favorite2() {
  return (
    <div className="content-stretch flex items-start justify-end relative shrink-0" data-name=".Favorite">
      <TouchTarget2 />
    </div>
  );
}

function FavouriteWrapper2() {
  return (
    <div className="absolute content-stretch flex items-start justify-end left-0 right-0 top-0" data-name="Favourite wrapper">
      <Favorite2 />
    </div>
  );
}

function OverlayContainer2() {
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

function Dot6() {
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

function Dot7() {
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

function Dot8() {
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

function Dots2() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[calc(50%-1px)] top-0 translate-x-[-50%]" data-name="dots">
      <Dot6 />
      {[...Array(3).keys()].map((_, i) => (
        <Dot7 key={i} />
      ))}
      <Dot8 />
    </div>
  );
}

function OverlayDots2() {
  return (
    <div className="absolute h-[24px] left-1/2 top-[158px] translate-x-[-50%] w-[72px]" data-name="_/ Overlay dots">
      <OverlayContainer2 />
      <Dots2 />
    </div>
  );
}

function BadgeText4() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0" data-name="Badge text">
      <p className="font-['Centra_No2:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre">Love by guests</p>
    </div>
  );
}

function TextOnly3() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="Text only">
      <BadgeText4 />
    </div>
  );
}

function ContentLargeText3() {
  return (
    <div className="bg-[#191e3b] box-border content-stretch flex gap-[4px] items-start overflow-clip px-[12px] py-[6px] relative rounded-[8px] shrink-0" data-name="Content / Large / Text">
      <TextOnly3 />
    </div>
  );
}

function BadgeStandard3() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Badge / Standard">
      <ContentLargeText3 />
    </div>
  );
}

function Score3() {
  return (
    <div className="absolute content-stretch flex items-start left-[12px] top-[12px]" data-name="Score">
      <BadgeStandard3 />
    </div>
  );
}

function ImgOptions2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start min-w-[130px] overflow-x-auto overflow-y-clip relative rounded-[16px] shrink-0 w-full" data-name="Img options">
      <div className="h-[194px] relative shrink-0 w-full" data-name="img_0">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImg2} />
      </div>
      <FavouriteWrapper2 />
      <OverlayDots2 />
      <Score3 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading">
      <p className="-webkit-box font-['Centra_No2:Medium',sans-serif] leading-[1.25] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#191e3b] text-[16px] w-full">Centre located house with artisanal decor</p>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-end relative shrink-0 w-full">
      <Heading2 />
    </div>
  );
}

function Text10() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Text">
      <p className="font-['Centra_No2:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#676a7d] text-[14px] text-nowrap whitespace-pre">House · 2 bedrooms · 4 beds</p>
    </div>
  );
}

function ValueProp2() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative" data-name="Value Prop">
      <Text10 />
    </div>
  );
}

function ValuePropsContainer2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Value props container">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <ValueProp2 />
        </div>
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative">
      <ValuePropsContainer2 />
    </div>
  );
}

function Text11() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Text">
      <p className="basis-0 font-['Centra_No2:Regular',sans-serif] grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[#676a7d] text-[14px]">10 min drive to Historic Santa fe</p>
    </div>
  );
}

function HeadingContainer2() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Heading Container">
      <Text11 />
    </div>
  );
}

function Row2() {
  return (
    <div className="content-stretch flex gap-[10px] items-start justify-end relative shrink-0 w-[209px]" data-name="Row">
      <HeadingContainer2 />
    </div>
  );
}

function BadgeText5() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0" data-name="Badge text">
      <p className="font-['Centra_No2:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#191e3b] text-[12px] text-nowrap whitespace-pre">9.8</p>
    </div>
  );
}

function TextOnly4() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="Text only">
      <BadgeText5 />
    </div>
  );
}

function ContentLargeText4() {
  return (
    <div className="bg-[#a4e9b0] box-border content-stretch flex gap-[4px] items-start overflow-clip px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Content / Large / Text">
      <TextOnly4 />
    </div>
  );
}

function BadgeStandard4() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Badge / Standard">
      <ContentLargeText4 />
    </div>
  );
}

function Score4() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Score">
      <BadgeStandard4 />
    </div>
  );
}

function ScoreContainer2() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-center relative shrink-0" data-name="Score container">
      <Score4 />
    </div>
  );
}

function Text12() {
  return (
    <div className="content-stretch flex items-start relative self-stretch shrink-0" data-name="Text">
      <p className="font-['Centra_No2:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#676a7d] text-[14px] text-nowrap whitespace-pre">(43)</p>
    </div>
  );
}

function Secondary2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Secondary">
      <Text12 />
    </div>
  );
}

function Content4() {
  return (
    <div className="content-stretch flex h-full items-center relative shrink-0" data-name="Content">
      <Secondary2 />
    </div>
  );
}

function UgcDisplay2() {
  return (
    <div className="content-stretch flex gap-[6px] h-[18px] items-center relative shrink-0" data-name="UGC Display">
      <ScoreContainer2 />
      <Content4 />
    </div>
  );
}

function HeadingOptions2() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Heading options">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <Frame15 />
        </div>
      </div>
      <Row2 />
      <UgcDisplay2 />
    </div>
  );
}

function BadgeText6() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0" data-name="_ / Badge text">
      <p className="font-['Centra_No2:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#006ed6] text-[12px] text-nowrap whitespace-pre">$117 off</p>
    </div>
  );
}

function ContentSmallText1() {
  return (
    <div className="bg-[rgba(0,110,214,0.05)] box-border content-stretch flex gap-[4px] items-center overflow-clip px-[6px] py-[2px] relative rounded-[6px] shrink-0" data-name="_ / Content / Small / Text">
      <BadgeText6 />
    </div>
  );
}

function BadgeProperties1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Badge properties">
      <ContentSmallText1 />
    </div>
  );
}

function BadgeSmall1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name=".Badge / Small">
      <BadgeProperties1 />
    </div>
  );
}

function LinkNeutralColorTeamTier1() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0" data-name="🧪 Link - Neutral color (Team tier)">
      <p className="font-['Centra_No2:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#676a7d] text-[14px] text-nowrap text-right whitespace-pre">$342</p>
    </div>
  );
}

function NeutralLinkStrikethrough1() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0" data-name="Neutral Link Strikethrough">
      <LinkNeutralColorTeamTier1 />
      <div className="absolute h-0 left-0 right-0 top-[calc(50%+1px)] translate-y-[-50%]" data-name="Strikethrough vector">
        <div className="absolute bottom-[-0.38px] left-0 right-0 top-[-0.38px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31 1">
            <path d="M0 0.375H31" id="Strikethrough vector" stroke="var(--stroke-0, #676A7D)" strokeWidth="0.75" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ReferencePrice1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="⚙️ Reference price">
      <NeutralLinkStrikethrough1 />
    </div>
  );
}

function Text13() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Text">
      <p className="font-['Centra_No2:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#191e3b] text-[16px] text-nowrap whitespace-pre">$313</p>
    </div>
  );
}

function LeadPrice2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="⚙️ Lead price">
      <Text13 />
    </div>
  );
}

function LeadPriceContainer2() {
  return (
    <div className="content-center flex flex-wrap gap-[4px] items-center justify-end relative shrink-0 w-full" data-name=".Lead price container">
      <ReferencePrice1 />
      <LeadPrice2 />
    </div>
  );
}

function PriceSummary2() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full" data-name="Price summary">
      <LeadPriceContainer2 />
    </div>
  );
}

function DatedPriceSummary2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-end relative shrink-0 w-[149px]" data-name="Dated price summary">
      <PriceSummary2 />
    </div>
  );
}

function Text14() {
  return (
    <div className="content-stretch flex items-start justify-end relative shrink-0 w-full" data-name="Text">
      <p className="basis-0 font-['Centra_No2:Regular',sans-serif] grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[#676a7d] text-[14px] text-right">$1,251 for 4 nights</p>
    </div>
  );
}

function SecondaryPrice2() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Secondary price">
      <Text14 />
    </div>
  );
}

function SmallTotalMultiNightRight2() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name=".Small / Total multi-night / Right">
      <SecondaryPrice2 />
    </div>
  );
}

function HcomCwrE2EPriceSummary2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-end relative w-full" data-name="HCOM_CWR_E2E_Price_Summary">
      <BadgeSmall1 />
      <DatedPriceSummary2 />
      <SmallTotalMultiNightRight2 />
    </div>
  );
}

function BottomContainer2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Bottom container">
      <div className="flex items-center justify-center relative shrink-0 w-full">
        <div className="flex-none rotate-[180deg] scale-y-[-100%] w-full">
          <HcomCwrE2EPriceSummary2 />
        </div>
      </div>
    </div>
  );
}

function OffersAndPriceSection2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-end relative w-full" data-name="Offers and price section">
      <BottomContainer2 />
    </div>
  );
}

function Frame25() {
  return (
    <div className="box-border content-stretch flex items-end justify-between pb-0 pt-[8px] px-0 relative shrink-0 w-full">
      <HeadingOptions2 />
      <div className="basis-0 flex grow items-center justify-center min-h-px min-w-px relative shrink-0">
        <div className="flex-none rotate-[180deg] scale-y-[-100%] w-full">
          <OffersAndPriceSection2 />
        </div>
      </div>
    </div>
  );
}

function Content5() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Content">
      <div className="flex flex-col items-end justify-end size-full">
        <div className="box-border content-stretch flex flex-col items-end justify-end px-[8px] py-[16px] relative w-full">
          <Frame24 />
          <Frame25 />
        </div>
      </div>
    </div>
  );
}

function SearchResultsCard2() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-end justify-end min-h-px min-w-px overflow-clip relative shrink-0" data-name="Search Results Card">
      <ImgOptions2 />
      <Content5 />
    </div>
  );
}

function IconGlyphFavoriteBorder3() {
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

function IconBackground3() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center overflow-clip relative rounded-[40000px] shrink-0 size-[32px]" data-name="Icon background">
      <IconGlyphFavoriteBorder3 />
    </div>
  );
}

function TouchTarget3() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 size-[48px]" data-name="Touch target">
      <IconBackground3 />
    </div>
  );
}

function Favorite3() {
  return (
    <div className="content-stretch flex items-start justify-end relative shrink-0" data-name=".Favorite">
      <TouchTarget3 />
    </div>
  );
}

function FavouriteWrapper3() {
  return (
    <div className="absolute content-stretch flex items-start justify-end left-0 right-0 top-0" data-name="Favourite wrapper">
      <Favorite3 />
    </div>
  );
}

function OverlayContainer3() {
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

function Dot9() {
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

function Dot10() {
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

function Dot11() {
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

function Dots3() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[calc(50%-1px)] top-0 translate-x-[-50%]" data-name="dots">
      <Dot9 />
      {[...Array(3).keys()].map((_, i) => (
        <Dot10 key={i} />
      ))}
      <Dot11 />
    </div>
  );
}

function OverlayDots3() {
  return (
    <div className="absolute h-[24px] left-1/2 top-[158px] translate-x-[-50%] w-[72px]" data-name="_/ Overlay dots">
      <OverlayContainer3 />
      <Dots3 />
    </div>
  );
}

function ImgOptions3() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start min-w-[130px] overflow-x-auto overflow-y-clip relative rounded-[16px] shrink-0 w-full" data-name="Img options">
      <div className="h-[194px] relative shrink-0 w-full" data-name="img_0">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImg3} />
      </div>
      <FavouriteWrapper3 />
      <OverlayDots3 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading">
      <p className="-webkit-box font-['Centra_No2:Medium',sans-serif] leading-[1.25] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#191e3b] text-[16px] w-full">House with adobe charm</p>
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-end relative shrink-0 w-full">
      <Heading3 />
    </div>
  );
}

function Text15() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Text">
      <p className="font-['Centra_No2:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#676a7d] text-[14px] text-nowrap whitespace-pre">House · 2 bedrooms · 4 beds</p>
    </div>
  );
}

function ValueProp3() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative" data-name="Value Prop">
      <Text15 />
    </div>
  );
}

function ValuePropsContainer3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Value props container">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <ValueProp3 />
        </div>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative">
      <ValuePropsContainer3 />
    </div>
  );
}

function Text16() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Text">
      <p className="basis-0 font-['Centra_No2:Regular',sans-serif] grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[#676a7d] text-[14px]">10 min walk to Historic Santa fe</p>
    </div>
  );
}

function HeadingContainer3() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Heading Container">
      <Text16 />
    </div>
  );
}

function Row3() {
  return (
    <div className="content-stretch flex gap-[10px] items-start justify-end relative shrink-0 w-full" data-name="Row">
      <HeadingContainer3 />
    </div>
  );
}

function BadgeText7() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0" data-name="Badge text">
      <p className="font-['Centra_No2:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#191e3b] text-[12px] text-nowrap whitespace-pre">9.6</p>
    </div>
  );
}

function TextOnly5() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="Text only">
      <BadgeText7 />
    </div>
  );
}

function ContentLargeText5() {
  return (
    <div className="bg-[#ccf7d4] box-border content-stretch flex gap-[4px] items-start overflow-clip px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Content / Large / Text">
      <TextOnly5 />
    </div>
  );
}

function BadgeStandard5() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Badge / Standard">
      <ContentLargeText5 />
    </div>
  );
}

function Score5() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Score">
      <BadgeStandard5 />
    </div>
  );
}

function ScoreContainer3() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-center relative shrink-0" data-name="Score container">
      <Score5 />
    </div>
  );
}

function Text17() {
  return (
    <div className="content-stretch flex items-start relative self-stretch shrink-0" data-name="Text">
      <p className="font-['Centra_No2:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#676a7d] text-[14px] text-nowrap whitespace-pre">(103)</p>
    </div>
  );
}

function Secondary3() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Secondary">
      <Text17 />
    </div>
  );
}

function Content6() {
  return (
    <div className="content-stretch flex h-full items-center relative shrink-0" data-name="Content">
      <Secondary3 />
    </div>
  );
}

function UgcDisplay3() {
  return (
    <div className="content-stretch flex gap-[6px] h-[18px] items-center relative shrink-0" data-name="UGC Display">
      <ScoreContainer3 />
      <Content6 />
    </div>
  );
}

function HeadingOptions3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[231px]" data-name="Heading options">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <Frame13 />
        </div>
      </div>
      <Row3 />
      <UgcDisplay3 />
    </div>
  );
}

function Text18() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Text">
      <p className="font-['Centra_No2:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#191e3b] text-[16px] text-nowrap whitespace-pre">$217</p>
    </div>
  );
}

function LeadPrice3() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="⚙️ Lead price">
      <Text18 />
    </div>
  );
}

function LeadPriceContainer3() {
  return (
    <div className="content-center flex flex-wrap gap-[4px] items-center justify-end relative shrink-0 w-full" data-name=".Lead price container">
      <LeadPrice3 />
    </div>
  );
}

function PriceSummary3() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full" data-name="Price summary">
      <LeadPriceContainer3 />
    </div>
  );
}

function DatedPriceSummary3() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-end relative shrink-0 w-[149px]" data-name="Dated price summary">
      <PriceSummary3 />
    </div>
  );
}

function Text19() {
  return (
    <div className="content-stretch flex items-start justify-end relative shrink-0 w-full" data-name="Text">
      <p className="basis-0 font-['Centra_No2:Regular',sans-serif] grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[#676a7d] text-[14px] text-right">$869 for 4 nights</p>
    </div>
  );
}

function SecondaryPrice3() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Secondary price">
      <Text19 />
    </div>
  );
}

function SmallTotalMultiNightRight3() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name=".Small / Total multi-night / Right">
      <SecondaryPrice3 />
    </div>
  );
}

function HcomCwrE2EPriceSummary3() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-end relative w-full" data-name="HCOM_CWR_E2E_Price_Summary">
      <DatedPriceSummary3 />
      <SmallTotalMultiNightRight3 />
    </div>
  );
}

function BottomContainer3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Bottom container">
      <div className="flex items-center justify-center relative shrink-0 w-full">
        <div className="flex-none rotate-[180deg] scale-y-[-100%] w-full">
          <HcomCwrE2EPriceSummary3 />
        </div>
      </div>
    </div>
  );
}

function OffersAndPriceSection3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-end relative w-full" data-name="Offers and price section">
      <BottomContainer3 />
    </div>
  );
}

function Frame31() {
  return (
    <div className="box-border content-stretch flex items-end justify-between pb-0 pt-[8px] px-0 relative shrink-0 w-full">
      <HeadingOptions3 />
      <div className="basis-0 flex grow items-center justify-center min-h-px min-w-px relative shrink-0">
        <div className="flex-none rotate-[180deg] scale-y-[-100%] w-full">
          <OffersAndPriceSection3 />
        </div>
      </div>
    </div>
  );
}

function Content7() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Content">
      <div className="flex flex-col items-end justify-end size-full">
        <div className="box-border content-stretch flex flex-col items-end justify-end px-[8px] py-[16px] relative w-full">
          <Frame26 />
          <Frame31 />
        </div>
      </div>
    </div>
  );
}

function SearchResultsCard3() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-end justify-end min-h-px min-w-px overflow-clip relative shrink-0" data-name="Search Results Card">
      <ImgOptions3 />
      <Content7 />
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
      <SearchResultsCard2 />
      <SearchResultsCard3 />
    </div>
  );
}

function MoreInfoTrigger2() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-start min-h-px min-w-px relative self-stretch shrink-0" data-name="More info trigger">
      <p className="font-['Centra_No2:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#191e3b] text-[18px] text-nowrap whitespace-pre">Load more results</p>
    </div>
  );
}

function LodgingContentPatternSearchResultSortDisclaimer2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Lodging / 🌈 Content Pattern / Search result sort disclaimer">
      <MoreInfoTrigger2 />
    </div>
  );
}

function ToggleDisclaimer2() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-[468px]" data-name="Toggle + disclaimer">
      <LodgingContentPatternSearchResultSortDisclaimer2 />
    </div>
  );
}

function DisclaimerSort2() {
  return (
    <div className="content-stretch flex gap-[21px] items-start relative shrink-0" data-name="_ / Disclaimer & sort">
      <ToggleDisclaimer2 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
      <DisclaimerSort2 />
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[832px]">
      <Frame5 />
    </div>
  );
}

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

function Pill() {
  return (
    <div className="bg-[#f2f8fd] box-border content-stretch flex gap-[8px] items-center overflow-clip px-[24px] py-[16px] relative rounded-[32px] shrink-0" data-name="pill2">
      <div className="flex h-[18.773px] items-center justify-center relative shrink-0 w-[20.03px]" style={{ "--transform-inner-width": "20", "--transform-inner-height": "18.734375" } as React.CSSProperties}>
        <div className="flex-none rotate-[359.907deg]">
          <ButtonPrimaryIconOnly />
        </div>
      </div>
      <div className="flex flex-col font-['Centra_No2:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191e3b] text-[14px] text-nowrap">
        <p className="leading-[1.25] whitespace-pre">More like this</p>
      </div>
    </div>
  );
}

function InputIconLeft1() {
  return (
    <div className="relative size-[20.21px]" data-name="_ / Input / Icon left">
      <div className="absolute aspect-[19.2939/18] left-[9.8%] right-[9.8%] top-[calc(50%-0.1px)] translate-y-[-50%]" data-name="Glyph">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 16">
          <g id="Glyph">
            <path d={svgPaths.p14a4ab80} fill="var(--fill-0, #191E3B)" />
            <path d={svgPaths.p1d333680} fill="var(--fill-0, #191E3B)" />
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
          <g id="Background"></g>
        </svg>
      </div>
      <div className="absolute flex items-center justify-center left-[10.07px] size-[20.243px] top-[0.07px]" style={{ "--transform-inner-width": "20.203125", "--transform-inner-height": "20.203125" } as React.CSSProperties}>
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
    <div className="bg-[#f2f8fd] box-border content-stretch flex gap-[8px] items-center overflow-clip px-[24px] py-[16px] relative rounded-[32px] shrink-0" data-name="pill3">
      <div className="flex h-[18.773px] items-center justify-center relative shrink-0 w-[20.03px]" style={{ "--transform-inner-width": "20", "--transform-inner-height": "18.734375" } as React.CSSProperties}>
        <div className="flex-none rotate-[359.907deg]">
          <ButtonPrimaryIconOnly1 />
        </div>
      </div>
      <div className="flex flex-col font-['Centra_No2:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191e3b] text-[14px] text-nowrap">
        <p className="leading-[1.25] whitespace-pre">Try different</p>
      </div>
    </div>
  );
}

function InputIconLeft2() {
  return (
    <div className="relative size-[20.21px]" data-name="_ / Input / Icon left">
      <div className="absolute aspect-[21.2274/20] left-[3.22%] right-[8.33%] top-[calc(50%+0.74px)] translate-y-[-50%]" data-name="Glyph">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 17">
          <path clipRule="evenodd" d={svgPaths.p346f1300} fill="var(--fill-0, #191E3B)" fillRule="evenodd" id="Glyph" />
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
          <g id="Background"></g>
        </svg>
      </div>
      <div className="absolute flex items-center justify-center left-[10.07px] size-[20.243px] top-[0.07px]" style={{ "--transform-inner-width": "20.203125", "--transform-inner-height": "20.203125" } as React.CSSProperties}>
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
    <div className="bg-[#f2f8fd] box-border content-stretch flex gap-[8px] items-center overflow-clip px-[24px] py-[16px] relative rounded-[32px] shrink-0" data-name="pill3">
      <div className="flex h-[18.773px] items-center justify-center relative shrink-0 w-[20.03px]" style={{ "--transform-inner-width": "20", "--transform-inner-height": "18.734375" } as React.CSSProperties}>
        <div className="flex-none rotate-[359.907deg]">
          <ButtonPrimaryIconOnly2 />
        </div>
      </div>
      <div className="flex flex-col font-['Centra_No2:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191e3b] text-[14px] text-nowrap">
        <p className="leading-[1.25] whitespace-pre">Not quite right</p>
      </div>
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Pill />
      <Pill1 />
      <Pill2 />
    </div>
  );
}

function Frame45() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[16px] items-start pb-[32px] pt-[16px] px-0 relative shrink-0">
      <Frame30 />
      <Frame44 />
    </div>
  );
}

function IconGlyphFavoriteBorder4() {
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

function IconBackground4() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center overflow-clip relative rounded-[40000px] shrink-0 size-[32px]" data-name="Icon background">
      <IconGlyphFavoriteBorder4 />
    </div>
  );
}

function TouchTarget4() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 size-[48px]" data-name="Touch target">
      <IconBackground4 />
    </div>
  );
}

function Favorite4() {
  return (
    <div className="content-stretch flex items-start justify-end relative shrink-0" data-name=".Favorite">
      <TouchTarget4 />
    </div>
  );
}

function FavouriteWrapper4() {
  return (
    <div className="absolute content-stretch flex items-start justify-end left-0 right-0 top-0" data-name="Favourite wrapper">
      <Favorite4 />
    </div>
  );
}

function OverlayContainer4() {
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

function Dot12() {
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

function Dot13() {
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

function Dot14() {
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

function Dots4() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[calc(50%-1px)] top-0 translate-x-[-50%]" data-name="dots">
      <Dot12 />
      {[...Array(3).keys()].map((_, i) => (
        <Dot13 key={i} />
      ))}
      <Dot14 />
    </div>
  );
}

function OverlayDots4() {
  return (
    <div className="absolute h-[24px] left-1/2 top-[158px] translate-x-[-50%] w-[72px]" data-name="_/ Overlay dots">
      <OverlayContainer4 />
      <Dots4 />
    </div>
  );
}

function ImgOptions4() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start min-w-[130px] overflow-x-auto overflow-y-clip relative rounded-[16px] shrink-0 w-full" data-name="Img options">
      <div className="h-[194px] relative shrink-0 w-full" data-name="img_0">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImg4} />
      </div>
      <FavouriteWrapper4 />
      <OverlayDots4 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading">
      <p className="-webkit-box font-['Centra_No2:Medium',sans-serif] leading-[1.25] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#191e3b] text-[16px] w-full">Charming guest house with a yard</p>
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-end relative shrink-0 w-full">
      <Heading4 />
    </div>
  );
}

function Text20() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Text">
      <p className="font-['Centra_No2:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#676a7d] text-[14px] text-nowrap whitespace-pre">House · 2 bedrooms · 4 beds</p>
    </div>
  );
}

function ValueProp4() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative" data-name="Value Prop">
      <Text20 />
    </div>
  );
}

function ValuePropsContainer4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Value props container">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <ValueProp4 />
        </div>
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative">
      <ValuePropsContainer4 />
    </div>
  );
}

function Text21() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Text">
      <p className="basis-0 font-['Centra_No2:Regular',sans-serif] grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[#676a7d] text-[14px]">5 min walk to Historic Santa fe</p>
    </div>
  );
}

function HeadingContainer4() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Heading Container">
      <Text21 />
    </div>
  );
}

function Row4() {
  return (
    <div className="content-stretch flex gap-[10px] items-start justify-end relative shrink-0 w-full" data-name="Row">
      <HeadingContainer4 />
    </div>
  );
}

function BadgeText8() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0" data-name="Badge text">
      <p className="font-['Centra_No2:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#191e3b] text-[12px] text-nowrap whitespace-pre">9.6</p>
    </div>
  );
}

function TextOnly6() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="Text only">
      <BadgeText8 />
    </div>
  );
}

function ContentLargeText6() {
  return (
    <div className="bg-[#ccf7d4] box-border content-stretch flex gap-[4px] items-start overflow-clip px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Content / Large / Text">
      <TextOnly6 />
    </div>
  );
}

function BadgeStandard6() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Badge / Standard">
      <ContentLargeText6 />
    </div>
  );
}

function Score6() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Score">
      <BadgeStandard6 />
    </div>
  );
}

function ScoreContainer4() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-center relative shrink-0" data-name="Score container">
      <Score6 />
    </div>
  );
}

function Text22() {
  return (
    <div className="content-stretch flex items-start relative self-stretch shrink-0" data-name="Text">
      <p className="font-['Centra_No2:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#676a7d] text-[14px] text-nowrap whitespace-pre">(103)</p>
    </div>
  );
}

function Secondary4() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Secondary">
      <Text22 />
    </div>
  );
}

function Content8() {
  return (
    <div className="content-stretch flex h-full items-center relative shrink-0" data-name="Content">
      <Secondary4 />
    </div>
  );
}

function UgcDisplay4() {
  return (
    <div className="content-stretch flex gap-[6px] h-[18px] items-center relative shrink-0" data-name="UGC Display">
      <ScoreContainer4 />
      <Content8 />
    </div>
  );
}

function HeadingOptions4() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Heading options">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <Frame16 />
        </div>
      </div>
      <Row4 />
      <UgcDisplay4 />
    </div>
  );
}

function Text23() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Text">
      <p className="font-['Centra_No2:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#191e3b] text-[16px] text-nowrap whitespace-pre">$217</p>
    </div>
  );
}

function LeadPrice4() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="⚙️ Lead price">
      <Text23 />
    </div>
  );
}

function LeadPriceContainer4() {
  return (
    <div className="content-center flex flex-wrap gap-[4px] items-center justify-end relative shrink-0 w-full" data-name=".Lead price container">
      <LeadPrice4 />
    </div>
  );
}

function PriceSummary4() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full" data-name="Price summary">
      <LeadPriceContainer4 />
    </div>
  );
}

function DatedPriceSummary4() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-end relative shrink-0 w-[149px]" data-name="Dated price summary">
      <PriceSummary4 />
    </div>
  );
}

function Text24() {
  return (
    <div className="content-stretch flex items-start justify-end relative shrink-0 w-full" data-name="Text">
      <p className="basis-0 font-['Centra_No2:Regular',sans-serif] grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[#676a7d] text-[14px] text-right">$869 for 4 nights</p>
    </div>
  );
}

function SecondaryPrice4() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Secondary price">
      <Text24 />
    </div>
  );
}

function SmallTotalMultiNightRight4() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name=".Small / Total multi-night / Right">
      <SecondaryPrice4 />
    </div>
  );
}

function HcomCwrE2EPriceSummary4() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-end relative w-full" data-name="HCOM_CWR_E2E_Price_Summary">
      <DatedPriceSummary4 />
      <SmallTotalMultiNightRight4 />
    </div>
  );
}

function BottomContainer4() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Bottom container">
      <div className="flex items-center justify-center relative shrink-0 w-full">
        <div className="flex-none rotate-[180deg] scale-y-[-100%] w-full">
          <HcomCwrE2EPriceSummary4 />
        </div>
      </div>
    </div>
  );
}

function OffersAndPriceSection4() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-end relative w-full" data-name="Offers and price section">
      <BottomContainer4 />
    </div>
  );
}

function Frame33() {
  return (
    <div className="box-border content-stretch flex items-end justify-between pb-0 pt-[8px] px-0 relative shrink-0 w-full">
      <HeadingOptions4 />
      <div className="basis-0 flex grow items-center justify-center min-h-px min-w-px relative shrink-0">
        <div className="flex-none rotate-[180deg] scale-y-[-100%] w-full">
          <OffersAndPriceSection4 />
        </div>
      </div>
    </div>
  );
}

function Content9() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Content">
      <div className="flex flex-col items-end justify-end size-full">
        <div className="box-border content-stretch flex flex-col items-end justify-end px-[8px] py-[16px] relative w-full">
          <Frame32 />
          <Frame33 />
        </div>
      </div>
    </div>
  );
}

function SearchResultsCard4() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-end justify-end min-h-px min-w-px overflow-clip relative shrink-0" data-name="Search Results Card">
      <ImgOptions4 />
      <Content9 />
    </div>
  );
}

function BadgeText9() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0" data-name="Badge text">
      <p className="font-['Centra_No2:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre">Picked for you</p>
    </div>
  );
}

function TextOnly7() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="Text only">
      <BadgeText9 />
    </div>
  );
}

function ContentLargeText7() {
  return (
    <div className="bg-[#191e3b] box-border content-stretch flex gap-[4px] items-start overflow-clip px-[12px] py-[6px] relative rounded-[8px] shrink-0" data-name="Content / Large / Text">
      <TextOnly7 />
    </div>
  );
}

function BadgeStandard7() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Badge / Standard">
      <ContentLargeText7 />
    </div>
  );
}

function Score7() {
  return (
    <div className="absolute content-stretch flex items-start left-[12px] top-[12px]" data-name="Score">
      <BadgeStandard7 />
    </div>
  );
}

function IconGlyphFavoriteBorder5() {
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

function IconBackground5() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center overflow-clip relative rounded-[40000px] shrink-0 size-[32px]" data-name="Icon background">
      <IconGlyphFavoriteBorder5 />
    </div>
  );
}

function TouchTarget5() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 size-[48px]" data-name="Touch target">
      <IconBackground5 />
    </div>
  );
}

function Favorite5() {
  return (
    <div className="content-stretch flex items-start justify-end relative shrink-0" data-name=".Favorite">
      <TouchTarget5 />
    </div>
  );
}

function FavouriteWrapper5() {
  return (
    <div className="absolute content-stretch flex items-start justify-end left-0 right-0 top-0" data-name="Favourite wrapper">
      <Favorite5 />
    </div>
  );
}

function OverlayContainer5() {
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

function Dot15() {
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

function Dot16() {
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

function Dot17() {
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

function Dots5() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[calc(50%-1px)] top-0 translate-x-[-50%]" data-name="dots">
      <Dot15 />
      {[...Array(3).keys()].map((_, i) => (
        <Dot16 key={i} />
      ))}
      <Dot17 />
    </div>
  );
}

function OverlayDots5() {
  return (
    <div className="absolute h-[24px] left-1/2 top-[158px] translate-x-[-50%] w-[72px]" data-name="_/ Overlay dots">
      <OverlayContainer5 />
      <Dots5 />
    </div>
  );
}

function ImgOptions5() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start min-w-[130px] overflow-x-auto overflow-y-clip relative rounded-[16px] shrink-0 w-full" data-name="Img options">
      <div className="h-[194px] relative shrink-0 w-full" data-name="img_0">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImg5} />
      </div>
      <Score7 />
      <FavouriteWrapper5 />
      <OverlayDots5 />
    </div>
  );
}

function Heading5() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading">
      <p className="-webkit-box font-['Centra_No2:Medium',sans-serif] leading-[1.25] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#191e3b] text-[16px] w-full">{`Condo close to all amenities `}</p>
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-end relative shrink-0 w-full">
      <Heading5 />
    </div>
  );
}

function Text25() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Text">
      <p className="font-['Centra_No2:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#676a7d] text-[14px] text-nowrap whitespace-pre">House · 2 bedrooms · 4 beds</p>
    </div>
  );
}

function ValueProp5() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative" data-name="Value Prop">
      <Text25 />
    </div>
  );
}

function ValuePropsContainer5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Value props container">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <ValueProp5 />
        </div>
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative">
      <ValuePropsContainer5 />
    </div>
  );
}

function Text26() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Text">
      <p className="basis-0 font-['Centra_No2:Regular',sans-serif] grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[#676a7d] text-[14px]">7 min walk to Historic Santa fe</p>
    </div>
  );
}

function HeadingContainer5() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Heading Container">
      <Text26 />
    </div>
  );
}

function Row5() {
  return (
    <div className="content-stretch flex gap-[10px] items-start justify-end relative shrink-0 w-full" data-name="Row">
      <HeadingContainer5 />
    </div>
  );
}

function BadgeText10() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0" data-name="Badge text">
      <p className="font-['Centra_No2:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#191e3b] text-[12px] text-nowrap whitespace-pre">9.8</p>
    </div>
  );
}

function TextOnly8() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="Text only">
      <BadgeText10 />
    </div>
  );
}

function ContentLargeText8() {
  return (
    <div className="bg-[#a4e9b0] box-border content-stretch flex gap-[4px] items-start overflow-clip px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Content / Large / Text">
      <TextOnly8 />
    </div>
  );
}

function BadgeStandard8() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Badge / Standard">
      <ContentLargeText8 />
    </div>
  );
}

function Score8() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Score">
      <BadgeStandard8 />
    </div>
  );
}

function ScoreContainer5() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-center relative shrink-0" data-name="Score container">
      <Score8 />
    </div>
  );
}

function Text27() {
  return (
    <div className="content-stretch flex items-start relative self-stretch shrink-0" data-name="Text">
      <p className="font-['Centra_No2:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#676a7d] text-[14px] text-nowrap whitespace-pre">(43)</p>
    </div>
  );
}

function Secondary5() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Secondary">
      <Text27 />
    </div>
  );
}

function Content10() {
  return (
    <div className="content-stretch flex h-full items-center relative shrink-0" data-name="Content">
      <Secondary5 />
    </div>
  );
}

function UgcDisplay5() {
  return (
    <div className="content-stretch flex gap-[6px] h-[18px] items-center relative shrink-0" data-name="UGC Display">
      <ScoreContainer5 />
      <Content10 />
    </div>
  );
}

function HeadingOptions5() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Heading options">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <Frame17 />
        </div>
      </div>
      <Row5 />
      <UgcDisplay5 />
    </div>
  );
}

function BadgeText11() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0" data-name="_ / Badge text">
      <p className="font-['Centra_No2:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#006ed6] text-[12px] text-nowrap whitespace-pre">$117 off</p>
    </div>
  );
}

function ContentSmallText2() {
  return (
    <div className="bg-[rgba(0,110,214,0.05)] box-border content-stretch flex gap-[4px] items-center overflow-clip px-[6px] py-[2px] relative rounded-[6px] shrink-0" data-name="_ / Content / Small / Text">
      <BadgeText11 />
    </div>
  );
}

function BadgeProperties2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Badge properties">
      <ContentSmallText2 />
    </div>
  );
}

function BadgeSmall2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name=".Badge / Small">
      <BadgeProperties2 />
    </div>
  );
}

function LinkNeutralColorTeamTier2() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0" data-name="🧪 Link - Neutral color (Team tier)">
      <p className="font-['Centra_No2:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#676a7d] text-[14px] text-nowrap text-right whitespace-pre">$342</p>
    </div>
  );
}

function NeutralLinkStrikethrough2() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0" data-name="Neutral Link Strikethrough">
      <LinkNeutralColorTeamTier2 />
      <div className="absolute h-0 left-0 right-0 top-[calc(50%+1px)] translate-y-[-50%]" data-name="Strikethrough vector">
        <div className="absolute bottom-[-0.38px] left-0 right-0 top-[-0.38px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31 1">
            <path d="M0 0.375H31" id="Strikethrough vector" stroke="var(--stroke-0, #676A7D)" strokeWidth="0.75" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ReferencePrice2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="⚙️ Reference price">
      <NeutralLinkStrikethrough2 />
    </div>
  );
}

function Text28() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Text">
      <p className="font-['Centra_No2:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#191e3b] text-[16px] text-nowrap whitespace-pre">$313</p>
    </div>
  );
}

function LeadPrice5() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="⚙️ Lead price">
      <Text28 />
    </div>
  );
}

function LeadPriceContainer5() {
  return (
    <div className="content-center flex flex-wrap gap-[4px] items-center justify-end relative shrink-0 w-full" data-name=".Lead price container">
      <ReferencePrice2 />
      <LeadPrice5 />
    </div>
  );
}

function PriceSummary5() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full" data-name="Price summary">
      <LeadPriceContainer5 />
    </div>
  );
}

function DatedPriceSummary5() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-end relative shrink-0 w-[149px]" data-name="Dated price summary">
      <PriceSummary5 />
    </div>
  );
}

function Text29() {
  return (
    <div className="content-stretch flex items-start justify-end relative shrink-0 w-full" data-name="Text">
      <p className="basis-0 font-['Centra_No2:Regular',sans-serif] grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[#676a7d] text-[14px] text-right">$1,251 for 4 nights</p>
    </div>
  );
}

function SecondaryPrice5() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Secondary price">
      <Text29 />
    </div>
  );
}

function SmallTotalMultiNightRight5() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name=".Small / Total multi-night / Right">
      <SecondaryPrice5 />
    </div>
  );
}

function HcomCwrE2EPriceSummary5() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-end relative w-full" data-name="HCOM_CWR_E2E_Price_Summary">
      <BadgeSmall2 />
      <DatedPriceSummary5 />
      <SmallTotalMultiNightRight5 />
    </div>
  );
}

function BottomContainer5() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Bottom container">
      <div className="flex items-center justify-center relative shrink-0 w-full">
        <div className="flex-none rotate-[180deg] scale-y-[-100%] w-full">
          <HcomCwrE2EPriceSummary5 />
        </div>
      </div>
    </div>
  );
}

function OffersAndPriceSection5() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-end relative w-full" data-name="Offers and price section">
      <BottomContainer5 />
    </div>
  );
}

function Frame35() {
  return (
    <div className="box-border content-stretch flex items-end justify-between pb-0 pt-[8px] px-0 relative shrink-0 w-full">
      <HeadingOptions5 />
      <div className="basis-0 flex grow items-center justify-center min-h-px min-w-px relative shrink-0">
        <div className="flex-none rotate-[180deg] scale-y-[-100%] w-full">
          <OffersAndPriceSection5 />
        </div>
      </div>
    </div>
  );
}

function Content11() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Content">
      <div className="flex flex-col items-end justify-end size-full">
        <div className="box-border content-stretch flex flex-col items-end justify-end px-[8px] py-[16px] relative w-full">
          <Frame34 />
          <Frame35 />
        </div>
      </div>
    </div>
  );
}

function SearchResultsCard5() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-end justify-end min-h-px min-w-px overflow-clip relative shrink-0" data-name="Search Results Card">
      <ImgOptions5 />
      <Content11 />
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex gap-[16px] items-center opacity-0 relative shrink-0 w-[832px]">
      <SearchResultsCard4 />
      <SearchResultsCard5 />
    </div>
  );
}

function IconGlyphFavoriteBorder6() {
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

function IconBackground6() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center overflow-clip relative rounded-[40000px] shrink-0 size-[32px]" data-name="Icon background">
      <IconGlyphFavoriteBorder6 />
    </div>
  );
}

function TouchTarget6() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 size-[48px]" data-name="Touch target">
      <IconBackground6 />
    </div>
  );
}

function Favorite6() {
  return (
    <div className="content-stretch flex items-start justify-end relative shrink-0" data-name=".Favorite">
      <TouchTarget6 />
    </div>
  );
}

function FavouriteWrapper6() {
  return (
    <div className="absolute content-stretch flex items-start justify-end left-0 right-0 top-0" data-name="Favourite wrapper">
      <Favorite6 />
    </div>
  );
}

function OverlayContainer6() {
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

function Dot18() {
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

function Dot19() {
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

function Dot20() {
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

function Dots6() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[calc(50%-1px)] top-0 translate-x-[-50%]" data-name="dots">
      <Dot18 />
      {[...Array(3).keys()].map((_, i) => (
        <Dot19 key={i} />
      ))}
      <Dot20 />
    </div>
  );
}

function OverlayDots6() {
  return (
    <div className="absolute h-[24px] left-1/2 top-[158px] translate-x-[-50%] w-[72px]" data-name="_/ Overlay dots">
      <OverlayContainer6 />
      <Dots6 />
    </div>
  );
}

function BadgeText12() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0" data-name="Badge text">
      <p className="font-['Centra_No2:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre">Love by guests</p>
    </div>
  );
}

function TextOnly9() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="Text only">
      <BadgeText12 />
    </div>
  );
}

function ContentLargeText9() {
  return (
    <div className="bg-[#191e3b] box-border content-stretch flex gap-[4px] items-start overflow-clip px-[12px] py-[6px] relative rounded-[8px] shrink-0" data-name="Content / Large / Text">
      <TextOnly9 />
    </div>
  );
}

function BadgeStandard9() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Badge / Standard">
      <ContentLargeText9 />
    </div>
  );
}

function Score9() {
  return (
    <div className="absolute content-stretch flex items-start left-[12px] top-[12px]" data-name="Score">
      <BadgeStandard9 />
    </div>
  );
}

function ImgOptions6() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start min-w-[130px] overflow-x-auto overflow-y-clip relative rounded-[16px] shrink-0 w-full" data-name="Img options">
      <div className="h-[194px] relative shrink-0 w-full" data-name="img_0">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImg6} />
      </div>
      <FavouriteWrapper6 />
      <OverlayDots6 />
      <Score9 />
    </div>
  );
}

function Heading6() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading">
      <p className="-webkit-box font-['Centra_No2:Medium',sans-serif] leading-[1.25] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#191e3b] text-[16px] w-full">Centre located house with artisanal decor</p>
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-end relative shrink-0 w-full">
      <Heading6 />
    </div>
  );
}

function Text30() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Text">
      <p className="font-['Centra_No2:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#676a7d] text-[14px] text-nowrap whitespace-pre">House · 2 bedrooms · 4 beds</p>
    </div>
  );
}

function ValueProp6() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative" data-name="Value Prop">
      <Text30 />
    </div>
  );
}

function ValuePropsContainer6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Value props container">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <ValueProp6 />
        </div>
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative">
      <ValuePropsContainer6 />
    </div>
  );
}

function Text31() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Text">
      <p className="basis-0 font-['Centra_No2:Regular',sans-serif] grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[#676a7d] text-[14px]">10 min drive to Historic Santa fe</p>
    </div>
  );
}

function HeadingContainer6() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Heading Container">
      <Text31 />
    </div>
  );
}

function Row6() {
  return (
    <div className="content-stretch flex gap-[10px] items-start justify-end relative shrink-0 w-[209px]" data-name="Row">
      <HeadingContainer6 />
    </div>
  );
}

function BadgeText13() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0" data-name="Badge text">
      <p className="font-['Centra_No2:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#191e3b] text-[12px] text-nowrap whitespace-pre">9.8</p>
    </div>
  );
}

function TextOnly10() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="Text only">
      <BadgeText13 />
    </div>
  );
}

function ContentLargeText10() {
  return (
    <div className="bg-[#a4e9b0] box-border content-stretch flex gap-[4px] items-start overflow-clip px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Content / Large / Text">
      <TextOnly10 />
    </div>
  );
}

function BadgeStandard10() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Badge / Standard">
      <ContentLargeText10 />
    </div>
  );
}

function Score10() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Score">
      <BadgeStandard10 />
    </div>
  );
}

function ScoreContainer6() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-center relative shrink-0" data-name="Score container">
      <Score10 />
    </div>
  );
}

function Text32() {
  return (
    <div className="content-stretch flex items-start relative self-stretch shrink-0" data-name="Text">
      <p className="font-['Centra_No2:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#676a7d] text-[14px] text-nowrap whitespace-pre">(43)</p>
    </div>
  );
}

function Secondary6() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Secondary">
      <Text32 />
    </div>
  );
}

function Content12() {
  return (
    <div className="content-stretch flex h-full items-center relative shrink-0" data-name="Content">
      <Secondary6 />
    </div>
  );
}

function UgcDisplay6() {
  return (
    <div className="content-stretch flex gap-[6px] h-[18px] items-center relative shrink-0" data-name="UGC Display">
      <ScoreContainer6 />
      <Content12 />
    </div>
  );
}

function HeadingOptions6() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Heading options">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <Frame18 />
        </div>
      </div>
      <Row6 />
      <UgcDisplay6 />
    </div>
  );
}

function BadgeText14() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0" data-name="_ / Badge text">
      <p className="font-['Centra_No2:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#006ed6] text-[12px] text-nowrap whitespace-pre">$117 off</p>
    </div>
  );
}

function ContentSmallText3() {
  return (
    <div className="bg-[rgba(0,110,214,0.05)] box-border content-stretch flex gap-[4px] items-center overflow-clip px-[6px] py-[2px] relative rounded-[6px] shrink-0" data-name="_ / Content / Small / Text">
      <BadgeText14 />
    </div>
  );
}

function BadgeProperties3() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Badge properties">
      <ContentSmallText3 />
    </div>
  );
}

function BadgeSmall3() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name=".Badge / Small">
      <BadgeProperties3 />
    </div>
  );
}

function LinkNeutralColorTeamTier3() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0" data-name="🧪 Link - Neutral color (Team tier)">
      <p className="font-['Centra_No2:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#676a7d] text-[14px] text-nowrap text-right whitespace-pre">$342</p>
    </div>
  );
}

function NeutralLinkStrikethrough3() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0" data-name="Neutral Link Strikethrough">
      <LinkNeutralColorTeamTier3 />
      <div className="absolute h-0 left-0 right-0 top-[calc(50%+1px)] translate-y-[-50%]" data-name="Strikethrough vector">
        <div className="absolute bottom-[-0.38px] left-0 right-0 top-[-0.38px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31 1">
            <path d="M0 0.375H31" id="Strikethrough vector" stroke="var(--stroke-0, #676A7D)" strokeWidth="0.75" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ReferencePrice3() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="⚙️ Reference price">
      <NeutralLinkStrikethrough3 />
    </div>
  );
}

function Text33() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Text">
      <p className="font-['Centra_No2:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#191e3b] text-[16px] text-nowrap whitespace-pre">$313</p>
    </div>
  );
}

function LeadPrice6() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="⚙️ Lead price">
      <Text33 />
    </div>
  );
}

function LeadPriceContainer6() {
  return (
    <div className="content-center flex flex-wrap gap-[4px] items-center justify-end relative shrink-0 w-full" data-name=".Lead price container">
      <ReferencePrice3 />
      <LeadPrice6 />
    </div>
  );
}

function PriceSummary6() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full" data-name="Price summary">
      <LeadPriceContainer6 />
    </div>
  );
}

function DatedPriceSummary6() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-end relative shrink-0 w-[149px]" data-name="Dated price summary">
      <PriceSummary6 />
    </div>
  );
}

function Text34() {
  return (
    <div className="content-stretch flex items-start justify-end relative shrink-0 w-full" data-name="Text">
      <p className="basis-0 font-['Centra_No2:Regular',sans-serif] grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[#676a7d] text-[14px] text-right">$1,251 for 4 nights</p>
    </div>
  );
}

function SecondaryPrice6() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Secondary price">
      <Text34 />
    </div>
  );
}

function SmallTotalMultiNightRight6() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name=".Small / Total multi-night / Right">
      <SecondaryPrice6 />
    </div>
  );
}

function HcomCwrE2EPriceSummary6() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-end relative w-full" data-name="HCOM_CWR_E2E_Price_Summary">
      <BadgeSmall3 />
      <DatedPriceSummary6 />
      <SmallTotalMultiNightRight6 />
    </div>
  );
}

function BottomContainer6() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Bottom container">
      <div className="flex items-center justify-center relative shrink-0 w-full">
        <div className="flex-none rotate-[180deg] scale-y-[-100%] w-full">
          <HcomCwrE2EPriceSummary6 />
        </div>
      </div>
    </div>
  );
}

function OffersAndPriceSection6() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-end relative w-full" data-name="Offers and price section">
      <BottomContainer6 />
    </div>
  );
}

function Frame37() {
  return (
    <div className="box-border content-stretch flex items-end justify-between pb-0 pt-[8px] px-0 relative shrink-0 w-full">
      <HeadingOptions6 />
      <div className="basis-0 flex grow items-center justify-center min-h-px min-w-px relative shrink-0">
        <div className="flex-none rotate-[180deg] scale-y-[-100%] w-full">
          <OffersAndPriceSection6 />
        </div>
      </div>
    </div>
  );
}

function Content13() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Content">
      <div className="flex flex-col items-end justify-end size-full">
        <div className="box-border content-stretch flex flex-col items-end justify-end px-[8px] py-[16px] relative w-full">
          <Frame36 />
          <Frame37 />
        </div>
      </div>
    </div>
  );
}

function SearchResultsCard6() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-end justify-end min-h-px min-w-px overflow-clip relative shrink-0" data-name="Search Results Card">
      <ImgOptions6 />
      <Content13 />
    </div>
  );
}

function IconGlyphFavoriteBorder7() {
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

function IconBackground7() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center overflow-clip relative rounded-[40000px] shrink-0 size-[32px]" data-name="Icon background">
      <IconGlyphFavoriteBorder7 />
    </div>
  );
}

function TouchTarget7() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 size-[48px]" data-name="Touch target">
      <IconBackground7 />
    </div>
  );
}

function Favorite7() {
  return (
    <div className="content-stretch flex items-start justify-end relative shrink-0" data-name=".Favorite">
      <TouchTarget7 />
    </div>
  );
}

function FavouriteWrapper7() {
  return (
    <div className="absolute content-stretch flex items-start justify-end left-0 right-0 top-0" data-name="Favourite wrapper">
      <Favorite7 />
    </div>
  );
}

function OverlayContainer7() {
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

function Dot21() {
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

function Dot22() {
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

function Dot23() {
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

function Dots7() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[calc(50%-1px)] top-0 translate-x-[-50%]" data-name="dots">
      <Dot21 />
      {[...Array(3).keys()].map((_, i) => (
        <Dot22 key={i} />
      ))}
      <Dot23 />
    </div>
  );
}

function OverlayDots7() {
  return (
    <div className="absolute h-[24px] left-1/2 top-[158px] translate-x-[-50%] w-[72px]" data-name="_/ Overlay dots">
      <OverlayContainer7 />
      <Dots7 />
    </div>
  );
}

function ImgOptions7() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start min-w-[130px] overflow-x-auto overflow-y-clip relative rounded-[16px] shrink-0 w-full" data-name="Img options">
      <div className="h-[194px] relative shrink-0 w-full" data-name="img_0">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImg7} />
      </div>
      <FavouriteWrapper7 />
      <OverlayDots7 />
    </div>
  );
}

function Heading7() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading">
      <p className="-webkit-box font-['Centra_No2:Medium',sans-serif] leading-[1.25] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#191e3b] text-[16px] w-full">House with adobe charm</p>
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-end relative shrink-0 w-full">
      <Heading7 />
    </div>
  );
}

function Text35() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Text">
      <p className="font-['Centra_No2:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#676a7d] text-[14px] text-nowrap whitespace-pre">House · 2 bedrooms · 4 beds</p>
    </div>
  );
}

function ValueProp7() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative" data-name="Value Prop">
      <Text35 />
    </div>
  );
}

function ValuePropsContainer7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Value props container">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <ValueProp7 />
        </div>
      </div>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative">
      <ValuePropsContainer7 />
    </div>
  );
}

function Text36() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Text">
      <p className="basis-0 font-['Centra_No2:Regular',sans-serif] grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[#676a7d] text-[14px]">10 min walk to Historic Santa fe</p>
    </div>
  );
}

function HeadingContainer7() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Heading Container">
      <Text36 />
    </div>
  );
}

function Row7() {
  return (
    <div className="content-stretch flex gap-[10px] items-start justify-end relative shrink-0 w-full" data-name="Row">
      <HeadingContainer7 />
    </div>
  );
}

function BadgeText15() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0" data-name="Badge text">
      <p className="font-['Centra_No2:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#191e3b] text-[12px] text-nowrap whitespace-pre">9.6</p>
    </div>
  );
}

function TextOnly11() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="Text only">
      <BadgeText15 />
    </div>
  );
}

function ContentLargeText11() {
  return (
    <div className="bg-[#ccf7d4] box-border content-stretch flex gap-[4px] items-start overflow-clip px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Content / Large / Text">
      <TextOnly11 />
    </div>
  );
}

function BadgeStandard11() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Badge / Standard">
      <ContentLargeText11 />
    </div>
  );
}

function Score11() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Score">
      <BadgeStandard11 />
    </div>
  );
}

function ScoreContainer7() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-center relative shrink-0" data-name="Score container">
      <Score11 />
    </div>
  );
}

function Text37() {
  return (
    <div className="content-stretch flex items-start relative self-stretch shrink-0" data-name="Text">
      <p className="font-['Centra_No2:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#676a7d] text-[14px] text-nowrap whitespace-pre">(103)</p>
    </div>
  );
}

function Secondary7() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Secondary">
      <Text37 />
    </div>
  );
}

function Content14() {
  return (
    <div className="content-stretch flex h-full items-center relative shrink-0" data-name="Content">
      <Secondary7 />
    </div>
  );
}

function UgcDisplay7() {
  return (
    <div className="content-stretch flex gap-[6px] h-[18px] items-center relative shrink-0" data-name="UGC Display">
      <ScoreContainer7 />
      <Content14 />
    </div>
  );
}

function HeadingOptions7() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[231px]" data-name="Heading options">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <Frame19 />
        </div>
      </div>
      <Row7 />
      <UgcDisplay7 />
    </div>
  );
}

function Text38() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Text">
      <p className="font-['Centra_No2:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#191e3b] text-[16px] text-nowrap whitespace-pre">$217</p>
    </div>
  );
}

function LeadPrice7() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="⚙️ Lead price">
      <Text38 />
    </div>
  );
}

function LeadPriceContainer7() {
  return (
    <div className="content-center flex flex-wrap gap-[4px] items-center justify-end relative shrink-0 w-full" data-name=".Lead price container">
      <LeadPrice7 />
    </div>
  );
}

function PriceSummary7() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full" data-name="Price summary">
      <LeadPriceContainer7 />
    </div>
  );
}

function DatedPriceSummary7() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-end relative shrink-0 w-[149px]" data-name="Dated price summary">
      <PriceSummary7 />
    </div>
  );
}

function Text39() {
  return (
    <div className="content-stretch flex items-start justify-end relative shrink-0 w-full" data-name="Text">
      <p className="basis-0 font-['Centra_No2:Regular',sans-serif] grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[#676a7d] text-[14px] text-right">$869 for 4 nights</p>
    </div>
  );
}

function SecondaryPrice7() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Secondary price">
      <Text39 />
    </div>
  );
}

function SmallTotalMultiNightRight7() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name=".Small / Total multi-night / Right">
      <SecondaryPrice7 />
    </div>
  );
}

function HcomCwrE2EPriceSummary7() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-end relative w-full" data-name="HCOM_CWR_E2E_Price_Summary">
      <DatedPriceSummary7 />
      <SmallTotalMultiNightRight7 />
    </div>
  );
}

function BottomContainer7() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Bottom container">
      <div className="flex items-center justify-center relative shrink-0 w-full">
        <div className="flex-none rotate-[180deg] scale-y-[-100%] w-full">
          <HcomCwrE2EPriceSummary7 />
        </div>
      </div>
    </div>
  );
}

function OffersAndPriceSection7() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-end relative w-full" data-name="Offers and price section">
      <BottomContainer7 />
    </div>
  );
}

function Frame39() {
  return (
    <div className="box-border content-stretch flex items-end justify-between pb-0 pt-[8px] px-0 relative shrink-0 w-full">
      <HeadingOptions7 />
      <div className="basis-0 flex grow items-center justify-center min-h-px min-w-px relative shrink-0">
        <div className="flex-none rotate-[180deg] scale-y-[-100%] w-full">
          <OffersAndPriceSection7 />
        </div>
      </div>
    </div>
  );
}

function Content15() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Content">
      <div className="flex flex-col items-end justify-end size-full">
        <div className="box-border content-stretch flex flex-col items-end justify-end px-[8px] py-[16px] relative w-full">
          <Frame38 />
          <Frame39 />
        </div>
      </div>
    </div>
  );
}

function SearchResultsCard7() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-end justify-end min-h-px min-w-px overflow-clip relative shrink-0" data-name="Search Results Card">
      <ImgOptions7 />
      <Content15 />
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex gap-[16px] items-center opacity-0 relative shrink-0 w-[832px]">
      <SearchResultsCard6 />
      <SearchResultsCard7 />
    </div>
  );
}

function ResultColumn() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[16px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Result column">
      <Frame41 />
      <Frame27 />
      <Frame28 />
      <Frame45 />
      <Frame42 />
      <Frame43 />
    </div>
  );
}

function Columns() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full" data-name="Columns">
      <ResultColumn />
    </div>
  );
}

function Main() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Main">
      <Columns />
    </div>
  );
}

function Content16() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[12px] items-start p-[24px] relative w-full">
          <Main />
        </div>
      </div>
    </div>
  );
}

function Content17() {
  return (
    <div className="box-border content-stretch flex flex-col h-[718px] items-start pb-[24px] pt-0 px-0 relative shrink-0 w-[880px]" data-name="Content">
      <Content16 />
    </div>
  );
}

function ButtonIcon() {
  return (
    <div className="absolute left-[9px] size-[18px] top-[9px]" data-name="_ / Button / Icon">
      <div className="absolute aspect-[6.99978/12] left-[33.33%] right-[37.5%] top-1/2 translate-y-[-50%]" data-name="Glyph">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 9">
          <path d={svgPaths.p5b1d200} fill="var(--fill-0, #1668E3)" id="Glyph" />
        </svg>
      </div>
    </div>
  );
}

function ButtonContainerIconOnly3() {
  return (
    <div className="absolute left-0 size-[36px] top-0" data-name="_ / Button / Container / Icon only">
      <div className="absolute left-0 size-[36px] top-0" data-name="Background">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
          <circle cx="18" cy="18" fill="var(--fill-0, white)" id="Background" r="17.5" stroke="var(--stroke-0, #818494)" />
        </svg>
      </div>
      <ButtonIcon />
    </div>
  );
}

function StandardButtonSecondaryIconOnly() {
  return (
    <div className="absolute left-[24px] shadow-[0px_2px_12px_0px_rgba(12,14,28,0.08)] size-[36px] top-[24px]" data-name="Standard button / Secondary (Icon only)">
      <ButtonContainerIconOnly3 />
    </div>
  );
}

function MapControlsBackground() {
  return <div className="absolute bg-white h-[72px] right-0 rounded-[4px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.2)] top-0 w-[36px]" data-name="_ / Map / Controls / Background" />;
}

function IconGlyphAdd() {
  return (
    <div className="absolute left-1/2 size-[24px] top-[6px] translate-x-[-50%]" data-name="Icon glyph / add">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon glyph / add">
          <path d={svgPaths.p21cef280} fill="var(--fill-0, #1F1F1F)" id="Glyph" />
        </g>
      </svg>
    </div>
  );
}

function IconGlyphRemove() {
  return (
    <div className="absolute bottom-[6px] left-1/2 top-[42px] translate-x-[-50%] w-[24px]" data-name="Icon glyph / remove">
      <div className="absolute inset-[45.83%_20.83%]" data-name="Glyph">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 2">
          <path d="M14 2H0V0H14V2Z" fill="var(--fill-0, #1F1F1F)" id="Glyph" />
        </svg>
      </div>
    </div>
  );
}

function MapControlsZoom() {
  return (
    <div className="h-[72px] relative shrink-0 w-[36px]" data-name="Map / Controls / Zoom">
      <MapControlsBackground />
      <div className="absolute h-0 left-0 right-0 top-1/2 translate-y-[-50%]" data-name="Rule">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 1">
            <line id="Rule" stroke="var(--stroke-0, #C7C7C7)" x2="36" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <IconGlyphAdd />
      <IconGlyphRemove />
    </div>
  );
}

function MapControlsBackground1() {
  return <div className="absolute bg-white right-0 rounded-[4px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.2)] size-[36px] top-0" data-name="_ / Map / Controls / Background" />;
}

function MapControlsPegman() {
  return (
    <div className="relative rounded-[4px] shrink-0 size-[36px]" data-name="Map / Controls / Pegman">
      <MapControlsBackground1 />
      <div className="absolute h-[28px] left-[10px] top-[4px] w-[17px]" data-name="Yellow street view person">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgYellowStreetViewPerson} />
      </div>
    </div>
  );
}

function MapControl() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] items-start left-[751px] top-0" data-name="Map control">
      <MapControlsZoom />
      <MapControlsPegman />
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute h-[120px] left-[29px] top-[564px] w-[787px]">
      <MapControl />
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center justify-center relative shrink-0" data-name="Label">
      <p className="font-['Centra_No2:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[14px] text-center text-nowrap text-white whitespace-pre">$359</p>
    </div>
  );
}

function MapPinContainerLabelLarge() {
  return (
    <div className="bg-[#006ed6] box-border content-stretch flex h-[28px] items-center px-[8px] py-0 relative rounded-[40000px] shrink-0" data-name="_ / ✏️ Map / Pin / Container / Label / Large">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[40000px] shadow-[0px_0px_0px_0px_rgba(12,14,28,0)]" />
      <Label />
    </div>
  );
}

function MapPinTail() {
  return (
    <div className="h-[4px] relative shrink-0 w-[6px]" data-name="_ / Map / Pin / Tail">
      <div className="absolute inset-[-50%_-10.16%_-24.8%_-10.06%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 7">
          <g id="_ / Map / Pin / Tail">
            <path d={svgPaths.p31797600} id="Triangle" stroke="var(--stroke-0, white)" />
            <path d={svgPaths.p3f357900} fill="var(--fill-0, #006ED6)" id="Triangle_2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function MapPinProductText() {
  return (
    <div className="absolute content-stretch flex flex-col h-[28px] items-center left-[172px] top-[187px] w-[44px]" data-name="Map / Pin / Product / Text">
      <MapPinContainerLabelLarge />
      <MapPinTail />
    </div>
  );
}

function Label1() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center justify-center relative shrink-0" data-name="Label">
      <p className="font-['Centra_No2:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[14px] text-center text-nowrap text-white whitespace-pre">$519</p>
    </div>
  );
}

function MapPinContainerLabelLarge1() {
  return (
    <div className="bg-[#006ed6] box-border content-stretch flex h-[28px] items-center px-[8px] py-0 relative rounded-[40000px] shrink-0" data-name="_ / ✏️ Map / Pin / Container / Label / Large">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[40000px] shadow-[0px_0px_0px_0px_rgba(12,14,28,0)]" />
      <Label1 />
    </div>
  );
}

function MapPinTail1() {
  return (
    <div className="h-[4px] relative shrink-0 w-[6px]" data-name="_ / Map / Pin / Tail">
      <div className="absolute inset-[-50%_-10.16%_-24.8%_-10.06%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 7">
          <g id="_ / Map / Pin / Tail">
            <path d={svgPaths.p31797600} id="Triangle" stroke="var(--stroke-0, white)" />
            <path d={svgPaths.p3f357900} fill="var(--fill-0, #006ED6)" id="Triangle_2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function MapPinProductText1() {
  return (
    <div className="absolute content-stretch flex flex-col h-[28px] items-center left-[320px] top-[131px] w-[44px]" data-name="Map / Pin / Product / Text">
      <MapPinContainerLabelLarge1 />
      <MapPinTail1 />
    </div>
  );
}

function Label2() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center justify-center relative shrink-0" data-name="Label">
      <p className="font-['Centra_No2:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[14px] text-center text-nowrap text-white whitespace-pre">$278</p>
    </div>
  );
}

function MapPinContainerLabelLarge2() {
  return (
    <div className="bg-[#006ed6] box-border content-stretch flex h-[28px] items-center px-[8px] py-0 relative rounded-[40000px] shrink-0" data-name="_ / ✏️ Map / Pin / Container / Label / Large">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[40000px] shadow-[0px_0px_0px_0px_rgba(12,14,28,0)]" />
      <Label2 />
    </div>
  );
}

function MapPinTail2() {
  return (
    <div className="h-[4px] relative shrink-0 w-[6px]" data-name="_ / Map / Pin / Tail">
      <div className="absolute inset-[-50%_-10.16%_-24.8%_-10.06%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 7">
          <g id="_ / Map / Pin / Tail">
            <path d={svgPaths.p31797600} id="Triangle" stroke="var(--stroke-0, white)" />
            <path d={svgPaths.p3f357900} fill="var(--fill-0, #006ED6)" id="Triangle_2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function MapPinProductText2() {
  return (
    <div className="absolute content-stretch flex flex-col h-[28px] items-center left-[209px] top-[243px] w-[44px]" data-name="Map / Pin / Product / Text">
      <MapPinContainerLabelLarge2 />
      <MapPinTail2 />
    </div>
  );
}

function Label3() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center justify-center relative shrink-0" data-name="Label">
      <p className="font-['Centra_No2:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[14px] text-center text-nowrap text-white whitespace-pre">$283</p>
    </div>
  );
}

function MapPinContainerLabelLarge3() {
  return (
    <div className="bg-[#006ed6] box-border content-stretch flex h-[28px] items-center px-[8px] py-0 relative rounded-[40000px] shrink-0" data-name="_ / ✏️ Map / Pin / Container / Label / Large">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[40000px] shadow-[0px_0px_0px_0px_rgba(12,14,28,0)]" />
      <Label3 />
    </div>
  );
}

function MapPinTail3() {
  return (
    <div className="h-[4px] relative shrink-0 w-[6px]" data-name="_ / Map / Pin / Tail">
      <div className="absolute inset-[-50%_-10.16%_-24.8%_-10.06%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 7">
          <g id="_ / Map / Pin / Tail">
            <path d={svgPaths.p31797600} id="Triangle" stroke="var(--stroke-0, white)" />
            <path d={svgPaths.p3f357900} fill="var(--fill-0, #006ED6)" id="Triangle_2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function MapPinProductText3() {
  return (
    <div className="absolute content-stretch flex flex-col h-[28px] items-center left-[55px] top-[266px] w-[44px]" data-name="Map / Pin / Product / Text">
      <MapPinContainerLabelLarge3 />
      <MapPinTail3 />
    </div>
  );
}

function Label4() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center justify-center relative shrink-0" data-name="Label">
      <p className="font-['Centra_No2:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[14px] text-center text-nowrap text-white whitespace-pre">$371</p>
    </div>
  );
}

function MapPinContainerLabelLarge4() {
  return (
    <div className="bg-[#006ed6] box-border content-stretch flex h-[28px] items-center px-[8px] py-0 relative rounded-[40000px] shrink-0" data-name="_ / ✏️ Map / Pin / Container / Label / Large">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[40000px] shadow-[0px_0px_0px_0px_rgba(12,14,28,0)]" />
      <Label4 />
    </div>
  );
}

function MapPinTail4() {
  return (
    <div className="h-[4px] relative shrink-0 w-[6px]" data-name="_ / Map / Pin / Tail">
      <div className="absolute inset-[-50%_-10.16%_-24.8%_-10.06%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 7">
          <g id="_ / Map / Pin / Tail">
            <path d={svgPaths.p31797600} id="Triangle" stroke="var(--stroke-0, white)" />
            <path d={svgPaths.p3f357900} fill="var(--fill-0, #006ED6)" id="Triangle_2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function MapPinProductText4() {
  return (
    <div className="absolute content-stretch flex flex-col h-[28px] items-center left-[240px] top-[272px] w-[44px]" data-name="Map / Pin / Product / Text">
      <MapPinContainerLabelLarge4 />
      <MapPinTail4 />
    </div>
  );
}

function Label5() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center justify-center relative shrink-0" data-name="Label">
      <p className="font-['Centra_No2:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[14px] text-center text-nowrap text-white whitespace-pre">$344</p>
    </div>
  );
}

function MapPinContainerLabelLarge5() {
  return (
    <div className="bg-[#006ed6] box-border content-stretch flex h-[28px] items-center px-[8px] py-0 relative rounded-[40000px] shrink-0" data-name="_ / ✏️ Map / Pin / Container / Label / Large">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[40000px] shadow-[0px_0px_0px_0px_rgba(12,14,28,0)]" />
      <Label5 />
    </div>
  );
}

function MapPinTail5() {
  return (
    <div className="h-[4px] relative shrink-0 w-[6px]" data-name="_ / Map / Pin / Tail">
      <div className="absolute inset-[-50%_-10.16%_-24.8%_-10.06%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 7">
          <g id="_ / Map / Pin / Tail">
            <path d={svgPaths.p31797600} id="Triangle" stroke="var(--stroke-0, white)" />
            <path d={svgPaths.p3f357900} fill="var(--fill-0, #006ED6)" id="Triangle_2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function MapPinProductText5() {
  return (
    <div className="absolute content-stretch flex flex-col h-[28px] items-center left-[235px] top-[322px] w-[44px]" data-name="Map / Pin / Product / Text">
      <MapPinContainerLabelLarge5 />
      <MapPinTail5 />
    </div>
  );
}

function Label6() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center justify-center relative shrink-0" data-name="Label">
      <p className="font-['Centra_No2:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[14px] text-center text-nowrap text-white whitespace-pre">$283</p>
    </div>
  );
}

function MapPinContainerLabelLarge6() {
  return (
    <div className="bg-[#006ed6] box-border content-stretch flex h-[28px] items-center px-[8px] py-0 relative rounded-[40000px] shrink-0" data-name="_ / ✏️ Map / Pin / Container / Label / Large">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[40000px] shadow-[0px_0px_0px_0px_rgba(12,14,28,0)]" />
      <Label6 />
    </div>
  );
}

function MapPinTail6() {
  return (
    <div className="h-[4px] relative shrink-0 w-[6px]" data-name="_ / Map / Pin / Tail">
      <div className="absolute inset-[-50%_-10.16%_-24.8%_-10.06%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 7">
          <g id="_ / Map / Pin / Tail">
            <path d={svgPaths.p31797600} id="Triangle" stroke="var(--stroke-0, white)" />
            <path d={svgPaths.p3f357900} fill="var(--fill-0, #006ED6)" id="Triangle_2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function MapPinProductText6() {
  return (
    <div className="absolute content-stretch flex flex-col h-[28px] items-center left-[268px] top-[178px] w-[44px]" data-name="Map / Pin / Product / Text">
      <MapPinContainerLabelLarge6 />
      <MapPinTail6 />
    </div>
  );
}

function Label7() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center justify-center relative shrink-0" data-name="Label">
      <p className="font-['Centra_No2:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[14px] text-center text-nowrap text-white whitespace-pre">$473</p>
    </div>
  );
}

function MapPinContainerLabelLarge7() {
  return (
    <div className="bg-[#006ed6] box-border content-stretch flex h-[28px] items-center px-[8px] py-0 relative rounded-[40000px] shrink-0" data-name="_ / ✏️ Map / Pin / Container / Label / Large">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[40000px] shadow-[0px_0px_0px_0px_rgba(12,14,28,0)]" />
      <Label7 />
    </div>
  );
}

function MapPinTail7() {
  return (
    <div className="h-[4px] relative shrink-0 w-[6px]" data-name="_ / Map / Pin / Tail">
      <div className="absolute inset-[-50%_-10.16%_-24.8%_-10.06%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 7">
          <g id="_ / Map / Pin / Tail">
            <path d={svgPaths.p31797600} id="Triangle" stroke="var(--stroke-0, white)" />
            <path d={svgPaths.p3f357900} fill="var(--fill-0, #006ED6)" id="Triangle_2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function MapPinProductText7() {
  return (
    <div className="absolute content-stretch flex flex-col h-[28px] items-center left-[216px] top-[145px] w-[44px]" data-name="Map / Pin / Product / Text">
      <MapPinContainerLabelLarge7 />
      <MapPinTail7 />
    </div>
  );
}

function Label8() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center justify-center relative shrink-0" data-name="Label">
      <p className="font-['Centra_No2:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[14px] text-center text-nowrap text-white whitespace-pre">$644</p>
    </div>
  );
}

function MapPinContainerLabelLarge8() {
  return (
    <div className="bg-[#006ed6] box-border content-stretch flex h-[28px] items-center px-[8px] py-0 relative rounded-[40000px] shrink-0" data-name="_ / ✏️ Map / Pin / Container / Label / Large">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[40000px] shadow-[0px_0px_0px_0px_rgba(12,14,28,0)]" />
      <Label8 />
    </div>
  );
}

function MapPinTail8() {
  return (
    <div className="h-[4px] relative shrink-0 w-[6px]" data-name="_ / Map / Pin / Tail">
      <div className="absolute inset-[-50%_-10.16%_-24.8%_-10.06%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 7">
          <g id="_ / Map / Pin / Tail">
            <path d={svgPaths.p31797600} id="Triangle" stroke="var(--stroke-0, white)" />
            <path d={svgPaths.p3f357900} fill="var(--fill-0, #006ED6)" id="Triangle_2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function MapPinProductText8() {
  return (
    <div className="absolute content-stretch flex flex-col h-[28px] items-center left-[346px] top-[308px] w-[44px]" data-name="Map / Pin / Product / Text">
      <MapPinContainerLabelLarge8 />
      <MapPinTail8 />
    </div>
  );
}

function Label9() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center justify-center relative shrink-0" data-name="Label">
      <p className="font-['Centra_No2:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[14px] text-center text-nowrap text-white whitespace-pre">$371</p>
    </div>
  );
}

function MapPinContainerLabelLarge9() {
  return (
    <div className="bg-[#006ed6] box-border content-stretch flex h-[28px] items-center px-[8px] py-0 relative rounded-[40000px] shrink-0" data-name="_ / ✏️ Map / Pin / Container / Label / Large">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[40000px] shadow-[0px_0px_0px_0px_rgba(12,14,28,0)]" />
      <Label9 />
    </div>
  );
}

function MapPinTail9() {
  return (
    <div className="h-[4px] relative shrink-0 w-[6px]" data-name="_ / Map / Pin / Tail">
      <div className="absolute inset-[-50%_-10.16%_-24.8%_-10.06%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 7">
          <g id="_ / Map / Pin / Tail">
            <path d={svgPaths.p31797600} id="Triangle" stroke="var(--stroke-0, white)" />
            <path d={svgPaths.p3f357900} fill="var(--fill-0, #006ED6)" id="Triangle_2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function MapPinProductText9() {
  return (
    <div className="absolute content-stretch flex flex-col h-[28px] items-center left-0 top-[298px] w-[44px]" data-name="Map / Pin / Product / Text">
      <MapPinContainerLabelLarge9 />
      <MapPinTail9 />
    </div>
  );
}

function MapPins() {
  return (
    <div className="absolute h-[466px] left-[103px] opacity-0 top-[88px] w-[486px]" data-name="Map pins">
      <MapPinProductText />
      <MapPinProductText1 />
      <MapPinProductText2 />
      <MapPinProductText3 />
      <MapPinProductText4 />
      <MapPinProductText5 />
      <MapPinProductText6 />
      <MapPinProductText7 />
      <MapPinProductText8 />
      <MapPinProductText9 />
    </div>
  );
}

function Label10() {
  return (
    <div className="content-stretch flex flex-col gap-[3px] items-center justify-center relative shrink-0" data-name="Label">
      <p className="font-['Centra_No2:Medium',sans-serif] leading-[5.4px] not-italic opacity-0 relative shrink-0 text-[4.2px] text-center text-nowrap text-white whitespace-pre">$185</p>
    </div>
  );
}

function MapPinContainerLabelLarge10() {
  return (
    <div className="bg-[#006ed6] box-border content-stretch flex h-[8.4px] items-center px-[2.4px] py-0 relative rounded-[12000px] shrink-0" data-name="_ / ✏️ Map / Pin / Container / Label / Large">
      <div aria-hidden="true" className="absolute border-[0.3px] border-solid border-white inset-0 pointer-events-none rounded-[12000px] shadow-[0px_0px_0px_0px_rgba(12,14,28,0)]" />
      <Label10 />
    </div>
  );
}

function MapPinProductText10() {
  return (
    <div className="absolute content-stretch flex flex-col h-[8.4px] items-center left-[187.4px] top-[196.8px] w-[13.2px]" data-name="Map / Pin / Product / Text">
      <MapPinContainerLabelLarge10 />
    </div>
  );
}

function Label11() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center justify-center relative shrink-0" data-name="Label">
      <p className="font-['Centra_No2:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[14px] text-center text-nowrap text-white whitespace-pre">$185</p>
    </div>
  );
}

function MapPinContainerLabelLarge11() {
  return (
    <div className="bg-[#006ed6] box-border content-stretch flex h-[28px] items-center px-[8px] py-0 relative rounded-[40000px] shrink-0" data-name="_ / ✏️ Map / Pin / Container / Label / Large">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[40000px] shadow-[0px_0px_0px_0px_rgba(12,14,28,0)]" />
      <Label11 />
    </div>
  );
}

function MapPinTail10() {
  return (
    <div className="h-[4px] relative shrink-0 w-[6px]" data-name="_ / Map / Pin / Tail">
      <div className="absolute inset-[-50%_-10.16%_-24.8%_-10.06%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 7">
          <g id="_ / Map / Pin / Tail">
            <path d={svgPaths.p31797600} id="Triangle" stroke="var(--stroke-0, white)" />
            <path d={svgPaths.p3f357900} fill="var(--fill-0, #006ED6)" id="Triangle_2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function MapPinProductText11() {
  return (
    <div className="absolute content-stretch flex flex-col h-[28px] items-center left-[188px] top-[185px] w-[44px]" data-name="Map / Pin / Product / Text">
      <MapPinContainerLabelLarge11 />
      <MapPinTail10 />
    </div>
  );
}

function Label12() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center justify-center relative shrink-0" data-name="Label">
      <p className="font-['Centra_No2:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[14px] text-center text-nowrap text-white whitespace-pre">$278</p>
    </div>
  );
}

function MapPinContainerLabelLarge12() {
  return (
    <div className="bg-[#006ed6] box-border content-stretch flex h-[28px] items-center px-[8px] py-0 relative rounded-[40000px] shrink-0" data-name="_ / ✏️ Map / Pin / Container / Label / Large">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[40000px] shadow-[0px_0px_0px_0px_rgba(12,14,28,0)]" />
      <Label12 />
    </div>
  );
}

function MapPinTail11() {
  return (
    <div className="h-[4px] relative shrink-0 w-[6px]" data-name="_ / Map / Pin / Tail">
      <div className="absolute inset-[-50%_-10.16%_-24.8%_-10.06%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 7">
          <g id="_ / Map / Pin / Tail">
            <path d={svgPaths.p31797600} id="Triangle" stroke="var(--stroke-0, white)" />
            <path d={svgPaths.p3f357900} fill="var(--fill-0, #006ED6)" id="Triangle_2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function MapPinProductText12() {
  return (
    <div className="absolute content-stretch flex flex-col h-[28px] items-center left-[209px] top-[243px] w-[44px]" data-name="Map / Pin / Product / Text">
      <MapPinContainerLabelLarge12 />
      <MapPinTail11 />
    </div>
  );
}

function Label13() {
  return (
    <div className="content-stretch flex flex-col gap-[3px] items-center justify-center relative shrink-0" data-name="Label">
      <p className="font-['Centra_No2:Medium',sans-serif] leading-[5.4px] not-italic opacity-0 relative shrink-0 text-[4.2px] text-center text-nowrap text-white whitespace-pre">$283</p>
    </div>
  );
}

function MapPinContainerLabelLarge13() {
  return (
    <div className="bg-[#006ed6] box-border content-stretch flex h-[8.4px] items-center px-[2.4px] py-0 relative rounded-[12000px] shrink-0" data-name="_ / ✏️ Map / Pin / Container / Label / Large">
      <div aria-hidden="true" className="absolute border-[0.3px] border-solid border-white inset-0 pointer-events-none rounded-[12000px] shadow-[0px_0px_0px_0px_rgba(12,14,28,0)]" />
      <Label13 />
    </div>
  );
}

function MapPinProductText13() {
  return (
    <div className="absolute content-stretch flex flex-col h-[8.4px] items-center left-[136.4px] top-[275.8px] w-[13.2px]" data-name="Map / Pin / Product / Text">
      <MapPinContainerLabelLarge13 />
    </div>
  );
}

function Label14() {
  return (
    <div className="content-stretch flex flex-col gap-[3px] items-center justify-center relative shrink-0" data-name="Label">
      <p className="font-['Centra_No2:Medium',sans-serif] leading-[5.4px] not-italic opacity-0 relative shrink-0 text-[4.2px] text-center text-nowrap text-white whitespace-pre">$344</p>
    </div>
  );
}

function MapPinContainerLabelLarge14() {
  return (
    <div className="bg-[#006ed6] box-border content-stretch flex h-[8.4px] items-center px-[2.4px] py-0 relative rounded-[12000px] shrink-0" data-name="_ / ✏️ Map / Pin / Container / Label / Large">
      <div aria-hidden="true" className="absolute border-[0.3px] border-solid border-white inset-0 pointer-events-none rounded-[12000px] shadow-[0px_0px_0px_0px_rgba(12,14,28,0)]" />
      <Label14 />
    </div>
  );
}

function MapPinProductText14() {
  return (
    <div className="absolute content-stretch flex flex-col h-[8.4px] items-center left-[168.4px] top-[246.8px] w-[13.2px]" data-name="Map / Pin / Product / Text">
      <MapPinContainerLabelLarge14 />
    </div>
  );
}

function Label15() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center justify-center relative shrink-0" data-name="Label">
      <p className="font-['Centra_No2:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[14px] text-center text-nowrap text-white whitespace-pre">$344</p>
    </div>
  );
}

function MapPinContainerLabelLarge15() {
  return (
    <div className="bg-[#006ed6] box-border content-stretch flex h-[28px] items-center px-[8px] py-0 relative rounded-[40000px] shrink-0" data-name="_ / ✏️ Map / Pin / Container / Label / Large">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[40000px] shadow-[0px_0px_0px_0px_rgba(12,14,28,0)]" />
      <Label15 />
    </div>
  );
}

function MapPinTail12() {
  return (
    <div className="h-[4px] relative shrink-0 w-[6px]" data-name="_ / Map / Pin / Tail">
      <div className="absolute inset-[-50%_-10.16%_-24.8%_-10.06%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 7">
          <g id="_ / Map / Pin / Tail">
            <path d={svgPaths.p31797600} id="Triangle" stroke="var(--stroke-0, white)" />
            <path d={svgPaths.p3f357900} fill="var(--fill-0, #006ED6)" id="Triangle_2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function MapPinProductText15() {
  return (
    <div className="absolute content-stretch flex flex-col h-[28px] items-center left-[168px] top-[239px] w-[44px]" data-name="Map / Pin / Product / Text">
      <MapPinContainerLabelLarge15 />
      <MapPinTail12 />
    </div>
  );
}

function Label16() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center justify-center relative shrink-0" data-name="Label">
      <p className="font-['Centra_No2:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[14px] text-center text-nowrap text-white whitespace-pre">$371</p>
    </div>
  );
}

function MapPinContainerLabelLarge16() {
  return (
    <div className="bg-[#006ed6] box-border content-stretch flex h-[28px] items-center px-[8px] py-0 relative rounded-[40000px] shrink-0" data-name="_ / ✏️ Map / Pin / Container / Label / Large">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[40000px] shadow-[0px_0px_0px_0px_rgba(12,14,28,0)]" />
      <Label16 />
    </div>
  );
}

function MapPinTail13() {
  return (
    <div className="h-[4px] relative shrink-0 w-[6px]" data-name="_ / Map / Pin / Tail">
      <div className="absolute inset-[-50%_-10.16%_-24.8%_-10.06%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 7">
          <g id="_ / Map / Pin / Tail">
            <path d={svgPaths.p31797600} id="Triangle" stroke="var(--stroke-0, white)" />
            <path d={svgPaths.p3f357900} fill="var(--fill-0, #006ED6)" id="Triangle_2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function MapPinProductText16() {
  return (
    <div className="absolute content-stretch flex flex-col h-[28px] items-center left-[268px] top-[178px] w-[44px]" data-name="Map / Pin / Product / Text">
      <MapPinContainerLabelLarge16 />
      <MapPinTail13 />
    </div>
  );
}

function Label17() {
  return (
    <div className="content-stretch flex flex-col gap-[3px] items-center justify-center relative shrink-0" data-name="Label">
      <p className="font-['Centra_No2:Medium',sans-serif] leading-[5.4px] not-italic opacity-0 relative shrink-0 text-[4.2px] text-center text-nowrap text-white whitespace-pre">$255</p>
    </div>
  );
}

function MapPinContainerLabelLarge17() {
  return (
    <div className="bg-[#006ed6] box-border content-stretch flex h-[8.4px] items-center px-[2.4px] py-0 relative rounded-[12000px] shrink-0" data-name="_ / ✏️ Map / Pin / Container / Label / Large">
      <div aria-hidden="true" className="absolute border-[0.3px] border-solid border-white inset-0 pointer-events-none rounded-[12000px] shadow-[0px_0px_0px_0px_rgba(12,14,28,0)]" />
      <Label17 />
    </div>
  );
}

function MapPinProductText17() {
  return (
    <div className="absolute content-stretch flex flex-col h-[8.4px] items-center left-[231.4px] top-[154.8px] w-[13.2px]" data-name="Map / Pin / Product / Text">
      <MapPinContainerLabelLarge17 />
    </div>
  );
}

function Label18() {
  return (
    <div className="content-stretch flex flex-col gap-[3px] items-center justify-center relative shrink-0" data-name="Label">
      <p className="font-['Centra_No2:Medium',sans-serif] leading-[5.4px] not-italic opacity-0 relative shrink-0 text-[4.2px] text-center text-nowrap text-white whitespace-pre">$321</p>
    </div>
  );
}

function MapPinContainerLabelLarge18() {
  return (
    <div className="bg-[#006ed6] box-border content-stretch flex h-[8.4px] items-center px-[2.4px] py-0 relative rounded-[12000px] shrink-0" data-name="_ / ✏️ Map / Pin / Container / Label / Large">
      <div aria-hidden="true" className="absolute border-[0.3px] border-solid border-white inset-0 pointer-events-none rounded-[12000px] shadow-[0px_0px_0px_0px_rgba(12,14,28,0)]" />
      <Label18 />
    </div>
  );
}

function MapPinProductText18() {
  return (
    <div className="absolute content-stretch flex flex-col h-[8.4px] items-center left-[199.4px] top-[315.8px] w-[13.2px]" data-name="Map / Pin / Product / Text">
      <MapPinContainerLabelLarge18 />
    </div>
  );
}

function Label19() {
  return (
    <div className="content-stretch flex flex-col gap-[3px] items-center justify-center relative shrink-0" data-name="Label">
      <p className="font-['Centra_No2:Medium',sans-serif] leading-[5.4px] not-italic opacity-0 relative shrink-0 text-[4.2px] text-center text-nowrap text-white whitespace-pre">$566</p>
    </div>
  );
}

function MapPinContainerLabelLarge19() {
  return (
    <div className="bg-[#006ed6] box-border content-stretch flex h-[8.4px] items-center px-[2.4px] py-0 relative rounded-[12000px] shrink-0" data-name="_ / ✏️ Map / Pin / Container / Label / Large">
      <div aria-hidden="true" className="absolute border-[0.3px] border-solid border-white inset-0 pointer-events-none rounded-[12000px] shadow-[0px_0px_0px_0px_rgba(12,14,28,0)]" />
      <Label19 />
    </div>
  );
}

function MapPinProductText19() {
  return (
    <div className="absolute content-stretch flex flex-col h-[8.4px] items-center left-[340.4px] top-[233.8px] w-[13.2px]" data-name="Map / Pin / Product / Text">
      <MapPinContainerLabelLarge19 />
    </div>
  );
}

function Label20() {
  return (
    <div className="content-stretch flex flex-col gap-[3px] items-center justify-center relative shrink-0" data-name="Label">
      <p className="font-['Centra_No2:Medium',sans-serif] leading-[5.4px] not-italic opacity-0 relative shrink-0 text-[4.2px] text-center text-nowrap text-white whitespace-pre">$211</p>
    </div>
  );
}

function MapPinContainerLabelLarge20() {
  return (
    <div className="bg-[#006ed6] box-border content-stretch flex h-[8.4px] items-center px-[2.4px] py-0 relative rounded-[12000px] shrink-0" data-name="_ / ✏️ Map / Pin / Container / Label / Large">
      <div aria-hidden="true" className="absolute border-[0.3px] border-solid border-white inset-0 pointer-events-none rounded-[12000px] shadow-[0px_0px_0px_0px_rgba(12,14,28,0)]" />
      <Label20 />
    </div>
  );
}

function MapPinProductText20() {
  return (
    <div className="absolute content-stretch flex flex-col h-[8.4px] items-center left-[42.4px] top-[304.8px] w-[13.2px]" data-name="Map / Pin / Product / Text">
      <MapPinContainerLabelLarge20 />
    </div>
  );
}

function MapPins1() {
  return (
    <div className="absolute h-[466px] left-[103px] top-[98px] w-[486px]" data-name="Map pins">
      <MapPinProductText10 />
      <MapPinProductText11 />
      <MapPinProductText12 />
      <MapPinProductText13 />
      <MapPinProductText14 />
      <MapPinProductText15 />
      <MapPinProductText16 />
      <MapPinProductText17 />
      <MapPinProductText18 />
      <MapPinProductText19 />
      <MapPinProductText20 />
    </div>
  );
}

function Map() {
  return (
    <div className="h-full overflow-clip relative shrink-0 w-[844px]" data-name="Map">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgMap} />
      <StandardButtonSecondaryIconOnly />
      <Frame2 />
      <MapPins />
      <MapPins1 />
    </div>
  );
}

function Frame() {
  return (
    <div className="basis-0 grow h-[766px] min-h-px min-w-px relative shrink-0">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[766px] items-center pl-0 pr-[16px] py-0 relative w-full">
          <Map />
        </div>
      </div>
    </div>
  );
}

function Content18() {
  return (
    <div className="basis-0 content-stretch flex grow h-[998px] items-start min-h-px min-w-px relative shrink-0" data-name="Content">
      <Content17 />
      <Frame />
    </div>
  );
}

function MaxWrapper() {
  return (
    <div className="absolute content-stretch flex h-[1601px] items-start justify-center left-0 overflow-clip top-[140px] w-[1724px]" data-name="Max wrapper">
      <Content18 />
    </div>
  );
}

function IconGlyphTune() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon glyph / tune">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon glyph / tune">
          <g id="Glyph">
            <path clipRule="evenodd" d={svgPaths.p170e200} fill="var(--fill-0, black)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p6665800} fill="var(--fill-0, black)" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Search() {
  return (
    <div className="bg-white relative rounded-[32px] shrink-0" data-name="search">
      <div className="box-border content-stretch flex gap-[8px] items-center justify-center overflow-clip p-[12px] relative rounded-[inherit]">
        <IconGlyphTune />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[32px]" />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon" opacity="0.75">
          <path d={svgPaths.p19727880} fill="var(--fill-0, #212121)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function Frame7() {
  return (
    <div className="box-border content-stretch flex gap-[12px] items-center px-[24px] py-[12px] relative rounded-[24px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#dfe0e4] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <Icon />
      <p className="font-['Centra_No2:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[14px] text-black text-center text-nowrap whitespace-pre">Santa Fe</p>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_12_15887)" id="Icon" opacity="0.75">
          <path d={svgPaths.p31076400} fill="var(--fill-0, #212121)" id="Union" />
        </g>
        <defs>
          <clipPath id="clip0_12_15887">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame8() {
  return (
    <div className="box-border content-stretch flex gap-[12px] items-center px-[24px] py-[12px] relative rounded-[24px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#dfe0e4] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <Icon1 />
      <p className="font-['Centra_No2:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[14px] text-black text-center text-nowrap whitespace-pre">23-24 Jun</p>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_12_15873)" id="Icon" opacity="0.75">
          <path d={svgPaths.p34958b80} fill="var(--fill-0, #212121)" id="Union" />
        </g>
        <defs>
          <clipPath id="clip0_12_15873">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame9() {
  return (
    <div className="box-border content-stretch flex gap-[12px] items-center px-[24px] py-[12px] relative rounded-[24px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#dfe0e4] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <Icon2 />
      <p className="font-['Centra_No2:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[14px] text-black text-center text-nowrap whitespace-pre">3 people</p>
    </div>
  );
}

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

function Search1() {
  return (
    <div className="bg-white relative rounded-[32px] shrink-0" data-name="search">
      <div className="box-border content-stretch flex gap-[8px] items-center justify-center overflow-clip p-[12px] relative rounded-[inherit]">
        <IconGlyphHistory />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[32px]" />
    </div>
  );
}

function Frame6() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[12px] items-start overflow-clip px-[196px] py-0 relative rounded-[64px] shrink-0">
      <Search />
      <Frame7 />
      <Frame8 />
      <Frame9 />
      <Search1 />
    </div>
  );
}

function Controls() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[16px] items-center left-0 px-[24px] py-[16px] shadow-[0px_5px_20px_0px_rgba(0,0,0,0.1)] top-[64px] w-[1724px]" data-name="Controls">
      <Frame6 />
    </div>
  );
}

function GlobalNavigationHeaderLogo() {
  return (
    <div className="h-[42px] relative shrink-0 w-[131px]" data-name="Global navigation / Header logo">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 131 42">
        <g id="Global navigation / Header logo">
          <path clipRule="evenodd" d={svgPaths.p1418c800} fill="var(--fill-0, #0E214B)" fillRule="evenodd" id="Logo" />
        </g>
      </svg>
    </div>
  );
}

function Heading8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading">
      <p className="font-['Centra_No2:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#141d38] text-[14px] w-full">Company</p>
    </div>
  );
}

function LinkContainer() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0" data-name="_ / Link / Container">
      <p className="basis-0 font-['Centra_No2:Regular',sans-serif] grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#3662d8] text-[12px]">About</p>
    </div>
  );
}

function LinkStandard() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Link / Standard">
      <LinkContainer />
    </div>
  );
}

function LinkContainer1() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0" data-name="_ / Link / Container">
      <p className="basis-0 font-['Centra_No2:Regular',sans-serif] grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#3662d8] text-[12px]">Jobs</p>
    </div>
  );
}

function LinkStandard1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Link / Standard">
      <LinkContainer1 />
    </div>
  );
}

function LinkContainer2() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0" data-name="_ / Link / Container">
      <p className="basis-0 font-['Centra_No2:Regular',sans-serif] grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#3662d8] text-[12px]">List your property</p>
    </div>
  );
}

function LinkStandard2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Link / Standard">
      <LinkContainer2 />
    </div>
  );
}

function LinkContainer3() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0" data-name="_ / Link / Container">
      <p className="basis-0 font-['Centra_No2:Regular',sans-serif] grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#3662d8] text-[12px]">Partnerships</p>
    </div>
  );
}

function LinkStandard3() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Link / Standard">
      <LinkContainer3 />
    </div>
  );
}

function LinkContainer4() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0" data-name="_ / Link / Container">
      <p className="font-['Centra_No2:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#3662d8] text-[12px] text-nowrap whitespace-pre">Newsroom</p>
    </div>
  );
}

function LinkStandard4() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Link / Standard">
      <LinkContainer4 />
    </div>
  );
}

function LinkContainer5() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0" data-name="_ / Link / Container">
      <p className="basis-0 font-['Centra_No2:Regular',sans-serif] grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#3662d8] text-[12px]">Investor Relations</p>
    </div>
  );
}

function LinkStandard5() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Link / Standard">
      <LinkContainer5 />
    </div>
  );
}

function LinkContainer6() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0" data-name="_ / Link / Container">
      <p className="basis-0 font-['Centra_No2:Regular',sans-serif] grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#3662d8] text-[12px]">Advertising</p>
    </div>
  );
}

function LinkStandard6() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Link / Standard">
      <LinkContainer6 />
    </div>
  );
}

function Column() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[12px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Column">
      <Heading8 />
      <LinkStandard />
      <LinkStandard1 />
      <LinkStandard2 />
      <LinkStandard3 />
      <LinkStandard4 />
      <LinkStandard5 />
      <LinkStandard6 />
    </div>
  );
}

function Heading9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading">
      <p className="font-['Centra_No2:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#141d38] text-[14px] w-full">Explore</p>
    </div>
  );
}

function LinkContainer7() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0" data-name="_ / Link / Container">
      <p className="basis-0 font-['Centra_No2:Regular',sans-serif] grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#3662d8] text-[12px]">United States of America travel guide</p>
    </div>
  );
}

function LinkStandard7() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Link / Standard">
      <LinkContainer7 />
    </div>
  );
}

function LinkContainer8() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0" data-name="_ / Link / Container">
      <p className="basis-0 font-['Centra_No2:Regular',sans-serif] grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#3662d8] text-[12px]">Hotels in United States of America</p>
    </div>
  );
}

function LinkStandard8() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Link / Standard">
      <LinkContainer8 />
    </div>
  );
}

function LinkContainer9() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0" data-name="_ / Link / Container">
      <p className="basis-0 font-['Centra_No2:Regular',sans-serif] grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#3662d8] text-[12px]">Vacation rentals in United States of America</p>
    </div>
  );
}

function LinkStandard9() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Link / Standard">
      <LinkContainer9 />
    </div>
  );
}

function LinkContainer10() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0" data-name="_ / Link / Container">
      <p className="basis-0 font-['Centra_No2:Regular',sans-serif] grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#3662d8] text-[12px]">Vacation package in the United States of America</p>
    </div>
  );
}

function LinkStandard10() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Link / Standard">
      <LinkContainer10 />
    </div>
  );
}

function LinkContainer11() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0" data-name="_ / Link / Container">
      <p className="basis-0 font-['Centra_No2:Regular',sans-serif] grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#3662d8] text-[12px]">Domestic flights</p>
    </div>
  );
}

function LinkStandard11() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Link / Standard">
      <LinkContainer11 />
    </div>
  );
}

function LinkContainer12() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0" data-name="_ / Link / Container">
      <p className="basis-0 font-['Centra_No2:Regular',sans-serif] grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#3662d8] text-[12px]">Car rentals in United States of America</p>
    </div>
  );
}

function LinkStandard12() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Link / Standard">
      <LinkContainer12 />
    </div>
  );
}

function LinkContainer13() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0" data-name="_ / Link / Container">
      <p className="basis-0 font-['Centra_No2:Regular',sans-serif] grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#3662d8] text-[12px]">All accommodation types</p>
    </div>
  );
}

function LinkStandard13() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Link / Standard">
      <LinkContainer13 />
    </div>
  );
}

function Column1() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[12px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Column">
      <Heading9 />
      <LinkStandard7 />
      <LinkStandard8 />
      <LinkStandard9 />
      <LinkStandard10 />
      <LinkStandard11 />
      <LinkStandard12 />
      <LinkStandard13 />
    </div>
  );
}

function Heading10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading">
      <p className="font-['Centra_No2:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#141d38] text-[14px] w-full">Terms and Policies</p>
    </div>
  );
}

function LinkContainer14() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0" data-name="_ / Link / Container">
      <p className="basis-0 font-['Centra_No2:Regular',sans-serif] grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#3662d8] text-[12px]">Privacy policy</p>
    </div>
  );
}

function LinkStandard14() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Link / Standard">
      <LinkContainer14 />
    </div>
  );
}

function LinkContainer15() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0" data-name="_ / Link / Container">
      <p className="basis-0 font-['Centra_No2:Regular',sans-serif] grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#3662d8] text-[12px]">Term of use</p>
    </div>
  );
}

function LinkStandard15() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Link / Standard">
      <LinkContainer15 />
    </div>
  );
}

function LinkContainer16() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0" data-name="_ / Link / Container">
      <p className="basis-0 font-['Centra_No2:Regular',sans-serif] grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#3662d8] text-[12px]">Verbo terms and conditions</p>
    </div>
  );
}

function LinkStandard16() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Link / Standard">
      <LinkContainer16 />
    </div>
  );
}

function LinkContainer17() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0" data-name="_ / Link / Container">
      <p className="basis-0 font-['Centra_No2:Regular',sans-serif] grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#3662d8] text-[12px]">Expedia Rewards Terms</p>
    </div>
  );
}

function LinkStandard17() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Link / Standard">
      <LinkContainer17 />
    </div>
  );
}

function LinkContainer18() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0" data-name="_ / Link / Container">
      <p className="basis-0 font-['Centra_No2:Regular',sans-serif] grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#3662d8] text-[12px]">Accessibility</p>
    </div>
  );
}

function LinkStandard18() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Link / Standard">
      <LinkContainer18 />
    </div>
  );
}

function LinkContainer19() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0" data-name="_ / Link / Container">
      <p className="basis-0 font-['Centra_No2:Regular',sans-serif] grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#3662d8] text-[12px]">Do not sell my personal information</p>
    </div>
  );
}

function LinkStandard19() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Link / Standard">
      <LinkContainer19 />
    </div>
  );
}

function Column2() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[12px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Column">
      <Heading10 />
      <LinkStandard14 />
      <LinkStandard15 />
      <LinkStandard16 />
      <LinkStandard17 />
      <LinkStandard18 />
      <LinkStandard19 />
    </div>
  );
}

function Heading11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading">
      <p className="font-['Centra_No2:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#141d38] text-[14px] w-full">Help</p>
    </div>
  );
}

function LinkContainer20() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0" data-name="_ / Link / Container">
      <p className="basis-0 font-['Centra_No2:Regular',sans-serif] grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#3662d8] text-[12px]">Support</p>
    </div>
  );
}

function LinkStandard20() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Link / Standard">
      <LinkContainer20 />
    </div>
  );
}

function LinkContainer21() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0" data-name="_ / Link / Container">
      <p className="basis-0 font-['Centra_No2:Regular',sans-serif] grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#3662d8] text-[12px]">Cancel your hotel or vacation rental booking</p>
    </div>
  );
}

function LinkStandard21() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Link / Standard">
      <LinkContainer21 />
    </div>
  );
}

function LinkContainer22() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0" data-name="_ / Link / Container">
      <p className="basis-0 font-['Centra_No2:Regular',sans-serif] grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#3662d8] text-[12px]">Cancel your flight</p>
    </div>
  );
}

function LinkStandard22() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Link / Standard">
      <LinkContainer22 />
    </div>
  );
}

function LinkContainer23() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0" data-name="_ / Link / Container">
      <p className="basis-0 font-['Centra_No2:Regular',sans-serif] grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#3662d8] text-[12px] whitespace-pre-wrap">{`Refund timelines,  policies & processes`}</p>
    </div>
  );
}

function LinkStandard23() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Link / Standard">
      <LinkContainer23 />
    </div>
  );
}

function LinkContainer24() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0" data-name="_ / Link / Container">
      <p className="basis-0 font-['Centra_No2:Regular',sans-serif] grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#3662d8] text-[12px]">Use an Expedia coupon</p>
    </div>
  );
}

function LinkStandard24() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Link / Standard">
      <LinkContainer24 />
    </div>
  );
}

function LinkContainer25() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0" data-name="_ / Link / Container">
      <p className="basis-0 font-['Centra_No2:Regular',sans-serif] grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#3662d8] text-[12px]">International travel documents</p>
    </div>
  );
}

function LinkStandard25() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Link / Standard">
      <LinkContainer25 />
    </div>
  );
}

function Column3() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[12px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Column">
      <Heading11 />
      <LinkStandard20 />
      <LinkStandard21 />
      <LinkStandard22 />
      <LinkStandard23 />
      <LinkStandard24 />
      <LinkStandard25 />
    </div>
  );
}

function Links() {
  return (
    <div className="basis-0 content-stretch flex gap-[12px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Links">
      <Column />
      <Column1 />
      <Column2 />
      <Column3 />
    </div>
  );
}

function Footer() {
  return (
    <div className="content-stretch flex gap-[40px] items-start relative shrink-0 w-full" data-name="Footer">
      <GlobalNavigationHeaderLogo />
      <Links />
    </div>
  );
}

function Divider() {
  return (
    <div className="h-px relative shrink-0 w-full" data-name="Divider">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1676 1">
        <g id="Divider">
          <line id="Line 1" stroke="var(--stroke-0, #D7D4D2)" x2="1676" y1="0.5" y2="0.5" />
        </g>
      </svg>
    </div>
  );
}

function Text40() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Text">
      <p className="basis-0 font-['Centra_No2:Regular',sans-serif] grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#343b53] text-[12px] text-center">Expedia is not responsible for content on external Web sites.</p>
    </div>
  );
}

function Text41() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Text">
      <p className="basis-0 font-['Centra_No2:Regular',sans-serif] grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#343b53] text-[12px] text-center">{`© 2022 Expedia, Inc., an Expedia Group company. All rights reserved. Expedia and the Airplane Logo are trademarks or registered trademarks of Expedia, Inc. CST# 2029030-50, `}</p>
    </div>
  );
}

function LegalCopy() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-full" data-name="Legal Copy">
      <Text40 />
      <Text41 />
    </div>
  );
}

function LodgingComponentGlobalFooter() {
  return (
    <div className="absolute bg-[#f4f6fc] box-border content-stretch flex flex-col gap-[24px] items-start left-0 pb-[48px] pt-[24px] px-[24px] top-[2048px] w-[1724px]" data-name="Lodging / Component / Global footer">
      <Footer />
      <Divider />
      <LegalCopy />
    </div>
  );
}

function ButtonIcon1() {
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
      <ButtonIcon1 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="absolute content-stretch flex gap-[12px] items-center left-[23.5px] top-[20px]">
      <p className="font-['Centra_No2:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.75)] text-center text-nowrap whitespace-pre">“Cozy cabin with a fireplace and mountain view”</p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="bg-white h-[58px] relative rounded-[32px] shrink-0 w-[705px]">
      <div className="h-[58px] overflow-clip relative rounded-[inherit] w-[705px]">
        <ButtonContainer />
        <Frame10 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.15)] border-solid inset-[-1px] pointer-events-none rounded-[33px] shadow-[0px_5px_15px_0px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Frame40() {
  return (
    <div className="absolute bg-gradient-to-t box-border content-stretch flex from-50% from-[#ffffff] gap-[16px] items-center justify-center left-[-1px] overflow-clip px-[24px] py-[32px] to-[97.368%] to-[rgba(255,255,255,0)] top-[800px] w-[1725px]">
      <Frame11 />
    </div>
  );
}

function GlobalNavigationHeaderLogo1() {
  return (
    <div className="h-[28px] relative shrink-0 w-[90px]" data-name="⚙️Global navigation / Header logo">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 90 28">
        <g id="âï¸Global navigation / Header logo">
          <path clipRule="evenodd" d={svgPaths.p3824c600} fill="var(--fill-0, #0E214B)" fillRule="evenodd" id="Logo" />
        </g>
      </svg>
    </div>
  );
}

function LeftColumn() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-name="Left column">
      <GlobalNavigationHeaderLogo1 />
    </div>
  );
}

function GlobalNavigationButtonIcon() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="_ Global navigation / Button / Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="âï¸ Icon">
          <path d={svgPaths.p36bb0200} fill="var(--fill-0, #191E3B)" id="Glyph" />
        </g>
      </svg>
    </div>
  );
}

function GlobalNavigationButtonLabel() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0" data-name="_ Global navigation / Button / Label">
      <p className="font-['Centra_No2:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#191e3b] text-[16px] text-center text-nowrap whitespace-pre">English</p>
    </div>
  );
}

function GlobalNavigationButtonContainer() {
  return (
    <div className="bg-[rgba(255,255,255,0)] box-border content-stretch flex gap-[8px] items-center justify-center px-[8px] py-[14px] relative rounded-[40000px] shrink-0" data-name="_ Global navigation / Button / Container">
      <GlobalNavigationButtonIcon />
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
      <p className="font-['Centra_No2:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#191e3b] text-[16px] text-center text-nowrap whitespace-pre">List your property</p>
    </div>
  );
}

function GlobalNavigationButtonContainer1() {
  return (
    <div className="bg-[rgba(255,255,255,0)] box-border content-stretch flex gap-[8px] items-center justify-center px-[8px] py-[14px] relative rounded-[40000px] shrink-0" data-name="_ Global navigation / Button / Container">
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

function GlobalNavigationButtonLabel2() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0" data-name="_ Global navigation / Button / Label">
      <p className="font-['Centra_No2:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#191e3b] text-[16px] text-center text-nowrap whitespace-pre">Support</p>
    </div>
  );
}

function GlobalNavigationButtonContainer2() {
  return (
    <div className="bg-[rgba(255,255,255,0)] box-border content-stretch flex gap-[8px] items-center justify-center px-[8px] py-[14px] relative rounded-[40000px] shrink-0" data-name="_ Global navigation / Button / Container">
      <GlobalNavigationButtonLabel2 />
    </div>
  );
}

function GlobalNavigationButtonTertiaryStandard2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Global navigation / Button / Tertiary / Standard">
      <GlobalNavigationButtonContainer2 />
    </div>
  );
}

function GlobalNavigationButtonLabel3() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0" data-name="_ Global navigation / Button / Label">
      <p className="font-['Centra_No2:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#191e3b] text-[16px] text-center text-nowrap whitespace-pre">Trips</p>
    </div>
  );
}

function GlobalNavigationButtonContainer3() {
  return (
    <div className="bg-[rgba(255,255,255,0)] box-border content-stretch flex gap-[8px] items-center justify-center px-[8px] py-[14px] relative rounded-[40000px] shrink-0" data-name="_ Global navigation / Button / Container">
      <GlobalNavigationButtonLabel3 />
    </div>
  );
}

function GlobalNavigationButtonTertiaryStandard3() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Global navigation / Button / Tertiary / Standard">
      <GlobalNavigationButtonContainer3 />
    </div>
  );
}

function GlobalNavigationButtonLabel4() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0" data-name="_ Global navigation / Button / Label">
      <p className="font-['Centra_No2:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#191e3b] text-[16px] text-center text-nowrap whitespace-pre">Sign in</p>
    </div>
  );
}

function GlobalNavigationButtonContainer4() {
  return (
    <div className="bg-[rgba(255,255,255,0)] box-border content-stretch flex gap-[8px] items-center justify-center px-[8px] py-[14px] relative rounded-[40000px] shrink-0" data-name="_ Global navigation / Button / Container">
      <GlobalNavigationButtonLabel4 />
    </div>
  );
}

function GlobalNavigationButtonTertiaryStandard4() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Global navigation / Button / Tertiary / Standard">
      <GlobalNavigationButtonContainer4 />
    </div>
  );
}

function RightColumn() {
  return (
    <div className="basis-0 content-stretch flex gap-[16px] grow items-start justify-end min-h-px min-w-px relative shrink-0" data-name="Right column">
      <GlobalNavigationButtonTertiaryStandard />
      <GlobalNavigationButtonTertiaryStandard1 />
      <GlobalNavigationButtonTertiaryStandard2 />
      <GlobalNavigationButtonTertiaryStandard3 />
      <GlobalNavigationButtonTertiaryStandard4 />
    </div>
  );
}

function GlobalNavigationPrimary() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="🌈 Global navigation / Primary">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center px-[24px] py-0 relative w-full">
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
    <div className="bg-white content-stretch flex h-[64px] items-center overflow-clip relative shrink-0 w-full" data-name="_ Global navigation / Row / Primary / Medium">
      <GlobalNavigationPrimary />
      <MinHeight />
    </div>
  );
}

function GlobalNavigationNavBar() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-0 w-[1724px]" data-name="Global navigation / Nav bar">
      <GlobalNavigationRowPrimaryMedium />
    </div>
  );
}

export default function Search2() {
  return (
    <div className="bg-white overflow-clip relative rounded-[24px] size-full" data-name="Search">
      <GlobalNavigationNavBar />
      <MaxWrapper />
      <Controls />
      <LodgingComponentGlobalFooter />
      <Frame40 />
    </div>
  );
}