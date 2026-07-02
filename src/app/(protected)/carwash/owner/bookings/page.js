"use client";

import { useState } from "react";
import { Plus, Filter, ChevronDown, Check } from "lucide-react";
import AllBookings from "@/components/carwash/owner/bookings/AllBookings";
import NewBooking from "@/components/carwash/owner/bookings/NewBooking";

export default function BookingsPage() {
  const [showBranchDropdown, setShowBranchDropdown] = useState(false);
  const [selectedBranch, setSelectedBranch] = useState("All branches");

  // Popup State
  const [openNewBooking, setOpenNewBooking] = useState(false);

  const branches = [
    "All branches",
    "SlotSync HQ — Bandra",
    "SlotSync Andheri West",
    "SlotSync Powai Lakeside",
    "SlotSync Thane Hiranandani",
  ];

  return (
    <div
      className="-mt-4 min-h-screen px-3 py-3 md:px-3"
      onClick={() => setShowBranchDropdown(false)}
    >
      <div className="mb-5 flex items-start justify-between">
        <div>
          <h1 className="text-3xl font-semibold leading-tight text-[#3f63dd]">
            Bookings
          </h1>

          <p className="mt-2 text-base text-[#667085]">
            Every job card from confirmation to delivery — drag through the
            lifecycle.
          </p>
        </div>

        <div className="mt-8 flex items-center gap-3">
          {/* Branch Dropdown */}
          <div
            className="relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowBranchDropdown(!showBranchDropdown)}
              className="flex h-10 items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 shadow-sm"
            >
              <Filter size={14} />

              <span className="min-w-[125px] text-left text-sm">
                {selectedBranch}
              </span>

              <ChevronDown
                size={14}
                className={`transition-transform duration-200 ${
                  showBranchDropdown ? "rotate-180" : ""
                }`}
              />
            </button>

            {showBranchDropdown && (
              <div className="absolute right-0 z-50 mt-2 w-full overflow-hidden rounded-[22px] border border-gray-200 bg-white py-2 shadow-xl">
                {branches.map((branch) => (
                  <button
                    key={branch}
                    onClick={() => {
                      setSelectedBranch(branch);
                      setShowBranchDropdown(false);
                    }}
                    className={`mx-2 flex w-[calc(100%-16px)] items-center justify-between rounded-[13px] px-2 py-1 text-left text-[13px] transition-all ${
                      selectedBranch === branch
                        ? "bg-[#19BCC5] text-black"
                        : "text-[#1d2433] hover:bg-gray-100"
                    }`}
                  >
                    <span>{branch}</span>

                    {selectedBranch === branch && (
                      <Check size={18} strokeWidth={2.5} />
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* New Booking Button */}
          <button
            onClick={() => setOpenNewBooking(true)}
            className="flex items-center gap-1 rounded-xl bg-gradient-to-r from-[#4B5EE4] to-[#2EA7E0] px-4 py-2 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(76,94,228,0.28)]"
          >
            <Plus size={17} />
            New Booking
          </button>
        </div>
      </div>

      <AllBookings />

      {/* Popup */}
      <NewBooking
        open={openNewBooking}
        onClose={() => setOpenNewBooking(false)}
      />
    </div>
  );
}