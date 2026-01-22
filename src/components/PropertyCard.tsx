import svgPaths from "../imports/svg-guroeiypcj";
import { Property } from "../data/properties";

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

export function PropertyCard({ property, index, className }: { property: Property; index: number; className?: string }) {
  return (
    <div className={`basis-0 content-stretch flex flex-col grow min-h-px min-w-px overflow-clip relative shrink-0 ${className || ''}`}>
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
        <div className="aspect-[1.83/1] overflow-clip relative w-full">
          <div className="relative size-full rounded-[1px]">
            <img
              alt={property.title}
              className="absolute inset-0 max-w-none object-center object-cover pointer-events-none size-full rounded-[16px]"
              src={property.images[0]}
              onError={(e) => {
                e.currentTarget.src = "https://images.unsplash.com/photo-1615044841895-9c576f5b5400?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080";
              }}
            />
            {/* Favorite button */}
            <div className="absolute content-stretch flex items-start justify-end left-0 right-0 top-0">
              <div className="content-stretch flex items-start justify-end relative shrink-0">
                <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 size-[48px]">
                  <div className="bg-white content-stretch flex items-center justify-center overflow-clip relative rounded-[40000px] shrink-0 size-[32px]">
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
                    <p className="font-['Centra_No2:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-white">
                      {property.badge}
                    </p>
                  </div>
                </div>
              </div>
            )}
            {/* Image dots */}
            <div className="absolute h-[24px] left-1/2 bottom-[12px] translate-x-[-50%] w-[72px]">
              <div className="absolute inset-0">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 72 24">
                  <path d={svgPaths.p33772a80} fill="#191E3B" opacity="0.75" />
                </svg>
              </div>
              <div className="absolute content-stretch flex items-center justify-center left-1/2 top-0 translate-x-[-50%] h-full gap-[0px]">
                {[0, 1, 2, 3, 4].map((dot, i) => (
                  <div key={i} className="h-[24px] w-[12px] flex items-center justify-center">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 24">
                      <circle 
                        cx="6" 
                        cy="12" 
                        fill="white" 
                        opacity={i === index % 5 ? 1 : 0.5} 
                        r={i === index % 5 ? 4 : (i === 4 ? 2 : 3)} 
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
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
        <div className="size-full">
          <div className="box-border content-stretch flex flex-col gap-[6px] items-end justify-end px-[8px] py-[16px] relative w-full">
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
              <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
                <div className="flex items-start justify-between w-full gap-[8px]">
                  <p className="font-['Centra_No2:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#191e3b] text-[16px] flex-1 overflow-hidden text-ellipsis whitespace-nowrap">
                    {property.title}
                  </p>
                  <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
                    <p className="font-['Centra_No2:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#676a7d] text-[14px] text-nowrap whitespace-pre">
                      ({property.reviews})
                    </p>
                    <div className="bg-[#00754a] box-border content-stretch flex items-center overflow-clip px-[4px] py-[2px] relative rounded-[4px] shrink-0">
                      <p className="font-['Centra_No2:Medium',sans-serif] leading-[14px] not-italic relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre">
                        {property.rating}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full">
                  <p className="font-['Centra_No2:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#676a7d] text-[14px] text-nowrap whitespace-pre">
                    {property.type} · {property.bedrooms} bedrooms · {property.beds} beds
                  </p>
                </div>

                <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full">
                  <p className="font-['Centra_No2:Regular',sans-serif] leading-[18px] not-italic relative text-[rgb(25,30,59)] text-[14px] whitespace-normal">
                    {property.highlight?.split(';').map(t => t.trim()).join(' · ')}
                  </p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full">
              <div className="content-stretch flex gap-[8px] items-center justify-start relative shrink-0 w-full">
                <div className="content-stretch flex flex-col gap-[2px] items-start justify-start relative shrink-0">
                  {property.discount && (
                    <div className="bg-[#e5f5ed] box-border content-stretch flex items-center overflow-clip px-[8px] py-[2px] relative rounded-[4px] shrink-0">
                      <p className="font-['Centra_No2:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#00754a] text-[12px] text-nowrap whitespace-pre">
                        {property.discount}
                      </p>
                    </div>
                  )}
                  <div className="content-stretch flex gap-[4px] items-baseline relative shrink-0">
                    {property.originalPrice && (
                      <p className="font-['Centra_No2:Regular',sans-serif] leading-[18px] line-through not-italic relative shrink-0 text-[#676a7d] text-[14px] text-nowrap whitespace-pre">
                        {property.originalPrice}
                      </p>
                    )}
                    <p className="font-['Centra_No2:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#191e3b] text-[18px] text-nowrap whitespace-pre">
                      ${property.price}
                    </p>
                    <p className="font-['Centra_No2:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#676a7d] text-[14px] text-nowrap text-left whitespace-pre">
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
