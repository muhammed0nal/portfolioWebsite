import Button from "./Button";
export default function RetroCard({ header, content, children }) {
  return (
    <div className=" bg-[#cfcfcf] border-[3px] border-black shadow-[4px_4px_0_#000] overflow-hidden">
      {/* Top bar */}
      <div className="h-[70px] bg-[#2f2ac6] border-b-[3px] border-black px-5 flex items-center justify-between">
        <h1 className="text-white text-[24px] md:text-[40px] leading-none font-bold tracking-tight select-none">
          {header}
        </h1>
        <Button className="py-3">
          <span className="block w-6 h-[4px] bg-black rounded-sm" />
        </Button>
      </div>
      {/* Body */}
      {children}
    </div>
  );
}
