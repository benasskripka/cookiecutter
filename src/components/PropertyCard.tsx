import svgPaths from "../imports/svg-guroeiypcj";
import { Property } from "../data/properties";

function IconGlyphFavoriteBorder() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon glyph / favorite_border">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24" style={{ filter: "none" }}>
        <g id="Icon glyph / favorite_border">
          <path clipRule="evenodd" d={svgPaths.p2b64aa80} fill="#FFFFFF" fillRule="evenodd" id="Glyph" />
        </g>
      </svg>
    </div>
  );
}

export function PropertyCard({ property, index, className, showDescription }: { property: Property; index: number; className?: string; showDescription?: boolean }) {
  const highlightTags = property.highlight
    ? property.highlight.split(";").map((tag) => tag.trim()).filter(Boolean)
    : [];

  return (
    <div className={`basis-0 content-stretch flex flex-col grow min-h-px min-w-px overflow-clip relative shrink-0 ${className || ""}`}>
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
        <div className="aspect-[1.83/1] overflow-clip relative w-full rounded-[24px]">
          <div className="relative size-full rounded-[24px] overflow-clip">
            <img
              alt={property.title}
              className="absolute inset-0 max-w-none object-center object-cover pointer-events-none size-full rounded-[24px]"
              src={property.images[0]}
              onError={(e) => {
                e.currentTarget.src = "https://images.unsplash.com/photo-1615044841895-9c576f5b5400?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080";
              }}
            />
            {/* Favorite button */}
            <div className="absolute content-stretch flex items-start justify-end left-0 right-0 top-0">
              <div className="content-stretch flex items-start justify-end relative shrink-0">
                <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 size-[48px]">
                  <div
                    className="content-stretch flex items-center justify-center overflow-hidden relative rounded-full shrink-0 size-[32px]"
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.6)", backdropFilter: "blur(5px)", WebkitBackdropFilter: "blur(5px)" }}
                  >
                    <IconGlyphFavoriteBorder />
                  </div>
                </div>
              </div>
            </div>
            {/* Badge */}
            {property.badge && (
              <div className="absolute top-[12px] left-[12px]">
                <div className="flex items-start justify-start relative shrink-0">
                  <div className="bg-[#191e3b] content-stretch flex items-start overflow-clip px-[12px] py-[6px] relative rounded-[8px] shrink-0">
                    <p className="font-['CentraNo2',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-white">
                      {property.badge}
                    </p>
                  </div>
                </div>
              </div>
            )}
            {/* Image dots */}
            <div className="absolute h-[24px] left-1/2 bottom-[12px] translate-x-[-50%] w-[72px]">
              <div
                className="absolute inset-0 rounded-full overflow-hidden"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.6)", backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)" }}
              />
              <div className="absolute content-stretch flex items-center justify-center left-1/2 top-0 translate-x-[-50%] h-full gap-[0px]">
                {[0, 1, 2, 3, 4].map((dot, i) => (
                  <div key={i} className="h-[24px] w-[12px] flex items-center justify-center">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 24">
                      <circle
                        cx="6"
                        cy="12"
                        fill="white"
                        opacity={i === 0 ? 1 : 0.5}
                        r={i === 0 ? 4 : (i === 4 ? 2 : 3)}
                      />
                    </svg>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Content section */}
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full bg-white">
        <div className="size-full">
          <div className="box-border content-stretch flex flex-col gap-[8px] items-start px-[8px] py-[16px] relative w-full">
                <div className="flex items-start justify-between w-full gap-[8px]">
                  <p className="font-['CentraNo2',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#191e3b] text-[16px] flex-1 overflow-hidden text-ellipsis whitespace-nowrap">
                    {property.title}
                  </p>
                  <div className="content-stretch flex gap-[6px] items-center relative shrink-0">
                    <p className="font-['CentraNo2',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#676a7d] text-[14px] text-nowrap whitespace-pre">
                      ({property.reviews})
                    </p>
                    <div className="box-border content-stretch flex items-center overflow-clip px-[6px] py-[2px] relative rounded-[4px] shrink-0" style={{ backgroundColor: '#D1FAE1' }}>
                      <p className="font-['CentraNo2',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap whitespace-pre" style={{ color: '#191E3B', padding: '0 6px' }}>
                        {property.rating}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full">
                  <p className="font-['CentraNo2',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#191e3b] text-[14px] text-nowrap whitespace-pre">
                    {property.type} · {property.bedrooms} bedrooms · {property.beds} beds
                  </p>
                </div>
                {showDescription && property.description ? (
                  <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full">
                    <p className="font-['CentraNo2',sans-serif] leading-[18px] not-italic relative text-[#191e3b] text-[14px] whitespace-normal">
                      {property.description}
                    </p>
                  </div>
                ) : highlightTags.length > 0 ? (
                  <div className="content-stretch flex gap-[10px] items-start justify-end relative shrink-0 w-full">
                    <div className="content-start flex flex-[1_0_0] flex-wrap gap-[8px] items-start min-h-px min-w-px overflow-clip relative">
                      {highlightTags.slice(0, 3).map((tag, tagIndex) => (
                        <div key={`${tag}-${tagIndex}`} className="content-stretch flex items-center px-[12px] py-[6px] relative rounded-[8px] shrink-0" style={{ backgroundColor: '#F8F6F2' }}>
                          <p className="font-['CentraNo2',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px]" style={{ color: '#191E3B' }}>
                            {tag}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : null}
            <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full">
              <div className="content-stretch flex gap-[8px] items-center justify-start relative shrink-0 w-full">
                <div className="content-stretch flex flex-col gap-[2px] items-start justify-start relative shrink-0">
                  {property.discount && (
                    <div className="bg-[#e5f5ed] box-border content-stretch flex items-center overflow-clip px-[8px] py-[2px] relative rounded-[4px] shrink-0">
                      <p className="font-['CentraNo2',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#00754a] text-[12px] text-nowrap whitespace-pre">
                        {property.discount}
                      </p>
                    </div>
                  )}
                  <div className="content-stretch flex gap-[4px] items-baseline relative shrink-0">
                    {property.originalPrice && (
                      <p className="font-['CentraNo2',sans-serif] leading-[18px] line-through not-italic relative shrink-0 text-[#676a7d] text-[14px] text-nowrap whitespace-pre">
                        {property.originalPrice}
                      </p>
                    )}
                    <p className="font-['CentraNo2',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#191e3b] text-[18px] text-nowrap whitespace-pre">
                      ${property.price}
                    </p>
                    <p className="font-['CentraNo2',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#676a7d] text-[14px] text-nowrap text-left whitespace-pre">
                      · {property.totalPrice} total
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
