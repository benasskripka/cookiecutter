import svgPaths from "../imports/svg-3ulgfyvsbz";
import { RotatingText } from "./RotatingText";

interface SearchInputProps {
  icon: 'location' | 'calendar' | 'people';
  placeholder?: string;
  value?: string;
  position: number;
  isExpanded?: boolean;
  isActive?: boolean;
  onClick?: () => void;
  onChange?: (value: string) => void;
  rotatingValues?: string[];
  rotatingIndex?: number;
  isUserSelection?: boolean;
  inputWidth?: string;
  className?: string;
}

export function SearchInput({ 
  icon, 
  placeholder, 
  value, 
  position, 
  isExpanded, 
  isActive, 
  onClick, 
  onChange,
  rotatingValues,
  rotatingIndex = 0,
  isUserSelection = false,
  inputWidth = "w-[250px]",
  className,
}: SearchInputProps) {
  const iconPaths = {
    location: svgPaths.p34a07370,
    calendar: svgPaths.p31076400,
    people: svgPaths.p34958b80,
  };

  const textColor = value ? 'text-black' : 'text-[rgba(0,0,0,0.5)]';

  return (
    <div 
      className={`flex gap-[12px] items-center h-[48px] px-[24px] py-[12px] rounded-[24px] cursor-pointer transition-all duration-200 ${isActive ? 'bg-white shadow-[0px_5px_25px_0px_rgba(0,0,0,0.1)] ring-1 ring-[rgba(0,0,0,0.15)] z-10' : 'hover:bg-[#F3F6F8] ring-1 ring-transparent'} ${className || ''}`}
      onClick={onClick}
    >
      <div className="relative shrink-0 size-[20px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <g clipPath={`url(#clip-${icon})`} opacity="0.75">
            <path d={iconPaths[icon]} fill="var(--fill-0, #212121)" />
          </g>
          <defs>
            <clipPath id={`clip-${icon}`}>
              <rect fill="white" height="20" width="20" />
            </clipPath>
          </defs>
        </svg>
      </div>
      {isActive && icon === 'location' && onChange ? (
        <div className="relative w-full h-[18px] flex items-center">
          {/* Ghost element for highlighting text */}
          <div 
            className={`absolute inset-0 flex items-center pointer-events-none font-['CentraNo2',sans-serif] font-medium h-[18px] leading-[18px] not-italic text-[14px] ${inputWidth} whitespace-pre overflow-hidden`}
            aria-hidden="true"
          >
            {(() => {
              const text = value || '';
              const highlightPhrase = 'next month';
              const lowerText = text.toLowerCase();
              const index = lowerText.indexOf(highlightPhrase);
              
              if (index === -1) return <span className="text-black">{text}</span>;
              
              const before = text.slice(0, index);
              const match = text.slice(index, index + highlightPhrase.length);
              const after = text.slice(index + highlightPhrase.length);
              
              return (
                <>
                  <span className="text-black">{before}</span>
                  <span className="text-[#0F51ED]">{match}</span>
                  <span className="text-black">{after}</span>
                </>
              );
            })()}
          </div>
          
          <input
            type="text"
            value={value || ''}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            className={`font-['CentraNo2',sans-serif] font-medium h-[18px] leading-[18px] not-italic text-[14px] text-transparent caret-black bg-transparent border-none outline-none ${inputWidth} relative z-10`}
            autoFocus
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      ) : rotatingValues && !isActive ? (
        <RotatingText values={rotatingValues} currentIndex={rotatingIndex} />
      ) : value ? (
        <div className={`font-['CentraNo2',sans-serif] font-medium h-[18px] leading-[18px] not-italic relative shrink-0 text-[14px] ${textColor} text-center text-nowrap whitespace-pre`}>
          <p>{isUserSelection ? value : `"${value}"`}</p>
        </div>
      ) : (
        <p className={`font-['CentraNo2',sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[14px] ${textColor} text-center text-nowrap whitespace-pre`}>
          {placeholder}
        </p>
      )}
    </div>
  );
}