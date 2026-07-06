"use client";

import React from "react";

const ApprovedLeave = () => {
  return (
    <div className="mt-6 max-w-[700px]">
      <div className="bg-white rounded-[22px] p-6 shadow-sm">
        <div className="flex justify-between">
          <div>
            <h2 className="text-[16px] font-semibold">
              Rohan Iyer
            </h2>

            <p className="text-[13px] text-slate-500">
              SlotSync Lounge Chennai
            </p>
          </div>

          <span className="px-4 py-1 rounded-full bg-emerald-100 text-emerald-600 text-[12px] font-medium h-fit">
            Approved
          </span>
        </div>

        <div className="mt-4">
          <p className="text-[15px] font-medium">
            Full Day · 2026-06-23
          </p>

          <p className="text-[13px] text-slate-500 mt-1">
            Reason: Personal Leave
          </p>
        </div>
      </div>
    </div>
  );
};

export default ApprovedLeave;