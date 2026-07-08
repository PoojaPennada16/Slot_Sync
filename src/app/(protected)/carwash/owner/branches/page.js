"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

import BranchesSection from "@/components/carwash/owner/branches/BranchesSection";
import AddBranch from "@/components/carwash/owner/branches/AddBranch";
import AddManager from "@/components/carwash/owner/branches/manager/AddManager";

export default function BranchesPage() {
  const [openAddBranch, setOpenAddBranch] = useState(false);

  const [openAddManager, setOpenAddManager] = useState(false);
  const [selectedBranch, setSelectedBranch] = useState(null);
  const [isEditManager, setIsEditManager] = useState(false);

  return (
    <div className="min-h-screen bg-#eef0ff px-1 py-1 md:px-1">
      <div className="mb-4 flex items-start justify-between">
        <div>
          <h1 className="text-3xl font-bold leading-tight tracking-[-0.03em] text-[#4B57E7]">
            Branch Management
          </h1>

          <p className="mt-2 text-base text-[#667085]">
            Create, approve, suspend and monitor every service center in the network.
          </p>
        </div>

        <button
          onClick={() => setOpenAddBranch(true)}
          className="flex items-center gap-1 rounded-xl bg-gradient-to-r from-[#4B5EE4] to-[#2EA7E0] px-4 py-2 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(76,94,228,0.28)]"
        >
          <Plus size={16} strokeWidth={2.5} />
          Add Branch
        </button>
      </div>

      <BranchesSection
        onAddManager={(branch) => {
          setSelectedBranch(branch);
          setIsEditManager(false);
          setOpenAddManager(true);
        }}
        onEditManager={(branch) => {
          setSelectedBranch(branch);
          setIsEditManager(true);
          setOpenAddManager(true);
        }}
      />

      <AddBranch
        open={openAddBranch}
        onClose={() => setOpenAddBranch(false)}
      />

      <AddManager
        open={openAddManager}
        onClose={() => setOpenAddManager(false)}
        branch={selectedBranch}
        isEdit={isEditManager}
      />
    </div>
  );
}