// components/PatientDetailsModal.js
"use client";

import React from "react";
import { X } from "lucide-react";

export default function PatientDetailsModal({ isOpen, onClose, patient }) {
  if (!isOpen || !patient) return null;

  // Destructure and normalize basic variables from your existing row fields
  const [age, gender] = patient.ageGender ? patient.ageGender.split(" · ") : ["—", "—"];

  // Mapping layout details exactly to the reference designs
  const data = {
    name: patient.name,
    age: age,
    gender: gender,
    bloodGroup: patient.blood || "—",
    phone: patient.phone || "—",
    emergency: patient.extendedDetails?.emergency || "+91 7134450507",
    visits: patient.extendedDetails?.visits || 6,
    allergies: patient.extendedDetails?.allergies || "No known allergies",
    medications: patient.extendedDetails?.medications || ["Losartan"],
    history: patient.extendedDetails?.history || ["Arthritis"],
    doctors: patient.extendedDetails?.doctors || [
      "Dr. Aarav Malhotra",
      "Dr. Rohan Chopra",
      "Dr. Krish Sharma",
      "Dr. Diya Rao"
    ],
    appointments: patient.extendedDetails?.appointments || [
      { date: "05 Jun", doctor: "Dr. Aarav Malhotra", status: "no-show" }
    ],
    isFirstTime: patient.tags?.some(tag => tag.type === "first-time") || false
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-end bg-slate-900/40 backdrop-blur-sm">
      {/* Overlay click to close */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Drawer Container */}
      <div className="relative w-full max-w-[540px] h-full bg-white shadow-2xl p-8 overflow-y-auto font-sans flex flex-col justify-between">
        <div>
          
          {/* Header Area */}
          <div className="flex items-start justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">{data.name}</h2>
              {data.isFirstTime && (
                <span className="inline-flex items-center mt-1 px-2.5 py-0.5 text-xs font-semibold text-amber-600 bg-amber-50 rounded-full border border-amber-100">
                  ✨ First Time
                </span>
              )}
            </div>
            <button 
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-slate-600 hover:bg-slate-50 rounded-full transition-colors border border-slate-100"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Grid Metadata Row Block */}
          <div className="grid grid-cols-3 gap-y-5 gap-x-4 mb-8 border-b border-slate-100 pb-6 text-sm">
            <div>
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-0.5">Age</p>
              <p className="font-bold text-slate-800 text-base">{data.age}</p>
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-0.5">Gender</p>
              <p className="font-bold text-slate-800 text-base">{data.gender}</p>
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-0.5">Blood Group</p>
              <p className="font-bold text-slate-800 text-base">{data.bloodGroup}</p>
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-0.5">Phone</p>
              <p className="font-bold text-slate-800 text-[13px]">{data.phone}</p>
            </div>
            <div className="col-span-2">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-0.5">Emergency</p>
              <p className="font-bold text-slate-800 text-[13px]">{data.emergency}</p>
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-0.5">Visits</p>
              <p className="font-bold text-slate-800 text-base">{data.visits}</p>
            </div>
          </div>

          {/* Core Medical Summary Fields */}
          <div className="space-y-6 text-sm">
            {/* Allergies */}
            <div>
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-1.5">Allergies</h4>
              <p className="text-slate-500 font-medium">{data.allergies}</p>
            </div>

            {/* Medications */}
            <div>
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">Current Medications</h4>
              <div className="flex flex-wrap gap-2">
                {data.medications.map((med, i) => (
                  <span key={i} className="px-3 py-1 bg-slate-50 border border-slate-200/60 rounded-xl font-semibold text-slate-700">
                    {med}
                  </span>
                ))}
              </div>
            </div>

            {/* Medical History */}
            <div>
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">Medical History</h4>
              <div className="flex flex-wrap gap-2">
                {data.history.map((hist, i) => (
                  <span key={i} className="px-3 py-1 bg-slate-50 border border-slate-200/60 rounded-xl font-semibold text-slate-700">
                    {hist}
                  </span>
                ))}
              </div>
            </div>

            {/* Consulted Doctors */}
            <div>
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">Consulted Doctors</h4>
              <div className="flex flex-wrap gap-2">
                {data.doctors.map((doc, i) => (
                  <span key={i} className="px-3 py-1 bg-slate-50 border border-slate-200/60 rounded-xl font-semibold text-slate-700">
                    {doc}
                  </span>
                ))}
              </div>
            </div>

            {/* Appointment History Row Logs */}
            <div className="pt-2">
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2.5">Appointment History</h4>
              <div className="space-y-2">
                {data.appointments.map((appt, i) => (
                  <div key={i} className="flex items-center justify-between p-3 bg-slate-50 border border-slate-200/40 rounded-xl">
                    <p className="font-semibold text-slate-700">
                      {appt.date} <span className="mx-1 text-slate-300">•</span> {appt.doctor}
                    </p>
                    <span className="px-2.5 py-0.5 text-xs font-bold text-slate-600 bg-slate-200/60 rounded-full uppercase tracking-wider scale-95">
                      {appt.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}