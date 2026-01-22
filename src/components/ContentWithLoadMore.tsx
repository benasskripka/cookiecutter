import { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import svgPaths from "../imports/svg-guroeiypcj";
import svgPathsPill from "../imports/svg-ujtb498f3x";
import svgPathsFooter from "../imports/svg-x8ycsi1j6p";
import { Property } from "../data/properties";
import { PropertyCard } from "./PropertyCard";
import { SearchLoader } from "./SearchLoader";

function FooterIcon() {
  return (
    <div className="relative size-[20.21px]">
      <div className="absolute aspect-[20/18] left-[8.33%] right-[8.33%] top-[calc(50%-0.11px)] translate-y-[-50%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 16.8417 15.1575"
        >
          <path
            clipRule="evenodd"
            d={svgPathsFooter.pf6fab00}
            fill="var(--fill-0, #191E3B)"
            fillRule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
}

function SuggestionsFooter({ count, onResetFilters }: { count: number; onResetFilters?: () => void }) {
  const countText =
    count === 0
      ? "no"
      : count === 1
        ? "one"
        : count === 2
          ? "two"
          : count === 3
            ? "three"
            : count.toString();
  const optionText = count === 1 ? "option" : "options";

  return (
    <div className="flex flex-col items-start w-full">
      <h3 className="font-['CentraNo2',sans-serif] font-medium leading-[20px] text-[18px] text-[#191e3b] mb-2">
        Suggestion
      </h3>
      <p className="font-['CentraNo2',sans-serif] leading-[24px] text-[#191e3b] text-[16px] tracking-[-0.32px] max-w-[662px] mb-6">
        I found {countText} great {optionText}, but there are
        also some great matches just in the neighbouring islands
        —would you like to see them?
      </p>

      <div className="flex flex-wrap gap-2 items-center">
        {/* Not this time / See all results */}
        <button 
          className="bg-[#f2f8fd] flex items-center px-[24px] py-[16px] rounded-[32px] hover:bg-[#e5f2fb] transition-colors"
          onClick={count === 0 ? onResetFilters : undefined}
        >
          <span className="font-['CentraNo2',sans-serif] font-medium text-[#191e3b] text-[14px] leading-[1.25]">
            {count === 0 ? "See all results" : "Not this time"}
          </span>
        </button>

        {/* Kauaʻi */}
        <button className="bg-[#f2f8fd] flex gap-[8px] items-center px-[24px] py-[16px] rounded-[32px] hover:bg-[#e5f2fb] transition-colors">
          <div className="flex items-center justify-center w-[20px]">
            <FooterIcon />
          </div>
          <span className="font-['CentraNo2',sans-serif] font-medium text-[#191e3b] text-[14px] leading-[1.25]">
            Kauaʻi (+3)
          </span>
        </button>

        {/* Oʻahu */}
        <button className="bg-[#f2f8fd] flex gap-[8px] items-center px-[24px] py-[16px] rounded-[32px] hover:bg-[#e5f2fb] transition-colors">
          <div className="flex items-center justify-center w-[20px]">
            <FooterIcon />
          </div>
          <span className="font-['CentraNo2',sans-serif] font-medium text-[#191e3b] text-[14px] leading-[1.25]">
            Oʻahu (+15)
          </span>
        </button>
      </div>
    </div>
  );
}

function InputIconLeft() {
  return (
    <div
      className="relative size-[20.21px]"
      data-name="_ / Input / Icon left"
    >
      <div
        className="absolute aspect-[21.2274/20] left-[8.33%] right-[3.22%] top-[calc(50%-0.95px)] translate-y-[-50%]"
        data-name="Glyph"
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 18 17"
        >
          <path
            clipRule="evenodd"
            d={svgPathsPill.p1dfd7800}
            fill="var(--fill-0, #191E3B)"
            fillRule="evenodd"
            id="Glyph"
          />
        </svg>
      </div>
    </div>
  );
}

function InputIconLeft1() {
  return (
    <div
      className="relative size-[20.21px]"
      data-name="_ / Input / Icon left"
    >
      <div
        className="absolute aspect-[19.2939/18] left-[9.8%] right-[9.8%] top-[calc(50%-0.1px)] translate-y-[-50%]"
        data-name="Glyph"
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 17 16"
        >
          <g id="Glyph">
            <path
              d={svgPaths.p14a4ab80}
              fill="var(--fill-0, #191E3B)"
            />
            <path
              d={svgPaths.p1d333680}
              fill="var(--fill-0, #191E3B)"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

function InputIconLeft2() {
  return (
    <div
      className="relative size-[20.21px]"
      data-name="_ / Input / Icon left"
    >
      <div
        className="absolute aspect-[21.2274/20] left-[3.22%] right-[8.33%] top-[calc(50%+0.74px)] translate-y-[-50%]"
        data-name="Glyph"
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 18 17"
        >
          <path
            clipRule="evenodd"
            d={svgPaths.p346f1300}
            fill="var(--fill-0, #191E3B)"
            fillRule="evenodd"
            id="Glyph"
          />
        </svg>
      </div>
    </div>
  );
}

export function ContentWithLoadMore({
  properties,
  loading,
  query,
  hasMore,
  onLoadMore,
  totalCount,
  autoLoadKey,
  onResetFilters,
  dynamicDescription = "",
}: {
  properties: Property[];
  loading: boolean;
  query: string;
  hasMore: boolean;
  onLoadMore: () => void;
  totalCount?: number;
  autoLoadKey?: string | number; // Changes when search changes to reset auto-load state
  onResetFilters?: () => void;
  dynamicDescription?: string; // AI-generated description passed from parent
}) {
  // Split data into sections
  const bestMatches = properties.slice(0, 4);
  const remainingMatches = properties.slice(4);
  
  // Auto-load state
  const [hasAutoLoaded, setHasAutoLoaded] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);
  // Track the count of properties before auto-load to animate new ones
  const countBeforeAutoLoadRef = useRef<number>(0);
  // Track whether load was triggered by scroll or button ('scroll' | 'button')
  const loadTriggerRef = useRef<'scroll' | 'button'>('scroll');
  
  // Reset auto-load state when autoLoadKey changes (new search)
  useEffect(() => {
    setHasAutoLoaded(false);
    countBeforeAutoLoadRef.current = 0;
    loadTriggerRef.current = 'scroll';
  }, [autoLoadKey]);
  
  // IntersectionObserver to auto-load when sentinel is visible
  useEffect(() => {
    if (loading || !hasMore || hasAutoLoaded) return;
    
    const sentinel = sentinelRef.current;
    if (!sentinel) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAutoLoaded) {
          // Store current count before loading more
          countBeforeAutoLoadRef.current = properties.length;
          loadTriggerRef.current = 'scroll';
          setHasAutoLoaded(true);
          onLoadMore();
        }
      },
      {
        root: null,
        rootMargin: "100px", // Trigger slightly before reaching the bottom
        threshold: 0,
      }
    );
    
    observer.observe(sentinel);
    
    return () => {
      observer.disconnect();
    };
  }, [loading, hasMore, hasAutoLoaded, onLoadMore, properties.length]);
  
  // Handle button-triggered load more
  const handleButtonLoadMore = () => {
    countBeforeAutoLoadRef.current = properties.length;
    loadTriggerRef.current = 'button';
    onLoadMore();
  };

  return (
    <div
      className="relative size-full overflow-y-auto"
      data-name="Content"
    >
      <div className="min-h-full w-full">
        <div className="box-border content-stretch flex flex-col gap-[32px] items-start p-[24px] relative min-h-full w-full">
          {loading ? (
            <div className="flex items-center justify-center w-full h-[400px]">
              <SearchLoader />
            </div>
          ) : (
            <>
              {/* Section 1: Best matches */}
              <div className="flex flex-col gap-[16px] w-full shrink-0">
                <div className="flex flex-col gap-[4px] w-full">
                  <p className="font-['CentraNo2',sans-serif] leading-[18px] text-[14px] text-[#676a7d] pb-[8px]">
                    {totalCount || properties.length} results
                  </p>
                  {properties.length >= 4 && (
                    <>
                      <h2 className="font-['CentraNo2',sans-serif] font-medium leading-[20px] text-[18px] text-[#191e3b]">
                        Top results
                      </h2>
                      {dynamicDescription ? (
                        <p className="font-['CentraNo2',sans-serif] leading-[18px] text-[14px] text-[#676a7d] animate-in fade-in duration-300">
                          {dynamicDescription}
                        </p>
                      ) : (
                        <div className="h-[18px] w-[80%] max-w-[500px] bg-gray-100 rounded animate-pulse" />
                      )}
                    </>
                  )}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px] w-full">
                  {bestMatches.map((property, index) => (
                    <PropertyCard
                      key={property.id}
                      property={property}
                      index={index}
                      showDescription={properties.length < 4}
                    />
                  ))}
                </div>
              </div>

              {/* Section 2: Remaining results */}
              {remainingMatches.length > 0 && (
                <div className="flex flex-col gap-[16px] w-full shrink-0">
                  <div className="flex flex-col gap-[4px] w-full">
                    <h2 className="font-['CentraNo2',sans-serif] font-medium leading-[20px] text-[18px] text-[#191e3b]">
                      Remaining results
                    </h2>
                    <p className="font-['CentraNo2',sans-serif] leading-[18px] text-[14px] text-[#676a7d]">
                      Highly relevant matches based on your
                      preferences.
                    </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px] w-full">
                    {remainingMatches.map((property, index) => {
                      const globalIndex = index + 4;
                      const isNewFromLoad = countBeforeAutoLoadRef.current > 0 && globalIndex >= countBeforeAutoLoadRef.current;
                      
                      if (isNewFromLoad) {
                        // Calculate stagger delay based on position within new batch
                        const positionInNewBatch = globalIndex - countBeforeAutoLoadRef.current;
                        // Faster animation for button-triggered loads
                        const isButtonTriggered = loadTriggerRef.current === 'button';
                        const duration = isButtonTriggered ? 0.2 : 0.4;
                        const staggerDelay = isButtonTriggered ? 0.03 : 0.08;
                        
                        return (
                          <motion.div
                            key={property.id}
                            initial={{ opacity: 0, y: isButtonTriggered ? 12 : 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ 
                              duration, 
                              ease: "easeOut",
                              delay: positionInNewBatch * staggerDelay
                            }}
                          >
                            <PropertyCard
                              property={property}
                              index={globalIndex}
                            />
                          </motion.div>
                        );
                      }
                      
                      return (
                        <PropertyCard
                          key={property.id}
                          property={property}
                          index={globalIndex}
                        />
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Suggestions Footer for low results */}
              {properties.length < 4 && (
                <SuggestionsFooter count={properties.length} onResetFilters={onResetFilters} />
              )}
            </>
          )}

          {/* Sentinel for auto-loading - placed before load more section */}
          {hasMore && !loading && !hasAutoLoaded && (
            <div ref={sentinelRef} className="w-full h-1" aria-hidden="true" />
          )}

          {/* Load more section - only show after auto-load has triggered */}
          {hasMore && !loading && hasAutoLoaded && (
            <div className="box-border content-stretch flex flex-col gap-[16px] items-start pb-[120px] pt-[16px] px-0 relative shrink-0 w-full">
              <h2 className="font-['CentraNo2',sans-serif] font-medium leading-[20px] text-[18px] text-[#191e3b]">
                Load more results
              </h2>

              <div className="content-stretch flex flex-wrap gap-[8px] items-center relative shrink-0">
                {/* More like this button */}
                <button
                  onClick={handleButtonLoadMore}
                  className="bg-[#f2f8fd] box-border content-stretch flex gap-[8px] items-center overflow-clip px-[24px] py-[16px] relative rounded-[32px] shrink-0 cursor-pointer hover:bg-[#e5f2fb] transition-colors"
                >
                  <div className="flex h-[18.773px] items-center justify-center relative shrink-0 w-[20.03px]">
                    <InputIconLeft />
                  </div>
                  <div className="flex flex-col font-['CentraNo2',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#191e3b] text-[14px] text-nowrap">
                    <p className="leading-[1.25] whitespace-pre">
                      More like this
                    </p>
                  </div>
                </button>

                {/* Try different button */}
                <button
                  onClick={handleButtonLoadMore}
                  className="bg-[#f2f8fd] box-border content-stretch flex gap-[8px] items-center overflow-clip px-[24px] py-[16px] relative rounded-[32px] shrink-0 cursor-pointer hover:bg-[#e5f2fb] transition-colors"
                >
                  <div className="flex h-[18.773px] items-center justify-center relative shrink-0 w-[20.03px]">
                    <InputIconLeft1 />
                  </div>
                  <div className="flex flex-col font-['CentraNo2',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#191e3b] text-[14px] text-nowrap">
                    <p className="leading-[1.25] whitespace-pre">
                      Try different
                    </p>
                  </div>
                </button>

                {/* Not quite right button */}
                <button
                  onClick={handleButtonLoadMore}
                  className="bg-[#f2f8fd] box-border content-stretch flex gap-[8px] items-center overflow-clip px-[24px] py-[16px] relative rounded-[32px] shrink-0 cursor-pointer hover:bg-[#e5f2fb] transition-colors"
                >
                  <div className="flex h-[18.773px] items-center justify-center relative shrink-0 w-[20.03px]">
                    <InputIconLeft2 />
                  </div>
                  <div className="flex flex-col font-['CentraNo2',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#191e3b] text-[14px] text-nowrap">
                    <p className="leading-[1.25] whitespace-pre">
                      Not quite right
                    </p>
                  </div>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}