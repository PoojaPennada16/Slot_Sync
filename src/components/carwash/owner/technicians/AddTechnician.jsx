"use client";

import { X, ChevronDown } from "lucide-react";

export default function AddTechnician({ open, onClose }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/83 p-1">
      <div className="relative mt-15 w-full max-w-[500px] overflow-hidden rounded-xl bg-[#F4F6FB] shadow-[0_20px_80px_rgba(15,23,42,0.22)]">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute right-6 top-3 z-10 flex h-6 w-6 items-center justify-center rounded-full text-slate-600 transition hover:bg-white/70"
        >
          <X size={18} strokeWidth={2.2} />
        </button>

        <div className="max-h-[90vh] overflow-y-auto px-10 pb-8 pt-6 md:px-6">
          <h2 className="text-[16px] font-bold tracking-[-0.03em] text-[#0F172A]">
            Add Technician
          </h2>

          <div className="mt-3 grid grid-cols-1 gap-x-6 gap-y-3">

            {/* Full Name */}
            <div>
              <label className="ml-2 mb-1 block text-[12px] font-semibold text-[#0F172A]">
                Full name
              </label>

              <input
                type="text"
                placeholder="e.g. Arjun Kapoor"
                className="h-[36px] w-full rounded-xl border border-[#D7DDEA] bg-white px-5 text-[13px] text-[#0F172A] shadow-[0_3px_10px_rgba(15,23,42,0.06)] outline-none transition focus:border-[#5B52EA]"
              />
            </div>

            {/* Skills */}
            <div>
              <label className="ml-2 mb-1 block text-[12px] font-semibold text-[#0F172A]">
                Skills (comma separated)
              </label>

              <input
                type="text"
                placeholder="Ceramic, PPF, Detailing"
                className="h-[36px] w-full rounded-xl border border-[#D7DDEA] bg-white px-5 text-[13px] text-[#0F172A] shadow-[0_3px_10px_rgba(15,23,42,0.06)] outline-none transition focus:border-[#5B52EA]"
              />
            </div>

            {/* Experience & Branch */}
            <div className="grid grid-cols-2 gap-6">

              <div>
                <label className="ml-2 mb-1 block text-[12px] font-semibold text-[#0F172A]">
                  Experience (years)
                </label>

                <input
                  type="number"
                  defaultValue="1"
                  className="h-[36px] w-full rounded-xl border border-[#D7DDEA] bg-white px-5 text-[13px] text-[#667085] shadow-[0_3px_10px_rgba(15,23,42,0.06)] outline-none transition focus:border-[#5B52EA]"
                />
              </div>

              <div>
                <label className="ml-2 mb-1 block text-[12px] font-semibold text-[#0F172A]">
                  Branch
                </label>

                <div className="relative">
                  <select className="h-[36px] w-full appearance-none rounded-xl border border-[#D7DDEA] bg-white px-5 pr-12 text-[13px] text-[#0F172A] shadow-[0_3px_10px_rgba(15,23,42,0.06)] outline-none transition focus:border-[#5B52EA]">
                    <option>SlotSync HQ — Bandra</option>
                    <option>SlotSync Andheri</option>
                    <option>SlotSync Powai</option>
                    <option>SlotSync owai</option>
                    <option>SlotSync Powa</option>
                  </select>

                  <ChevronDown
                    size={20}
                    className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-[#7B8598]"
                  />
                </div>
              </div>

            </div>
          </div>

          {/* Footer */}
          <div className="mt-6 flex items-center justify-end gap-4 pb-2">

            <button
              onClick={onClose}
              className="inline-flex h-[35px] items-center justify-center rounded-xl border border-[#D8DEEA] bg-white px-5 text-[15px] font-semibold text-[#0F172A] shadow-[0_4px_12px_rgba(15,23,42,0.05)] transition hover:bg-[#F8FAFC]"
            >
              Cancel
            </button>

            <button className="inline-flex h-[35px] items-center justify-center rounded-xl bg-gradient-to-r from-[#5B52EA] to-[#2F9BDB] px-5 text-[15px] font-semibold text-white shadow-[0_10px_30px_rgba(91,82,234,0.24)] transition hover:opacity-95">
              Add Technician
            </button>

          </div>
        </div>
      </div>
    </div>
  );
}