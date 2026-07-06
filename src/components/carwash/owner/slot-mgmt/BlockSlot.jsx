"use client";

import { useState } from "react";
import { X, CalendarDays, Clock3 } from "lucide-react";
import ReusableDropdown from "@/components/carwash/common/ReusableDropdown";

export default function BlockSlot({ open, onClose }) {
  const [branch, setBranch] = useState("SlotSync HQ — Bandra");
  const [scope, setScope] = useState("Bay (Maintenance)");
  const [bay, setBay] = useState("");
  const [technician, setTechnician] = useState("");
  const [reason, setReason] = useState("Leave");

  const [fromDate, setFromDate] = useState("2026-07-06");
  const [toDate, setToDate] = useState("2026-07-08");

  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  const [notes, setNotes] = useState("");

  if (!open) return null;

  const branches = [
    "SlotSync HQ — Bandra",
    "SlotSync Andheri West",
    "SlotSync Powai Lakeside",
    "SlotSync Thane Hiranandani",
  ];

  const scopes = [
    "Bay (Maintenance)",
    "Technician (Leave)",
  ];

  const bays = [
    "Bay 1",
    "Bay 2",
    "Bay 3",
    "Bay 4",
  ];

  const technicians = [
    "Vikram Singh",
    "Rahul Kumar",
    "Sandeep",
    "Arjun",
  ];

  const reasons = [
    "Leave",
    "Maintenance",
    "Repair",
    "Holiday",
    "Emergency",
  ];

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 p-2">
      <div className="relative w-full max-w-[720px] overflow-hidden rounded-[24px] bg-[#F4F6FB] shadow-[0_20px_80px_rgba(15,23,42,0.22)]">

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute right-6 top-5 z-10 flex h-8 w-8 items-center justify-center rounded-full text-[#667085] transition hover:bg-white"
        >
          <X size={20} />
        </button>

        {/* Body */}
        <div className="max-h-[90vh] overflow-y-auto px-8 pb-8 pt-7">

          <h2 className="text-[18px] font-bold text-[#0F172A]">
            Block slot / Add leave
          </h2>

          <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-5">

            {/* Branch */}
            <ReusableDropdown
              label="Branch"
              value={branch}
              onChange={setBranch}
              options={branches}
            />

            {/* Scope */}
            <ReusableDropdown
              label="Scope"
              value={scope}
              onChange={setScope}
              options={scopes}
            />

            {/* Bay */}
            {scope === "Bay (Maintenance)" && (
              <ReusableDropdown
                label="Bay"
                placeholder="Select bay"
                value={bay}
                onChange={setBay}
                options={bays}
              />
            )}

            {/* Technician */}
            {scope === "Technician (Leave)" && (
              <ReusableDropdown
                label="Technician"
                placeholder="Select technician"
                value={technician}
                onChange={setTechnician}
                options={technicians}
              />
            )}

            {/* Empty column */}
            <div />

            {/* From Date */}
            <div>
              <label className="mb-1 ml-2 block text-[12px] font-semibold text-[#0F172A]">
                From date
              </label>

              <div className="relative">
                <input
                  type="date"
                  value={fromDate}
                  onChange={(e) => setFromDate(e.target.value)}
                  className="h-[40px] w-full rounded-xl border border-[#D7DDEA] bg-white px-5 pr-12 text-[13px] shadow-[0_3px_10px_rgba(15,23,42,0.06)] outline-none focus:border-[#5B52EA]"
                />

                <CalendarDays
                  size={18}
                  className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-[#98A2B3]"
                />
              </div>
            </div>

            {/* To Date */}
            <div>
              <label className="mb-1 ml-2 block text-[12px] font-semibold text-[#0F172A]">
                To date (optional)
              </label>

              <div className="relative">
                <input
                  type="date"
                  value={toDate}
                  onChange={(e) => setToDate(e.target.value)}
                  className="h-[40px] w-full rounded-xl border border-[#D7DDEA] bg-white px-5 pr-12 text-[13px] shadow-[0_3px_10px_rgba(15,23,42,0.06)] outline-none focus:border-[#5B52EA]"
                />

                <CalendarDays
                  size={18}
                  className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-[#98A2B3]"
                />
              </div>
            </div>

            {/* Start Time */}
            <div>
              <label className="mb-1 ml-2 block text-[12px] font-semibold text-[#0F172A]">
                Start time (blank = full day)
              </label>

              <div className="relative">
                <input
                  type="time"
                  value={startTime}
                  onChange={(e) => setStartTime(e.target.value)}
                  className="h-[40px] w-full rounded-xl border border-[#D7DDEA] bg-white px-5 pr-12 text-[13px] shadow-[0_3px_10px_rgba(15,23,42,0.06)] outline-none focus:border-[#5B52EA]"
                />

                <Clock3
                  size={18}
                  className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-[#98A2B3]"
                />
              </div>
            </div>

            {/* End Time */}
            <div>
              <label className="mb-1 ml-2 block text-[12px] font-semibold text-[#0F172A]">
                End time
              </label>

              <div className="relative">
                <input
                  type="time"
                  value={endTime}
                  onChange={(e) => setEndTime(e.target.value)}
                  className="h-[40px] w-full rounded-xl border border-[#D7DDEA] bg-white px-5 pr-12 text-[13px] shadow-[0_3px_10px_rgba(15,23,42,0.06)] outline-none focus:border-[#5B52EA]"
                />

                <Clock3
                  size={18}
                  className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-[#98A2B3]"
                />
              </div>
            </div>
                        {/* Reason */}
            <ReusableDropdown
              label="Reason"
              value={reason}
              onChange={setReason}
              options={reasons}
            />

            {/* Empty column */}
            <div />

            {/* Notes */}
            <div className="col-span-2">
              <label className="mb-1 ml-2 block text-[12px] font-semibold text-[#0F172A]">
                Notes (optional)
              </label>

              <textarea
                rows={4}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Add any additional information..."
                className="w-full resize-none rounded-xl border border-[#D7DDEA] bg-white px-5 py-4 text-[13px] text-[#0F172A] shadow-[0_3px_10px_rgba(15,23,42,0.06)] outline-none transition focus:border-[#5B52EA]"
              />
            </div>
          </div>

          {/* Footer */}
          <div className="mt-8 flex items-center justify-end gap-4">
            <button
              onClick={onClose}
              className="inline-flex h-[40px] items-center justify-center rounded-xl border border-[#D8DEEA] bg-white px-6 text-[15px] font-semibold text-[#0F172A] shadow-[0_4px_12px_rgba(15,23,42,0.05)] transition hover:bg-[#F8FAFC]"
            >
              Cancel
            </button>

            <button
              className="inline-flex h-[40px] items-center justify-center rounded-xl bg-gradient-to-r from-[#5B52EA] to-[#2F9BDB] px-6 text-[15px] font-semibold text-white shadow-[0_10px_30px_rgba(91,82,234,0.24)] transition hover:opacity-95"
            >
              Save block
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}