"use client";

import { useState, useRef, useEffect } from "react";
import {
  Search,
  ChevronDown,
  Check,
} from "lucide-react";

import RegisteredVehicles from "./RegisteredVehicles";

const statusCards = [
  { title: "TODAY'S\nVEHICLES", count: 0, active: true },
  { title: "IN INSPECTION", count: 0 },
  { title: "WAITING\nAPPROVAL", count: 1 },
  { title: "WAITING FOR\nBAY", count: 1 },
  { title: "IN SERVICE", count: 3 },
  { title: "QUALITY CHECK", count: 1 },
  { title: "COMPLETED", count: 0 },
  { title: "DELIVERED", count: 0 },
];

const dayOptions = [
  "Today",
  "Yesterday",
  "This week",
  "This month",
];

const branchOptions = [
  "All branches",
  "SlotSync HQ — Bandra",
  "SlotSync Andheri West",
  "SlotSync Powai Lakeside",
  "SlotSync Thane Hiranandani",
];

export default function AllVehicles() {
  const [selectedDay, setSelectedDay] = useState("Today");
  const [selectedBranch, setSelectedBranch] = useState("All branches");

  const [openDay, setOpenDay] = useState(false);
  const [openBranch, setOpenBranch] = useState(false);

  const dayRef = useRef(null);
  const branchRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (dayRef.current && !dayRef.current.contains(e.target)) {
        setOpenDay(false);
      }

      if (branchRef.current && !branchRef.current.contains(e.target)) {
        setOpenBranch(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () =>
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
  }, []);

  return (
    <>
      {/* Status Cards */}

      <div className="mb-4 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-8">
        {statusCards.map((item, index) => (
          <div
            key={index}
            className={`min-h-[88px] rounded-3xl bg-white/70 px-4 py-2 backdrop-blur-sm shadow-[0_10px_30px_rgba(16,24,40,0.06)] shadow-sm flex flex-col justify-between ${
              item.active
                ? "border-[3px] border-[#5660F6]"
                : "border border-[#ECEFF4]"
            }`}
          >
            <p className="whitespace-pre-line text-[10px] font-medium uppercase tracking-[0.08em] text-[#667085]">
              {item.title}
            </p>

            <h2 className="mt-1 text-[18px] font-bold text-[#101828]">
              {item.count}
            </h2>
          </div>
        ))}
      </div>

      {/* Filters */}

      <div className="relative z-30 mb-4 overflow-visible rounded-2xl border border-[#EEF1F5] bg-white/75 p-2 shadow-sm backdrop-blur-sm">

        <div className="flex flex-col gap-2 xl:flex-row">

          {/* Search */}

          <div className="relative flex-1">
            <Search
              size={14}
              className="absolute left-5 top-1/2 -translate-y-1/2 text-[#667085]"
            />

            <input
              type="text"
              placeholder="Search vehicle / customer / job ID"
              className="h-[35px] w-full rounded-xl border border-[#D8DEE8] bg-white pl-11 pr-4 text-[16px] font-medium text-[#344054] outline-none placeholder:text-[#667085] shadow-[0_3px_10px_rgba(16,24,40,0.08)]"
            />
          </div>

          {/* Day */}

          <div
            ref={dayRef}
            className="relative z-50 min-w-[150px]"
          >
            <button
              onClick={() => {
                setOpenDay(!openDay);
                setOpenBranch(false);
              }}
              className="flex h-[35px] w-full items-center justify-between rounded-xl border border-[#D8DEE8] bg-white px-4 text-[14px] font-medium text-[#1D2939] shadow-[0_3px_10px_rgba(16,24,40,0.08)]"
            >
              <span>{selectedDay}</span>

              <ChevronDown
                size={14}
                className="text-[#7A8190]"
              />
            </button>

            {openDay && (
              <div className="absolute left-0 top-[44px] z-[999] w-full overflow-hidden rounded-[18px] border border-[#E5E7EB] bg-white shadow-[0_10px_30px_rgba(16,24,40,0.16)]">

                {dayOptions.map((option) => {
                  const selected =
                    option === selectedDay;

                  return (
                    <button
                      key={option}
                      onClick={() => {
                        setSelectedDay(option);
                        setOpenDay(false);
                      }}
                      className={`flex w-full items-center justify-between px-2 py-1 text-left text-[13px] font-medium ${
                        selected
                          ? "bg-[#18B7BC] text-[#0B1320]"
                          : "hover:bg-[#F8FAFC]"
                      }`}
                    >
                      {option}

                      {selected && (
                        <Check
                          size={13}
                          strokeWidth={2.5}
                        />
                      )}
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* Branch */}

          <div
            ref={branchRef}
            className="relative z-50 min-w-[150px]"
          >
            <button
              onClick={() => {
                setOpenBranch(!openBranch);
                setOpenDay(false);
              }}
              className="flex h-[34px] w-full items-center justify-between rounded-xl border border-[#D8DEE8] bg-white px-3 text-[14px] font-medium text-[#1D2939] shadow-[0_3px_10px_rgba(16,24,40,0.08)]"
            >
              <span>{selectedBranch}</span>

              <ChevronDown
                size={14}
                className="text-[#7A8190]"
              />
            </button>

            {openBranch && (
              <div className="absolute right-0 top-[50px] z-[999] w-[220px] overflow-hidden rounded-xl border border-[#E5E7EB] bg-white shadow-[0_10px_30px_rgba(16,24,40,0.16)]">

                {branchOptions.map((option) => {
                  const selected =
                    option === selectedBranch;

                  return (
                    <button
                      key={option}
                      onClick={() => {
                        setSelectedBranch(option);
                        setOpenBranch(false);
                      }}
                      className={`flex w-full items-center justify-between px-2 py-1 text-left text-[13px] font-medium ${
                        selected
                          ? "bg-[#18B7BC] text-[#0B1320]"
                          : "hover:bg-[#F8FAFC]"
                      }`}
                    >
                      {option}

                      {selected && (
                        <Check
                          size={13}
                          strokeWidth={2.5}
                        />
                      )}
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Vehicle Table */}

      <div className="overflow-hidden rounded-2xl border border-[#EEF1F5] bg-white/75 shadow-[0_12px_32px_rgba(16,24,40,0.06)] backdrop-blur-sm">

        <div className="grid grid-cols-8 gap-2 bg-[#F1F4F8] px-4 py-2 text-[12px] font-bold uppercase tracking-[0.08em] text-[#667085]">
          <div>Vehicle</div>
          <div>Customer</div>
          <div>Service</div>
          <div>Branch</div>
          <div>Bay</div>
          <div>Tech</div>
          <div>Status</div>
          <div>Time</div>
        </div>

        <div className="flex h-[80px] items-center justify-center">
          <p className="text-[15px] italic text-[#667085]">
            No vehicles match.
          </p>
        </div>

      </div>

      {/* Registered Vehicles */}

      <RegisteredVehicles />
    </>
  );
}