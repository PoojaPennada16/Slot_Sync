"use client";

import React, { useState } from "react";
import WorkingHrs from "./WorkingHrs";
import BlockSlot from "./BlockSlot";
import HolidayManagement from "./HolidayManagement";

const SlotConfig = () => {
  const [activeTab, setActiveTab] = useState("slot");

  const [selectedDuration, setSelectedDuration] = useState("15 min");

  const durations = [
    "15 min",
    "30 min",
    "45 min",
    "60 min",
    "90 min",
    "Custom...",
  ];

  const tabClass = (tab) =>
    activeTab === tab
      ? "bg-[#5458E8] text-white"
      : "text-[#111827]";

  return (
<div className="min-h-screen bg-gradient-to-br from-[#f6f4fb] via-[#f7f5f6] to-[#eef8fb] mr-2">
  {/* Header */}

  <h1 className="text-[30px] font-bold text-[#111827]">
    Slot Management
  </h1>

  <p className="mt-1 text-[12px] text-[#667085]">
    Control availability across branches, barbers, and services.
  </p>

  {/* Tabs */}

  <div className="mt-4 inline-flex items-center gap-1 rounded-full bg-white p-1.5 shadow-md border border-gray-100">
    <button
      onClick={() => setActiveTab("slot")}
      className={`rounded-full px-4 py-2 text-[14px] font-semibold transition-all ${tabClass(
        "slot"
      )}`}
    >
      Slot Config
    </button>

    <button
      onClick={() => setActiveTab("block")}
      className={`rounded-full px-4 py-2 text-[14px] font-semibold transition-all ${tabClass(
        "block"
      )}`}
    >
      Block Slots
    </button>

    <button
      onClick={() => setActiveTab("holiday")}
      className={`rounded-full px-4 py-2 text-[14px] font-semibold transition-all ${tabClass(
        "holiday"
      )}`}
    >
      Holidays
    </button>

    <button
      onClick={() => setActiveTab("availability")}
      className={`rounded-full px-4 py-2 text-[14px] font-semibold transition-all ${tabClass(
        "availability"
      )}`}
    >
      Availability
    </button>
  </div>

  {/* Slot Config */}

  {activeTab === "slot" && (
    <div className="mt-5 bg-white rounded-[20px] p-5 shadow-sm">
      <h2 className="text-[16px] font-semibold text-[#111827]">
        Default Slot Duration
      </h2>

      <div className="flex flex-wrap gap-2 mt-4">
        {durations.map((duration) => (
          <button
            key={duration}
            onClick={() => setSelectedDuration(duration)}
            className={`h-10 min-w-[80px] px-3 rounded-xl border text-[13px] font-medium transition ${
              selectedDuration === duration
                ? "border-[#5458E8] bg-[#EEF0FF] text-[#5458E8]"
                : duration === "Custom..."
                ? "border-dashed border-[#D8DCE5] bg-white text-[#667085]"
                : "border-[#E4E7EC] bg-white text-[#111827]"
            }`}
          >
            {duration}
          </button>
        ))}
      </div>

      <p className="mt-4 text-[13px] text-[#667085]">
        Current:
        <span className="font-semibold text-[#111827] ml-1">
          {selectedDuration}
        </span>{" "}
        slots applied salon-wide.
      </p>
    </div>

      )}

      {/* Block Slots */}

      {activeTab === "block" && (
        <div className="mt-6">
          <BlockSlot />
        </div>
      )}

      {/* Holidays */}

      {activeTab === "holiday" && (
        <div className="mt-6">
          <HolidayManagement />
        </div>
      )}

      {/* Availability */}

      {activeTab === "availability" && (
        <div className="mt-6">
          <WorkingHrs />
        </div>
      )}
    </div>
  );
};

export default SlotConfig;