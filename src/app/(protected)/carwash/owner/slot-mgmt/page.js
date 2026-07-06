"use client";

import { useState } from "react";
import { Ban } from "lucide-react";
import AllSlotManagement from "@/components/carwash/owner/slot-mgmt/AllSlotManagement";
import BlockSlot from "@/components/carwash/owner/slot-mgmt/BlockSlot";

export default function SlotManagementPage() {
  const [open, setOpen] = useState(false);

  return (
    <div className="space-y-5">
      <div className="flex items-start justify-between">
        <div className="ml-1">
          <h1 className="text-3xl leading-none font-bold bg-gradient-to-r from-[#5563f0] to-[#2aa8df] bg-clip-text text-transparent">
            Slot & Leave Management
          </h1>

          <p className="mt-2 text-sm text-[#667085]">
            Block bays or technicians per branch, per day, or for a date range.
            Customer portal reflects updates instantly.
          </p>
        </div>

        <button
          onClick={() => setOpen(true)}
          className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#4B5EE4] to-[#2EA7E0] px-5 py-3 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(76,94,228,0.28)]"
        >
          <Ban size={17} />
          Block slot
        </button>
      </div>

      <AllSlotManagement />

      <BlockSlot
        open={open}
        onClose={() => setOpen(false)}
      />
    </div>
  );
}