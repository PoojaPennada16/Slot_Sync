"use client";

import { useState } from "react";
import {
  EllipsisVertical,
  UserRoundCog,
  Pencil,
  Trash2,
} from "lucide-react";

import CardMenu from "@/components/carwash/common/CardMenu";

export default function BranchManagerCard({ branch, onAddManager, onEditManager, }) {
  const [openMenu, setOpenMenu] = useState(false);

  const managerMenu = [
    {
      label: "Edit manager",
      icon: <Pencil size={16} />,
      onClick: () => { setOpenMenu(false); onEditManager(branch); }, // Open Edit Manager Popup
    },
    {
      label: "Delete manager",
      icon: <Trash2 size={16} />,
      variant: "delete",
      onClick: () => { setOpenMenu(false); }, // Delete Manager
    },
  ];
  return (
    <div className="mb-4 rounded-[20px] border border-[#E6EAF2] bg-[#F8FAFF] p-4">
      {branch.manager ? (
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#D9F5FB]">
              <UserRoundCog size={14} className="text-[#06B6D4]" />
            </div>

            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.08em] text-[#667085]">
                BRANCH MANAGER
              </p>

              <p className="text-[12px] font-semibold text-[#111827]">
                {branch.manager}
              </p>

              <p className="text-[11px] text-[#667085]">
                {branch.email}
              </p>
            </div>
          </div>

          <div className="relative">
            <button
              onClick={() => setOpenMenu((prev) => !prev)}
              className="text-[#111827]"
            >
              <EllipsisVertical size={16} />
            </button>

            {openMenu && (
              <CardMenu
                width="w-[185px]"
                className="absolute right-0 top-8 z-50"
                items={managerMenu}
              />
            )}
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#D9F5FB]">
              <UserRoundCog size={14} className="text-[#06B6D4]" />
            </div>

            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.08em] text-[#667085]">
                BRANCH MANAGER
              </p>

              <p className="text-[12px] font-semibold text-[#111827]">
                Not assigned
              </p>
            </div>
          </div>

          <button
            onClick={() => onAddManager(branch)}
            className="flex h-[32px] w-[140px] items-center justify-center gap-2 rounded-[9px] border border-[#E6EAF2] bg-gray-50 px-4 text-[12px] font-medium text-[#111827] shadow-sm transition hover:bg-gray-100"
          >
            Add Manager
          </button>
        </div>
      )}
    </div>
  );
}