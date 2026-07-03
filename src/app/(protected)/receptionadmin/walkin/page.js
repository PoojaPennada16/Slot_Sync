"use client";

import { useState } from "react";
import { UserPlus, AlertTriangle } from "lucide-react";
import PortalCard from "@/components/common/card";
import InputField from "@/components/common/inputfield";

const DEPARTMENTS = ["ENT", "Cardiology", "Orthopedics", "Neurology", "Dermatology", "Pediatrics"];
const DOCTORS = {
  ENT:         ["Dr. Riya Joshi", "Dr. Arjun Mehta"],
  Cardiology:  ["Dr. Priya Singh"],
  Orthopedics: ["Dr. Kabir Shah"],
  Neurology:   ["Dr. Ananya Roy"],
  Dermatology: ["Dr. Sneha Patel"],
  Pediatrics:  ["Dr. Ravi Kumar"],
};

const input   = "w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition";
const lbl     = "block text-sm font-semibold text-slate-700 mb-1.5";
const chevron = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%2394a3b8' stroke-width='2.5'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`;
const sel     = `${input} appearance-none pr-10`;

export default function WalkInRegistrationPage() {
  const [form, setForm] = useState({
    name:      "",
    mobile:    "",
    age:       0,
    gender:    "Male",
    dept:      "",
    doctor:    "",
    emergency: false,
  });
  const [success, setSuccess] = useState(false);

  function update(field, val) {
    setForm((prev) => ({
      ...prev,
      [field]: val,
      ...(field === "dept" ? { doctor: "" } : {}),
    }));
  }

  const doctors    = form.dept ? (DOCTORS[form.dept] ?? []) : [];
  const canSubmit  = form.name.trim() && form.mobile.trim() && form.dept && form.doctor;

  function handleSubmit() {
    if (!canSubmit) return;
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
      setForm({ name: "", mobile: "", age: 0, gender: "Male", dept: "", doctor: "", emergency: false });
    }, 3000);
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Walk-in Registration</h1>
        <p className="mt-1 text-sm text-slate-500">Register and queue walk-in patients instantly</p>
      </div>

      <PortalCard
        description={
          <div className="space-y-5">

            {/* Row 1: Name + Mobile */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <InputField
                label="Name"
                name="name"
                value={form.name}
                onChange={(e) => update("name", e.target.value)}
              />
              <InputField
                label="Mobile"
                name="mobile"
                type="tel"
                value={form.mobile}
                onChange={(e) => update("mobile", e.target.value)}
              />
            </div>

            {/* Row 2: Age + Gender */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <InputField
                label="Age"
                name="age"
                type="number"
                value={form.age}
                onChange={(e) => update("age", Number(e.target.value))}
              />
              <div>
                <label className={lbl}>Gender</label>
                <select
                  value={form.gender}
                  onChange={(e) => update("gender", e.target.value)}
                  className={sel}
                  style={{ backgroundImage: chevron, backgroundRepeat: "no-repeat", backgroundPosition: "right 1rem center" }}
                >
                  {["Male", "Female", "Other"].map((g) => <option key={g}>{g}</option>)}
                </select>
              </div>
            </div>

            {/* Row 3: Department + Doctor */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className={lbl}>Department</label>
                <select
                  value={form.dept}
                  onChange={(e) => update("dept", e.target.value)}
                  className={sel}
                  style={{ backgroundImage: chevron, backgroundRepeat: "no-repeat", backgroundPosition: "right 1rem center" }}
                >
                  <option value="">Select</option>
                  {DEPARTMENTS.map((d) => <option key={d}>{d}</option>)}
                </select>
              </div>
              <div>
                <label className={lbl}>Doctor</label>
                <select
                  value={form.doctor}
                  onChange={(e) => update("doctor", e.target.value)}
                  disabled={!form.dept}
                  className={`${sel} disabled:opacity-40`}
                  style={{ backgroundImage: chevron, backgroundRepeat: "no-repeat", backgroundPosition: "right 1rem center" }}
                >
                  <option value="">Select</option>
                  {doctors.map((d) => <option key={d}>{d}</option>)}
                </select>
              </div>
            </div>

            {/* Emergency checkbox */}
            <label className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 cursor-pointer hover:bg-slate-50 transition">
              <input
                type="checkbox"
                checked={form.emergency}
                onChange={(e) => update("emergency", e.target.checked)}
                className="h-4 w-4 rounded border-slate-300 accent-indigo-600"
              />
              <AlertTriangle className="h-4 w-4 text-amber-500 shrink-0" />
              <span className="text-sm font-medium text-slate-700">
                Emergency — priority queue &amp; immediate doctor alert
              </span>
            </label>

            {/* Submit */}
            <button
              onClick={handleSubmit}
              disabled={!canSubmit}
              className={`w-full flex items-center justify-center gap-2 rounded-2xl py-4 text-base font-bold text-white transition ${
                success
                  ? "bg-emerald-500"
                  : canSubmit
                  ? "bg-indigo-600 hover:bg-indigo-700"
                  : "bg-indigo-300 cursor-not-allowed"
              }`}
            >
              <UserPlus className="h-5 w-5" />
              {success ? "✓ Registered & Queued!" : "Register & Queue"}
            </button>

          </div>
        }
      />
    </div>
  );
}