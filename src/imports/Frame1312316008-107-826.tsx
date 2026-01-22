export default function Frame() {
  return (
    <div className="bg-white overflow-clip relative rounded-[32px] size-full">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.15)] border-solid inset-[-1px] pointer-events-none rounded-[33px] shadow-[0px_5px_15px_0px_rgba(0,0,0,0.1)]" />
    </div>
  );
}