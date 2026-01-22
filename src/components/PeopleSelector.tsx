import { Minus, Plus } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import svgPaths from "../imports/svg-joxjs8uyv5";

// Individual icons using the paths from the imported file
function IconGlyphPeople() {
  return (
    <div className="size-[48px] mb-6 bg-[rgba(0,0,0,0)]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g>
          <path clipRule="evenodd" d={svgPaths.p2875ba00} fill="#595959" fillRule="evenodd" />
          <path d={svgPaths.p3a6d5f00} fill="#595959" />
          <path clipRule="evenodd" d={svgPaths.p2506d550} fill="#595959" fillRule="evenodd" />
          <path clipRule="evenodd" d={svgPaths.p25033a00} fill="#595959" fillRule="evenodd" />
        </g>
      </svg>
    </div>
  );
}

function IconGlyphChild() {
  return (
    <div className="size-[48px] mb-6">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g>
          <path clipRule="evenodd" d={svgPaths.pdf54780} fill="#595959" fillRule="evenodd" />
          <path d={svgPaths.p10afc070} fill="#595959" />
        </g>
      </svg>
    </div>
  );
}

function IconGlyphInfant() {
  return (
    <div className="size-[48px] mb-6">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g>
          <path clipRule="evenodd" d={svgPaths.p2cc1a2b0} fill="#595959" fillRule="evenodd" />
        </g>
      </svg>
    </div>
  );
}

function IconGlyphPets() {
  return (
    <div className="size-[48px] mb-6">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g>
          <path clipRule="evenodd" d={svgPaths.p2cbe4600} fill="#595959" fillRule="evenodd" />
          <path clipRule="evenodd" d={svgPaths.p96c3800} fill="#595959" fillRule="evenodd" />
          <path clipRule="evenodd" d={svgPaths.p3720a400} fill="#595959" fillRule="evenodd" />
          <path clipRule="evenodd" d={svgPaths.p1edeb280} fill="#595959" fillRule="evenodd" />
          <path clipRule="evenodd" d={svgPaths.p1b662500} fill="#595959" fillRule="evenodd" />
        </g>
      </svg>
    </div>
  );
}

interface SelectionCardProps {
  icon: React.ReactNode;
  label: string;
  description: string;
  value: number;
  onChange: (val: number) => void;
  min?: number;
}

function SelectionCard({ icon, label, description, value, onChange, min = 0 }: SelectionCardProps) {
  // If min is 1 (like Adults), value 1 is still "selected" state because we want to see the controls.
  // Generally, if value > 0, it's selected. 
  // Exception: If min is 0, value 0 is unselected.
  const isSelected = value > 0;

  return (
    <div 
      className={`
        relative w-full h-[233px] rounded-[24px] p-[26px] flex flex-col justify-between
        border transition-all duration-200
        ${isSelected ? 'border-black ring-1 ring-black' : 'border-[#F3F4F6]'}
      `}
    >
      <div>
        {icon}
        <h3 className="font-['CentraNo2',sans-serif] font-medium text-[16px] leading-[18px] text-black mb-1">
          {label}
        </h3>
        <p className="font-['CentraNo2',sans-serif] text-[14px] leading-[18px] text-[#6b7282]">
          {description}
        </p>
      </div>

      <div className="flex items-center gap-4">
        {/* Plus Button */}
        <button
          onClick={() => onChange(value + 1)}
          className="w-[38px] h-[38px] rounded-full border border-[#D1D5DC] hover:border-black text-black flex items-center justify-center transition-all duration-200"
        >
          <Plus className="w-[14px] h-[14px]" strokeWidth={2} />
        </button>

        {/* Value */}
        <span 
          className={`
            font-['CentraNo2',sans-serif] font-medium text-[16px] leading-[18px] w-3 text-center transition-all duration-200
            ${isSelected ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4 absolute'}
          `}
        >
          {value}
        </span>

        {/* Minus Button */}
        <button
          onClick={() => onChange(Math.max(min, value - 1))}
          disabled={value <= min}
          className={`
            w-[38px] h-[38px] rounded-full border flex items-center justify-center transition-all duration-200
            ${value <= min 
              ? 'border-[#E5E7EB] text-[#E5E7EB] cursor-not-allowed' 
              : 'border-[#D1D5DC] hover:border-black text-black'}
            ${isSelected ? 'opacity-100 scale-100' : 'opacity-0 scale-75 pointer-events-none absolute'}
          `}
          aria-hidden={!isSelected}
        >
          <Minus className="w-[14px] h-[14px]" strokeWidth={2} />
        </button>
      </div>
    </div>
  );
}

export interface PeopleCounts {
  adults: number;
  children: number;
  infants: number;
  pets: number;
}

interface PeopleSelectorProps {
  counts: PeopleCounts;
  onChange: (counts: PeopleCounts) => void;
  compact?: boolean;
  onHeightChange?: (height: number) => void;
}

export function PeopleSelector({ counts, onChange, compact = false, onHeightChange }: PeopleSelectorProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !onHeightChange) return;

    const updateHeight = () => {
      if (containerRef.current) {
        // Add top offset (90px or 32px) + padding bottom (approx 32px)
        const topOffset = compact ? 32 : 90;
        const bottomPadding = 32;
        const height = containerRef.current.offsetHeight + topOffset + bottomPadding;
        onHeightChange(height);
      }
    };

    // Initial calculation
    updateHeight();

    const observer = new ResizeObserver(updateHeight);
    observer.observe(containerRef.current);
    
    return () => observer.disconnect();
  }, [onHeightChange, compact]);

  const updateCount = (key: keyof PeopleCounts, value: number) => {
    onChange({ ...counts, [key]: value });
  };

  return (
    <div 
      className={`absolute left-0 w-full px-[32px] animate-in fade-in slide-in-from-top-2 duration-300 ${compact ? 'top-[32px]' : 'top-[90px]'}`}
    >
      <div ref={containerRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <SelectionCard
          icon={<IconGlyphPeople />}
          label="Adults"
          description="Ages 18 or above"
          value={counts.adults}
          onChange={(val) => updateCount('adults', val)}
        />
        <SelectionCard
          icon={<IconGlyphChild />}
          label="Children"
          description="Ages 2–18"
          value={counts.children}
          onChange={(val) => updateCount('children', val)}
        />
        <SelectionCard
          icon={<IconGlyphInfant />}
          label="Infants"
          description="Under 2"
          value={counts.infants}
          onChange={(val) => updateCount('infants', val)}
        />
        <SelectionCard
          icon={<IconGlyphPets />}
          label="Pets"
          description="Service animals"
          value={counts.pets}
          onChange={(val) => updateCount('pets', val)}
        />
      </div>
    </div>
  );
}
