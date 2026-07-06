"use client";

import React from "react";
import { Plus } from "lucide-react";
import ServicesCards from "./ServicesCards";

const ServicesHeader = () => {
  return (
    <div className="w-full">
      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        {/* Left */}
        <div>
          <h1 className="text-[30px] font-bold text-[#101828] leading-none">
            Services
          </h1>

          <p className="mt-2 text-[12px] text-[#667085] font-medium">
            12 active services
          </p>
        </div>

        {/* Right */}
        <button
        className="flex items-center gap-2 h-[40px] px-6 rounded-full bg-gradient-to-r from-[#5B4CF7] to-[#2FA8E9] text-white text-[13px] font-semibold shadow-md hover:opacity-95 transition-all"

        >
          <Plus size={12} strokeWidth={2.5} />
          Add Service
        </button>
      </div>

      {/* Cards */}
      <ServicesCards />
    </div>
  );
};

export default ServicesHeader;