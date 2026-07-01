"use client";

import Header from "@/components/carwash/layout/Header";
import Sidebar from "@/components/carwash/layout/Sidebar";

export default function TechnicianLayout({ children }) {
  return (
    <div className="min-h-screen bg-[#eef0ff] flex">
      {/* Sidebar */}
      <div className="w-[273px] shrink-0">
        <Sidebar role="TECHNICIAN" />
      </div>

      {/* Right section */}
      <div className="flex-1 min-w-0">
        <Header />

        {/* Main content */}
        <main className="pt-[100px] px-3 pb-6 hide-scrollbar">
          {children}
        </main>
      </div>
    </div>
  );
}