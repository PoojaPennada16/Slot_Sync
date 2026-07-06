"use client";

import React from "react";
import { Clock3 } from "lucide-react";

const WorkingHrs = () => {
  const workingDays = [
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
    "Sun",
  ];

  return (
    <div className="bg-white rounded-[20px] p-5 shadow-sm">
      {/* Title */}
      <h2 className="text-[16px] font-semibold text-slate-900 mb-5">
        Working Hours (template)
      </h2>

      {/* Days Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {workingDays.map((day, index) => (
          <div
            key={index}
            className="border border-slate-200 rounded-[18px] px-4 py-3 flex items-center justify-between"
          >
            {/* Day */}
            <div className="min-w-[45px]">
              <h3 className="text-[14px] font-semibold text-slate-900">
                {day}
              </h3>
            </div>

            {/* Time Section */}
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-between min-w-[100px] h-[38px] px-3 border border-slate-200 rounded-full">
                <span className="text-[13px] text-slate-800">10:00</span>
                <Clock3 size={14} />
              </div>

              <span className="text-[16px] text-slate-900">→</span>

              <div className="flex items-center justify-between min-w-[100px] h-[38px] px-3 border border-slate-200 rounded-full">
                <span className="text-[13px] text-slate-800">21:00</span>
                <Clock3 size={14} />
              </div>
            </div>

            {/* Break Info */}
            <div className="text-slate-500 text-[11px] leading-5 ml-3">
              <p>Lunch 14:00–14:45 · Tea</p>
              <p>17:30–17:45</p>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Note */}
      <p className="mt-5 text-[12px] text-slate-500">
        Multiple breaks and per-barber overrides supported. 12 services inherit
        these by default.
      </p>
    </div>
  );
};

export default WorkingHrs;