"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import AllServices from "@/components/carwash/owner/services/AllServices";
import AddService from "@/components/carwash/owner/services/AddService";

export default function ServicesPage() {
  const [openAddService, setOpenAddService] = useState(false);

  return (
    <div className="-mt-4 min-h-screen px-3 py-3 md:px-3">
      {/* Heading section */}
      <div className="mb-5 flex items-start justify-between">
        <div>
          <h1 className="text-3xl font-semibold leading-tight text-[#3f63dd]">
            Service Catalogue
          </h1>
          <p className="mt-2 text-base text-[#667085]">
            Pricing, popularity and growth for every service.
          </p>
        </div>

        <button
          onClick={() => setOpenAddService(true)}
          className="flex items-center gap-1 rounded-xl bg-gradient-to-r from-[#4B5EE4] to-[#2EA7E0] px-4 py-2 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(76,94,228,0.28)]"
        >
          <Plus size={17} />
          New service
        </button>
      </div>

      {/* Only UI component */}
      <AllServices />

      {/* Add service popup */}
      <AddService
        open={openAddService}
        onClose={() => setOpenAddService(false)}
      />
    </div>
  );
}