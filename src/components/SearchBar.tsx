import { useState, useEffect } from "react";
import { SearchInput } from "./SearchInput";
import { SearchButton } from "./SearchButton";
import { SearchSuggestions } from "./SearchSuggestions";

import { CalendarView } from "./CalendarView";
import { PeopleSelector, PeopleCounts } from "./PeopleSelector";

interface SearchBarProps {
  onSearch?: (data: { location: string; dates: string; people: string }) => void;
}

export function SearchBar({ onSearch }: SearchBarProps) {
  const [activeInput, setActiveInput] = useState<'location' | 'calendar' | 'people' | null>(null);
  const [locationValue, setLocationValue] = useState("Santa Fe traditional homes");
  const [peopleCounts, setPeopleCounts] = useState<PeopleCounts>({
    adults: 0,
    children: 0,
    infants: 0,
    pets: 0
  });
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [calendarHeight, setCalendarHeight] = useState(464); // Default to approx height
  const [peopleHeight, setPeopleHeight] = useState(380);
  const [rotatingIndex, setRotatingIndex] = useState(0);
  const [hasUserSelection, setHasUserSelection] = useState(false);

  const handleSearch = () => {
    if (onSearch) {
      // If dates aren't selected but user clicks search, we might want default dates or null
      // Passing whatever is in state
      onSearch({
        location: locationValue,
        startDate,
        endDate,
        peopleCounts
      } as any);
    }
  };

  const rotatingValues = [
    "Santa Fe traditional homes",
    "Condo in New York",
    "Villa for a family near me",
    "Destin, Florida"
  ];

  useEffect(() => {
    if (activeInput !== 'location' && !hasUserSelection) {
      const interval = setInterval(() => {
        setRotatingIndex((prev) => (prev + 1) % rotatingValues.length);
        setLocationValue(rotatingValues[(rotatingIndex + 1) % rotatingValues.length]);
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [activeInput, rotatingIndex, hasUserSelection]);

  const isExpanded = activeInput !== null;
  
  const keywords = ['explore', 'discover', 'best time'];
  const lowerCaseValue = locationValue.toLowerCase();
  const containsKeyword = keywords.some(k => lowerCaseValue.includes(k));

  // Trigger simplified view if the query contains specific keywords
  // We check activeInput or hasUserSelection to ensure it's user-driven
  const isLongQuery = (activeInput === 'location' || hasUserSelection) && containsKeyword;
  
  const showExtraInputs = !isLongQuery;

  const handleInputClick = (inputType: 'location' | 'calendar' | 'people') => {
    if (activeInput === inputType) {
      setActiveInput(null); 
    } else {
      setActiveInput(inputType);
      if (inputType === 'location' && !hasUserSelection) {
        setLocationValue("");
      }
      if (inputType === 'people') {
        // Default to 2 adults if no one is selected yet
        const total = peopleCounts.adults + peopleCounts.children + peopleCounts.infants + peopleCounts.pets;
        if (total === 0) {
          setPeopleCounts(prev => ({ ...prev, adults: 2 }));
        }
      }
      if (inputType === 'calendar') {
        if (!startDate && !endDate) {
           // Pre-select Feb 9 - Feb 15, 2026
           setStartDate(new Date(2026, 1, 9));
           setEndDate(new Date(2026, 1, 15));
        }
      }
    }
  };

  const handleSuggestionSelect = (value: string) => {
    // Special handling for "next month" actions
    if (value === 'Set dates') {
      setActiveInput('calendar');
      return;
    }

    if (value === 'Flexible in February' || value === '1 Feb - 28 Feb') {
      // Set to February 2026
      setStartDate(new Date(2026, 1, 1));
      setEndDate(new Date(2026, 1, 28));
      
      // Keep focus state active but just update data
      setHasUserSelection(true);
      return;
    }

    // Special handling for "next week" actions
    if (value === 'Flexible next week' || value === '2 Feb - 8 Feb') {
      // Set to next week: Feb 2 - Feb 8, 2026
      setStartDate(new Date(2026, 1, 2));
      setEndDate(new Date(2026, 1, 8));
      
      // Keep focus state active but just update data
      setHasUserSelection(true);
      return;
    }

    setLocationValue(value);
    setHasUserSelection(true);
    setActiveInput(null);
  };

  // Dimensions from Figma
  const width = 968;
  const initialHeight = 60;


  
  // Calculate height based on active content
  const getHeight = () => {
    if (!isExpanded) return `${initialHeight}px`;
    if (activeInput === 'calendar') return `${calendarHeight}px`;
    if (activeInput === 'people') return `${peopleHeight}px`;
    return '379px';
  };

  const totalPeople = peopleCounts.adults + peopleCounts.children + peopleCounts.infants + peopleCounts.pets;
  const peopleInputValue = totalPeople > 0 ? `${totalPeople} people` : "";

  const handleDateChange = (start: Date | null, end: Date | null) => {
    setStartDate(start);
    setEndDate(end);
    if (start && end) {
      // Optional: Auto-close or switch input?
      // keeping it open for now as user might want to adjust
    }
  };

  const getDatesValue = () => {
    if (!startDate) return "";
    const startStr = startDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    if (!endDate) return startStr;
    const endStr = endDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    return `${startStr} – ${endStr}`;
  };

  const datesInputValue = getDatesValue();

  return (
    <div 
      className="relative z-50 transition-all duration-300 ease-out w-full"
      style={{
        height: getHeight(),
      }}
    >
      {/* Expanding Background Shell */}
      <>
        {isExpanded && (
          <div 
            className="fixed -inset-[100vmax]" 
            onClick={() => setActiveInput(null)} 
          />
        )}
        <div 
          className={`absolute bg-white transition-all duration-300 ease-out ${
            isExpanded 
              ? '-inset-3 rounded-[32px] shadow-[0px_5px_25px_0px_rgba(0,0,0,0.1)] ring-1 ring-[rgba(0,0,0,0.15)]' 
              : 'inset-0 rounded-[38px] shadow-none'
          }`}
        >
          {/* Visual border for collapsed state matching Framerz */}
          {!isExpanded && (
            <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.15)] border-solid inset-[-1px] pointer-events-none rounded-[39px] shadow-[0px_5px_15px_0px_rgba(0,0,0,0.1)]" />
          )}
        </div>
      </>

      {/* Input Container */}
      <div className="relative flex items-center p-[6px] h-[60px] gap-2">
        <div className={`flex-1 min-w-0 ${isLongQuery ? 'w-full' : ''}`}>
          <SearchInput 
            icon="location" 
            value={locationValue}
            position={0}
            isExpanded={isExpanded}
            isActive={activeInput === 'location'}
            onClick={() => handleInputClick('location')}
            onChange={(val) => {
              const lowerVal = val.toLowerCase();
              
              // Auto-select specific dates when user types space after "next month"
              if (lowerVal.includes('next month ')) {
                setLocationValue(val);
                setStartDate(new Date(2026, 1, 1));  // Feb 1
                setEndDate(new Date(2026, 1, 28));   // Feb 28
                setHasUserSelection(true);
                return;
              }
              
              // Auto-select specific dates when user types space after "next week"
              if (lowerVal.includes('next week ')) {
                setLocationValue(val);
                setStartDate(new Date(2026, 1, 2));  // Feb 2
                setEndDate(new Date(2026, 1, 8));    // Feb 8
                setHasUserSelection(true);
                return;
              }
              
              setLocationValue(val);
              setHasUserSelection(val.length > 0);
            }}
            rotatingValues={hasUserSelection ? undefined : rotatingValues}
            rotatingIndex={rotatingIndex}
            isUserSelection={hasUserSelection}
            inputWidth="w-full"
            className="w-full"
          />
        </div>
        
        {showExtraInputs && (
          <div className="hidden md:flex gap-2 shrink-0">
            <SearchInput 
              icon="calendar" 
              placeholder="Add dates" 
              value={datesInputValue}
              position={1}
              isExpanded={isExpanded}
              isActive={activeInput === 'calendar'}
              onClick={() => handleInputClick('calendar')}
              isUserSelection={!!startDate}
              className="w-[180px]"
            />
            <SearchInput 
              icon="people" 
              placeholder="Add people"
              value={peopleInputValue}
              position={2}
              isExpanded={isExpanded}
              isActive={activeInput === 'people'}
              onClick={() => handleInputClick('people')}
              isUserSelection={true}
              className="w-[160px]"
            />
          </div>
        )}

        <SearchButton 
          onClick={handleSearch} 
          label={isLongQuery ? "Explore" : "Search"} 
        />
      </div>

      {/* Search suggestions dropdown */}
      {activeInput === 'location' && (
        <SearchSuggestions query={locationValue} onSelect={handleSuggestionSelect} hasDates={!!startDate} />
      )}
      
      {/* Calendar View */}
      {activeInput === 'calendar' && (
        <CalendarView 
          startDate={startDate}
          endDate={endDate}
          onChange={handleDateChange}
          onHeightChange={setCalendarHeight}
        />
      )}

      {/* People Selector */}
      {activeInput === 'people' && (
        <PeopleSelector 
          counts={peopleCounts}
          onChange={setPeopleCounts}
          onHeightChange={setPeopleHeight}
        />
      )}
    </div>
  );
}
