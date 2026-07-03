"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown, Check } from "lucide-react";

export default function ReusableDropdown({
  label,
  placeholder = "Select",
  options = [],
  value,
  onChange,
}) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () =>
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
  }, []);

  return (
    <div className="w-full" ref={dropdownRef}>
      {label && (
        <label className="mb-1 ml-2 block text-[12px] font-semibold text-[#0F172A]">
          {label}
        </label>
      )}

      <div className="relative z-[100]">
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="flex h-[40px] w-full items-center justify-between rounded-xl border border-[#D7DDEA] bg-white px-5 text-[13px] shadow-[0_3px_10px_rgba(15,23,42,0.06)] transition hover:border-[#5B52EA]"
        >
          <span
            className={
              value ? "text-[#0F172A]" : "text-[#98A2B3]"
            }
          >
            {value || placeholder}
          </span>

          <ChevronDown
            size={18}
            className={`text-[#7B8598] transition-transform duration-200 ${
              open ? "rotate-180" : ""
            }`}
          />
        </button>

        {open && (
          <div className="absolute left-0 top-full z-[9999] mt-2 max-h-[220px] overflow-y-auto no-scrollbar rounded-[18px] border border-[#D7DDEA] bg-white py-2 shadow-[0_15px_40px_rgba(15,23,42,0.12)]">
            {options.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => {
                  onChange(option);
                  setOpen(false);
                }}
                className={`mx-2 flex w-[calc(100%-16px)] items-center justify-between rounded-xl px-3 py-2 text-left text-[13px] transition ${
                  value === option
                    ? "bg-[#19BCC5] text-black"
                    : "text-[#0F172A] hover:bg-[#F5F7FB]"
                }`}
              >
                <span>{option}</span>

                {value === option && (
                  <Check
                    size={17}
                    strokeWidth={2.5}
                  />
                )}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}