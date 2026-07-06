"use client";

import {
  BadgeCheck,
  Image as ImageIcon,
} from "lucide-react";

import SalonProfileDetails from "./SalonProfileDetails";

export default function SalonProfile() {
  return (
    <div className="w-full">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-[30px] font-bold text-slate-900">
            Salon Profile
          </h1>

          <p className="mt-1 text-[12px] text-slate-500">
            Public details customers see across SlotSync.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button className="h-9 px-5 rounded-full border border-slate-200 bg-white text-slate-800 text-sm font-medium">
            Save Draft
          </button>

          <button className="h-9 px-5 rounded-full bg-gradient-to-r from-[#5B5FF6] to-[#11B5E4] text-white text-sm font-medium">
            Publish Changes
          </button>
        </div>
      </div>

      {/* Profile Card */}
      <div className="mt-5 rounded-[20px] overflow-hidden border border-slate-100 bg-white shadow-sm max-w-[900px]">
        {/* Banner */}
        <div className="relative h-[130px] bg-gradient-to-r from-[#D9D6FF] via-[#F5F2EA] to-[#D4F5F8]">
          <button className="absolute bottom-3 right-3 h-8 px-4 bg-white rounded-full flex items-center gap-2 text-slate-800 shadow-sm text-xs">
            <ImageIcon size={14} />
            Change Banner
          </button>
        </div>

        {/* Profile Section */}
        <div className="px-5 py-5 flex items-center gap-4">
          {/* Logo */}
          <div className="w-[50px] h-[50px] rounded-[18px] bg-gradient-to-br from-[#5B5FF6] to-[#11B5E4] flex items-center justify-center text-white text-[20px] font-bold">
            S
          </div>

          {/* Details */}
          <div>
            <div className="flex items-center gap-3">
              <h2 className="text-[20px] font-bold text-slate-900">
                SlotSync Studio
              </h2>

              <div className="flex items-center gap-1 bg-emerald-100 text-emerald-600 px-3 py-1 rounded-full">
                <BadgeCheck size={12} />
                <span className="font-medium text-xs">
                  Verified
                </span>
              </div>
            </div>

            <p className="mt-2 text-[12px] text-slate-500">
              Premium grooming network • 6 branches across India
            </p>
          </div>
        </div>
      </div>

      {/* Salon Profile Details */}
      <SalonProfileDetails />
    </div>
  );
}