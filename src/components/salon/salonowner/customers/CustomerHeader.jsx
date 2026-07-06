"use client";

import React, { useState } from "react";
import { Search } from "lucide-react";
import CustomerTable from "./CustomerTable";

const CustomerHeader = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f6f4fb] via-[#f7f5f6] to-[#eef8fb] mr-2">
      {/* Heading */}
      <div>
        <h1 className="text-[30px] font-bold leading-none text-[#111827]">
          Customers
        </h1>

        <p className="mt-2 text-[12px] font-medium text-[#667085]">
          80 customers across all branches
        </p>
      </div>

      {/* Search Card */}
      <div className="mt-7 rounded-[24px] border border-[#EEF1F7] bg-white px-5 py-5 shadow-sm">
        <div className="relative w-[500px] max-w-full">
          <Search
            size={20}
            strokeWidth={2}
            className="absolute left-5 top-1/2 -translate-y-1/2 text-[#667085]"
          />

          <input
            type="text"
            placeholder="Search customers..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full h-[34px] rounded-full border border-[#D9DEE8] bg-white pl-14 pr-5 text-[15px] text-[#111827] placeholder:text-[#8B93A5] outline-none transition-all focus:border-[#C8CDD8]"
          />
        </div>
      </div>

      {/* Customer Table */}
      <CustomerTable />
    </div>
  );
};

export default CustomerHeader;