import React from "react";
import PortalCard from "@/app/components/common/card";

export default function ReceptionCoordinator() {
  const stats = [
    { label: "In Queue", value: "0" },
    { label: "Today's Walk-ins", value: "0" },
    { label: "Reception Tasks", value: "4" },
    { label: "Avg Wait", value: "18m" },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto p-8 bg-[#F8FAFC] min-h-screen text-[#0F172A] font-sans">
      
      {/* HEADER SECTION */}
      <header className="mb-6">
        <h1 className="text-2xl font-bold tracking-tight text-slate-900">Reception Coordinator</h1>
        <p className="text-base text-slate-500 mt-1">Coordinate with your front desk and queue</p>
      </header>

      {/* ASSIGNED RECEPTIONIST BAR */}
      <div className="w-full bg-[oklch(98.5%_0.005_260)] border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.02)] rounded-3xl p-6 mb-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <span className="text-xs font-medium text-slate-400 uppercase tracking-wider block mb-1">
            Assigned Receptionist
          </span>
          <h2 className="text-xl font-bold text-slate-950">Anaya Mehta</h2>
          <p className="text-sm text-slate-500 mt-0.5">
            +91 9376969730 <span className="mx-1.5">·</span> Main Campus <span className="mx-1.5">·</span> Floor 1
          </p>
        </div>
        <div className="bg-[#EEF2F6] text-slate-900 px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide">
          Shift: 14:00 - 22:00
        </div>
      </div>

      {/* STAT CARDS GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
        {stats.map((stat, idx) => (
          <PortalCard
            key={idx}
            variant="stat"
            label={stat.label}
            value={stat.value}
          />
        ))}
      </div>

      {/* LIVE QUEUE SECTION */}
      <section className="mb-8">
        <h3 className="text-lg font-bold text-slate-900 mb-3">Live Queue</h3>
        <p className="text-sm text-slate-500">Queue is empty.</p>
      </section>

      {/* RECEPTION NOTES & REQUESTS SECTION */}
      <section>
        <h3 className="text-lg font-bold text-slate-900 mb-3">Reception Notes & Requests</h3>
        
        {/* Adjusted Action Row */}
        <div className="w-full bg-[oklch(98.5%_0.005_260)] border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.01)] rounded-2xl p-4 flex items-center gap-3">
          {/* Custom Sync/Adjust Icon */}
          <div className="text-emerald-500 flex-shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
            </svg>
          </div>
          <p className="text-sm text-slate-600">
            Patient #3 arrived late — <span className="text-slate-500">please adjust</span>
          </p>
        </div>
      </section>

    </div>
  );
}