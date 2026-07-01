"use client";

import React from "react";
import { X } from "lucide-react";

export default function AppointmentDetailModal({
  isOpen,
  onClose,
  appointment,
}) {


 const data = appointment
  ? {
      patient: appointment.patient,
      doctor: appointment.doctor,
      type: appointment.type,
      slot: appointment.slot,
      status: appointment.status,
      previousVisits: appointment.previousVisits,
    }
  : null;
if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/40 backdrop-blur-sm">
      {/* overlay */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* drawer */}
      <div className="relative w-full max-w-[520px] h-full bg-white shadow-2xl p-6 flex flex-col">
        
        {/* HEADER */}
        <div className="flex items-start justify-between mb-6">
          <div>
            <h2 className="text-xl font-bold text-slate-900">
              Appointment Detail
            </h2>
            <p className="text-sm text-slate-500">
              View complete appointment information
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-slate-100 transition"
          >
            <X className="w-5 h-5 text-slate-500" />
          </button>
        </div>

        {/* CONTENT GRID */}
        <div className="grid grid-cols-2 gap-6 text-sm">

          <div>
            <p className="text-slate-400 text-xs">Patient</p>
            <p className="font-semibold text-slate-900">{data.patient}</p>
          </div>

          <div>
            <p className="text-slate-400 text-xs">Doctor</p>
            <p className="font-semibold text-slate-900">{data.doctor}</p>
          </div>

          <div>
            <p className="text-slate-400 text-xs">Type</p>
            <p className="font-semibold text-slate-900">{data.type}</p>
          </div>

          <div>
            <p className="text-slate-400 text-xs">Slot</p>
            <p className="font-semibold text-slate-900">{data.slot}</p>
          </div>

          <div>
            <p className="text-slate-400 text-xs">Status</p>
            <span
              className={`inline-block px-3 py-1 rounded-full text-xs font-semibold capitalize
              ${
                data.status === "completed"
                  ? "bg-green-50 text-green-600"
                  : data.status === "cancelled"
                  ? "bg-red-50 text-red-500"
                  : "bg-yellow-50 text-yellow-600"
              }`}
            >
              {data.status}
            </span>
          </div>

          <div>
            <p className="text-slate-400 text-xs">Previous Visits</p>
            <p className="font-semibold text-slate-900">
              {data.previousVisits}
            </p>
          </div>
        </div>

        {/* FOOTER BUTTONS */}
        <div className="mt-auto pt-6 flex gap-3">
          <button className="flex-1 px-4 py-2 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 transition">
            Reschedule
          </button>

          <button className="flex-1 px-4 py-2 rounded-xl border border-slate-200 text-red-600 hover:bg-red-50 transition">
            Cancel
          </button>

          <button className="flex-1 px-4 py-2 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 transition">
            Complete
          </button>
        </div>
      </div>
    </div>
  );
}