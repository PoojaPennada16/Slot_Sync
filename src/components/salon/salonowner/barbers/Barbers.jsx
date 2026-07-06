"use client";

import React, { useState } from "react";
import { Plus, Search } from "lucide-react";
import AllBarbers from "./AllBarbers";
import AddBarber from "./AddBarber";

const Barbers = () => {
  const [showAddBarber, setShowAddBarber] = useState(false);

  // -----------------------------
  // ADD BARBER SCREEN
  // -----------------------------
  if (showAddBarber) {
    return (
      <AddBarber
        onBack={() => {
          setShowAddBarber(false);
        }}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f6f4fb] via-[#f7f5f6] to-[#eef8fb] mr-2">
      {/* Header */}

      <div className="flex items-start justify-between flex-wrap gap-3">
        <div>
          <h1 className="text-[30px] font-bold text-[#0F172A]">
            Barbers
          </h1>

          <p className="text-[12px] text-[#667085] mt-1">
            24 stylists across 6 branches
          </p>
        </div>

        <div className="flex items-center gap-2">

          <button className="h-[40px] px-5 rounded-full border border-[#E4E7EC] bg-white text-[13px] text-[#1D2433] font-medium">
            Pending
          </button>

          <button
            onClick={() => setShowAddBarber(true)}
            className="h-[40px] px-5 rounded-full bg-gradient-to-r from-[#5458E8] to-[#1EA7FD] text-white text-[13px] font-semibold flex items-center gap-2"
          >
            <Plus size={15} />
            Add Barber
          </button>
        </div>
      </div>

      {/* Search */}

      <div className="bg-white rounded-[22px] p-5 mt-5 shadow-sm">
        <div className="flex flex-col lg:flex-row items-center gap-3">

          <div className="relative w-full lg:w-[58%]">
            <Search
              size={18}
              className="absolute left-5 top-1/2 -translate-y-1/2 text-[#667085]"
            />

            <input
              type="text"
              placeholder="Search barbers..."
              className="w-full h-[42px] pl-12 pr-4 rounded-full border border-[#E4E7EC] text-[13px] outline-none"
            />
          </div>

          <div className="flex gap-3 w-full lg:w-auto">

            <select className="h-[42px] px-4 rounded-full border border-[#E4E7EC] text-[13px] bg-white outline-none">
              <option>All Branches</option>
              <option>SlotSync Lounge Pune</option>
              <option>SlotSync Lounge Bengaluru</option>
              <option>SlotSync Loft Pune</option>
              <option>SlotSync Lounge Chennai</option>
              <option>SlotSync Atelier Mumbai</option>
              <option>SlotSync Loft Delhi</option>
            </select>

            <select className="h-[42px] px-4 rounded-full border border-[#E4E7EC] text-[13px] bg-white outline-none">
              <option>Highest Revenue</option>
              <option>Highest Rating</option>
              <option>Most Booked</option>
              <option>Newest</option>
            </select>

          </div>
        </div>
      </div>

      {/* Cards */}

      <div className="mt-5">
        <AllBarbers />
      </div>
    </div>
  );
};

export default Barbers;