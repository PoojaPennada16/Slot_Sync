"use client";

import { useState } from "react";
import { X } from "lucide-react";
import PortalCard from "@/app/components/common/card";
import Button from "@/app/components/common/button";

const STATUS_OPTIONS = ["Available", "Limited", "Blocked", "Holiday", "Emergency"];

const statusStyles = {
  Available: "bg-emerald-100 text-emerald-600",
  Limited:   "bg-amber-100 text-amber-600",
  Blocked:   "bg-rose-100 text-rose-600",
  Holiday:   "bg-blue-100 text-blue-600",
  Emergency: "bg-purple-100 text-purple-600",
};

const SCOPE_OPTIONS   = ["Single Slot", "Half Day", "Full Day", "Date Range"];
const REASON_OPTIONS  = ["Personal Leave", "Medical Leave", "Conference", "Holiday", "Emergency", "Other"];

function BlockSlotsModal({ onClose, onConfirm }) {
  const today = new Date().toISOString().split("T")[0];
  const [scope,  setScope]  = useState("Single Slot");
  const [date,   setDate]   = useState(today);
  const [reason, setReason] = useState("Personal Leave");
  const [notes,  setNotes]  = useState("");

  function handleConfirm() {
    onConfirm({ scope, date, reason, notes });
    onClose();
  }

  const fieldClass =
    "w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition";

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md rounded-3xl bg-[oklch(98.5%_0.005_260)] p-6 shadow-2xl space-y-5"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between">
          <h2 className="text-lg font-bold text-slate-900 pr-6">
            Block Slots — Confirmation Required
          </h2>
          <button
            onClick={onClose}
            className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-slate-200 bg-white text-slate-400 hover:text-slate-700 transition"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Scope */}
        <div className="space-y-1.5">
          <label className="text-sm font-semibold text-slate-700">Scope</label>
          <select
            value={scope}
            onChange={(e) => setScope(e.target.value)}
            className={`${fieldClass} appearance-none`}
            style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%2394a3b8' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`, backgroundRepeat: "no-repeat", backgroundPosition: "right 1rem center" }}
          >
            {SCOPE_OPTIONS.map((o) => <option key={o}>{o}</option>)}
          </select>
        </div>

        {/* Date */}
        <div className="space-y-1.5">
          <label className="text-sm font-semibold text-slate-700">Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className={fieldClass}
          />
        </div>

        {/* Block Reason */}
        <div className="space-y-1.5">
          <label className="text-sm font-semibold text-slate-700">
            Block Reason <span className="text-slate-400 font-normal">(required)</span>
          </label>
          <select
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            className={`${fieldClass} appearance-none`}
            style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%2394a3b8' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`, backgroundRepeat: "no-repeat", backgroundPosition: "right 1rem center" }}
          >
            {REASON_OPTIONS.map((o) => <option key={o}>{o}</option>)}
          </select>
        </div>

        {/* Notes */}
        <div className="space-y-1.5">
          <label className="text-sm font-semibold text-slate-700">Notes</label>
          <input
            type="text"
            placeholder="Optional notes"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            className={fieldClass}
          />
        </div>

        {/* Footer */}
        <div className="flex justify-end pt-1">
          <Button
            variant="primary"
            size="lg"
            className="rounded-2xl px-6 font-bold"
            onClick={handleConfirm}
          >
            Confirm Block
          </Button>
        </div>
      </div>
    </div>
  );
}

export default function AvailabilityPage() {
  const [status,          setStatus]          = useState("Available");
  const [duration,        setDuration]        = useState(30);
  const [capacity,        setCapacity]        = useState(2);
  const [history,         setHistory]         = useState([]);
  const [showBlockModal,  setShowBlockModal]  = useState(false);

  function handleConfirm({ scope, date, reason, notes }) {
    const formatted = new Date(date).toLocaleDateString("en-IN", { day: "2-digit", month: "short" });
    setHistory((prev) => [
      ...prev,
      { label: `${reason}${notes ? " — " + notes : ""}`, date: formatted, scope, type: "block" },
    ]);
  }

  function handleLunchBreak() {
    const formatted = new Date().toLocaleDateString("en-IN", { day: "2-digit", month: "short" });
    setHistory((prev) => [...prev, { label: "Lunch Break", date: formatted, scope: "Single Slot", type: "break" }]);
  }

  function handleEmergencyUnavailable() {
    const formatted = new Date().toLocaleDateString("en-IN", { day: "2-digit", month: "short" });
    setHistory((prev) => [...prev, { label: "Emergency Unavailable", date: formatted, scope: "Full Day", type: "emergency" }]);
  }

  const historyBadge = { block: "bg-slate-100 text-slate-500", break: "bg-amber-100 text-amber-600", emergency: "bg-rose-100 text-rose-600" };

  const fieldClass =
    "w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-200 transition";

  return (
    <>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Availability</h1>
            <p className="mt-1 text-sm text-slate-500">Manage your schedule and block slots</p>
          </div>
          <Button
            variant="primary"
            size="lg"
            className="rounded-2xl font-bold"
            onClick={() => setShowBlockModal(true)}
          >
            Block Slots
          </Button>
        </div>

        {/* Status Card */}
        <PortalCard
          description={
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex flex-col gap-1">
                <p className="text-xs text-slate-400 font-medium">Current Status</p>
                <span className={`w-fit rounded-full px-3 py-1 text-xs font-bold ${statusStyles[status]}`}>
                  {status.toLowerCase()}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {STATUS_OPTIONS.map((s) => (
                  <button
                    key={s}
                    onClick={() => setStatus(s)}
                    className={`rounded-full border px-4 py-1.5 text-sm font-medium transition ${
                      status === s
                        ? "border-indigo-500 bg-indigo-50 text-indigo-700"
                        : "border-slate-200 bg-white text-slate-600 hover:border-slate-300"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          }
        />

        {/* Bottom Columns */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Consultation Settings */}
          <PortalCard
            title="Consultation Settings"
            description={
              <div className="space-y-4 mt-1">
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-slate-700">Consultation Duration (min)</label>
                  <input type="number" value={duration} onChange={(e) => setDuration(Number(e.target.value))} className={fieldClass} />
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-slate-700">Slot Capacity</label>
                  <input type="number" value={capacity} onChange={(e) => setCapacity(Number(e.target.value))} className={fieldClass} />
                </div>
                <Button variant="ghost" size="lg" className="w-full rounded-2xl border border-slate-200 text-slate-700 hover:bg-slate-50" onClick={handleLunchBreak}>
                  Set Lunch Break
                </Button>
                <Button variant="ghost" size="lg" className="w-full rounded-2xl border border-slate-200 text-slate-700 hover:bg-slate-50" onClick={handleEmergencyUnavailable}>
                  Emergency Unavailable
                </Button>
              </div>
            }
          />

          {/* Leave & Block History */}
          <PortalCard
            title="Leave & Block History"
            description={
              <div className="mt-1">
                {history.length === 0 ? (
                  <p className="text-sm text-slate-400">No blocks recorded yet.</p>
                ) : (
                  <div className="space-y-2">
                    {history.map((item, i) => (
                      <div key={i} className="flex items-center justify-between rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3">
                        <p className="text-sm text-slate-700">{item.date} · {item.label}</p>
                        <span className={`rounded-full px-3 py-1 text-xs font-medium ${historyBadge[item.type]}`}>
                          {item.scope}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            }
          />
        </div>
      </div>

      {/* Modal */}
      {showBlockModal && (
        <BlockSlotsModal
          onClose={() => setShowBlockModal(false)}
          onConfirm={handleConfirm}
        />
      )}
    </>
  );
}