import svgPaths from "./svg-biuscsqzl8";
import activeSvgPaths from "./svg-u8wj4deq1b";
import navSvgPaths from "./svg-zxlytcmomr";
import { ContentWithLoadMore } from "../components/ContentWithLoadMore";
import { CalendarView } from "../components/CalendarView";
import { PeopleSelector, PeopleCounts } from "../components/PeopleSelector";
import { SearchSuggestions } from "../components/SearchSuggestions";
import { AnimatePresence, motion } from "motion/react";
import { useState, useRef, useEffect } from "react";
import { Minus, Plus, X } from "lucide-react";
import { projectId, publicAnonKey } from "../utils/supabase/info";
import { Property, DBProperty } from "../data/properties";
import { RealMap, POI } from "../components/RealMap";

import { ChatSheet, Message, AIAction } from "../components/ChatSheet";

// Logo Component
function GlobalNavigationHeaderLogo({ onClick }: { onClick?: () => void }) {
  return (
    <div className="h-[28px] relative shrink-0 w-[90px] cursor-pointer" data-name="Logo" onClick={onClick}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 90 28">
        <g>
          <path clipRule="evenodd" d={navSvgPaths.p1f6112f0} fill="var(--fill-0, #0F51ED)" fillRule="evenodd" />
        </g>
      </svg>
    </div>
  );
}

// Icons
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

function SearchDiamondIcon({ active }: { active?: boolean }) {
  return (
    <div className="relative shrink-0 size-[44px]" data-name="search">
      <motion.div
        className="size-full rounded-full overflow-hidden"
        animate={{ rotate: active ? 90 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 44">
          <g id="search">
            {/* Inactive State */}
            <motion.g
              initial={false}
              animate={{ opacity: active ? 0 : 1 }}
              transition={{ duration: 0.3 }}
            >
              <motion.g 
                id="Union"
                initial={{ scale: 3, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ 
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  delay: 0.2
                }}
                style={{ originX: 0.5, originY: 0.5 }}
              >
                <path clipRule="evenodd" d={svgPaths.p3f9af940} fill="var(--fill-0, #0F51ED)" fillRule="evenodd" />
                <path clipRule="evenodd" d={svgPaths.p13611580} fill="var(--fill-0, #0F51ED)" fillRule="evenodd" />
                <path clipRule="evenodd" d={svgPaths.p1588c280} fill="var(--fill-0, #0F51ED)" fillRule="evenodd" />
              </motion.g>
              <path d={svgPaths.p2c379a80} stroke="var(--stroke-0, #DFE0E4)" />
            </motion.g>

            {/* Active State */}
            <motion.g
              initial={false}
              animate={{ opacity: active ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <path d={activeSvgPaths.p2b294d00} fill="var(--fill-0, #0F51ED)" />
              <g id="Union">
                <path clipRule="evenodd" d={activeSvgPaths.p3f9af940} fill="white" fillRule="evenodd" />
                <path clipRule="evenodd" d={activeSvgPaths.p13611580} fill="white" fillRule="evenodd" />
                <path clipRule="evenodd" d={activeSvgPaths.p1588c280} fill="white" fillRule="evenodd" />
              </g>
            </motion.g>
          </g>
        </svg>
      </motion.div>
    </div>
  );
}

function FilterSection({ title, children }: { title: string, children: React.ReactNode }) {
  return (
    <div className="py-6 border-b border-[#EBEBEB] last:border-0">
      <h3 className="font-['CentraNo2',sans-serif] font-medium text-[18px] text-[#191e3b] mb-4">{title}</h3>
      {children}
    </div>
  );
}

interface FilterState {
  priceRange: { min: number; max: number };
  bedrooms: number;
  beds: number;
  bathrooms: number;
  propertyTypes: string[];
  amenities: string[];
  rating: number | null;
  accessibility: string[];
}

function getActiveFilters(filters: FilterState) {
  const active = [];
  
  if (filters.priceRange.min > 0) active.push({ type: 'priceMin', label: `Min $${filters.priceRange.min}`, value: filters.priceRange.min });
  if (filters.priceRange.max < 10000) active.push({ type: 'priceMax', label: `Max $${filters.priceRange.max}`, value: filters.priceRange.max });
  
  if (filters.bedrooms > 0) active.push({ type: 'bedrooms', label: `${filters.bedrooms}+ Bedrooms`, value: filters.bedrooms });
  if (filters.beds > 0) active.push({ type: 'beds', label: `${filters.beds}+ Beds`, value: filters.beds });
  if (filters.bathrooms > 0) active.push({ type: 'bathrooms', label: `${filters.bathrooms}+ Bathrooms`, value: filters.bathrooms });
  
  filters.propertyTypes.forEach(t => active.push({ type: 'propertyType', label: t, value: t }));
  filters.amenities.forEach(a => active.push({ type: 'amenity', label: a, value: a }));
  
  if (filters.rating) active.push({ type: 'rating', label: `Rated ${filters.rating}+`, value: filters.rating });
  
  filters.accessibility.forEach(a => active.push({ type: 'accessibility', label: a, value: a }));

  return active;
}

function FiltersView({ filters, onFilterChange }: { filters: FilterState, onFilterChange: (filters: FilterState) => void }) {
  const togglePropertyType = (type: string) => {
    const types = filters.propertyTypes.includes(type)
      ? filters.propertyTypes.filter(t => t !== type)
      : [...filters.propertyTypes, type];
    onFilterChange({ ...filters, propertyTypes: types });
  };

  const toggleAmenity = (amenity: string) => {
    const amenities = filters.amenities.includes(amenity)
      ? filters.amenities.filter(a => a !== amenity)
      : [...filters.amenities, amenity];
    onFilterChange({ ...filters, amenities: amenities });
  };

  const toggleAccessibility = (item: string) => {
    const acc = filters.accessibility.includes(item)
      ? filters.accessibility.filter(a => a !== item)
      : [...filters.accessibility, item];
    onFilterChange({ ...filters, accessibility: acc });
  };

  const removeFilter = (item: { type: string, value: any }) => {
      const newFilters = { ...filters };
      switch (item.type) {
          case 'priceMin': newFilters.priceRange.min = 0; break;
          case 'priceMax': newFilters.priceRange.max = 10000; break;
          case 'bedrooms': newFilters.bedrooms = 0; break;
          case 'beds': newFilters.beds = 0; break;
          case 'bathrooms': newFilters.bathrooms = 0; break;
          case 'propertyType': newFilters.propertyTypes = newFilters.propertyTypes.filter(t => t !== item.value); break;
          case 'amenity': newFilters.amenities = newFilters.amenities.filter(a => a !== item.value); break;
          case 'rating': newFilters.rating = null; break;
          case 'accessibility': newFilters.accessibility = newFilters.accessibility.filter(a => a !== item.value); break;
      }
      onFilterChange(newFilters);
  };

  const handleMinPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseInt(e.target.value.replace(/[^0-9]/g, ''));
    if (!isNaN(val)) {
        onFilterChange({ ...filters, priceRange: { ...filters.priceRange, min: val } });
    } else if (e.target.value === '') {
        onFilterChange({ ...filters, priceRange: { ...filters.priceRange, min: 0 } });
    }
  };

  const handleMaxPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseInt(e.target.value.replace(/[^0-9]/g, ''));
    if (!isNaN(val)) {
        onFilterChange({ ...filters, priceRange: { ...filters.priceRange, max: val } });
    } else if (e.target.value === '') {
         // Default to high number if empty
        onFilterChange({ ...filters, priceRange: { ...filters.priceRange, max: 10000 } });
    }
  };

  const activeFilters = getActiveFilters(filters);

  return (
    <div className="h-full overflow-y-auto px-8 pb-8 relative">
      <div className="flex flex-col gap-0 pb-20 pt-[12px] w-full max-w-2xl mx-auto">
        {activeFilters.length > 0 && (
            <FilterSection title="Your selections">
                <div className="flex flex-wrap gap-2">
                    {activeFilters.map((filter, idx) => (
                        <div key={`${filter.type}-${filter.value}-${idx}`} className="flex items-center gap-2 px-4 py-2 bg-[#F5F9FF] rounded-full">
                            <span className="text-sm font-['CentraNo2',sans-serif] font-medium text-[#191E3B]">{filter.label}</span>
                            <button 
                                onClick={() => removeFilter(filter)}
                                className="w-5 h-5 flex items-center justify-center rounded-full hover:bg-[#E5F0FF] text-[#191E3B] transition-colors"
                            >
                                <X size={14} />
                            </button>
                        </div>
                    ))}
                    <button 
                        onClick={() => onFilterChange({
                            priceRange: { min: 0, max: 10000 },
                            bedrooms: 0,
                            beds: 0,
                            bathrooms: 0,
                            propertyTypes: [],
                            amenities: [],
                            rating: null,
                            accessibility: []
                        })}
                        className="text-sm font-['CentraNo2',sans-serif] font-medium text-[#222222] underline ml-2"
                    >
                        Clear all
                    </button>
                </div>
            </FilterSection>
        )}

        <FilterSection title="Price range">
          <div className="flex items-center gap-4">
            <div className="flex-1 p-3 border border-[#B0B0B0] rounded-[8px] focus-within:border-black focus-within:ring-1 focus-within:ring-black transition-all">
              <span className="block text-xs text-[#717171]">Minimum</span>
              <div className="flex items-center">
                  <span className="text-sm text-[#222222]">$</span>
                  <input 
                    type="text"
                    value={filters.priceRange.min > 0 ? filters.priceRange.min : ''}
                    onChange={handleMinPriceChange}
                    className="block text-sm text-[#222222] w-full border-none p-0 focus:ring-0 outline-none"
                    placeholder="0"
                  />
              </div>
            </div>
            <div className="text-[#717171]">-</div>
            <div className="flex-1 p-3 border border-[#B0B0B0] rounded-[8px] focus-within:border-black focus-within:ring-1 focus-within:ring-black transition-all">
              <span className="block text-xs text-[#717171]">Maximum</span>
              <div className="flex items-center">
                  <span className="text-sm text-[#222222]">$</span>
                  <input 
                    type="text"
                    value={filters.priceRange.max < 10000 ? filters.priceRange.max : ''}
                    onChange={handleMaxPriceChange}
                    className="block text-sm text-[#222222] w-full border-none p-0 focus:ring-0 outline-none"
                    placeholder="10000+"
                  />
              </div>
            </div>
          </div>
        </FilterSection>
        
        <FilterSection title="Rooms and spaces">
           <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="font-['CentraNo2',sans-serif] text-[16px] text-[#222222]">Bedrooms</span>
                <div className="flex items-center gap-3">
                   <button 
                    onClick={() => onFilterChange({ ...filters, bedrooms: Math.max(0, filters.bedrooms - 1) })}
                    className="w-[32px] h-[32px] rounded-full border border-[#B0B0B0] flex items-center justify-center text-[#717171] hover:border-black hover:text-black">
                     <Minus size={14} />
                   </button>
                   <span className="w-4 text-center font-['CentraNo2',sans-serif]">{filters.bedrooms || 'Any'}</span>
                   <button 
                    onClick={() => onFilterChange({ ...filters, bedrooms: filters.bedrooms + 1 })}
                    className="w-[32px] h-[32px] rounded-full border border-[#B0B0B0] flex items-center justify-center text-[#717171] hover:border-black hover:text-black">
                     <Plus size={14} />
                   </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="font-['CentraNo2',sans-serif] text-[16px] text-[#222222]">Beds</span>
                <div className="flex items-center gap-3">
                   <button 
                    onClick={() => onFilterChange({ ...filters, beds: Math.max(0, filters.beds - 1) })}
                    className="w-[32px] h-[32px] rounded-full border border-[#B0B0B0] flex items-center justify-center text-[#717171] hover:border-black hover:text-black">
                     <Minus size={14} />
                   </button>
                   <span className="w-4 text-center font-['CentraNo2',sans-serif]">{filters.beds || 'Any'}</span>
                   <button 
                    onClick={() => onFilterChange({ ...filters, beds: filters.beds + 1 })}
                    className="w-[32px] h-[32px] rounded-full border border-[#B0B0B0] flex items-center justify-center text-[#717171] hover:border-black hover:text-black">
                     <Plus size={14} />
                   </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="font-['CentraNo2',sans-serif] text-[16px] text-[#222222]">Bathrooms</span>
                <div className="flex items-center gap-3">
                   <button 
                    onClick={() => onFilterChange({ ...filters, bathrooms: Math.max(0, filters.bathrooms - 1) })}
                    className="w-[32px] h-[32px] rounded-full border border-[#B0B0B0] flex items-center justify-center text-[#717171] hover:border-black hover:text-black">
                     <Minus size={14} />
                   </button>
                   <span className="w-4 text-center font-['CentraNo2',sans-serif]">{filters.bathrooms || 'Any'}</span>
                   <button 
                    onClick={() => onFilterChange({ ...filters, bathrooms: filters.bathrooms + 1 })}
                    className="w-[32px] h-[32px] rounded-full border border-[#B0B0B0] flex items-center justify-center text-[#717171] hover:border-black hover:text-black">
                     <Plus size={14} />
                   </button>
                </div>
              </div>
           </div>
        </FilterSection>

        <FilterSection title="Property type">
          <div className="grid grid-cols-2 gap-y-4 gap-x-8">
             {['House', 'Condo', 'Villa', 'Cottage', 'Studio', 'Resort'].map(type => (
                <label key={type} className="flex items-center gap-3 cursor-pointer group" onClick={(e) => { e.preventDefault(); togglePropertyType(type); }}>
                   <div className={`w-[20px] h-[20px] border rounded-[4px] flex items-center justify-center relative transition-colors ${filters.propertyTypes.includes(type) ? 'bg-black border-black' : 'border-[#D1D5DC] group-hover:border-black'}`}>
                      {filters.propertyTypes.includes(type) && <div className="w-2 h-2 bg-white rounded-[1px]" />}
                   </div>
                   <span className="font-['CentraNo2',sans-serif] text-[16px] text-[#222222]">{type}</span>
                </label>
             ))}
          </div>
        </FilterSection>

         <FilterSection title="Amenities">
            <div className="grid grid-cols-2 gap-y-4 gap-x-8">
              {['Wifi', 'Kitchen', 'Washer', 'Dryer', 'Air conditioning', 'Heating', 'Pool', 'Hot tub', 'Patio', 'BBQ grill'].map(item => (
                 <label key={item} className="flex items-center gap-3 cursor-pointer group" onClick={(e) => { e.preventDefault(); toggleAmenity(item); }}>
                    <div className={`w-[20px] h-[20px] border rounded-[4px] flex items-center justify-center relative transition-colors ${filters.amenities.includes(item) ? 'bg-black border-black' : 'border-[#D1D5DC] group-hover:border-black'}`}>
                       {filters.amenities.includes(item) && <div className="w-2 h-2 bg-white rounded-[1px]" />}
                    </div>
                    <span className="font-['CentraNo2',sans-serif] text-[16px] text-[#222222]">{item}</span>
                 </label>
              ))}
            </div>
         </FilterSection>

         <FilterSection title="Guest rating">
            <div className="flex gap-2 flex-wrap">
               {['Any', '7+', '8+', '9+', '9.5+'].map((rating) => {
                  const val = rating === 'Any' ? null : parseFloat(rating);
                  const isActive = filters.rating === val;
                  return (
                    <div 
                      key={rating} 
                      onClick={() => onFilterChange({ ...filters, rating: val })}
                      className={`px-4 py-2 border ${isActive ? 'bg-black text-white border-black' : 'border-[#B0B0B0] hover:border-black'} rounded-full cursor-pointer transition-colors`}
                    >
                       <span className="text-sm font-medium">{rating}</span>
                    </div>
                  );
               })}
            </div>
         </FilterSection>

         <FilterSection title="Accessibility">
            <div className="space-y-4">
              {['Step-free guest entrance', 'Step-free path to guest entrance', 'Wide doorway'].map(item => (
                 <label key={item} className="flex items-center gap-3 cursor-pointer group" onClick={(e) => { e.preventDefault(); toggleAccessibility(item); }}>
                    <div className={`w-[20px] h-[20px] border rounded-[4px] flex items-center justify-center relative transition-colors ${filters.accessibility.includes(item) ? 'bg-black border-black' : 'border-[#D1D5DC] group-hover:border-black'}`}>
                       {filters.accessibility.includes(item) && <div className="w-2 h-2 bg-white rounded-[1px]" />}
                    </div>
                    <span className="font-['CentraNo2',sans-serif] text-[16px] text-[#222222]">{item}</span>
                 </label>
              ))}
            </div>
         </FilterSection>
      </div>
    </div>
  );
}

// Unified Header Component
interface UnifiedHeaderProps {
  datesText: string;
  peopleText: string;
  startDate: Date | null;
  endDate: Date | null;
  peopleCounts: PeopleCounts;
  onDatesChange: (start: Date | null, end: Date | null) => void;
  onPeopleChange: (counts: PeopleCounts) => void;
  query?: string;
  onSearch: (term: string) => void;
  onChatToggle: () => void;
  onLogoClick?: () => void;
  isChatOpen?: boolean;
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
}

function UnifiedHeader({ 
  datesText, 
  peopleText,
  startDate,
  endDate,
  peopleCounts,
  onDatesChange,
  onPeopleChange,
  query,
  onSearch,
  onChatToggle,
  onLogoClick,
  isChatOpen,
  filters,
  onFilterChange
}: UnifiedHeaderProps) {
  const [activePopup, setActivePopup] = useState<'calendar' | 'people' | 'destination' | 'filters' | null>(null);
  const [calendarHeight, setCalendarHeight] = useState(464);
  // Default destination
  const [destination, setDestination] = useState("Maui");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (query) setDestination(query);
  }, [query]);

  useEffect(() => {
    if (activePopup === 'destination' && inputRef.current) {
      inputRef.current.focus();
    }
  }, [activePopup]);

  const handleDestinationClick = () => {
    setActivePopup(activePopup === 'destination' ? null : 'destination');
  };

  const handleSearchSubmit = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      onSearch(destination);
      setActivePopup(null);
    }
  };

  const handleDatesClick = () => {
    setActivePopup(activePopup === 'calendar' ? null : 'calendar');
  };

  const handlePeopleClick = () => {
    setActivePopup(activePopup === 'people' ? null : 'people');
  };

  const handleFiltersClick = () => {
    setActivePopup(activePopup === 'filters' ? null : 'filters');
  };

  const activeCount = getActiveFilters(filters).length;

  return (
    <div className="relative w-full z-50 bg-white shadow-[0px_5px_20px_0px_rgba(0,0,0,0.1)]">
      <div className="flex items-center justify-between px-[24px] h-[80px] max-w-[2520px] mx-auto">
        {/* Left: Logo */}
        <div className="flex-1 flex justify-start items-center">
          <GlobalNavigationHeaderLogo onClick={onLogoClick} />
        </div>

        {/* Center: Search Controls (Pills) */}
        <div className="flex-0 flex items-center justify-center">
            {/* Tune Icon */}
            <div 
              className={`
                bg-white relative rounded-[32px] shrink-0 z-30 cursor-pointer transition-all duration-300 ease-in-out
                ${activePopup === 'filters' ? '' : 'hover:bg-[#F7F7F7]'}
              `}
              data-name="search"
              onClick={handleFiltersClick}
            >
              <div className="box-border content-stretch flex gap-[8px] items-center justify-center overflow-clip p-[12px] relative rounded-[inherit]">
                <IconGlyphTune />
              </div>
              
              {activeCount > 0 && (
                 <div className="absolute top-[-2px] right-[-2px] min-w-[20px] h-[20px] px-1 bg-[#0F51ED] rounded-full flex items-center justify-center border-[2px] border-white z-40 shadow-sm">
                    <span className="text-[11px] font-['CentraNo2',sans-serif] font-bold text-white leading-none">{activeCount}</span>
                 </div>
              )}

              <div aria-hidden="true" className={`
                absolute border border-solid pointer-events-none transition-all duration-300 ease-in-out
                ${activePopup === 'filters' 
                  ? 'inset-[-1px] rounded-[33px] border-[rgba(0,0,0,0.15)] shadow-[0px_5px_15px_0px_rgba(0,0,0,0.1)]' 
                  : 'inset-0 rounded-[32px] border-[rgba(0,0,0,0.1)] shadow-none'}
              `} />
            </div>

            {/* Destination Pill */}
            <motion.div 
              layout
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              onClick={handleDestinationClick}
              className={`
                content-stretch flex gap-[12px] items-center px-[24px] py-[12px] relative rounded-[24px] shrink-0 cursor-pointer transition-colors duration-300 ease-in-out ml-[12px]
                ${activePopup === 'destination' 
                  ? 'bg-white z-30 w-[280px] cursor-text' 
                  : 'hover:bg-[#F7F7F7] w-auto'}
              `}
            >
              <div aria-hidden="true" className={`
                absolute border border-solid pointer-events-none transition-all duration-300 ease-in-out
                ${activePopup === 'destination' 
                  ? 'inset-[-1px] rounded-[25px] border-[rgba(0,0,0,0.15)] shadow-[0px_5px_15px_0px_rgba(0,0,0,0.1)]' 
                  : 'inset-0 rounded-[24px] border-[#dfe0e4] shadow-none'}
              `} />
              <motion.div layout="position" className="relative shrink-0 size-[20px]" data-name="Icon">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                  <g id="Icon" opacity="0.75">
                    <path d={svgPaths.p19727880} fill="var(--fill-0, #212121)" id="Union" />
                  </g>
                </svg>
              </motion.div>
              {activePopup === 'destination' ? (
                <motion.input
                  layout="position"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                  ref={inputRef}
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  onKeyDown={handleSearchSubmit}
                  onClick={(e) => e.stopPropagation()}
                  className="font-['CentraNo2',sans-serif] font-medium leading-[18px] text-[14px] text-black bg-transparent outline-none w-full border-none p-0 text-left"
                  placeholder="Where to?"
                />
              ) : (
                <motion.p 
                  layout="position"
                  className="font-['CentraNo2',sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[14px] text-black text-left text-nowrap"
                >
                  {destination}
                </motion.p>
              )}
            </motion.div>

            {/* Dates Input */}
            <div 
              onClick={handleDatesClick}
              className={`
                content-stretch flex gap-[12px] items-center relative rounded-[24px] shrink-0 cursor-pointer transition-all duration-300 ease-in-out ml-[12px]
                ${activePopup === 'calendar' 
                  ? 'bg-white z-20 px-[24px] py-[12px] opacity-100 w-auto' 
                  : 'hover:bg-[#F7F7F7] px-[24px] py-[12px] opacity-100 w-auto'}
              `}
            >
              <div aria-hidden="true" className={`
                absolute border border-solid pointer-events-none transition-all duration-300 ease-in-out
                ${activePopup === 'calendar' 
                  ? 'inset-[-1px] rounded-[25px] border-[rgba(0,0,0,0.15)] shadow-[0px_5px_15px_0px_rgba(0,0,0,0.1)]' 
                  : 'inset-0 rounded-[24px] border-[#dfe0e4] shadow-none'}
              `} />
              <div className="relative shrink-0 size-[20px]" data-name="Icon">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                  <g clipPath="url(#clip0_89_840)" id="Icon" opacity="0.75">
                    <path d={svgPaths.p31076400} fill="var(--fill-0, #212121)" id="Union" />
                  </g>
                  <defs>
                    <clipPath id="clip0_89_840">
                      <rect fill="white" height="20" width="20" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <p className="font-['CentraNo2',sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[14px] text-black text-center text-nowrap">{datesText}</p>
            </div>

            {/* People Input */}
            <div 
              onClick={handlePeopleClick}
              className={`
                content-stretch flex gap-[12px] items-center relative rounded-[24px] shrink-0 cursor-pointer transition-all duration-300 ease-in-out ml-[12px]
                ${activePopup === 'people' 
                  ? 'bg-white z-20 px-[24px] py-[12px] opacity-100 w-auto' 
                  : 'hover:bg-[#F7F7F7] px-[24px] py-[12px] opacity-100 w-auto'}
              `}
            >
              <div aria-hidden="true" className={`
                absolute border border-solid pointer-events-none transition-all duration-300 ease-in-out
                ${activePopup === 'people' 
                  ? 'inset-[-1px] rounded-[25px] border-[rgba(0,0,0,0.15)] shadow-[0px_5px_15px_0px_rgba(0,0,0,0.1)]' 
                  : 'inset-0 rounded-[24px] border-[#dfe0e4] shadow-none'}
              `} />
              <div className="relative shrink-0 size-[20px]" data-name="Icon">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                  <g clipPath="url(#clip0_89_835)" id="Icon" opacity="0.75">
                    <path d={svgPaths.p34958b80} fill="var(--fill-0, #212121)" id="Union" />
                  </g>
                  <defs>
                    <clipPath id="clip0_89_835">
                      <rect fill="white" height="20" width="20" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <p className="font-['CentraNo2',sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[14px] text-black text-center text-nowrap">{peopleText}</p>
            </div>

            {/* Diamond Icon */}
            <div className="ml-[12px] cursor-pointer" data-name="search" onClick={onChatToggle}>
              <SearchDiamondIcon active={isChatOpen} />
            </div>
        </div>

        {/* Right: Nav Buttons */}
        <div className="flex-1 flex justify-end gap-[8px] items-center">
          <button className="font-['CentraNo2',sans-serif] font-medium text-[16px] text-[#191e3b] px-[16px] py-[10px] rounded-full hover:bg-[#F7F7F7] transition-colors cursor-pointer">
            Support
          </button>
          <button className="font-['CentraNo2',sans-serif] font-medium text-[16px] text-[#191e3b] px-[16px] py-[10px] rounded-full hover:bg-[#F7F7F7] transition-colors cursor-pointer">
            Sign in
          </button>
        </div>
      </div>
      
      {/* Popups */}
      {activePopup && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setActivePopup(null)} />
          <div 
            className="absolute top-[79px] left-1/2 -translate-x-1/2 w-[850px] z-50 bg-white rounded-[32px] transition-all duration-300 ease-in-out origin-top"
            style={{ 
              height: activePopup === 'calendar' ? `${calendarHeight}px` : (activePopup === 'filters' ? '600px' : (activePopup === 'destination' ? '480px' : '360px')),
              width: activePopup === 'destination' ? '820px' : (activePopup === 'filters' ? '780px' : '968px')
            }}
          >
            <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.15)] border-solid inset-[-1px] pointer-events-none rounded-[33px] shadow-[0px_5px_15px_0px_rgba(0,0,0,0.1)] z-50" />

            <div className="relative w-full h-full overflow-hidden rounded-[32px]">
              {activePopup === 'calendar' && (
                <div className="">
                  <CalendarView 
                    startDate={startDate}
                    endDate={endDate}
                    onChange={onDatesChange}
                    onHeightChange={setCalendarHeight}
                    compact={true}
                  />
                </div>
              )}
              
              {activePopup === 'people' && (
                <div className="">
                  <PeopleSelector 
                    counts={peopleCounts}
                    onChange={onPeopleChange}
                    compact={true}
                  />
                </div>
              )}
              
              {activePopup === 'destination' && (
                <div className="absolute top-0 left-0 w-full animate-in fade-in slide-in-from-top-2 duration-300">
                  <div className="pl-[32px]">
                    <SearchSuggestions 
                      query={destination} 
                      variant="hawaii"
                      onSelect={(value) => {
                        setDestination(value);
                        onSearch(value);
                        setActivePopup(null);
                      }}
                    />
                  </div>
                </div>
              )}

              {activePopup === 'filters' && (
                 <FiltersView filters={filters} onFilterChange={onFilterChange} />
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

// Map components
function StandardButtonSecondaryIconOnly() {
  return (
    <div className="absolute content-stretch flex items-start left-[778px] top-[16px]" data-name="Standard button / Secondary / Icon only">
      <div className="box-border content-stretch flex gap-[8px] items-center justify-center overflow-clip p-[12px] relative rounded-[40000px] shrink-0" data-name="_ / Button / Container">
        <div className="relative shrink-0 size-[18px]" data-name="_ / Button / Icon">
          <div className="absolute aspect-[16/16] left-[22.22%] right-[-11.11%] top-[calc(50%-0.04px)] translate-y-[-50%]" data-name="Glyph">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
              <path d={svgPaths.p14168ea0} fill="var(--fill-0, #191E3B)" id="Glyph" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Map({ properties, pois }: { properties: Property[], pois?: POI[] }) {
  return (
    <div className="h-full w-full min-h-0 overflow-hidden relative" data-name="Map">
      <RealMap properties={properties} pois={pois} />
      <StandardButtonSecondaryIconOnly />
    </div>
  );
}

function Frame({ properties, pois }: { properties: Property[], pois?: POI[] }) {
  return (
    <div className="h-full w-full min-h-0 min-w-0 relative">
      <div className="box-border content-stretch flex h-full items-stretch pl-0 pr-0 py-0 relative w-full min-h-0">
        <Map properties={properties} pois={pois} />
      </div>
    </div>
  );
}

function Content18({ query, pois, filters, isParsing = false }: { query?: string, pois?: POI[], filters?: FilterState, isParsing?: boolean }) {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(16);

  const fetchProperties = async (searchQuery?: string) => {
    setLoading(true);
    // Reset visible count on new search
    setVisibleCount(16);
    
    try {
      let url = `https://${projectId}.supabase.co/functions/v1/make-server-217a788a/properties`;
      if (searchQuery && searchQuery.trim() !== "") {
        url += `?q=${encodeURIComponent(searchQuery.trim())}`;
      }

      const res = await fetch(url, {
        headers: {
          Authorization: `Bearer ${publicAnonKey}`,
        },
      });
      
      const data: DBProperty[] = await res.json();
      
      const mappedProperties: Property[] = data.map((p) => {
        // Parse images
        let images: string[] = [];
        try {
          if (p.image_urls) {
            if (p.image_urls.startsWith('[')) {
              images = JSON.parse(p.image_urls);
            } else {
              images = p.image_urls.split(',').map(s => s.trim());
            }
          }
        } catch (e) {
          console.error("Failed to parse images for property", p.property_id, e);
        }
        
        if (images.length === 0) {
          images = ["https://images.unsplash.com/photo-1615044841895-9c576f5b5400?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"];
        }

        // Parse bedrooms
        let bedrooms = 1;
        if (typeof p.bedrooms === 'string') {
            const parsed = parseInt(p.bedrooms);
            if (!isNaN(parsed)) bedrooms = parsed;
        } else if (typeof p.bedrooms === 'number') {
            bedrooms = p.bedrooms;
        }

        // Rating normalization (use raw 0-10 score)
        const rating = p.review_score_10 ? Number(p.review_score_10) : 0;

        return {
          id: p.property_id,
          title: p.name,
          type: p.property_type,
          bedrooms: bedrooms,
          beds: p.beds || bedrooms * 2,
          bathrooms: Math.max(1, Math.floor(bedrooms * 0.75)), // Estimate
          guests: (p.beds || bedrooms * 2) + 2, // Estimate
          highlight: p.highlights,
          description: p.long_highlight || "",
          rating: rating,
          reviews: p.review_count || 0,
          price: p.nightly_price_usd,
          originalPrice: null,
          discount: p.discount_percent ? `${p.discount_percent}% off` : null,
          totalPrice: `$${p.total_price_usd}`,
          images: images,
          coordinates: {
            lat: p.latitude || 20.7984,
            lng: p.longitude || -156.3319
          },
          badge: null,
          amenities: p.tags ? p.tags.split(/[;,]/).map(t => t.trim()) : []
        };
      });
      
      setProperties(mappedProperties);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!isParsing) {
      fetchProperties(query);
    } else {
      setLoading(true);
    }
  }, [query, isParsing]);

  // Apply Client Side Filtering
  const filteredProperties = properties.filter(p => {
    if (!filters) return true;
    
    // Price
    if (filters.priceRange.min > 0 && p.price < filters.priceRange.min) return false;
    if (filters.priceRange.max < 10000 && p.price > filters.priceRange.max) return false;

    // Rooms
    if (filters.bedrooms > 0 && p.bedrooms < filters.bedrooms) return false;
    if (filters.beds > 0 && p.beds < filters.beds) return false;
    if (filters.bathrooms > 0 && p.bathrooms < filters.bathrooms) return false;

    // Type
    if (filters.propertyTypes.length > 0 && !filters.propertyTypes.includes(p.type)) return false;

    // Rating (out of 10)
    if (filters.rating !== null && p.rating < filters.rating) return false;

    // Amenities (Robust concept mapping)
    if (filters.amenities.length > 0) {
      const propertyAmenities = p.amenities.map(a => a.toLowerCase().replace(/[\s_-]/g, ''));
      
      // Map UI filters to potential tag keywords
      const amenityMappings: Record<string, string[]> = {
         'wifi': ['wifi', 'internet', 'wi-fi'],
         'kitchen': ['kitchen', 'fullkitchen', 'chefkitchen'],
         'washer': ['washer', 'laundry', 'washingmachine', 'washerdryer'],
         'dryer': ['dryer', 'laundry', 'tumbledryer', 'washerdryer'],
         'airconditioning': ['ac', 'airconditioning', 'a/c', 'aircon', 'climatecontrol'],
         'heating': ['heating', 'heater', 'fireplace'],
         'pool': ['pool', 'swimmingpool', 'privatepool', 'sharedpool'],
         'hottub': ['hottub', 'jacuzzi', 'spa', 'whirlpool'],
         'patio': ['patio', 'balcony', 'terrace', 'deck', 'lanai', 'veranda', 'porch'],
         'bbqgrill': ['bbq', 'barbecue', 'grill', 'bbqgrill']
      };

      const hasAllAmenities = filters.amenities.every(filterAmenity => {
         const normalizedFilter = filterAmenity.toLowerCase().replace(/[\s_-]/g, '');
         const keywords = amenityMappings[normalizedFilter] || [normalizedFilter];
         
         // Check if ANY of the keywords for this filter exist in the property's amenities
         return keywords.some(keyword => 
            propertyAmenities.some(propAmenity => propAmenity.includes(keyword))
         );
      });

      if (!hasAllAmenities) return false;
    }
    
    // Accessibility
    // Not implemented in DB schema yet, so we skip filtering for now or assume properties don't have this data
    
    return true;
  });

  const visibleProperties = filteredProperties.slice(0, visibleCount);
  const hasMore = filteredProperties.length > visibleCount;

  return (
    <div
      className="grid w-full h-full min-h-0 min-w-0 gap-0"
      style={{ gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)" }}
      data-name="Content"
    >
      <div className="min-w-0 h-full overflow-hidden">
        <ContentWithLoadMore 
          properties={visibleProperties} 
          loading={loading || isParsing} 
          query={query || ""} 
          hasMore={hasMore}
          onLoadMore={() => setVisibleCount(prev => prev + 12)}
          totalCount={filteredProperties.length}
        />
      </div>
      <Frame properties={loading || isParsing ? [] : visibleProperties} pois={pois} />
    </div>
  );
}

function MaxWrapper({ query, pois, filters, isParsing }: { query?: string, pois?: POI[], filters?: FilterState, isParsing?: boolean }) {
  return (
    <div className="w-full h-full flex" data-name="Max wrapper">
      <Content18 query={query} pois={pois} filters={filters} isParsing={isParsing} />
    </div>
  );
}

export default function LoadingWithControls({ searchData, onLogoClick }: { searchData?: any, onLogoClick?: () => void }) {
  // State for the interactive controls
  const [startDate, setStartDate] = useState<Date | null>(
    searchData?.startDate ? new Date(searchData.startDate) : null
  );
  const [endDate, setEndDate] = useState<Date | null>(
    searchData?.endDate ? new Date(searchData.endDate) : null
  );
  const [peopleCounts, setPeopleCounts] = useState<PeopleCounts>(
    searchData?.peopleCounts || { adults: 0, children: 0, infants: 0, pets: 0 }
  );
  const [isChatOpen, setIsChatOpen] = useState(false);
  
  // Chat state
  const [chatMessages, setChatMessages] = useState<Message[]>([]);
  const [isChatTyping, setIsChatTyping] = useState(false);
  const [aiActions, setAiActions] = useState<AIAction[]>([]);

  // Chat driven state
  const [searchQuery, setSearchQuery] = useState(searchData?.location);
  const [displayLocation, setDisplayLocation] = useState(searchData?.location);
  const [mapPOIs, setMapPOIs] = useState<POI[]>([]);
  
  // Filters State
  const [filters, setFilters] = useState<FilterState>({
    priceRange: { min: 0, max: 10000 },
    bedrooms: 0,
    beds: 0,
    bathrooms: 0,
    propertyTypes: [],
    amenities: [],
    rating: null,
    accessibility: []
  });

  const [isParsing, setIsParsing] = useState(!!searchData?.location);

  // Smart Search Parsing
  const performSmartSearch = async (term: string) => {
    setIsParsing(true);
    try {
      const res = await fetch(`https://${projectId}.supabase.co/functions/v1/make-server-217a788a/parse-search`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${publicAnonKey}`
        },
        body: JSON.stringify({ query: term })
      });
      
      if (!res.ok) throw new Error("Failed to parse search");
      
      const data = await res.json();
      
      // Merge parsed filters with defaults
      if (data.filters) {
        setFilters(prev => ({
          ...prev,
          ...data.filters,
          // Ensure we don't overwrite with nulls if api returns partial
          priceRange: data.filters.priceRange || prev.priceRange,
          propertyTypes: data.filters.propertyTypes || [],
          amenities: data.filters.amenities || []
        }));
      }
      
      // Update query to concepts only (for semantic search on backend)
      // If no concepts, keep original query to be safe, or empty string if it was all filters
      if (data.concepts && data.concepts.length > 0) {
         setSearchQuery(data.concepts.join(" "));
      } else {
         // If everything was parsed into filters (e.g. "Villas with pool"), 
         // we clear the text query so backend returns everything (then client filters apply).
         setSearchQuery(""); 
      }
    } catch (e) {
      console.error("Smart search parsing failed:", e);
      // Fallback: just use the raw location text
      setSearchQuery(term);
    } finally {
      setIsParsing(false);
    }
  };

  useEffect(() => {
    // Only run if we have a new search location
    if (searchData?.location) {
        // Reset display location to match new incoming search data
        setDisplayLocation(searchData.location);
        performSmartSearch(searchData.location);
    }
  }, [searchData]);

  const getDatesValue = (start: Date | null, end: Date | null) => {
    if (!start) return "Add dates"; 
    const startStr = start.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    if (!end) return startStr;
    const endStr = end.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    return `${startStr} – ${endStr}`;
  };

  const getPeopleValue = (counts: any) => {
    if (!counts) return "Add guests";
    const total = counts.adults + counts.children + counts.infants + counts.pets;
    return total > 0 ? `${total} ${total === 1 ? 'guest' : 'guests'}` : "Add guests";
  };

  const datesText = getDatesValue(startDate, endDate);
  const peopleText = getPeopleValue(peopleCounts);

  const handleDatesChange = (start: Date | null, end: Date | null) => {
    setStartDate(start);
    setEndDate(end);
  };

  const handlePeopleChange = (counts: PeopleCounts) => {
    setPeopleCounts(counts);
  };
  
  const handleSendMessage = async (text: string) => {
    const userMsg: Message = { id: Date.now().toString(), text, sender: 'user' };
    setChatMessages(prev => [...prev, userMsg]);
    setIsChatTyping(true);

    let response = "I'm processing that...";
    try {
      const res = await fetch(`https://${projectId}.supabase.co/functions/v1/make-server-217a788a/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${publicAnonKey}`
        },
        body: JSON.stringify({ message: text })
      });
      const data = await res.json();
      
      if (data.action) {
        let actionText = "";
        if (data.action.type === 'FILTER') {
          setSearchQuery(data.action.data.query);
          // We intentionally do NOT update displayLocation here so the input keeps the user's original text
          // setDisplayLocation(data.action.data.query); 
          setMapPOIs([]);
          actionText = `Updated filters for "${data.action.data.query}"`;
        } else if (data.action.type === 'POI') {
          setMapPOIs([{ lat: data.action.data.lat, lng: data.action.data.lng, label: data.action.data.label }]);
          actionText = `Selected location ${data.action.data.label}`;
          // Don't clear search query, maybe they want to see properties near the POI
        } else if (data.action.type === 'RESET') {
          setSearchQuery("");
          setDisplayLocation(""); // Clear display on reset
          setMapPOIs([]);
          actionText = "Reset search criteria";
        }
        
        if (actionText) {
          setAiActions(prev => [...prev, { id: Date.now().toString(), text: actionText, type: data.action.type }]);
        }
      }
      response = data.message;
    } catch (e) {
      console.error(e);
      response = "Sorry, I'm having trouble connecting to my brain.";
    }

    setIsChatTyping(false);
    const botMsg: Message = { id: (Date.now() + 1).toString(), text: response, sender: 'bot' };
    setChatMessages(prev => [...prev, botMsg]);
  };

  return (
    <div className="bg-white overflow-clip relative rounded-[24px] w-full h-screen flex flex-col" data-name="Loading">
      <UnifiedHeader 
        datesText={datesText} 
        peopleText={peopleText}
        startDate={startDate}
        endDate={endDate}
        peopleCounts={peopleCounts}
        onDatesChange={handleDatesChange}
        onPeopleChange={handlePeopleChange}
        query={displayLocation}
        onSearch={(term) => {
          setDisplayLocation(term);
          performSmartSearch(term);
        }}
        onChatToggle={() => setIsChatOpen(!isChatOpen)}
        onLogoClick={onLogoClick}
        isChatOpen={isChatOpen}
        filters={filters}
        onFilterChange={setFilters}
      />
      
      {/* Content Container - use calc to subtract header height */}
      <div className="relative w-full overflow-hidden flex" style={{ height: 'calc(100vh - 80px)' }}>
        {/* Main Content Pane */}
        <motion.div 
          initial={false}
          className="relative h-full shrink-0"
          animate={{ width: isChatOpen ? "calc(100% - 450px)" : "100%" }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <MaxWrapper query={searchQuery} pois={mapPOIs} filters={filters} isParsing={isParsing} />
        </motion.div>

        {/* Chat Sheet Pane */}
        <AnimatePresence>
          {isChatOpen && (
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="w-[450px] h-full shrink-0 border-l border-[#EBEBEB] bg-white z-20"
            >
              <ChatSheet 
                onClose={() => setIsChatOpen(false)} 
                messages={chatMessages}
                onSendMessage={handleSendMessage}
                isTyping={isChatTyping}
                aiActions={aiActions}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
