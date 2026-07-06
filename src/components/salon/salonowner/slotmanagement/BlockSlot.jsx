"use client";

import React from "react";
import { Plus, CalendarDays, Trash2 } from "lucide-react";

const BlockSlot = () => {
  const blockedSlots = [
    {
      scope: "Branch",
      target: "SlotSync Lounge Pune",
      range: "2026-06-22 → 2026-06-25",
      reason: "Maintenance",
    },
    {
      scope: "Barber",
      target: "Riya Joshi",
      range: "2026-06-20 (full day)",
      reason: "Leave",
    },
  ];

  return (
    <div className="w-full">
      {/* Create Block Card */}
      <div className="bg-white rounded-[20px] p-5 shadow-sm">
        <h2 className="text-[16px] font-semibold text-slate-900 mb-4">
          Create a Block
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3">
          {/* Scope */}
          <select className="h-11 px-4 rounded-full border border-slate-200 bg-white text-[13px] text-slate-800 outline-none">
            <option>Branch Wise</option>
            <option>Barber Wise</option>
          </select>

          {/* Branch */}
          <select className="h-11 px-4 rounded-full border border-slate-200 bg-white text-[13px] text-slate-800 outline-none">
            <option>SlotSync Lounge Pune</option>
            <option>SlotSync Lounge Hyderabad</option>
          </select>

          {/* Start Date */}
          <div className="relative">
            <input
              type="date"
              className="w-full h-11 px-4 rounded-full border border-slate-200 bg-white text-[13px] text-slate-700 outline-none"
            />
            <CalendarDays
              size={0}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none"
            />
          </div>

          {/* End Date */}
          <div className="relative">
            <input
              type="date"
              className="w-full h-11 px-4 rounded-full border border-slate-200 bg-white text-[13px] text-slate-700 outline-none"
            />
            <CalendarDays
              size={0}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none"
            />
          </div>

          {/* Reason */}
          <select className="h-11 px-4 rounded-full border border-slate-200 bg-white text-[13px] text-slate-800 outline-none">
            <option>Vacation</option>
            <option>Leave</option>
            <option>Maintenance</option>
            <option>Holiday</option>
          </select>
        </div>

        {/* Button */}
        <button className="mt-4 flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-indigo-600 to-sky-500 text-white text-[13px] font-semibold">
          <Plus size={16} />
          Block Slot
        </button>
      </div>

      {/* Table Card */}
      <div className="mt-4 bg-white rounded-[20px] overflow-hidden shadow-sm">
        {/* Header */}
        <div className="grid grid-cols-4 px-5 py-3 bg-[#F8FAFC] border-b border-slate-200">
          <h3 className="text-[12px] font-bold tracking-wider text-slate-500">
            SCOPE
          </h3>
          <h3 className="text-[12px] font-bold tracking-wider text-slate-500">
            TARGET
          </h3>
          <h3 className="text-[12px] font-bold tracking-wider text-slate-500">
            RANGE
          </h3>
          <h3 className="text-[12px] font-bold tracking-wider text-slate-500">
            REASON
          </h3>
        </div>

        {/* Rows */}
        {blockedSlots.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-4 items-center px-5 py-4 border-b border-slate-200 last:border-0"
          >
            <div>
              <span className="px-3 py-1 rounded-full bg-indigo-100 text-indigo-600 text-[12px] font-medium">
                {item.scope}
              </span>
            </div>

            <div className="text-[14px] font-medium text-slate-800">
              {item.target}
            </div>

            <div className="text-[14px] text-slate-800">
              {item.range}
            </div>

            <div className="flex items-center justify-between">
              <span className="text-[14px] text-slate-800">
                {item.reason}
              </span>

              <button className="text-slate-500 hover:text-red-500">
                <Trash2 size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlockSlot;