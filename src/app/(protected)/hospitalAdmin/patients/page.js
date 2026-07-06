"use client";

import { useState } from "react";
import { Search, Star, Clock } from "lucide-react";
import PortalCard from "@/components/common/card";
import PatientDetailPopup from "@/hospitalmodels/docpatientdetailmodel";

const patients = [
  {
    id: 1, name: "Aryan Nair", age: 23, gender: "Male", blood: "A+",
    phone: "+91 8606990531", emergency: "+91 7109053555", visits: 2,
    allergies: "None known",
    medications: ["Metformin"],
    history: ["Diabetes Type 2"],
    timeline: [
      { date: "27 Feb", type: "Consultation", status: "cancelled" },
      { date: "27 Feb", type: "Consultation", status: "cancelled" },
    ],
  },
  {
    id: 2, name: "Dev Nair", age: 45, gender: "Female", blood: "AB+",
    phone: "+91 8913024571", emergency: "+91 7109053556", visits: 0,
    allergies: "Penicillin",
    medications: ["Atorvastatin"],
    history: ["Hypertension"],
    timeline: [],
  },
  {
    id: 3, name: "Krish Sharma", age: 32, gender: "Male", blood: "A-",
    phone: "+91 8222536635", emergency: "+91 7109053557", visits: 0,
    allergies: "None known",
    medications: [],
    history: ["Asthma"],
    timeline: [],
  },
  {
    id: 4, name: "Priya Sharma", age: 65, gender: "Male", blood: "B-",
    phone: "+91 8375948610", emergency: "+91 7109053558", visits: 2,
    allergies: "Sulfa drugs",
    medications: ["Lisinopril", "Aspirin"],
    history: ["Hypertension", "Arthritis"],
    timeline: [
      { date: "10 Mar", type: "Consultation", status: "completed" },
      { date: "22 Mar", type: "Follow-up",    status: "completed" },
    ],
  },
  {
    id: 5, name: "Neil Joshi", age: 58, gender: "Female", blood: "O+",
    phone: "+91 8462865650", emergency: "+91 7109053559", visits: 2,
    allergies: "None known",
    medications: ["Metoprolol"],
    history: ["Cardiac Arrhythmia"],
    timeline: [
      { date: "5 Apr",  type: "Consultation", status: "completed" },
      { date: "18 Apr", type: "Follow-up",    status: "cancelled" },
    ],
  },
  {
    id: 6, name: "Kabir Nair", age: 59, gender: "Female", blood: "A-",
    phone: "+91 8762218201", emergency: "+91 7109053560", visits: 1,
    allergies: "None known",
    medications: ["Omeprazole"],
    history: ["GERD"],
    timeline: [
      { date: "2 May", type: "Consultation", status: "completed" },
    ],
  },
  {
    id: 7, name: "Kabir Patel", age: 16, gender: "Female", blood: "B+",
    phone: "+91 8313833481", emergency: "+91 7109053561", visits: 0,
    allergies: "None known", medications: [], history: [], timeline: [],
  },
  {
    id: 8, name: "Vihaan Malhotra", age: 74, gender: "Other", blood: "A-",
    phone: "+91 8830674612", emergency: "+91 7109053562", visits: 0,
    allergies: "Latex",
    medications: ["Warfarin"],
    history: ["Atrial Fibrillation"],
    timeline: [],
  },
  {
    id: 9, name: "Dev Verma", age: 16, gender: "Other", blood: "AB+",
    phone: "+91 8788868093", emergency: "+91 7109053563", visits: 0,
    allergies: "None known", medications: [], history: [], timeline: [],
  },
  {
    id: 10, name: "Meera Patel", age: 50, gender: "Female", blood: "B-",
    phone: "+91 8221086528", emergency: "+91 7109053564", visits: 0,
    allergies: "Ibuprofen",
    medications: ["Levothyroxine"],
    history: ["Hypothyroidism"],
    timeline: [],
  },
  {
    id: 11, name: "Rohan Iyer", age: 19, gender: "Female", blood: "O+",
    phone: "+91 8687526619", emergency: "+91 7109053565", visits: 2,
    allergies: "None known",
    medications: ["Salbutamol"],
    history: ["Asthma"],
    timeline: [
      { date: "14 Jun", type: "Consultation", status: "completed" },
      { date: "21 Jun", type: "Follow-up",    status: "completed" },
    ],
  },
  {
    id: 12, name: "Aditya Patel", age: 15, gender: "Other", blood: "AB+",
    phone: "+91 8687421182", emergency: "+91 7109053566", visits: 0,
    allergies: "None known", medications: [], history: [], timeline: [],
  },
];

export { patients };

export default function PatientRecordsPage() {
  const [query, setQuery] = useState("");
  const [selectedPatient, setSelectedPatient] = useState(null); // NEW

  const filtered = patients.filter((p) =>
    p.name.toLowerCase().includes(query.toLowerCase()) ||
    p.phone.includes(query)
  );

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Patient Records</h1>
        <p className="mt-1 text-sm text-slate-500">{patients.length} of your patients</p>
      </div>

      <div className="relative max-w-md">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
        <input
          type="text"
          placeholder="Search patients..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full rounded-2xl border border-slate-200 bg-white py-3 pl-11 pr-4 text-sm text-slate-700 placeholder:text-slate-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-200"
        />
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((patient) => {
          const isNew = patient.visits === 0;
          return (
            <PortalCard
              key={patient.id}
              onClick={() => setSelectedPatient(patient)} // NEW — opens popup
              title={patient.name}
              badgeText={
                isNew ? (
                  <span className="flex items-center gap-1">
                    <Star className="h-3 w-3" /> New
                  </span>
                ) : (
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" /> {patient.visits}
                  </span>
                )
              }
              badgeColor={isNew ? "bg-amber-100 text-amber-600" : "bg-cyan-100 text-cyan-600"}
              description={
                <p className="text-sm text-slate-500">
                  {patient.age}/{patient.gender} · {patient.blood} · {patient.phone}
                </p>
              }
            />
          );
        })}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-sm text-slate-400 py-12">
          No patients found for &quot;{query}&quot;
        </p>
      )}

      {/* NEW — popup opens whenever a patient is selected */}
      {selectedPatient && (
        <PatientDetailPopup
          patient={selectedPatient}
          onClose={() => setSelectedPatient(null)}
        />
      )}
    </div>
  );
}