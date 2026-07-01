"use client";

import { LogOut, ShieldCheck } from "lucide-react";

const PROFILE_DATA = {
  OWNER: {
    initials: "AB",
    name: "Aditya Bhatia",
  },
  MANAGER: {
    initials: "RM",
    name: "Rohit Mehta",
  },
  TECHNICIAN: {
    initials: "AK",
    name: "Arjun Kapoor",
  },
};

export default function SidebarProfileCard({ role, profileRole }) {
  const profile = PROFILE_DATA[role] || PROFILE_DATA.OWNER;

  return (
    <div className="bg-[#f8f9fd] rounded-[30px] h-25 p-5 shadow-[0_4px_20px_rgba(90,90,150,0.06)] mt-4">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-4">
          <div className="w-9 h-9 rounded-full bg-gradient-to-r from-[#5563f0] to-[#2aa8df] flex items-center justify-center text-white font-bold text-sm">
            {profile.initials}
          </div>

          <div>
            <h3 className="text-[14px] font-semibold text-[#111827] leading-tight">
              {profile.name}
            </h3>
            <div className="flex items-center gap-2 text-[#6b7280] text-sm mt-1">
              <ShieldCheck className="w-4 h-4" />
              <span>{profileRole}</span>
            </div>
          </div>
        </div>

        <button className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#eef2ff] transition">
          <LogOut className="w-5 h-5 text-[#111827]" />
        </button>
      </div>
    </div>
  );
}