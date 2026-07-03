"use client";

import { useState } from "react";
import { Search, UserPlus } from "lucide-react";
import PortalCard from "@/components/common/card";
import InputField from "@/components/common/inputfield";

const PATIENTS = [
  { id: 1, name: "Aryan Nair",      phone: "+91 8606990531" },
  { id: 2, name: "Dev Nair",        phone: "+91 8913024571" },
  { id: 3, name: "Krish Sharma",    phone: "+91 8222536635" },
  { id: 4, name: "Priya Sharma",    phone: "+91 8375948610" },
  { id: 5, name: "Neil Joshi",      phone: "+91 8462865650" },
  { id: 6, name: "Kabir Nair",      phone: "+91 8762218201" },
  { id: 7, name: "Meera Patel",     phone: "+91 8221086528" },
  { id: 8, name: "Rohan Iyer",      phone: "+91 8687526619" },
];

const DEPARTMENTS = ["ENT", "Cardiology", "Orthopedics", "Neurology", "Dermatology", "Pediatrics"];
const DOCTORS     = { ENT: ["Dr. Riya Joshi", "Dr. Arjun Mehta"], Cardiology: ["Dr. Priya Singh"], Orthopedics: ["Dr. Kabir Shah"], Neurology: ["Dr. Ananya Roy"], Dermatology: ["Dr. Sneha Patel"], Pediatrics: ["Dr. Ravi Kumar"] };
const TYPES       = ["Physical", "Video", "Phone"];
const SLOTS       = ["09:00","09:30","10:00","10:30","11:00","11:30","12:00","14:00","14:30","15:00","15:30","16:00","16:30","17:00"];

const inputClass  = "w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400 transition";
const selectClass = `${inputClass} appearance-none`;

export default function BookAppointmentPage() {
  const today = new Date().toISOString().split("T")[0];

  const [query,      setQuery]      = useState("");
  const [selected,   setSelected]   = useState(null);
  const [dept,       setDept]       = useState("");
  const [doctor,     setDoctor]     = useState("");
  const [date,       setDate]       = useState(today);
  const [type,       setType]       = useState("Physical");
  const [slot,       setSlot]       = useState("09:30");
  const [confirmed,  setConfirmed]  = useState(false);

  const filtered = query.length > 0
    ? PATIENTS.filter((p) =>
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.phone.includes(query)
      )
    : [];

  const doctors = dept ? (DOCTORS[dept] ?? []) : [];

  function handleConfirm() {
    if (!selected || !dept || !doctor || !slot) return;
    setConfirmed(true);
    setTimeout(() => setConfirmed(false), 3000);
  }

  const canConfirm = selected && dept && doctor && slot;

  const chevron = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%2394a3b8' stroke-width='2.5'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Book Appointment</h1>
        <p className="mt-1 text-sm text-slate-500">Offline booking — syncs instantly everywhere</p>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 items-start">

        {/* ── STEP 1: Patient ─────────────────────────── */}
        <PortalCard
          description={
            <div className="space-y-4">
              {/* Step label */}
              <div className="flex items-center gap-3">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-indigo-600 text-sm font-bold text-white">
                  1
                </span>
                <span className="text-lg font-bold text-slate-900">Patient</span>
              </div>

              {/* Search */}
              <InputField
                name="patient-search"
                placeholder="Search name or phone..."
                value={query}
                onChange={(e) => { setQuery(e.target.value); setSelected(null); }}
                icon={<Search className="h-4 w-4" />}
              />

              {/* Dropdown results */}
              {filtered.length > 0 && !selected && (
                <div className="rounded-2xl border border-slate-200 bg-white shadow-lg overflow-hidden">
                  {filtered.map((p) => (
                    <button
                      key={p.id}
                      onClick={() => { setSelected(p); setQuery(p.name); }}
                      className="flex w-full items-center justify-between px-4 py-3 text-sm hover:bg-slate-50 transition border-b border-slate-100 last:border-0"
                    >
                      <span className="font-semibold text-slate-800">{p.name}</span>
                      <span className="text-slate-400">{p.phone}</span>
                    </button>
                  ))}
                </div>
              )}

              {/* Selected patient */}
              {selected && (
                <div className="rounded-2xl border border-indigo-200 bg-indigo-50 px-4 py-3">
                  <p className="text-sm font-bold text-indigo-800">{selected.name}</p>
                  <p className="text-xs text-indigo-400 mt-0.5">{selected.phone}</p>
                </div>
              )}

              {/* Register new */}
              <button className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition w-fit">
                <UserPlus className="h-4 w-4" />
                Register New Patient
              </button>
            </div>
          }
        />

        {/* ── STEP 2: Appointment ─────────────────────── */}
        <PortalCard
          description={
            <div className="space-y-5">
              {/* Step label */}
              <div className="flex items-center gap-3">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-indigo-600 text-sm font-bold text-white">
                  2
                </span>
                <span className="text-lg font-bold text-slate-900">Appointment</span>
              </div>

              {/* Department + Doctor */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">Department</label>
                  <select
                    value={dept}
                    onChange={(e) => { setDept(e.target.value); setDoctor(""); }}
                    className={selectClass}
                    style={{ backgroundImage: chevron, backgroundRepeat: "no-repeat", backgroundPosition: "right 1rem center" }}
                  >
                    <option value="">Select</option>
                    {DEPARTMENTS.map((d) => <option key={d}>{d}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">Doctor</label>
                  <select
                    value={doctor}
                    onChange={(e) => setDoctor(e.target.value)}
                    disabled={!dept}
                    className={`${selectClass} disabled:opacity-40`}
                    style={{ backgroundImage: chevron, backgroundRepeat: "no-repeat", backgroundPosition: "right 1rem center" }}
                  >
                    <option value="">Select</option>
                    {doctors.map((d) => <option key={d}>{d}</option>)}
                  </select>
                </div>
              </div>

              {/* Date + Type */}
              <div className="grid grid-cols-2 gap-3">
                <InputField
                  label="Date"
                  name="appointment-date"
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">Type</label>
                  <select
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    className={selectClass}
                    style={{ backgroundImage: chevron, backgroundRepeat: "no-repeat", backgroundPosition: "right 1rem center" }}
                  >
                    {TYPES.map((t) => <option key={t}>{t}</option>)}
                  </select>
                </div>
              </div>

              {/* Slots */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Slot</label>
                <div className="flex flex-wrap gap-2">
                  {SLOTS.map((s) => (
                    <button
                      key={s}
                      onClick={() => setSlot(s)}
                      className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                        slot === s
                          ? "border-indigo-500 bg-white text-indigo-600 ring-2 ring-indigo-300"
                          : "border-slate-200 bg-white text-slate-600 hover:border-indigo-300"
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              {/* Confirm */}
              <button
                onClick={handleConfirm}
                disabled={!canConfirm}
                className={`w-full rounded-2xl py-4 text-base font-bold text-white transition ${
                  confirmed
                    ? "bg-emerald-500"
                    : canConfirm
                    ? "bg-blue-500 hover:bg-blue-600"
                    : "bg-blue-300 cursor-not-allowed"
                }`}
              >
                {confirmed ? "✓ Booking Confirmed!" : "Confirm Booking"}
              </button>
            </div>
          }
        />
      </div>
    </div>
  );
}