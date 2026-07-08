"use client";

import { useState } from "react";
import {
  Building2,
  EllipsisVertical,
  Plus,
  Star,
  Pencil,
  PauseCircle,
  Trash2,
  CheckCircle2,
  XCircle,
} from "lucide-react";

import BranchManagerCard from "./manager/BranchManagerCard";
import CardMenu from "@/components/carwash/common/CardMenu";

const initialBranches = [
  {
    id: 1,
    name: "SlotSync HQ — Bandra",
    type: "Car Wash Center",
    manager: "Rohit Mehta",
    email: "Rohitmhata@slotsync.com",
    status: "Approved",
    revenue: "₹8,42,000",
    bookings: 312,
    bays: 8,
    technicians: 12,
    rating: 4.8,
  },
  {
    id: 2,
    name: "SlotSync Andheri West",
    type: "Detailing Studio",
    manager: "Priya Shah",
    email: "priya.shah@slotsync.com",
    status: "Approved",
    revenue: "₹6,12,000",
    bookings: 248,
    bays: 6,
    technicians: 9,
    rating: 4.6,
  },
  {
    id: 3,
    name: "SlotSync Powai Lakeside",
    type: "Ceramic Coating",

    status: "Approved",
    revenue: "₹5,38,000",
    bookings: 201,
    bays: 6,
    technicians: 8,
    rating: 4.7,
  },
  {
    id: 4,
    name: "SlotSync Thane Hiranandani",
    type: "PPF Center",
    manager: "Neha Iyer",
    email: "Neha@gmail.com",
    status: "Pending Approval",
    revenue: "₹4,21,000",
    bookings: 176,
    bays: 5,
    technicians: 7,
    rating: 4.5,
  },
];

export default function BranchesSection({ onAddManager, onEditManager }) {
  // Use state instead of constant array
  const [branches, setBranches] = useState(initialBranches);
  const [openMenu, setOpenMenu] = useState(null);

  // Change Branch Status
  const updateStatus = (id, status) => {
    setBranches((prev) =>
      prev.map((branch) =>
        branch.id === id ? { ...branch, status } : branch
      )
    );

    setOpenMenu(null);
  };

  // Delete Branch
  const deleteBranch = (id) => {
    setBranches((prev) =>
      prev.filter((branch) => branch.id !== id)
    );

    setOpenMenu(null);
  };
  // Reusable Card Menu Items
  const getMenuItems = (branch) => {
    switch (branch.status) {
      case "Approved":
        return [
          { label: "Edit", icon: <Pencil size={17} />, onClick: () => setOpenMenu(null) },
          { label: "Suspend", icon: <PauseCircle size={17} />, divider: true, onClick: () => updateStatus(branch.id, "Suspended") },
          { label: "Delete", icon: <Trash2 size={17} />, variant: "delete", onClick: () => deleteBranch(branch.id) },
        ];

      case "Suspended":
        return [
          { label: "Edit", icon: <Pencil size={17} />, onClick: () => setOpenMenu(null) },
          { label: "Activate", icon: <CheckCircle2 size={17} />, divider: true, onClick: () => updateStatus(branch.id, "Approved") },
          { label: "Delete", icon: <Trash2 size={17} />, variant: "delete", onClick: () => deleteBranch(branch.id) },
        ];

      default:
        return [
          { label: "Edit", icon: <Pencil size={17} />, onClick: () => setOpenMenu(null) },
          { label: "Approve", icon: <CheckCircle2 size={17} className="text-green-600" />, onClick: () => updateStatus(branch.id, "Approved") },
          { label: "Reject", icon: <XCircle size={17} className="text-red-500" />, divider: true, onClick: () => setOpenMenu(null) },
          { label: "Delete", icon: <Trash2 size={17} />, variant: "delete", onClick: () => deleteBranch(branch.id) },
        ];
    }
  };

  return (
    <div className="w-full">

      <div className="grid grid-cols-1 gap-4 xl:grid-cols-3">
        {branches.map((branch) => (
          <div
            key={branch.id}
            className="relative flex min-h-full flex-col rounded-[30px] border border-white/70 bg-[linear-gradient(135deg,#ffffff_0%,#f8f9ff_58%,#eef2ff_100%)] px-8 py-7 shadow-[0_12px_40px_rgba(31,41,55,0.08)]"
          >
            {/* Top */}
            <div className="mb-4 flex items-start justify-between">
              <div className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[#E9E6FF]">
                <Building2
                  size={20}
                  className="text-[#5A54EA]"
                  strokeWidth={2.1}
                />
              </div>

              <div className="relative flex items-center gap-3">

                <span
                  className={`inline-flex h-[25px] items-center rounded-full px-6 text-[10px] font-semibold shadow-[0_4px_12px_rgba(0,0,0,0.08)]
        ${branch.status === "Approved"
                      ? "bg-green-100 text-green-600"
                      : branch.status === "Suspended"
                        ? "bg-red-100 text-red-600"
                        : "bg-orange-100 text-orange-600"
                    }`}
                >
                  {branch.status}
                </span>

                <button
                  onClick={() =>
                    setOpenMenu(
                      openMenu === branch.id ? null : branch.id
                    )
                  }
                  className="flex h-5 w-5 items-center justify-center"
                >
                  <EllipsisVertical size={18} />
                </button>

                {openMenu === branch.id && (
                  <CardMenu
                    width="w-[145px]"
                    className="absolute right-0 top-7 z-50"
                    items={getMenuItems(branch)}
                  />
                )}
              </div>
            </div>

            {/* Branch Details */}

            <div className="min-h-[80px]">
              <h3 className="max-w-[95%] break-words text-md font-bold leading-[1.15] tracking-[-0.02em] text-[#0F172A]">
                {branch.name}
              </h3>

              <p className="mt-1 text-[13px] font-medium text-[#667085]">
                {branch.type}
              </p>

              <p className="mt-1 text-[13px] font-medium text-[#667085]">
                Manager · {branch.manager || "--"}
              </p>
            </div>

            {/* Manager Card */}
            <BranchManagerCard
              branch={branch}
              onAddManager={onAddManager}
              onEditManager={onEditManager}
            />
            {/* Stats */}

            <div className="grid grid-cols-2 gap-x-10 gap-y-3">

              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.08em] text-gray-500">
                  Revenue
                </p>

                <p className="mt-2 text-[14px] font-bold text-gray-700">
                  {branch.revenue}
                </p>
              </div>

              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.08em] text-gray-500">
                  Bookings
                </p>

                <p className="mt-2 text-[14px] font-bold text-gray-700">
                  {branch.bookings}
                </p>
              </div>

              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.08em] text-gray-500">
                  Bays
                </p>

                <p className="mt-2 text-[14px] font-bold text-gray-700">
                  {branch.bays}
                </p>
              </div>

              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.08em] text-gray-500">
                  Technicians
                </p>

                <p className="mt-2 text-[14px] font-bold text-gray-700">
                  {branch.technicians}
                </p>
              </div>

            </div>
            {/* Footer */}
            <div className="pt-4">
              <div className="mb-3 h-px w-full bg-slate-100" />

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Star size={15} className="text-[#F59E0B]" />

                  <span className="text-[15px] font-bold text-gray-800">
                    {branch.rating}
                  </span>
                </div>

                <button className="text-[13px] font-semibold text-indigo-600 transition hover:opacity-80">
                  View dashboard →
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}