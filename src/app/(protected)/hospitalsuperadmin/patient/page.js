"use client";

import React, { useState } from "react";
import { Search, Sparkles, AlertTriangle, RefreshCw } from "lucide-react";

import { Table,TableBody,TableCell,TableHead,TableHeader,TableRow } from "@/components/common/table";

import PatientDetailsModal from "@/hospitalmodels/patientdetailmodel";

export default function PatientsPage() {
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const patients = [
    {
      name: "Pari Chopra",
      phone: "+91 8256152629",
      ageGender: "48 · Male",
      blood: "B-",
      tags: [{ type: "first-time", label: "First Time" }],
      joined: "25 May",
    },
    {
      name: "Aryan Gupta",
      phone: "+91 8936398709",
      ageGender: "77 · Female",
      blood: "B+",
      tags: [
        { type: "high-risk", label: "High Risk" },
        { type: "frequent", label: "Frequent Visitor" },
      ],
      joined: "29 Oct",
    },
    {
      name: "Tara Desai",
      phone: "+91 8957393637",
      ageGender: "69 · Male",
      blood: "AB-",
      tags: [{ type: "frequent", label: "Frequent Visitor" }],
      joined: "03 Feb",
    },
    {
      name: "Meera Rao",
      phone: "+91 8122531306",
      ageGender: "18 · Other",
      blood: "B-",
      tags: [
        { type: "high-risk", label: "High Risk" },
        { type: "frequent", label: "Frequent Visitor" },
      ],
      joined: "29 Apr",
    },
  ];

  const openModal = (patient) => {
    setSelectedPatient(patient);
    setIsOpen(true);
  };

  const closeModal = () => {
    setSelectedPatient(null);
    setIsOpen(false);
  };

  return (
    <div className="p-8 bg-slate-50 min-h-screen font-sans">
      {/* Header Section */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-slate-900 tracking-tight">
          Patients
        </h1>
        <p className="text-sm text-slate-500 mt-1">
          520 registered patients
        </p>
      </div>

      {/* Search Bar */}
      <div className="relative max-w-md mb-6">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
        <input
          type="text"
          placeholder="Search by name or phone..."
          className="w-full pl-11 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder:text-slate-400 shadow-sm"
        />
      </div>

      {/* Patients Table Card */}
      <div className="bg-white border border-slate-100 rounded-2xl shadow-sm overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Patient</TableHead>
              <TableHead>Age/Gender</TableHead>
              <TableHead>Blood</TableHead>
              <TableHead>Tags</TableHead>
              <TableHead>Joined</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {patients.map((patient, index) => (
              <TableRow key={index}>
                
                {/* ONLY CHANGE HERE */}
                <TableCell>
                  <div className="flex flex-col">
                    <span
                      className="font-semibold text-slate-900 text-[15px] cursor-pointer hover:underline"
                      onClick={() => openModal(patient)}
                    >
                      {patient.name}
                    </span>
                    <span className="text-xs text-slate-400 mt-0.5">
                      {patient.phone}
                    </span>
                  </div>
                </TableCell>

                {/* Age & Gender */}
                <TableCell className="text-slate-600 font-medium">
                  {patient.ageGender}
                </TableCell>

                {/* Blood Type */}
                <TableCell className="text-slate-600 font-medium">
                  {patient.blood}
                </TableCell>

                {/* Tags */}
                <TableCell>
                  <div className="flex flex-wrap gap-2">
                    {patient.tags.map((tag, tagIdx) => {
                      if (tag.type === "first-time") {
                        return (
                          <span
                            key={tagIdx}
                            className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-50 text-amber-600 rounded-full text-xs font-semibold border border-amber-100/50"
                          >
                            <Sparkles className="w-3.5 h-3.5" />
                            {tag.label}
                          </span>
                        );
                      }
                      if (tag.type === "high-risk") {
                        return (
                          <span
                            key={tagIdx}
                            className="inline-flex items-center gap-1.5 px-3 py-1 bg-rose-50 text-rose-600 rounded-full text-xs font-semibold border border-rose-100/50"
                          >
                            <AlertTriangle className="w-3.5 h-3.5" />
                            {tag.label}
                          </span>
                        );
                      }
                      if (tag.type === "frequent") {
                        return (
                          <span
                            key={tagIdx}
                            className="inline-flex items-center gap-1.5 px-3 py-1 bg-cyan-50 text-cyan-600 rounded-full text-xs font-semibold border border-cyan-100/50"
                          >
                            <RefreshCw className="w-3.5 h-3.5" />
                            {tag.label}
                          </span>
                        );
                      }
                      return null;
                    })}
                  </div>
                </TableCell>

                {/* Joined */}
                <TableCell className="text-slate-500 font-medium">
                  {patient.joined}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* MODAL */}
      <PatientDetailsModal
  isOpen={isOpen}
  patient={selectedPatient}
  onClose={closeModal}
/>
    </div>
  );
}