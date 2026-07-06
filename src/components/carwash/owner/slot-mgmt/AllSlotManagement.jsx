"use client";

import { useState } from "react";
import { Trash2 } from "lucide-react";

import Card from "@/components/carwash/common/Card";
import ReusableDropdown from "@/components/carwash/common/ReusableDropdown";

export default function AllSlotManagement() {
  const [duration, setDuration] = useState("15 min");
  const [capacity, setCapacity] = useState("100");
  const [branchFilter, setBranchFilter] = useState("All branches");

  const branchOptions = [
    "All branches",
    "SlotSync HQ — Bandra",
    "SlotSync Andheri West",
    "SlotSync Powai Lakeside",
    "SlotSync Thane Hiranandani",
  ];

  const branches = [
    {
      name: "SlotSync HQ — Bandra",
      bayBlocks: 0,
      techLeaves: 1,
      bays: 2,
      technicians: 2,
    },
    {
      name: "SlotSync Andheri West",
      bayBlocks: 0,
      techLeaves: 0,
      bays: 2,
      technicians: 2,
    },
    {
      name: "SlotSync Powai Lakeside",
      bayBlocks: 0,
      techLeaves: 0,
      bays: 2,
      technicians: 2,
    },
    {
      name: "SlotSync Thane Hiranandani",
      bayBlocks: 0,
      techLeaves: 0,
      bays: 2,
      technicians: 1,
    },
  ];

  return (
    <div className="space-y-7">
      {/* Slot Duration */}
      <Card className="rounded-[28px] p-6">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-[16px] font-bold text-[#111827]">
              Slot duration
            </h2>

            <div className="mt-2 flex gap-3">
              {["15 min", "30 min", "60 min"].map((item) => (
                <button
                  key={item}
                  onClick={() => setDuration(item)}
                  className={`rounded-full px-3 py-1 text-[12px] font-semibold transition ${
                    duration === item
                      ? "bg-[#EEF3FB] text-[#111827]"
                      : "bg-[#F7F9FD] text-[#667085] hover:bg-[#EEF3FB]"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <input
            value={capacity}
            onChange={(e) => setCapacity(e.target.value)}
            className="h-9 w-[100px] rounded-xl border border-[#D8DEE8] bg-white px-4 text-sm text-[#111827] shadow-sm outline-none"
          />
        </div>
      </Card>

      {/* Branch Cards */}
      <div className="grid grid-cols-4 gap-5">
        {branches.map((branch) => (
          <Card
            key={branch.name}
            className="rounded-[25px] p-6"
          >
            <p className="text-[12px] text-[#667085]">Branch</p>

            <h3 className="mt-1 text-[15px] font-bold text-[#111827]">
              {branch.name}
            </h3>

            <div className="mt-2 flex gap-6">
              <div>
                <span className="text-[13px] font-bold">
                  {branch.bayBlocks}
                </span>{" "}
                <span className="text-[13px] text-[#222]">
                  bay blocks
                </span>
              </div>

              <div>
                <span className="text-[13px] font-bold">
                  {branch.techLeaves}
                </span>{" "}
                <span className="text-[13px] text-[#222]">
                  tech leaves
                </span>
              </div>
            </div>

            <p className="mt-3 text-[11px] text-[#667085]">
              {branch.bays} bays · {branch.technicians} technicians
            </p>
          </Card>
        ))}
      </div>

      {/* Active Blocks */}
      <Card className="rounded-[25px] p-6">
        <div className="mb-3 flex items-start justify-between">
          <h2 className="text-[15px] font-bold text-[#111827]">
            Active blocks (1)
          </h2>

          <div className="w-[200px]">
            <ReusableDropdown
              value={branchFilter}
              onChange={setBranchFilter}
              options={branchOptions}
            />
          </div>
        </div>

        <div className="flex items-center justify-between rounded-[20px] bg-indigo-50 px-5 py-4">
          <div className="flex items-center gap-5">
            <span className="rounded-2xl bg-indigo-100 px-3 py-1 text-[11px] font-semibold text-[#111827]">
              Technician
            </span>

            <span className="text-[13px] font-bold text-[#111827]">
              Vikram Singh
            </span>

            <span className="text-[12px] text-[#667085]">
              · SlotSync HQ — Bandra
            </span>

            <span className="text-[12px] text-[#667085]">
              2026-07-06 → 2026-07-08
            </span>
          </div>

          <div className="flex items-center gap-7">
            <span className="italic text-[14px] text-[#667085]">
              Leave
            </span>

            <button>
              <Trash2
                size={15}
                className="text-red-400"
              />
            </button>
          </div>
        </div>
      </Card>
    </div>
  );
}