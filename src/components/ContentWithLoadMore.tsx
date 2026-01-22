import { useState, useEffect } from "react";
import svgPaths from "../imports/svg-guroeiypcj";
import svgPathsPill from "../imports/svg-ujtb498f3x";
import svgPathsInput from "../imports/svg-ab2pa14a0g";
import svgPathsFooter from "../imports/svg-x8ycsi1j6p";
import { Property } from "../data/properties";
import { PropertyCard } from "./PropertyCard";
import { SearchLoader } from "./SearchLoader";
import { projectId, publicAnonKey } from "../utils/supabase/info";

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

function SuggestionsFooter({ count }: { count: number }) {
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
    <div className="flex flex-col items-start w-full mt-8 mb-12">
      <h3 className="font-['Centra_No2:Medium',sans-serif] leading-[20px] text-[18px] text-[#191e3b] mb-2">
        Suggestion
      </h3>
      <p className="font-['Centra_No2:Regular',sans-serif] leading-[24px] text-[#191e3b] text-[16px] tracking-[-0.32px] max-w-[662px] mb-6">
        I found {countText} great {optionText}, but there are
        also some great matches just in the neighbouring islands
        —would you like to see them?
      </p>

      <div className="flex flex-wrap gap-2 items-center">
        {/* Not this time */}
        <button className="bg-[#f2f8fd] flex items-center px-[24px] py-[16px] rounded-[32px] hover:bg-[#e5f2fb] transition-colors">
          <span className="font-['Centra_No2:Medium',sans-serif] text-[#191e3b] text-[14px] leading-[1.25]">
            Not this time
          </span>
        </button>

        {/* Kauaʻi */}
        <button className="bg-[#f2f8fd] flex gap-[8px] items-center px-[24px] py-[16px] rounded-[32px] hover:bg-[#e5f2fb] transition-colors">
          <div className="flex items-center justify-center w-[20px]">
            <FooterIcon />
          </div>
          <span className="font-['Centra_No2:Medium',sans-serif] text-[#191e3b] text-[14px] leading-[1.25]">
            Kauaʻi (+3)
          </span>
        </button>

        {/* Oʻahu */}
        <button className="bg-[#f2f8fd] flex gap-[8px] items-center px-[24px] py-[16px] rounded-[32px] hover:bg-[#e5f2fb] transition-colors">
          <div className="flex items-center justify-center w-[20px]">
            <FooterIcon />
          </div>
          <span className="font-['Centra_No2:Medium',sans-serif] text-[#191e3b] text-[14px] leading-[1.25]">
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
}: {
  properties: Property[];
  loading: boolean;
  query: string;
  hasMore: boolean;
  onLoadMore: () => void;
  totalCount?: number;
}) {
  // Split data into sections
  const bestMatches = properties.slice(0, 4);
  const remainingMatches = properties.slice(4);

  const [dynamicDescription, setDynamicDescription] = useState("The highlighted Maui rentals stand out for great locations, authentic island charm, and easy comforts like kitchens and parking.");

  useEffect(() => {
    if (properties.length === 0) return;

    // Default immediate update based on basic heuristics (instant feedback)
    // This runs first so the user sees something relevant immediately while AI loads
    const matches = properties.slice(0, 4);
    const keywords = matches.flatMap(p => (p.highlight + " " + p.title).toLowerCase().split(" "));
    const hasOcean = keywords.some(k => k.includes("ocean") || k.includes("beach"));
    const hasPool = matches.some(p => p.amenities.some(a => a.toLowerCase().includes("pool")));
    
    let tempDesc = "The highlighted Maui rentals stand out for great locations, authentic island charm, and easy comforts.";
    if (hasOcean && hasPool) {
      tempDesc = "The highlighted Maui rentals stand out for stunning ocean views, refreshing pools, and authentic island charm.";
    } else if (hasOcean) {
      tempDesc = "The highlighted Maui rentals stand out for stunning ocean views, beach access, and authentic island charm.";
    }
    setDynamicDescription(tempDesc);

    // Fetch AI enhanced description
    async function fetchAiDescription() {
      try {
        const response = await fetch(`https://${projectId}.supabase.co/functions/v1/make-server-217a788a/generate-description`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${publicAnonKey}`
          },
          body: JSON.stringify({
            query,
            properties: matches
          })
        });
        
        if (response.ok) {
          const data = await response.json();
          if (data.description) {
            setDynamicDescription(data.description);
          }
        }
      } catch (error) {
        console.error("Failed to fetch AI description:", error);
      }
    }

    fetchAiDescription();
  }, [properties, query]);

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
                  <p className="font-['Centra_No2:Regular',sans-serif] leading-[18px] text-[14px] text-[#676a7d] pb-[8px]">
                    {totalCount || properties.length} results
                  </p>
                  {properties.length >= 4 && (
                    <>
                      <h2 className="font-['Centra_No2:Medium',sans-serif] leading-[20px] text-[18px] text-[#191e3b]">
                        Top results
                      </h2>
                      <p className="font-['Centra_No2:Regular',sans-serif] leading-[18px] text-[14px] text-[#676a7d]">
                        {dynamicDescription}
                      </p>
                    </>
                  )}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px] w-full">
                  {bestMatches.length > 0 ? (
                    bestMatches.map((property, index) => (
                      <PropertyCard
                        key={property.id}
                        property={property}
                        index={index}
                      />
                    ))
                  ) : (
                    <p className="text-gray-500">
                      No properties found matching your
                      criteria.
                    </p>
                  )}
                </div>
              </div>

              {/* Section 2: Remaining results */}
              {remainingMatches.length > 0 && (
                <div className="flex flex-col gap-[16px] w-full shrink-0">
                  <div className="flex flex-col gap-[4px] w-full">
                    <h2 className="font-['Centra_No2:Medium',sans-serif] leading-[20px] text-[18px] text-[#191e3b]">
                      Remaining results
                    </h2>
                    <p className="font-['Centra_No2:Regular',sans-serif] leading-[18px] text-[14px] text-[#676a7d]">
                      Highly relevant matches based on your
                      preferences.
                    </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px] w-full">
                    {remainingMatches.map((property, index) => (
                      <PropertyCard
                        key={property.id}
                        property={property}
                        index={index + 4}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Suggestions Footer for low results */}
              {properties.length < 4 && (
                <SuggestionsFooter count={properties.length} />
              )}
            </>
          )}

          {/* Load more section */}
          {hasMore && !loading && (
            <div className="box-border content-stretch flex flex-col gap-[16px] items-start pb-[120px] pt-[16px] px-0 relative shrink-0 w-full">
              <h2 className="font-['Centra_No2:Medium',sans-serif] leading-[20px] text-[18px] text-[#191e3b]">
                Load more results
              </h2>

              <div className="content-stretch flex flex-wrap gap-[8px] items-center relative shrink-0">
                {/* More like this button */}
                <button
                  onClick={onLoadMore}
                  className="bg-[#f2f8fd] box-border content-stretch flex gap-[8px] items-center overflow-clip px-[24px] py-[16px] relative rounded-[32px] shrink-0 cursor-pointer hover:bg-[#e5f2fb] transition-colors"
                >
                  <div className="flex h-[18.773px] items-center justify-center relative shrink-0 w-[20.03px]">
                    <InputIconLeft />
                  </div>
                  <div className="flex flex-col font-['Centra_No2:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191e3b] text-[14px] text-nowrap">
                    <p className="leading-[1.25] whitespace-pre">
                      More like this
                    </p>
                  </div>
                </button>

                {/* Try different button */}
                <button
                  onClick={onLoadMore}
                  className="bg-[#f2f8fd] box-border content-stretch flex gap-[8px] items-center overflow-clip px-[24px] py-[16px] relative rounded-[32px] shrink-0 cursor-pointer hover:bg-[#e5f2fb] transition-colors"
                >
                  <div className="flex h-[18.773px] items-center justify-center relative shrink-0 w-[20.03px]">
                    <InputIconLeft1 />
                  </div>
                  <div className="flex flex-col font-['Centra_No2:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191e3b] text-[14px] text-nowrap">
                    <p className="leading-[1.25] whitespace-pre">
                      Try different
                    </p>
                  </div>
                </button>

                {/* Not quite right button */}
                <button
                  onClick={onLoadMore}
                  className="bg-[#f2f8fd] box-border content-stretch flex gap-[8px] items-center overflow-clip px-[24px] py-[16px] relative rounded-[32px] shrink-0 cursor-pointer hover:bg-[#e5f2fb] transition-colors"
                >
                  <div className="flex h-[18.773px] items-center justify-center relative shrink-0 w-[20.03px]">
                    <InputIconLeft2 />
                  </div>
                  <div className="flex flex-col font-['Centra_No2:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191e3b] text-[14px] text-nowrap">
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