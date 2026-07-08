"use client";

import { X, UserRoundCog } from "lucide-react";
import Card from "@/components/carwash/common/Card";

export default function AddManager({
  open,
  onClose,
  branch,
  isEdit = false,
}) {
  if (!open) return null;

  const managerName = branch?.manager || "";
  const firstName = managerName.split(" ")[0] || "";
  const lastName = managerName.split(" ").slice(1).join(" ");

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/83 p-1">
      <Card className="relative h-[370px] w-full max-w-[480px] overflow-hidden rounded-xl bg-[#F4F6FB] shadow-[0_20px_80px_rgba(15,23,42,0.22)]">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute right-6 top-3 z-10 flex h-6 w-6 items-center justify-center rounded-full text-slate-600 transition hover:bg-white/70"
        >
          <X size={16} strokeWidth={2.2} />
        </button>

        <div className="px-10 pb-8 pt-6 md:px-6">
          {/* Header */}
          <div className="flex items-start gap-3">
            <UserRoundCog
              size={22}
              className="mt-[2px] text-[#5B52EA]"
            />

            <div>
              <h2 className="text-[16px] font-bold tracking-[-0.03em] text-[#0F172A]">
                {isEdit
                  ? "Edit branch manager"
                  : "Assign branch manager"}
              </h2>

              <p className="mt-1 text-[13px] text-[#667085]">
                {branch?.name}
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="mt-3 grid grid-cols-1 gap-x-4 gap-y-4 md:grid-cols-2">

            {/* First Name */}
            <div>
              <label className="ml-2 mb-1 block text-[12px] font-semibold text-gray-900">
                First name
              </label>

              <input
                type="text"
                defaultValue={isEdit ? firstName : ""}
                placeholder="Rohit"
                className="h-[38px] w-full rounded-xl border border-gray-300 bg-white px-3 text-[13px] text-gray-800 shadow-sm outline-none focus:border-[#5B52EA]"
              />
            </div>

            {/* Last Name */}
            <div>
              <label className="ml-2 mb-1 block text-[12px] font-semibold text-gray-900">
                Last name
              </label>

              <input
                type="text"
                defaultValue={isEdit ? lastName : ""}
                placeholder="Mehta"
                className="h-[38px] w-full rounded-xl border border-gray-300 bg-white px-3 text-[13px] text-gray-800 shadow-sm outline-none focus:border-[#5B52EA]"
              />
            </div>

            {/* Email */}
            <div>
              <label className="ml-2 mb-1 block text-[12px] font-semibold text-gray-900">
                Email
              </label>

              <input
                type="email"
                defaultValue={isEdit ? branch?.email : ""}
                placeholder="manager@slotsync.in"
                className="h-[38px] w-full rounded-xl border border-gray-300 bg-white px-3 text-[13px] text-gray-800 shadow-sm outline-none focus:border-[#5B52EA]"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="ml-2 mb-1 block text-[12px] font-semibold text-gray-900">
                Phone
              </label>

              <input
                type="text"
                defaultValue={isEdit ? branch?.phone || "" : ""}
                placeholder="+91 98200 00000"
                className="h-[38px] w-full rounded-xl border border-gray-300 bg-white px-3 text-[13px] text-gray-800 shadow-sm outline-none focus:border-[#5B52EA]"
              />
            </div>

            {/* Password */}
            <div>
              <label className="ml-2 mb-1 block text-[12px] font-semibold text-gray-900">
                Password
              </label>

              <input
                type="password"
                placeholder={
                  isEdit
                    ? "Leave blank to keep"
                    : "Minimum 6 characters"
                }
                className="h-[38px] w-full rounded-xl border border-gray-300 bg-white px-3 text-[13px] text-gray-800 shadow-sm outline-none focus:border-[#5B52EA]"
              />
            </div>
                        {/* Footer */}
            <div className="md:col-span-2 mt-2 flex items-center justify-end gap-3">
              <button
                onClick={onClose}
                className="inline-flex h-[35px] items-center justify-center rounded-xl border border-[#D8DEEA] bg-white px-6 text-[15px] font-semibold text-[#0F172A] shadow-sm transition hover:bg-[#F8FAFC]"
              >
                Cancel
              </button>

              <button className="inline-flex h-[35px] items-center justify-center rounded-xl bg-gradient-to-r from-[#5B52EA] to-[#2F9BDB] px-7 text-[15px] font-semibold text-white shadow-sm transition hover:opacity-95">
                {isEdit ? "Update manager" : "Create manager"}
              </button>
            </div>

          </div>
        </div>
      </Card>
    </div>
  );
}