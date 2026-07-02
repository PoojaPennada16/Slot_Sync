"use client";
import { useState } from "react";
import { X, ChevronDown } from "lucide-react";

export default function AddBranch({ open, onClose }) {
  const [branchImage, setBranchImage] = useState(null);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/83 p-1">
      <div className="relative w-full max-w-[670px] overflow-hidden rounded-xl bg-[#F4F6FB] shadow-[0_20px_80px_rgba(15,23,42,0.22)]">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-6 top-3 z-10 flex h-6 w-6 items-center justify-center rounded-full text-slate-600 transition hover:bg-white/70"
        >
          <X size={18} strokeWidth={2.2} />
        </button>

        {/* Scrollable content */}
        <div className="max-h-[90vh] overflow-y-auto px-10 pb-8 pt-6 md:px-6">
          <h2 className="text-[16px] font-bold tracking-[-0.03em] text-[#0F172A]">
            Add new branch
          </h2>

          <div className="mt-3 grid grid-cols-1 gap-x-6 gap-y-3 md:grid-cols-2">
            {/* Branch name */}
            <div>
              <label className="ml-2 mb-1 block text-[12px] font-semibold text-[#0F172A]">
                Branch name
              </label>
              <input
                type="text"
                className="h-[36px] w-full rounded-xl border border-[#D7DDEA] bg-white px-5 text-[13px] text-[#0F172A] shadow-[0_3px_10px_rgba(15,23,42,0.06)] outline-none transition focus:border-[#5B52EA]"
              />
            </div>

            {/* Branch type */}
            <div>
              <label className="ml-2 mb-1 block text-[12px] font-semibold text-[#0F172A]">
                Branch type
              </label>
              <div className="relative">
                <select className="h-[36px] w-full appearance-none rounded-xl border border-[#D7DDEA] bg-white px-5 pr-12 text-[13px] text-[#0F172A] shadow-[0_3px_10px_rgba(15,23,42,0.06)] outline-none transition focus:border-[#5B52EA]">
                  <option>Car Wash Center</option>
                  <option>Detailing Studio</option>
                  <option>PPF Center</option>
                  <option>Ceramic Coating</option>
                </select>
                <ChevronDown
                  size={20}
                  className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-[#7B8598]"
                />
              </div>
            </div>

            {/* Address */}
            <div className="md:col-span-2">
              <label className="ml-2 mb-1 block text-[12px] font-semibold text-[#0F172A]">
                Address
              </label>
              <textarea
                rows={2}
                className="min-h-[50px] w-full resize-none rounded-xl border border-[#D7DDEA] bg-white px-5 py-4 text-[13px] text-[#0F172A] shadow-[0_3px_10px_rgba(15,23,42,0.06)] outline-none transition focus:border-[#5B52EA]"
              />
            </div>

            {/* Contact number */}
            <div>
              <label className="ml-2 mb-1 block text-[12px] font-semibold text-[#0F172A]">
                Contact number
              </label>
              <input
                type="text"
                className="h-[36px] w-full rounded-xl border border-[#D7DDEA] bg-white px-5 text-[13px] text-[#0F172A] shadow-[0_3px_10px_rgba(15,23,42,0.06)] outline-none transition focus:border-[#5B52EA]"
              />
            </div>

            {/* Email */}
            <div>
              <label className="ml-2 mb-1 block text-[12px] font-semibold text-[#0F172A]">
                Email
              </label>
              <input
                type="email"
                className="h-[36px] w-full rounded-xl border border-[#D7DDEA] bg-white px-5 text-[13px] text-[#0F172A] shadow-[0_3px_10px_rgba(15,23,42,0.06)] outline-none transition focus:border-[#5B52EA]"
              />
            </div>

            {/* Manager name */}
            <div>
              <label className="ml-2 mb-1 block text-[12px] font-semibold text-[#0F172A]">
                Manager name
              </label>
              <input
                type="text"
                className="h-[36px] w-full rounded-xl border border-[#D7DDEA] bg-white px-5 text-[13px] text-[#0F172A] shadow-[0_3px_10px_rgba(15,23,42,0.06)] outline-none transition focus:border-[#5B52EA]"
              />
            </div>

            {/* Working hours */}
            <div>
              <label className="ml-2 mb-1 block text-[12px] font-semibold text-[#0F172A]">
                Working hours
              </label>
              <input
                type="text"
                defaultValue="09:00–21:00"
                className="h-[36px] w-full rounded-xl border border-[#D7DDEA] bg-white px-5 text-[13px] text-[#667085] shadow-[0_3px_10px_rgba(15,23,42,0.06)] outline-none transition focus:border-[#5B52EA]"
              />
            </div>

            {/* Number of bays */}
            <div>
              <label className="ml-2 mb-1 block text-[12px] font-semibold text-[#0F172A]">
                Number of bays
              </label>
              <input
                type="number"
                defaultValue="4"
                className="h-[36px] w-full rounded-xl border border-[#D7DDEA] bg-white px-5 text-[13px] text-[#0F172A] shadow-[0_3px_10px_rgba(15,23,42,0.06)] outline-none transition focus:border-[#5B52EA]"
              />
            </div>

            {/* Capacity per day */}
            <div>
              <label className="ml-2 mb-1 block text-[12px] font-semibold text-[#0F172A]">
                Capacity per day
              </label>
              <input
                type="number"
                defaultValue="30"
                className="h-[36px] w-full rounded-xl border border-[#D7DDEA] bg-white px-5 text-[13px] text-[#0F172A] shadow-[0_3px_10px_rgba(15,23,42,0.06)] outline-none transition focus:border-[#5B52EA]"
              />
            </div>

            {/* GST number */}
            <div>
              <label className="ml-2 mb-1 block text-[12px] font-semibold text-[#0F172A]">
                GST number
              </label>
              <input
                type="text"
                className="h-[36px] w-full rounded-xl border border-[#D7DDEA] bg-white px-5 text-[13px] text-[#0F172A] shadow-[0_3px_10px_rgba(15,23,42,0.06)] outline-none transition focus:border-[#5B52EA]"
              />
            </div>

            {/* Business license */}
            <div>
              <label className="ml-2 mb-1 block text-[12px] font-semibold text-[#0F172A]">
                Business license
              </label>
              <input
                type="text"
                className="h-[36px] w-full rounded-xl border border-[#D7DDEA] bg-white px-5 text-[13px] text-[#0F172A] shadow-[0_3px_10px_rgba(15,23,42,0.06)] outline-none transition focus:border-[#5B52EA]"
              />
            </div>

            {/* Branch image */}
            <div className="md:col-span-2">
              <label className="ml-2 mb-1 block text-[12px] font-semibold text-[#0F172A]">
                Branch image
              </label>

              <div className="flex h-[36px] w-[286px] items-center overflow-hidden rounded-xl border border-[#D7DDEA] bg-white shadow-[0_3px_10px_rgba(15,23,42,0.06)]">
                <label className="flex h-full cursor-pointer items-center border-r border-[#D7DDEA] bg-white px-4 text-[13px] font-medium text-[#667085]">
                  Choose File
                  <input
                    type="file"
                    className="hidden"
                    onChange={(e) =>
                      setBranchImage(e.target.files?.[0] || null)
                    }
                  />
                </label>

                <span className="truncate px-4 text-[13px] bg-[#F8FAFC] text-gray-600]">
                  {branchImage ? branchImage.name : "No file chosen"}
                </span>
              </div>
            </div>
          </div>

          {/* Footer buttons */}
          <div className="mt-6 flex flex-wrap items-center justify-end gap-4 pb-2">
            <button className="inline-flex h-[38px] items-center justify-center rounded-xl border border-[#D8DEEA] bg-white px-5 text-[15px] font-semibold text-[#0F172A] shadow-[0_4px_12px_rgba(15,23,42,0.05)] transition hover:bg-[#F8FAFC]">
              Save as draft
            </button>

            <button className="inline-flex h-[38px] items-center justify-center rounded-xl bg-gradient-to-r from-[#5B52EA] to-[#2F9BDB] px-5 text-[15px] font-semibold text-white shadow-[0_10px_30px_rgba(91,82,234,0.24)] transition hover:opacity-95">
              Submit for approval
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}