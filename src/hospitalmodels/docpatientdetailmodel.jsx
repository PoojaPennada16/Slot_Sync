"use client";

import React from "react";
import { X } from "lucide-react";

function Pill({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1.5 text-[13px] font-semibold text-slate-800">
      {children}
    </span>
  );
}

function StatusBadge({ status }) {
  // Screenshot shows one consistent badge style for every status
  return (
    <span className="shrink-0 rounded-full bg-[#E4E7F5] px-3 py-1 text-[12px] font-bold text-slate-900">
      {status}
    </span>
  );
}

function VisitRow({ date, type, status }) {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-4 py-3">
      <span className="text-[14px] text-slate-800">
        {date} <span className="text-slate-400">·</span> {type}
      </span>
      <StatusBadge status={status} />
    </div>
  );
}

function Field({ label, value }) {
  return (
    <div>
      <p className="text-[13px] text-slate-400">{label}</p>
      <p className="mt-0.5 text-[15px] font-bold text-slate-900">{value}</p>
    </div>
  );
}

function SectionTitle({ children }) {
  return <h3 className="text-[15px] font-bold text-slate-900 mb-3">{children}</h3>;
}

export default function PatientDetailPopup({ patient, onClose }) {
  const p = patient;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 p-4">
      <div className="relative max-h-[85vh] w-full max-w-xl overflow-y-auto rounded-3xl bg-[#F7F8FC] p-6 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute right-5 top-5 flex h-8 w-8 items-center justify-center rounded-full border border-indigo-200 text-indigo-500 transition hover:bg-indigo-50"
          aria-label="Close"
        >
          <X size={16} />
        </button>

        <h2 className="mb-5 text-xl font-extrabold text-slate-900">{p.name}</h2>

        {/* Summary grid — plain label/value, no input box, matches screenshot */}
        <div className="mb-6 grid grid-cols-3 gap-y-5">
          <Field label="Age" value={p.age} />
          <Field label="Gender" value={p.gender} />
          <Field label="Blood" value={p.blood} />
          <Field label="Phone" value={p.phone} />
          <Field label="Emergency" value={p.emergency} />
          <Field label="Visits" value={p.visits} />
        </div>

        {/* Allergies */}
        <div className="mb-6">
          <SectionTitle>Allergies</SectionTitle>
          {p.allergies && p.allergies !== "None known" ? (
            <Pill>{p.allergies}</Pill>
          ) : (
            <p className="text-[14px] text-slate-400">None known</p>
          )}
        </div>

        {/* Medications */}
        <div className="mb-6">
          <SectionTitle>Medications</SectionTitle>
          {p.medications?.length ? (
            <div className="flex flex-wrap gap-2">
              {p.medications.map((m) => (
                <Pill key={m}>{m}</Pill>
              ))}
            </div>
          ) : (
            <p className="text-[14px] text-slate-400">None</p>
          )}
        </div>

        {/* Medical History */}
        <div className="mb-6">
          <SectionTitle>Medical History</SectionTitle>
          {p.history?.length ? (
            <div className="flex flex-wrap gap-2">
              {p.history.map((h) => (
                <Pill key={h}>{h}</Pill>
              ))}
            </div>
          ) : (
            <p className="text-[14px] text-slate-400">None</p>
          )}
        </div>

        {/* Visit Timeline */}
        <div className="mb-6">
          <SectionTitle>Visit Timeline</SectionTitle>
          {p.timeline?.length ? (
            <div className="flex flex-col gap-2">
              {p.timeline.map((v, i) => (
                <VisitRow key={i} {...v} />
              ))}
            </div>
          ) : (
            <p className="text-[14px] text-slate-400">No visits yet</p>
          )}
        </div>

        
        {p.followUps?.length > 0 && (
          <div>
            <SectionTitle>Follow-ups</SectionTitle>
            <div className="flex flex-col gap-2">
              {p.followUps.map((v, i) => (
                <VisitRow key={i} {...v} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}