"use client";

import { useState } from "react";
import { Building2, EllipsisVertical, Plus, Star, Pencil, PauseCircle, Trash2, CheckCircle2, XCircle } from "lucide-react";
import AddBranch from "./AddBranch";
import CardMenu from "@/components/carwash/common/CardMenu";

const branches = [
  {
    id: 1,
    name: "SlotSync HQ — Bandra",
    type: "Car Wash Center",
    manager: "Rohit Mehta",
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
    manager: "Kabir Anand",
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
    status: "Pending Approval",
    revenue: "₹4,21,000",
    bookings: 176,
    bays: 5,
    technicians: 7,
    rating: 4.5,
  },
];

export default function BranchesSection() {
  const [openAddBranch, setOpenAddBranch] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);

  return (
    <div className="w-full">
      {/* Top action button */}
      <div className="mb-4 flex justify-end">
        <button
          onClick={() => setOpenAddBranch(true)}
          className="inline-flex h-[40px] items-center gap-2 rounded-xl bg-gradient-to-r from-[#5B52EA] to-[#2F9BDB] px-3 text-[14px] font-semibold text-white shadow-[0_10px_30px_rgba(91,82,234,0.22)]"
        >
          <Plus size={16} strokeWidth={2.5} />
          Add branch
        </button>
      </div>

      {/* Popup */}
      <AddBranch
        open={openAddBranch}
        onClose={() => setOpenAddBranch(false)}
      />

      {/* Cards */}
      <div className="grid grid-cols-1 gap-4 xl:grid-cols-3">
        {branches.map((branch) => {
          const isApproved = branch.status === "Approved";

          return (
            <div
              key={branch.id}
              className="relative flex min-h-full flex-col rounded-[30px] border border-white/70 bg-[linear-gradient(135deg,#ffffff_0%,#f8f9ff_58%,#eef2ff_100%)] px-8 py-7 shadow-[0_12px_40px_rgba(31,41,55,0.08)]"
            >
              {/* Top section */}
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
                      ${
                        isApproved
                          ? "bg-green-200 text-green-500"
                          : "bg-orange-300 text-gray-800"
                      }`}
                  >
                    {branch.status}
                  </span>

                  <button
                    onClick={() => setOpenMenu(openMenu === branch.id ? null : branch.id)}
                    className="flex h-4 w-4 items-center justify-center text-gray-800"
                  >
                    <EllipsisVertical size={18} />
                  </button>

                  {openMenu === branch.id && (
                    <CardMenu
                      className="absolute right-0 top-7 z-50"
                      items={
                        isApproved
                          ? [
                              { label: "Edit", icon: <Pencil size={18} />, onClick: () => setOpenMenu(null) },
                              { label: "Suspend", icon: <PauseCircle size={18} />, divider: true, onClick: () => setOpenMenu(null) },
                              { label: "Delete", icon: <Trash2 size={18} />, variant: "delete", onClick: () => setOpenMenu(null) },
                            ]
                          : [
                              { label: "Edit", icon: <Pencil size={18} />, onClick: () => setOpenMenu(null) },
                              { label: "Approve", icon: <CheckCircle2 size={18} className="text-[#22C55E]" />, onClick: () => setOpenMenu(null) },
                              { label: "Reject", icon: <XCircle size={18} className="text-[#EF4444]" />, divider: true, onClick: () => setOpenMenu(null) },
                              { label: "Delete", icon: <Trash2 size={18} />, variant: "delete", onClick: () => setOpenMenu(null) },
                            ]
                      }
                    />
                  )}
                </div>
              </div>

              {/* Branch details */}
              <div className="min-h-[125px]">
                <h3 className="max-w-[95%] break-words text-md font-bold leading-[1.15] tracking-[-0.02em] text-[#0F172A]">
                  {branch.name}
                </h3>

                <p className="mt-1 text-[13px] font-medium leading-4 text-[#667085]">
                  {branch.type}
                </p>

                <p className="mt-1 text-[13px] font-medium leading-4 text-[#667085]">
                  Manager · {branch.manager}
                </p>
              </div>

              {/* Stats */}
              <div className="-mt-10 grid grid-cols-2 gap-x-10 gap-y-3">
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
          );
        })}
      </div>
    </div>
  );
}