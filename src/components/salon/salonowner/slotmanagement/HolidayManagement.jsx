"use client";

import React from "react";
import { Plus } from "lucide-react";

const HolidayManagement = () => {
  const holidays = [
    {
      name: "Diwali",
      date: "2026-11-09",
      type: "Network",
    },
    {
      name: "Independence Day",
      date: "2026-08-15",
      type: "Network",
    },
  ];

  return (
    <div className="w-full bg-white rounded-[20px] p-5 shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-[16px] font-semibold text-slate-900">
          Holidays & Closures
        </h2>

        <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-600 to-sky-500 text-white text-[13px] font-medium">
          <Plus size={16} />
          Add
        </button>
      </div>

      {/* Holiday Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl">
        {holidays.map((holiday, index) => (
          <div
            key={index}
            className="border border-slate-200 rounded-[18px] p-4 bg-white"
          >
            <h3 className="text-[15px] font-semibold text-slate-900">
              {holiday.name}
            </h3>

            <p className="text-[13px] text-slate-500 mt-1">
              {holiday.date}
            </p>

            <span className="inline-flex items-center px-3 py-1 mt-3 rounded-full bg-cyan-100 text-slate-700 text-[12px] font-medium">
              {holiday.type}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HolidayManagement;