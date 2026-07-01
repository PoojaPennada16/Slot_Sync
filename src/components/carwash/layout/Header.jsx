"use client";

import { Bell, Search } from "lucide-react";

export default function Header() {
  return (
    <header className="fixed top-0 left-[273px] right-0 z-30 bg-[#eef0ff] px-6 pt-4 pb-3">
      <div className="rounded-[36px] px-1 py-1 flex items-center justify-between gap-6">
        {/* Search */}
        <div className="flex-1">
          <div className="flex items-center gap-4 bg-white rounded-2xl px-5 h-[52px]">
            <Search className="w-4 h-4 text-[#6b7280]" />

            <input
              type="text"
              placeholder="Search vehicles, customers, job cards..."
              className="flex-1 bg-transparent outline-none text-[13px] text-[#374151] placeholder:text-[#9ca3af]"
            />

            <div className="hidden md:flex items-center justify-center min-w-[14px] h-[32px] rounded-xl border border-slate-200 text-[12px] text-[#6b7280] bg-[#fafafa] px-3">
              ⌘K
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}