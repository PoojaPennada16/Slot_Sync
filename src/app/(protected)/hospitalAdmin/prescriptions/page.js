"use client";

import React, { useState } from "react";
import PortalCard from "@/components/common/card";
import Button from "@/components/common/button";
import { Trash2, Printer, Send, Plus } from "lucide-react";

const PATIENTS = [
  { id: 1, name: "Aryan Nair",   age: 23, gender: "Male",   allergies: "—",    medications: ["Metformin"],      history: ["Diabetes Type 2"] },
  { id: 2, name: "Dev Nair",     age: 45, gender: "Female", allergies: "Penicillin", medications: ["Atorvastatin"], history: ["Hypertension"] },
  { id: 3, name: "Priya Sharma", age: 65, gender: "Female", allergies: "Sulfa drugs", medications: ["Lisinopril", "Aspirin"], history: ["Hypertension", "Arthritis"] },
];

const HISTORY_RX = [
  { id: 1, patient: "Aryan Nair",   date: "12 Jun 2026", medicine: "Metformin 500mg" },
  { id: 2, patient: "Dev Nair",     date: "08 Jun 2026", medicine: "Atorvastatin 10mg" },
  { id: 3, patient: "Priya Sharma", date: "01 Jun 2026", medicine: "Lisinopril 5mg" },
  { id: 4, patient: "Aryan Nair",   date: "28 May 2026", medicine: "Paracetamol 500mg" },
  { id: 5, patient: "Dev Nair",     date: "20 May 2026", medicine: "Amoxicillin 250mg" },
  { id: 6, patient: "Priya Sharma", date: "15 May 2026", medicine: "Aspirin 75mg" },
  { id: 7, patient: "Aryan Nair",   date: "10 May 2026", medicine: "Omeprazole 20mg" },
  { id: 8, patient: "Dev Nair",     date: "05 May 2026", medicine: "Cetirizine 10mg" },
  { id: 9, patient: "Priya Sharma", date: "01 May 2026", medicine: "Ibuprofen 400mg" },
];

const defaultMedicine = () => ({
  id: Date.now(),
  name: "",
  dose: "1 tab",
  frequency: "Twice daily",
  duration: "5 days",
  instructions: "After food",
});

const inputClass =
  "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 transition";

const labelClass = "block text-[13px] font-semibold text-slate-700 mb-1.5";

export default function PrescriptionsDashboard() {
  const [activeTab,    setActiveTab]    = useState("new-rx");
  const [patientId,    setPatientId]    = useState(1);
  const [medicines,    setMedicines]    = useState([defaultMedicine()]);
  const [tests,        setTests]        = useState("");
  const [followUp,     setFollowUp]     = useState("");
  const [precautions,  setPrecautions]  = useState("");
  const [referral,     setReferral]     = useState("");

  const patient = PATIENTS.find((p) => p.id === Number(patientId));

  function addMedicine()       { setMedicines((m) => [...m, defaultMedicine()]); }
  function removeMedicine(id)  { setMedicines((m) => m.filter((x) => x.id !== id)); }
  function updateMedicine(id, field, val) {
    setMedicines((m) => m.map((x) => x.id === id ? { ...x, [field]: val } : x));
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Prescriptions</h1>
        <p className="mt-1 text-sm text-slate-500">Create and review prescriptions</p>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-1 bg-slate-100 p-1 w-fit rounded-2xl">
        {[
          { key: "new-rx",  label: "New RX" },
          { key: "history", label: `History (${HISTORY_RX.length})` },
        ].map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`rounded-xl px-5 py-2 text-sm font-bold transition-all ${
              activeTab === tab.key
                ? "bg-white text-slate-900 shadow-sm"
                : "text-slate-500 hover:text-slate-800"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* ── NEW RX TAB ─────────────────────────────────── */}
      {activeTab === "new-rx" && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">

          {/* LEFT: Form (2 cols) */}
          <div className="lg:col-span-2">
            <PortalCard
              description={
                <form onSubmit={(e) => e.preventDefault()} className="space-y-6">

                  {/* Patient */}
                  <div>
                    <label className={labelClass}>Patient</label>
                    <select
                      value={patientId}
                      onChange={(e) => setPatientId(Number(e.target.value))}
                      className={`${inputClass} appearance-none`}
                      style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%2394a3b8' stroke-width='2.5'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`, backgroundRepeat: "no-repeat", backgroundPosition: "right 1rem center" }}
                    >
                      {PATIENTS.map((p) => (
                        <option key={p.id} value={p.id}>{p.name}</option>
                      ))}
                    </select>
                  </div>

                  {/* Medicines */}
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <label className={`${labelClass} mb-0`}>Medicines</label>
                      <button
                        type="button"
                        onClick={addMedicine}
                        className="flex items-center gap-1 rounded-xl border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-bold text-slate-700 hover:bg-slate-100 transition"
                      >
                        <Plus className="h-3.5 w-3.5" /> Add
                      </button>
                    </div>

                    <div className="space-y-3">
                      {medicines.map((med) => (
                        <div key={med.id} className="rounded-2xl border border-slate-100 bg-slate-50 p-4 space-y-2">
                          {/* Row 1: Medicine name + delete */}
                          <div className="flex items-center gap-2">
                            <input
                              type="text"
                              placeholder="Medicine name"
                              value={med.name}
                              onChange={(e) => updateMedicine(med.id, "name", e.target.value)}
                              className={`${inputClass} flex-1`}
                            />
                            <button
                              type="button"
                              onClick={() => removeMedicine(med.id)}
                              className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-slate-200 bg-white text-slate-400 hover:text-rose-500 transition"
                            >
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>
                          {/* Row 2: dose / frequency / duration / instructions */}
                          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                            {[
                              { field: "dose",         placeholder: "1 tab" },
                              { field: "frequency",    placeholder: "Twice daily" },
                              { field: "duration",     placeholder: "5 days" },
                              { field: "instructions", placeholder: "After food" },
                            ].map(({ field, placeholder }) => (
                              <input
                                key={field}
                                type="text"
                                placeholder={placeholder}
                                value={med[field]}
                                onChange={(e) => updateMedicine(med.id, field, e.target.value)}
                                className={`${inputClass} text-center`}
                              />
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tests + Follow-up */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className={labelClass}>Suggested Tests (comma separated)</label>
                      <input type="text" placeholder="Blood Test, MRI" value={tests} onChange={(e) => setTests(e.target.value)} className={inputClass} />
                    </div>
                    <div>
                      <label className={labelClass}>Follow-up Date</label>
                      <input type="date" value={followUp} onChange={(e) => setFollowUp(e.target.value)} className={inputClass} />
                    </div>
                  </div>

                  {/* Precautions + Referral */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className={labelClass}>Precautions</label>
                      <textarea rows={3} value={precautions} onChange={(e) => setPrecautions(e.target.value)} className={`${inputClass} resize-none`} />
                    </div>
                    <div>
                      <label className={labelClass}>Referral Notes</label>
                      <textarea rows={3} value={referral} onChange={(e) => setReferral(e.target.value)} className={`${inputClass} resize-none`} />
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap items-center gap-3 pt-1">
                    <Button variant="primary" size="md" className="rounded-xl font-semibold">
                      Save Prescription
                    </Button>
                    <Button variant="secondary" size="md" className="rounded-xl font-semibold flex items-center gap-2">
                      <Printer className="h-4 w-4" /> Print
                    </Button>
                    <Button variant="secondary" size="md" className="rounded-xl font-semibold flex items-center gap-2">
                      <Send className="h-4 w-4" /> Forward to Reception
                    </Button>
                  </div>

                </form>
              }
            />
          </div>

          {/* RIGHT: Patient Context */}
          <div className="lg:col-span-1">
            <PortalCard
              title="Patient Context"
              description={
                patient ? (
                  <div className="space-y-4 mt-1">
                    <p className="text-base font-semibold text-slate-800">
                      {patient.name} · {patient.age}/{patient.gender}
                    </p>

                    <div>
                      <p className="text-xs font-medium text-slate-400 mb-0.5">Allergies</p>
                      <p className="text-sm font-semibold text-slate-800">{patient.allergies}</p>
                    </div>

                    <div>
                      <p className="text-xs font-medium text-slate-400 mb-1.5">Current Medications</p>
                      <div className="flex flex-wrap gap-1.5">
                        {patient.medications.map((m) => (
                          <span key={m} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700">
                            {m}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <p className="text-xs font-medium text-slate-400 mb-1.5">History</p>
                      <div className="flex flex-wrap gap-1.5">
                        {patient.history.map((h) => (
                          <span key={h} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700">
                            {h}
                          </span>
                        ))}
                      </div>
                    </div>

                    <p className="text-sm font-medium text-slate-400 hover:text-indigo-600 cursor-pointer transition">
                      Past Prescriptions
                    </p>
                  </div>
                ) : null
              }
            />
          </div>
        </div>
      )}

      {/* ── HISTORY TAB ────────────────────────────────── */}
      {activeTab === "history" && (
        <div className="space-y-4">
          {HISTORY_RX.map((rx) => (
            <PortalCard
              key={rx.id}
              title={rx.patient}
              badgeText={rx.date}
              badgeColor="bg-slate-100 text-slate-500"
              description={
                <p className="text-sm text-slate-500">{rx.medicine}</p>
              }
            />
          ))}
        </div>
      )}
    </div>
  );
}