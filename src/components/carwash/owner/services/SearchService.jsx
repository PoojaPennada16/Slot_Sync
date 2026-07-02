"use client";

import { Search } from "lucide-react";

const categories = [
  "All",
  "Car Wash",
  "Coating",
  "PPF",
  "Detailing",
  "Mechanical",
  "Inspection",
];

export default function SearchService({
  search,
  setSearch,
  activeCategory,
  setActiveCategory,
}) {
  return (
    <div className="mb-4 rounded-[20px] bg-white/65 p-3 shadow-[0_10px_30px_rgba(31,41,55,0.05)] backdrop-blur-sm">
      <div className="flex flex-wrap items-center gap-4">
        {/* Search */}
        <div className="relative min-w-[150px] flex-1">
          <Search
            className="absolute left-5 top-1/2 -translate-y-1/2 text-[#667085]"
            size={18}
          />
          <input
            type="text"
            placeholder="Search services..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="h-[40px] w-full rounded-xl border border-[#E4E7EC] bg-white px-14 pr-5 text-[13px] text-[#475467] outline-none shadow-sm placeholder:text-[#667085]"
          />
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((category) => {
            const active = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-2 py-1 text-[12px] font-semibold transition ${
                  active
                    ? "bg-[#4B7DE3] text-white"
                    : "bg-[#E9EEF7] text-[#1F2937]"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}