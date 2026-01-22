interface SearchButtonProps {
  onClick?: () => void;
  label?: string;
}

export function SearchButton({ onClick, label = "Search", className }: SearchButtonProps & { className?: string }) {
  return (
    <button 
      onClick={onClick}
      className={`bg-[#0f51ed] box-border content-stretch flex gap-[8px] items-center justify-center overflow-clip h-[48px] px-[24px] rounded-[24px] cursor-pointer hover:bg-[#0d47d4] transition-colors shrink-0 ${className || ''}`}
    >
      <div className="content-stretch flex items-start justify-center relative shrink-0">
        <p className="font-['CentraNo2',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white whitespace-pre">
          {label}
        </p>
      </div>
    </button>
  );
}