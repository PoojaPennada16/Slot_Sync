"use client";

import { useState } from "react";
import PortalCard from "@/components/common/card";
import Button from "@/components/common/button";
import { FlaskConical } from "lucide-react";

const testOptions = [
  "Blood Test (CBC)",
  "Lipid Profile",
  "Thyroid Panel (TSH)",
  "X-Ray Chest",
  "MRI Scan",
  "Urine Routine",
];

const patientOptions = [
  "Pari Chopra",
  "Vihaan Desai",
  "Kabir Sharma",
  "Neil Rao",
];

export default function LabDiagnostics() {
  const [patient, setPatient] = useState("");
  const [test, setTest] = useState(testOptions[0]);
  const [referrals, setReferrals] = useState([]);

  const handleBookTest = () => {
    if (!patient) return;
    setReferrals((prev) => [
      ...prev,
      { patient, test, id: Date.now() },
    ]);
  };

  return (
    <main className="min-h-screen w-full bg-[#f4f5fb] px-6 py-8 md:px-4">
      <div className="max-w-6xl mx-auto w-full">
        <h1 className="text-2xl font-extrabold text-slate-900 mb-1">
          Lab & Diagnostics
        </h1>
        <p className="text-slate-500 text-base mb-8">
          Create diagnostic bookings
        </p>

        {/* Booking form */}
        <PortalCard
          className="bg-white shadow-[0_2px_12px_rgba(15,23,42,0.04)] mb-4"
          leading={
            <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3 flex-1 min-w-0">
              <select
                value={patient}
                onChange={(e) => setPatient(e.target.value)}
                className="flex-1 min-w-0 bg-white border border-slate-200 rounded-full px-5 py-3 text-sm text-slate-700 outline-none focus:border-indigo-300"
              >
                <option value="" disabled>
                  Patient
                </option>
                {patientOptions.map((p) => (
                  <option key={p} value={p}>
                    {p}
                  </option>
                ))}
              </select>

              <select
                value={test}
                onChange={(e) => setTest(e.target.value)}
                className="flex-1 min-w-0 bg-white border border-slate-200 rounded-full px-4 py-3 text-sm text-slate-700 outline-none focus:border-indigo-300"
              >
                {testOptions.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>
          }
        >
          <Button
            variant="primary"
            size="md"
            onClick={handleBookTest}
            className="rounded-full shrink-0 font-semibold bg-indigo-600 hover:bg-indigo-700 whitespace-nowrap"
          >
            <FlaskConical className="w-4 h-4 mr-1" />
            Book Test
          </Button>
        </PortalCard>

        {/* Referrals list */}
        <PortalCard
          className="bg-white shadow-[0_2px_12px_rgba(15,23,42,0.04)] !flex-col !items-stretch"
          leading={
            referrals.length === 0 ? (
              <p className="text-slate-400 text-base text-center py-10 w-full">
                No referrals yet.
              </p>
            ) : (
              <div className="flex flex-col gap-3 w-full">
                {referrals.map((r) => (
                  <div
                    key={r.id}
                    className="flex items-center justify-between px-4 py-3 rounded-2xl bg-slate-50"
                  >
                    <span className="text-sm font-semibold text-slate-900">
                      {r.patient}
                    </span>
                    <span className="text-sm text-slate-500">{r.test}</span>
                  </div>
                ))}
              </div>
            )
          }
        />
      </div>
    </main>
  );
}