"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import AllTechnicians from "@/components/carwash/owner/technicians/AllTechnicians";
import AddTechnician from "@/components/carwash/owner/technicians/AddTechnician";

export default function TechniciansPage() {
  const [openAddTechnician, setOpenAddTechnician] = useState(false);

  return (
    <div className="-mt-4 min-h-screen px-3 py-3 md:px-3">
      <div className="mb-5 flex items-start justify-between">
        <div>
          <h1 className="text-3xl font-semibold leading-tight text-[#3f63dd]">
            Technicians
          </h1>

          <p className="mt-2 text-base text-[#667085]">
            Skills, productivity, ratings and revenue contribution per
            technician.
          </p>
        </div>

        <button
          onClick={() => setOpenAddTechnician(true)}
          className="mt-8 flex items-center gap-1 rounded-xl bg-gradient-to-r from-[#4B5EE4] to-[#2EA7E0] px-4 py-2 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(76,94,228,0.28)]"
        >
          <Plus size={17} />
          Add Technician
        </button>
      </div>

      <AllTechnicians />

      <AddTechnician
        open={openAddTechnician}
        onClose={() => setOpenAddTechnician(false)}
      />
    </div>
  );
}