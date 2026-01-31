import svgPaths from "./svg-biuscsqzl8";
import navSvgPaths from "./svg-zxlytcmomr";
import { ContentWithLoadMore } from "../components/ContentWithLoadMore";
import { CalendarView } from "../components/CalendarView";
import { PeopleSelector, PeopleCounts } from "../components/PeopleSelector";
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

function IconGlyphHistory() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon glyph / history">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon glyph / history">
          <g id="Glyph">
            <path d="M10 3.33333C7.89467 3.33333 6.01727 4.30924 4.79551 5.83335H7.20537C7.46474 5.83335 7.5928 6.15723 7.41371 6.33632L6.37204 7.37798C6.2939 7.45612 6.18792 7.50002 6.07741 7.50002H2.5C2.03976 7.50002 1.66667 7.12693 1.66667 6.66669V3.08928C1.66667 2.97877 1.71057 2.87279 1.78871 2.79465L2.83037 1.75298C3.00946 1.57389 3.33333 1.70195 3.33333 1.96132V4.99919C4.85372 2.97557 7.274 1.66667 10 1.66667C14.6024 1.66667 18.3333 5.39763 18.3333 10C18.3333 14.6024 14.6024 18.3333 10 18.3333C5.83635 18.3333 2.38589 15.2798 1.7659 11.2899C1.72806 11.0465 1.92151 10.8333 2.1679 10.8333H3.01698C3.22716 10.8333 3.40304 10.9904 3.44053 11.1972C4.00455 14.3078 6.7268 16.6667 10 16.6667C13.6819 16.6667 16.6667 13.6819 16.6667 10C16.6667 6.3181 13.6819 3.33333 10 3.33333Z" fill="var(--fill-0, black)" />
            <path d="M10.8333 6.66667C10.8333 6.20643 10.4602 5.83334 9.99996 5.83334C9.53972 5.83334 9.16663 6.20643 9.16663 6.66667V10C9.16663 10.221 9.25442 10.433 9.41071 10.5893L11.9107 13.0893C12.2362 13.4147 12.7637 13.4147 13.0892 13.0893C13.4147 12.7638 13.4147 12.2362 13.0892 11.9107L10.8333 9.65482V6.66667Z" fill="var(--fill-0, black)" />
          </g>
        </g>
      </svg>
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
  onAddFilters: (term: string) => void;
  onAddPOI: (location: string) => Promise<string>;
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
  query: _query,
  onSearch,
  onAddFilters,
  onAddPOI,
  onChatToggle,
  onLogoClick,
  isChatOpen: _isChatOpen,
  filters,
  onFilterChange
}: UnifiedHeaderProps) {
  const [activePopup, setActivePopup] = useState<'calendar' | 'people' | 'destination' | 'filters' | null>(null);
  const [calendarHeight, setCalendarHeight] = useState(464);
  // Separate state for the location pill dropdown
  const [locationPillOpen, setLocationPillOpen] = useState(false);
  // Top search bar input value (empty when focused)
  const [searchInput, setSearchInput] = useState("");
  // Rotating placeholder index
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  // Response message to show in sheet
  const [sheetMessage, setSheetMessage] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const locationInputRef = useRef<HTMLInputElement>(null);
  const sheetRef = useRef<HTMLDivElement>(null);

  // Forward scroll events from sheet to results container
  const handleSheetWheel = (e: React.WheelEvent) => {
    e.stopPropagation();
    // Find the results scroll container and scroll it
    const scrollContainer = document.querySelector('[data-name="Content"] .overflow-y-auto') as HTMLElement;
    if (scrollContainer) {
      scrollContainer.scrollTop += e.deltaY;
    }
  };

  const placeholders = [
    "Places with seating area for a group",
    "Add Kaanapali Beach to the map",
    "Show places in O'ahu instead"
  ];

  // Rotate placeholders every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIndex((prev) => (prev + 1) % placeholders.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (activePopup === 'destination' && inputRef.current) {
      inputRef.current.focus();
    }
  }, [activePopup]);

  useEffect(() => {
    if (locationPillOpen && locationInputRef.current) {
      locationInputRef.current.focus();
    }
  }, [locationPillOpen]);

  // Click outside to close sheet (without blocking scroll)
  useEffect(() => {
    if (activePopup !== 'destination') return;
    
    const handleClickOutside = (e: MouseEvent) => {
      if (sheetRef.current && !sheetRef.current.contains(e.target as Node)) {
        setActivePopup(null);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [activePopup]);

  const handleDestinationClick = () => {
    setActivePopup(activePopup === 'destination' ? null : 'destination');
  };

  const handleLocationPillClick = () => {
    setLocationPillOpen(!locationPillOpen);
    // Close other popups when opening location pill
    if (!locationPillOpen) {
      setActivePopup(null);
    }
  };

  const handleSearchSubmit = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && searchInput) {
      onAddFilters(searchInput);
      setSearchInput("");
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

  const activeFilters = getActiveFilters(filters);
  const activeCount = activeFilters.length;

  // Helper to remove a filter tag
  const removeFilterTag = (filter: { type: string; label: string; value: any }) => {
    const newFilters = { ...filters };
    switch (filter.type) {
      case 'priceMin':
        newFilters.priceRange = { ...newFilters.priceRange, min: 0 };
        break;
      case 'priceMax':
        newFilters.priceRange = { ...newFilters.priceRange, max: 10000 };
        break;
      case 'bedrooms':
        newFilters.bedrooms = 0;
        break;
      case 'beds':
        newFilters.beds = 0;
        break;
      case 'bathrooms':
        newFilters.bathrooms = 0;
        break;
      case 'propertyType':
        newFilters.propertyTypes = newFilters.propertyTypes.filter(t => t !== filter.value);
        break;
      case 'amenity':
        newFilters.amenities = newFilters.amenities.filter(a => a !== filter.value);
        break;
      case 'rating':
        newFilters.rating = null;
        break;
      case 'accessibility':
        newFilters.accessibility = newFilters.accessibility.filter(a => a !== filter.value);
        break;
    }
    onFilterChange(newFilters);
  };

  return (
    <div className="relative w-full z-50 bg-white shadow-[0px_5px_20px_0px_rgba(0,0,0,0.1)] pt-6">
      {/* Row 1: Primary Nav Bar */}
      <div className="flex items-center justify-between px-[24px] h-[52px] max-w-[2520px] mx-auto">
        {/* Left: Logo */}
        <div className="flex-1 flex justify-start items-center">
          <GlobalNavigationHeaderLogo onClick={onLogoClick} />
        </div>

        {/* Center: Search Input Group */}
        <div className="flex-0 flex items-center justify-center gap-[16px]">
          {/* Tune/Filter Icon Button */}
          <button 
            style={{ padding: '12px', backgroundColor: 'white' }}
            className={`
              relative rounded-full shrink-0 z-30 cursor-pointer transition-all duration-200 ease-in-out border border-[rgba(0,0,0,0.15)] flex items-center justify-center
              ${activePopup === 'filters' ? 'shadow-[0px_5px_15px_0px_rgba(0,0,0,0.1)]' : 'hover:bg-[#F7F7F7] hover:shadow-[0px_2px_8px_0px_rgba(0,0,0,0.06)]'}
            `}
            data-name="search"
            onClick={handleFiltersClick}
          >
            <IconGlyphTune />
            
            {activeCount > 0 && (
               <div 
                 className="absolute min-w-[24px] h-[24px] px-[8px] bg-[#0F51ED] rounded-full flex items-center justify-center border-[2px] border-white z-40 shadow-sm"
                 style={{ top: '-6px', right: '-6px' }}
               >
                  <span className="text-[12px] font-['CentraNo2',sans-serif] font-medium text-white leading-none">{activeCount}</span>
               </div>
            )}
          </button>

          {/* Search Query Input - Fixed size, sheet escapes navbar */}
          <div className="relative" style={{ width: '560px' }}>
            {/* Expanding Sheet - FIXED position, handles both collapsed and expanded states */}
            <div 
              ref={sheetRef}
              onWheel={handleSheetWheel}
              onClick={() => {
                if (activePopup !== 'destination') {
                  setSearchInput("");
                  handleDestinationClick();
                }
              }}
              className={`fixed left-1/2 -translate-x-1/2 bg-white rounded-[32px] z-50 transition-all duration-300 ease-out flex flex-col overflow-hidden cursor-pointer ${
                activePopup === 'destination'
                  ? 'pointer-events-auto shadow-[0px_5px_25px_0px_rgba(0,0,0,0.1)] ring-1 ring-[rgba(0,0,0,0.15)]'
                  : 'pointer-events-auto ring-1 ring-[rgba(0,0,0,0.15)] hover:shadow-[0px_2px_8px_0px_rgba(0,0,0,0.06)]'
              }`}
              style={{
                top: activePopup === 'destination' ? '12px' : '24px',
                width: activePopup === 'destination' ? '956px' : '560px',
                height: activePopup === 'destination' ? '297px' : '51px',
              }}
            >
              {/* Input area inside sheet */}
              <div className={`flex justify-center ${activePopup === 'destination' ? 'pt-[16px] px-[16px]' : 'pt-0 px-0'}`}>
                <div 
                  className={`bg-white flex items-center px-[24px] py-[14px] rounded-[32px] transition-all duration-300 ${
                    activePopup === 'destination' 
                      ? 'border border-[rgba(0,0,0,0.15)] shadow-[0px_5px_15px_0px_rgba(0,0,0,0.1)]' 
                      : 'border-0 shadow-none'
                  }`}
                  style={{ width: '560px' }}
                >
                  {activePopup === 'destination' ? (
                    <>
                      <input
                        ref={inputRef}
                        value={searchInput}
                        onChange={(e) => setSearchInput(e.target.value)}
                        onKeyDown={handleSearchSubmit}
                        onClick={(e) => e.stopPropagation()}
                        className="font-['CentraNo2',sans-serif] font-medium text-[14px] text-[rgba(0,0,0,0.75)] bg-transparent outline-none flex-1 border-none p-0"
                        placeholder="Filter, search or add a place"
                      />
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          if (searchInput) {
                            onAddFilters(searchInput);
                            setSearchInput("");
                            setActivePopup(null);
                          }
                        }}
                        className="w-[40px] h-[40px] bg-[#1668e3] rounded-full flex items-center justify-center shrink-0 hover:bg-[#1255c4] transition-colors -mr-2"
                      >
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                          <path d="M3.75 9H14.25M14.25 9L9.75 4.5M14.25 9L9.75 13.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>
                    </>
                  ) : (
                    <motion.span 
                      key={placeholderIndex}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="font-['CentraNo2',sans-serif] font-medium text-[14px] text-[rgba(0,0,0,0.5)] truncate"
                    >
                      {placeholders[placeholderIndex]}
                    </motion.span>
                  )}
                </div>
              </div>

              {/* Response Message - shown when processing/completed */}
              {sheetMessage ? (
                <div className="flex items-center justify-center pt-[24px]">
                  <div className="flex items-center gap-2 px-4 py-3 bg-[#E8F0FE] rounded-[16px]">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M10 10.5C11.3807 10.5 12.5 9.38071 12.5 8C12.5 6.61929 11.3807 5.5 10 5.5C8.61929 5.5 7.5 6.61929 7.5 8C7.5 9.38071 8.61929 10.5 10 10.5Z" fill="#1668e3"/>
                      <path d="M10 18C10 18 16.5 13 16.5 8C16.5 4.41015 13.5899 1.5 10 1.5C6.41015 1.5 3.5 4.41015 3.5 8C3.5 13 10 18 10 18Z" stroke="#1668e3" strokeWidth="1.5"/>
                    </svg>
                    <span className="font-['CentraNo2',sans-serif] font-medium text-[14px] text-[#1668e3]">{sheetMessage}</span>
                  </div>
                </div>
              ) : (
                <>
                  {/* Suggestion Chips Row */}
                  <div className="flex gap-[16px] items-center overflow-x-auto px-[24px] pt-[16px]">
                    {[
                      { icon: 'plus', text: 'Beach view', action: 'filter' },
                      { icon: 'plus', text: 'Family friendly', action: 'filter' },
                      { icon: 'location', text: "Add Wai'ānapanapa State Park", action: 'poi', location: "Wai'ānapanapa State Park" },
                      { icon: 'question', text: 'Best beach for a family?', action: 'filter' },
                    ].map((chip, idx) => (
                      <button
                        key={idx}
                        onClick={async () => {
                          if (chip.action === 'poi' && chip.location) {
                            setSheetMessage("Adding pin...");
                            const response = await onAddPOI(chip.location);
                            setSheetMessage(response);
                            // Auto-hide message after 2 seconds
                            setTimeout(() => {
                              setSheetMessage(null);
                              setActivePopup(null);
                            }, 2000);
                          } else {
                            onAddFilters(chip.text);
                            setActivePopup(null);
                          }
                        }}
                        className="flex items-center gap-[12px] px-[24px] py-[12px] bg-white border border-[#dfe0e4] rounded-[24px] hover:bg-[#F7F7F7] transition-colors shrink-0"
                      >
                        {chip.icon === 'plus' && (
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M10 4V16M4 10H16" stroke="black" strokeWidth="1.5" strokeLinecap="round"/>
                          </svg>
                        )}
                        {chip.icon === 'location' && (
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M10 10.5C11.3807 10.5 12.5 9.38071 12.5 8C12.5 6.61929 11.3807 5.5 10 5.5C8.61929 5.5 7.5 6.61929 7.5 8C7.5 9.38071 8.61929 10.5 10 10.5Z" stroke="black" strokeWidth="1.5"/>
                            <path d="M10 18C10 18 16.5 13 16.5 8C16.5 4.41015 13.5899 1.5 10 1.5C6.41015 1.5 3.5 4.41015 3.5 8C3.5 13 10 18 10 18Z" stroke="black" strokeWidth="1.5"/>
                          </svg>
                        )}
                        {chip.icon === 'question' && (
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <circle cx="10" cy="10" r="8" stroke="black" strokeWidth="1.5"/>
                            <path d="M7.5 7.5C7.5 6.11929 8.61929 5 10 5C11.3807 5 12.5 6.11929 12.5 7.5C12.5 8.53553 11.7678 9.375 10.625 10C10.2798 10.1726 10 10.5597 10 10.9375V11.25" stroke="black" strokeWidth="1.5" strokeLinecap="round"/>
                            <circle cx="10" cy="14" r="1" fill="black"/>
                          </svg>
                        )}
                        <span className="font-['CentraNo2',sans-serif] font-medium text-[14px] text-black text-center leading-[18px] whitespace-nowrap">{chip.text}</span>
                      </button>
                    ))}
                  </div>
                  
                  {/* History Row (shows the user's last/original query; clicking fills the input) */}
                  {!!_query?.trim() && (
                    <div className="flex items-center gap-[16px] px-[24px]" style={{ marginTop: '24px' }}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="shrink-0">
                        <path d="M12 4C9.47361 4 7.22072 5.17109 5.75461 7.00002H8.64644C8.95769 7.00002 9.11136 7.38867 8.89645 7.60358L7.64645 8.85358C7.55268 8.94734 7.4255 9.00002 7.29289 9.00002H3C2.44772 9.00002 2 8.55231 2 8.00002V3.70714C2 3.57452 2.05268 3.44735 2.14645 3.35358L3.39645 2.10358C3.61136 1.88867 4 2.04234 4 2.35358V5.99902C5.82447 3.57068 8.72879 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C7.00362 22 2.86307 18.3358 2.11907 13.5479C2.07367 13.2558 2.30582 13 2.60147 13H3.62037C3.87259 13 4.08365 13.1885 4.12864 13.4366C4.80546 17.1694 8.07216 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4Z" fill="#191e3b"/>
                        <path d="M13 8C13 7.44772 12.5523 7 12 7C11.4477 7 11 7.44772 11 8V12C11 12.2652 11.1054 12.5196 11.2929 12.7071L14.2929 15.7071C14.6834 16.0976 15.3166 16.0976 15.7071 15.7071C16.0976 15.3166 16.0976 14.6834 15.7071 14.2929L13 11.5858V8Z" fill="#191e3b"/>
                      </svg>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          const historyQuery = _query.trim();
                          setSearchInput(historyQuery);
                          setActivePopup('destination');
                          // Ensure input is ready/focused for editing
                          requestAnimationFrame(() => inputRef.current?.focus());
                        }}
                        className="font-['CentraNo2',sans-serif] font-medium text-[14px] text-[#191e3b] leading-[1.25] hover:underline transition-colors text-left"
                      >
                        {_query.trim()}
                      </button>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>

          {/* History Icon Button */}
          <button 
            style={{ padding: '12px', backgroundColor: 'white' }}
            className="relative rounded-full shrink-0 cursor-pointer transition-all duration-200 ease-in-out border border-[rgba(0,0,0,0.15)] flex items-center justify-center hover:bg-[#F7F7F7] hover:shadow-[0px_2px_8px_0px_rgba(0,0,0,0.06)]"
            data-name="search"
            onClick={onChatToggle}
          >
            <IconGlyphHistory />
          </button>
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

      {/* Row 2: Controls Pills */}
      <div className="flex items-center justify-center px-[24px] py-[16px] max-w-[2520px] mx-auto">
        <div className="flex gap-[12px] items-center flex-wrap justify-center">
          {/* Location Pill - Always "Maui", with its own dropdown */}
          <div className="relative">
            <div 
              onClick={handleLocationPillClick}
              style={{ 
                backgroundColor: locationPillOpen ? '#ffffff' : '#f3f3f5',
                width: locationPillOpen ? '320px' : 'auto',
                boxShadow: locationPillOpen ? '0px 2px 8px rgba(0,0,0,0.1)' : 'none',
                border: locationPillOpen ? '1px solid rgba(0,0,0,0.15)' : 'none'
              }}
              className="flex gap-[12px] items-center px-[24px] py-[12px] rounded-[24px] shrink-0 cursor-pointer hover:bg-[#e8e8ea] transition-all duration-200 outline-none"
            >
              <div className="relative shrink-0 size-[20px]" data-name="Icon">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                  <g id="Icon" opacity="0.75">
                    <path d={svgPaths.p19727880} fill="#212121" id="Union" />
                  </g>
                </svg>
              </div>
              {locationPillOpen ? (
                <input
                  ref={locationInputRef}
                  value="Maui"
                  readOnly
                  onClick={(e) => e.stopPropagation()}
                  className="font-['CentraNo2',sans-serif] font-medium text-[14px] text-black bg-transparent outline-none w-full border-none p-0 cursor-default"
                  placeholder="Maui"
                />
              ) : (
                <span className="font-['CentraNo2',sans-serif] font-medium leading-[18px] text-[14px] text-black text-center whitespace-nowrap">
                  Maui
                </span>
              )}
            </div>
            
            {/* Location Pill Dropdown - Static Maui destinations */}
            {locationPillOpen && (
              <>
                <div className="fixed inset-0 z-30" onClick={() => setLocationPillOpen(false)} />
                <div className="absolute top-[52px] left-0 w-[320px] bg-white rounded-[16px] shadow-lg border border-[rgba(0,0,0,0.1)] z-40 py-2">
                  {[
                    'Maui, Hawaii',
                    'Lahaina, Maui',
                    'Wailea, Maui',
                    'Kaanapali Beach, Maui',
                    'Paia, Maui',
                    'Kihei, Maui'
                  ].map((location) => (
                    <div
                      key={location}
                      onClick={() => {
                        onSearch(location);
                        setLocationPillOpen(false);
                      }}
                      className="flex items-center gap-3 px-4 py-3 hover:bg-[#F3F6F8] cursor-pointer transition-colors"
                    >
                      <div className="size-[20px] text-[#717171]">
                        <svg className="block size-full" fill="none" viewBox="0 0 20 20">
                          <path d={svgPaths.p19727880} fill="currentColor" opacity="0.5" />
                        </svg>
                      </div>
                      <span className="font-['CentraNo2',sans-serif] font-medium text-[14px] text-[#191e3b]">
                        {location}
                      </span>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Dates Pill */}
          <button 
            onClick={handleDatesClick}
            style={{ backgroundColor: activePopup === 'calendar' ? '#e0e0e2' : '#f3f3f5' }}
            className="flex gap-[12px] items-center px-[24px] py-[12px] rounded-[24px] shrink-0 cursor-pointer hover:!bg-[#e8e8ea] transition-colors border-0 outline-none focus:ring-2 focus:ring-[#0F51ED] focus:ring-offset-1"
          >
            <div className="relative shrink-0 size-[20px]" data-name="Icon">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                <g clipPath="url(#clip0_header_dates)" id="Icon" opacity="0.75">
                  <path d={svgPaths.p31076400} fill="#212121" id="Union" />
                </g>
                <defs>
                  <clipPath id="clip0_header_dates">
                    <rect fill="white" height="20" width="20" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <span className="font-['CentraNo2',sans-serif] font-medium leading-[18px] text-[14px] text-black text-center whitespace-nowrap">
              {datesText}
            </span>
          </button>

          {/* People Pill */}
          <button 
            onClick={handlePeopleClick}
            style={{ backgroundColor: activePopup === 'people' ? '#e0e0e2' : '#f3f3f5' }}
            className="flex gap-[12px] items-center px-[24px] py-[12px] rounded-[24px] shrink-0 cursor-pointer hover:!bg-[#e8e8ea] transition-colors border-0 outline-none focus:ring-2 focus:ring-[#0F51ED] focus:ring-offset-1"
          >
            <div className="relative shrink-0 size-[20px]" data-name="Icon">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                <g clipPath="url(#clip0_header_people)" id="Icon" opacity="0.75">
                  <path d={svgPaths.p34958b80} fill="#212121" id="Union" />
                </g>
                <defs>
                  <clipPath id="clip0_header_people">
                    <rect fill="white" height="20" width="20" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <span className="font-['CentraNo2',sans-serif] font-medium leading-[18px] text-[14px] text-black text-center whitespace-nowrap">
              {peopleText}
            </span>
          </button>

          {/* Active Filter Tags (removable) */}
          {activeFilters.map((filter, idx) => (
            <div 
              key={`${filter.type}-${filter.value}-${idx}`}
              style={{ backgroundColor: '#f3f3f5' }}
              className="flex gap-[12px] items-center px-[24px] py-[12px] rounded-[24px] shrink-0 hover:bg-[#e8e8ea] transition-colors"
            >
              <span className="font-['CentraNo2',sans-serif] font-medium leading-[18px] text-[14px] text-black text-center whitespace-nowrap">
                {filter.label}
              </span>
              <button
                onClick={() => removeFilterTag(filter)}
                className="relative shrink-0 size-[20px] flex items-center justify-center hover:bg-[#d8d8da] rounded-full transition-colors border-0 outline-none"
              >
                <X size={14} strokeWidth={2} />
              </button>
            </div>
          ))}
        </div>
      </div>
      
      {/* Popups - Calendar, People, Filters only (Destination has inline sheet) */}
      {activePopup && activePopup !== 'destination' && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setActivePopup(null)} />
          <div 
            className="absolute top-[52px] left-1/2 -translate-x-1/2 w-[850px] z-50 bg-white rounded-[32px] transition-all duration-300 ease-in-out origin-top"
            style={{ 
              height: activePopup === 'calendar' ? `${calendarHeight}px` : (activePopup === 'filters' ? '600px' : '360px'),
              width: activePopup === 'filters' ? '780px' : '968px'
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

              {activePopup === 'filters' && (
                 <FiltersView filters={filters} onFilterChange={onFilterChange} />
              )}
            </div>
          </div>
        </>
      )}
      
      {/* Backdrop for destination popup (inline sheet) */}
      {activePopup === 'destination' && (
        <div className="fixed inset-0 z-30" onClick={() => setActivePopup(null)} />
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
              <path d={svgPaths.p170e200} fill="var(--fill-0, #191E3B)" id="Glyph" />
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

function Content18({ query, pois, filters, isParsing = false, onResetFilters }: { query?: string, pois?: POI[], filters?: FilterState, isParsing?: boolean, onResetFilters?: () => void }) {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(16);
  const [autoLoadKey, setAutoLoadKey] = useState(0);
  const [dynamicDescription, setDynamicDescription] = useState("");
  
  // Prevent wheel events on the outer container from scrolling the page
  const handleContainerWheel = (e: React.WheelEvent) => {
    // Only stop propagation - let child elements handle their own scrolling
    e.stopPropagation();
  };

  // Fetch AI description - called immediately when properties arrive
  const fetchDescription = async (searchQuery: string, topProperties: Property[]) => {
    if (topProperties.length === 0) return;
    
    try {
      const response = await fetch(`https://${projectId}.supabase.co/functions/v1/make-server-217a788a/generate-description`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${publicAnonKey}`
        },
        body: JSON.stringify({
          query: searchQuery,
          properties: topProperties.slice(0, 4)
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
  };

  const fetchProperties = async (searchQuery?: string) => {
    setLoading(true);
    setDynamicDescription(""); // Clear description for new search
    // Reset visible count and auto-load key on new search
    setVisibleCount(16);
    setAutoLoadKey(prev => prev + 1);
    
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
      
      // Start fetching description immediately (in parallel with UI update)
      fetchDescription(searchQuery || "", mappedProperties);
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
      className="grid w-full h-full min-h-0 min-w-0 gap-0 overflow-hidden"
      style={{ gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)" }}
      data-name="Content"
      onWheel={handleContainerWheel}
    >
      <div className="min-w-0 h-full overflow-y-auto overflow-x-hidden overscroll-contain">
        <ContentWithLoadMore 
          properties={visibleProperties} 
          loading={loading || isParsing} 
          query={query || ""} 
          hasMore={hasMore}
          onLoadMore={() => setVisibleCount(prev => prev + 12)}
          totalCount={filteredProperties.length}
          autoLoadKey={autoLoadKey}
          onResetFilters={onResetFilters}
          dynamicDescription={dynamicDescription}
        />
      </div>
      <Frame properties={loading || isParsing ? [] : visibleProperties} pois={pois} />
    </div>
  );
}

function MaxWrapper({ query, pois, filters, isParsing, onResetFilters }: { query?: string, pois?: POI[], filters?: FilterState, isParsing?: boolean, onResetFilters?: () => void }) {
  return (
    <div className="w-full h-full flex" data-name="Max wrapper">
      <Content18 query={query} pois={pois} filters={filters} isParsing={isParsing} onResetFilters={onResetFilters} />
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

  // Smart Search Parsing - replaces current search
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

  // Add filters from input - merges with existing filters, doesn't replace search
  const addFiltersFromInput = async (term: string) => {
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
      
      // Merge parsed filters - ADD to existing arrays, don't replace
      if (data.filters) {
        setFilters(prev => ({
          ...prev,
          // Only update price range if API returned non-default values
          priceRange: (data.filters.priceRange?.min > 0 || data.filters.priceRange?.max < 10000) 
            ? data.filters.priceRange 
            : prev.priceRange,
          // Only update numeric filters if API returned non-zero values
          bedrooms: data.filters.bedrooms > 0 ? data.filters.bedrooms : prev.bedrooms,
          beds: data.filters.beds > 0 ? data.filters.beds : prev.beds,
          bathrooms: data.filters.bathrooms > 0 ? data.filters.bathrooms : prev.bathrooms,
          // Merge arrays - add new items without duplicates
          propertyTypes: [...new Set([...prev.propertyTypes, ...(data.filters.propertyTypes || [])])],
          amenities: [...new Set([...prev.amenities, ...(data.filters.amenities || [])])]
        }));
      }
      
      // Add concepts to existing search query (if any)
      if (data.concepts && data.concepts.length > 0) {
        setSearchQuery((prev: string) => {
          const existing = prev.trim();
          const newConcepts = data.concepts.join(" ");
          return existing ? `${existing} ${newConcepts}` : newConcepts;
        });
      }
      // If no concepts extracted, don't change the search query
    } catch (e) {
      console.error("Add filters parsing failed:", e);
      // Fallback: add the raw text to the search query
      setSearchQuery((prev: string) => {
        const existing = prev.trim();
        return existing ? `${existing} ${term}` : term;
      });
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
    <div className="bg-white overflow-hidden relative rounded-[24px] w-full h-screen flex flex-col fixed inset-0" data-name="Loading">
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
        onAddFilters={(term) => {
          // Parse and add filters without replacing the search/display location
          addFiltersFromInput(term);
        }}
        onAddPOI={async (location) => {
          // Use chat endpoint to resolve location and add POI
          try {
            const res = await fetch(`https://${projectId}.supabase.co/functions/v1/make-server-217a788a/chat`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${publicAnonKey}`
              },
              body: JSON.stringify({ message: `pin ${location}` })
            });
            const data = await res.json();
            
            if (data.action?.type === 'POI') {
              setMapPOIs(prev => [...prev, { 
                lat: data.action.data.lat, 
                lng: data.action.data.lng, 
                label: data.action.data.label 
              }]);
              setAiActions(prev => [...prev, { 
                id: Date.now().toString(), 
                text: `Added pin: ${data.action.data.label}`, 
                type: 'POI' 
              }]);
              return data.message || `Added ${data.action.data.label} to the map`;
            }
            return data.message || "Location added";
          } catch (e) {
            console.error(e);
            return "Couldn't add that location";
          }
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
          <MaxWrapper query={searchQuery} pois={mapPOIs} filters={filters} isParsing={isParsing} onResetFilters={() => setFilters({
            priceRange: { min: 0, max: 10000 },
            bedrooms: 0,
            beds: 0,
            bathrooms: 0,
            propertyTypes: [],
            amenities: [],
            rating: null,
            accessibility: []
          })} />
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
