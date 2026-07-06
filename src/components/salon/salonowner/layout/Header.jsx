"use client";

import {
  Bell,
  Plus,
  Search,
} from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 h-[90px] bg-white flex items-center justify-between">
      <div className="flex items-center py-4 gap-5 w-full">
        {/* Search */}
        <div className="flex-1 ml-10 max-w-[550px]">
          <div className="h-[36px] rounded-full border border-gray-300 flex items-center px-6">
            <Search
              size={20}
              className="text-gray-500"
            />

            <input
              type="text"
              placeholder="Search bookings, barbers, customers..."
              className="ml-4 flex-1 outline-none bg-transparent text-lg"
            />
          </div>
        </div>

        {/* Quick Book */}
        <button className="h-[36px] px-10 rounded-full bg-gradient-to-r from-[#5B5FF6] to-[#11B5E4] text-white flex items-center gap-3 font-semibold text-small">
          <Plus size={20} />
          Quick Book
        </button>

        {/* Notification */}
        <button className="relative w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center">
          <Bell size={14} />

          <span className="absolute -top-2 right-0 w-3 h-4 rounded-full bg-orange-400 text-white text-sm flex items-center justify-center font-medium">
            2
          </span>
        </button>
      </div>
    </header>
  );
}