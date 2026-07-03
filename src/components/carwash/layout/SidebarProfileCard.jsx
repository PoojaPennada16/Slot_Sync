"use client";

import { LogOut, ShieldCheck } from "lucide-react";
import { useRouter } from "next/navigation";

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
  const router = useRouter();

  const profile = PROFILE_DATA[role] || PROFILE_DATA.OWNER;

  const handleLogout = () => {
    // If you have auth tokens, clear them here
    // localStorage.removeItem("token");
    // sessionStorage.clear();

    router.push("/home");
  };

  return (
    <div className="bg-[#f8f9fd] rounded-[20px] h-full px-2 py-3 shadow-[0_4px_20px_rgba(90,90,150,0.06)] mt-1">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#5563f0] to-[#2aa8df] flex items-center justify-center text-white font-bold text-sm">
            {profile.initials}
          </div>

          <div>
            <h3 className="text-[12px] font-semibold text-[#111827] leading-tight">
              {profile.name}
            </h3>

            <div className="flex items-center gap-2 text-[#6b7280] text-sm mt-1">
              <ShieldCheck className="w-4 h-4" />
              <span className="text-[12px]">{profileRole}</span>
            </div>
          </div>
        </div>

        <button
          onClick={handleLogout}
          className="w-8 h-8 rounded-xl flex items-center justify-center hover:bg-red-200 transition"
        >
          <LogOut className="w-4 h-4 text-red-600 hover:text-red-700" />
        </button>
      </div>
    </div>
  );
}