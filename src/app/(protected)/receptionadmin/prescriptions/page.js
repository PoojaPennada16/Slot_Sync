"use client";

import PortalCard from "@/components/common/card";
import Button from "@/components/common/button";
import { Printer, Share2, Calendar, FlaskConical } from "lucide-react";

const prescriptions = [
  {
    patient: "Ananya Chopra",
    doctor: "Dr. Tara Chopra",
    date: "26 Apr",
    medicines: "Amlodipine, Amlodipine",
    followUp: "05 Jul",
    suggestedTests: "—",
    referral: "—",
    status: "Forwarded",
    actions: ["print", "share", "schedule"],
  },
  {
    patient: "Kiara Malhotra",
    doctor: "Dr. Tara Rao",
    date: "06 May",
    medicines: "Losartan, Atorvastatin",
    followUp: "—",
    suggestedTests: "Blood Test (CBC)",
    referral: "—",
    status: "Forwarded",
    actions: ["print", "share", "book-lab"],
  },
];

export default function PrescriptionHandoff() {
  const handlePrint = (name) => console.log("print", name);
  const handleShare = (name) => console.log("share", name);
  const handleSchedule = (name) => console.log("schedule follow-up", name);
  const handleBookLab = (name) => console.log("book lab", name);

  return (
    <main className="min-h-screen w-full bg-[#f4f5fb] px-6 py-6 md:px-4">
      <div className="max-w-5xl mx-auto w-full">
        <h1 className="text-2xl font-extrabold text-slate-900 mb-1">
          Prescription Handoff
        </h1>
        <p className="text-slate-500 text-base mb-8">
          Prescriptions forwarded by doctors
        </p>

        <div className="flex flex-col gap-5">
          {prescriptions.map((p, idx) => (
            <PortalCard
              key={idx}
              className="bg-white shadow-[0_2px_12px_rgba(15,23,42,0.04)] !flex-col !items-stretch"
              leading={
                <div className="flex flex-col w-full">
                  {/* Top row: name/meta + status badge */}
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h3 className="text-lg font-bold text-slate-900">
                        {p.patient}
                      </h3>
                      <p className="text-sm text-slate-400 mt-0.5">
                        {p.doctor} · {p.date}
                      </p>
                    </div>
                    <span className="bg-emerald-50 text-emerald-600 text-sm font-semibold px-4 py-1.5 rounded-full shrink-0">
                      {p.status}
                    </span>
                  </div>

                  {/* Two column details */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-5 mb-6">
                    <div>
                      <p className="text-sm text-slate-400 mb-1">Medicines</p>
                      <p className="text-base text-slate-900">
                        {p.medicines}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-slate-400 mb-1">
                        Suggested Tests
                      </p>
                      <p className="text-base text-slate-900">
                        {p.suggestedTests}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-slate-400 mb-1">Follow-up</p>
                      <p className="text-base text-slate-900">
                        {p.followUp}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-slate-400 mb-1">Referral</p>
                      <p className="text-base text-slate-900">
                        {p.referral}
                      </p>
                    </div>
                  </div>

                  {/* Action buttons */}
                  <div className="flex flex-wrap items-center gap-3">
                    <Button
                      variant="secondary"
                      size="sm"
                      className="rounded-full bg-white border border-slate-200 text-slate-900 hover:bg-slate-50 font-semibold"
                      onClick={() => handlePrint(p.patient)}
                    >
                      <Printer className="w-4 h-4 mr-1.5" />
                      Print
                    </Button>

                    <Button
                      variant="secondary"
                      size="sm"
                      className="rounded-full bg-white border border-slate-200 text-slate-900 hover:bg-slate-50 font-semibold"
                      onClick={() => handleShare(p.patient)}
                    >
                      <Share2 className="w-4 h-4 mr-1.5" />
                      Share
                    </Button>

                    {p.actions.includes("schedule") && (
                      <Button
                        variant="secondary"
                        size="sm"
                        className="rounded-full bg-white border border-slate-200 text-slate-900 hover:bg-slate-50 font-semibold"
                        onClick={() => handleSchedule(p.patient)}
                      >
                        <Calendar className="w-4 h-4 mr-1.5" />
                        Schedule Follow-up
                      </Button>
                    )}

                    {p.actions.includes("book-lab") && (
                      <Button
                        variant="primary"
                        size="sm"
                        className="rounded-full font-semibold bg-indigo-600 hover:bg-indigo-700"
                        onClick={() => handleBookLab(p.patient)}
                      >
                        <FlaskConical className="w-4 h-4 mr-1.5" />
                        Book Lab
                      </Button>
                    )}
                  </div>
                </div>
              }
            />
          ))}
        </div>
      </div>
    </main>
  );
}