export default function Button({ onClick, children, className }) {
  return (
    <button
      className={`
        px-4 py-2
        bg-[#CCCCCC]
        border-[3px] border-t-white border-l-white border-b-[#9D9E9B] border-r-[#9D9E9B]
        outline outline-[3px] outline-gray-800
        text-black font-bold text-sm tracking-widest uppercase
        cursor-pointer
        active:border-t-gray-600 active:border-l-gray-600 active:border-b-white active:border-r-white
        select-none
        ${className}
      `}
      onClick={onClick}
      style={{
        fontFamily: '"PixelOperator"',
      }}
    >
      {children}
    </button>
  );
}
