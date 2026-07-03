"use client";

export default function CardMenu({
  items = [],
  className = "",
}) {
  return (
    <div
      className={`w-[100px] overflow-hidden rounded-[20px] border border-[#E6EAF2] bg-white shadow-[0_10px_35px_rgba(15,23,42,0.18)] ${className}`}
    >
      {items.map((item, index) => (
        <div key={index}>
          <button
            onClick={item.onClick}
            className={`flex w-full items-center gap-2 px-3 py-2 text-left text-[14px] font-medium transition-all
              ${
                item.variant === "delete"
                  ? "text-red-600 hover:bg-red-50"
                  : "text-slate-700 hover:bg-teal-500"
              }`}
          >
            {item.icon && (
              <span
                className={`flex h-4 w-4 items-center justify-center ${
                  item.variant === "delete"
                    ? "text-red-600"
                    : "text-slate-700"
                }`}
              >
                {item.icon}
              </span>
            )}

            <span>{item.label}</span>
          </button>

          {item.divider && (
            <div className="mx-5 border-t border-[#E6EAF2]" />
          )}
        </div>
      ))}
    </div>
  );
}