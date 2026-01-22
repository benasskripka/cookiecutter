import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

interface CalendarViewProps {
  startDate: Date | null;
  endDate: Date | null;
  onChange: (start: Date | null, end: Date | null) => void;
  onHeightChange?: (height: number) => void;
}

export function CalendarView({ startDate, endDate, onChange, onHeightChange }: CalendarViewProps) {
  // We'll show 2 months at a time, starting from currentMonthIndex
  const [currentMonthIndex, setCurrentMonthIndex] = useState(0);

  const monthsData = [
    { name: "January 2026", days: 31, startDay: 4, monthIndex: 0, year: 2026 },
    { name: "February 2026", days: 28, startDay: 0, monthIndex: 1, year: 2026 },
    { name: "March 2026", days: 31, startDay: 0, monthIndex: 2, year: 2026 },
    { name: "April 2026", days: 30, startDay: 3, monthIndex: 3, year: 2026 },
    { name: "May 2026", days: 31, startDay: 5, monthIndex: 4, year: 2026 },
  ];

  const weekDays = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
  
  const visibleMonths = monthsData.slice(currentMonthIndex, currentMonthIndex + 2);

  // Calculate and report height whenever the visible month index changes
  useEffect(() => {
    let maxWeeks = 0;
    visibleMonths.forEach(month => {
      const totalSlots = month.startDay + month.days;
      const weeks = Math.ceil(totalSlots / 7);
      if (weeks > maxWeeks) maxWeeks = weeks;
    });
    
    // Base height calculation:
    // 80px (top offset) + 24px (pt-6) + 24px (title text) + 16px (title mb) + 16px (weekdays text) + 8px (weekdays mb) + 32px (pb-8) = 200px
    // Row height = 40px (h-10) + 4px (gap-y-1) = 44px
    const calculatedHeight = 200 + (maxWeeks * 44);
    
    onHeightChange?.(calculatedHeight);
  }, [currentMonthIndex, onHeightChange]);

  const handlePrevMonth = () => {
    if (currentMonthIndex > 0) {
      setCurrentMonthIndex(prev => prev - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonthIndex < monthsData.length - 2) {
      setCurrentMonthIndex(prev => prev + 1);
    }
  };

  const handleDateClick = (day: number, monthIndex: number, year: number) => {
    const clickedDate = new Date(year, monthIndex, day);
    
    // Reset hours to compare dates purely by day
    clickedDate.setHours(0, 0, 0, 0);

    if (!startDate || (startDate && endDate)) {
      // Start a new selection
      onChange(clickedDate, null);
    } else if (startDate && !endDate) {
      // If tapping the same date again, clear the selection
      const currentStart = new Date(startDate);
      currentStart.setHours(0, 0, 0, 0);
      
      if (clickedDate.getTime() === currentStart.getTime()) {
        onChange(null, null);
        return;
      }

      // Complete the range
      if (clickedDate < startDate) {
        onChange(clickedDate, startDate);
      } else {
        onChange(startDate, clickedDate);
      }
    }
  };

  const isDateSelected = (day: number, monthIndex: number, year: number) => {
    if (!startDate) return false;
    const current = new Date(year, monthIndex, day);
    current.setHours(0, 0, 0, 0);
    
    const start = new Date(startDate);
    start.setHours(0, 0, 0, 0);
    
    if (endDate) {
      const end = new Date(endDate);
      end.setHours(0, 0, 0, 0);
      return current.getTime() === start.getTime() || current.getTime() === end.getTime();
    }
    
    return current.getTime() === start.getTime();
  };

  const isDateInRange = (day: number, monthIndex: number, year: number) => {
    if (!startDate || !endDate) return false;
    const current = new Date(year, monthIndex, day);
    current.setHours(0, 0, 0, 0);
    
    const start = new Date(startDate);
    start.setHours(0, 0, 0, 0);
    
    const end = new Date(endDate);
    end.setHours(0, 0, 0, 0);
    
    return current > start && current < end;
  };

  return (
    <div className="absolute top-[80px] left-0 right-0 bg-white rounded-[32px] flex justify-center gap-12 flex-wrap animate-in fade-in slide-in-from-top-2 duration-300 pb-8">
      {/* Navigation */}
      <button 
        onClick={handlePrevMonth}
        disabled={currentMonthIndex === 0}
        className={`absolute left-8 top-[140px] -translate-y-1/2 w-[38px] h-[38px] rounded-full border flex items-center justify-center transition-all duration-200 bg-white
          ${currentMonthIndex === 0 ? 'border-gray-200 text-gray-300 cursor-not-allowed' : 'border-[#D1D5DC] hover:border-black text-black'}`}
      >
        <ChevronLeft className="w-[14px] h-[14px]" strokeWidth={2} />
      </button>
      <button 
        onClick={handleNextMonth}
        disabled={currentMonthIndex >= monthsData.length - 2}
        className={`absolute right-8 top-[140px] -translate-y-1/2 w-[38px] h-[38px] rounded-full border flex items-center justify-center transition-all duration-200 bg-white
          ${currentMonthIndex >= monthsData.length - 2 ? 'border-gray-200 text-gray-300 cursor-not-allowed' : 'border-[#D1D5DC] hover:border-black text-black'}`}
      >
        <ChevronRight className="w-[14px] h-[14px]" strokeWidth={2} />
      </button>

      {visibleMonths.map((month) => (
        <div key={month.name} className="w-[320px]">
          <h3 className="text-center font-semibold mb-4 text-base pt-6">{month.name}</h3>
          <div className="grid grid-cols-7 gap-y-1 mb-2">
            {weekDays.map((day) => (
              <div key={day} className="text-center text-xs text-gray-500 font-medium">
                {day}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-y-1">
            {Array.from({ length: month.startDay }).map((_, i) => (
              <div key={`empty-${i}`} />
            ))}
            {Array.from({ length: month.days }).map((_, i) => {
              const day = i + 1;
              const isSelected = isDateSelected(day, month.monthIndex, month.year);
              const isRange = isDateInRange(day, month.monthIndex, month.year);
              
              return (
                <div key={day} className="flex justify-center w-full">
                  <button
                    onClick={() => handleDateClick(day, month.monthIndex, month.year)}
                    className={`
                      w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-all relative z-10
                      ${isSelected ? 'bg-black text-white hover:bg-black' : ''}
                      ${isRange ? 'bg-[#F3F4F6] !rounded-none w-[calc(100%+2px)] -mx-[1px]' : ''}
                      ${!isSelected && !isRange ? 'hover:border hover:border-black' : ''}
                    `}
                  >
                    {day}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
