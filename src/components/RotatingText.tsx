import { useEffect, useState } from "react";

interface RotatingTextProps {
  values: string[];
  currentIndex: number;
}

export function RotatingText({ values, currentIndex }: RotatingTextProps) {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setIsAnimating(true);
    const timeout = setTimeout(() => setIsAnimating(false), 500);
    return () => clearTimeout(timeout);
  }, [currentIndex]);

  return (
    <div className="relative h-[18px] w-[250px] overflow-hidden">
      {values.map((value, index) => {
        const offset = index - currentIndex;
        const isVisible = Math.abs(offset) <= 1;
        
        return (
          <p
            key={index}
            className={`absolute font-['CentraNo2',sans-serif] font-medium leading-[18px] not-italic text-[14px] text-[rgba(0,0,0,0.5)] text-left text-nowrap whitespace-pre left-0 transition-all duration-500 ease-out ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              transform: `translateY(${offset * 30}px)`,
            }}
          >
            {value}
          </p>
        );
      })}
    </div>
  );
}