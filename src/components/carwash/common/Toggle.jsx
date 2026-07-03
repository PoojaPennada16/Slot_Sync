"use client";

export default function Toggle({
  checked = false,
  onChange,
  disabled = false,
}) {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onChange}
      className={`relative h-5 w-10 rounded-full transition-all duration-300 ${
        checked ? "bg-[#5B52EA]" : "bg-[#E5E7EB]"
      } ${disabled ? "cursor-not-allowed opacity-60" : "cursor-pointer"}`}
    >
      <span
        className={`absolute top-[2px] h-[15px] w-[15px] rounded-full bg-white shadow transition-all duration-300 ${
          checked ? "left-[22px]" : "left-[2px]"
        }`}
      />
    </button>
  );
}