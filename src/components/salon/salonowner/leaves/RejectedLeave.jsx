"use client";

import React from "react";

const RejectedLeave = () => {
  const rejected = [
    {
      name: "Riya Joshi",
      branch: "SlotSync Atelier Mumbai",
    },
    {
      name: "Aarav Sharma",
      branch: "SlotSync Lounge Pune",
    },
  ];

  return (
    <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-5">
      {rejected.map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-[22px] p-6 shadow-sm"
        >
          <div className="flex justify-between">
            <div>
              <h2 className="text-[16px] font-semibold">
                {item.name}
              </h2>

              <p className="text-[13px] text-slate-500">
                {item.branch}
              </p>
            </div>

            <span className="px-4 py-1 rounded-full bg-red-100 text-red-500 text-[12px] font-medium h-fit">
              Rejected
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
      ))}
    </div>
  );
};

export default RejectedLeave;