"use client";

import { X } from "lucide-react";

export default function FormModal({
  open,
  onClose,
  title,
  children,
  footer,
  maxWidth = "max-w-[670px]",
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/83 p-1">
      <div
        className={`relative w-full ${maxWidth} overflow-hidden rounded-xl bg-[#F4F6FB] shadow-[0_20px_80px_rgba(15,23,42,0.22)]`}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute right-6 top-3 z-10 flex h-6 w-6 items-center justify-center rounded-full text-slate-600 transition hover:bg-white/70"
        >
          <X size={18} strokeWidth={2.2} />
        </button>

        {/* Body */}
        <div className="max-h-[90vh] overflow-y-auto px-10 pb-8 pt-6 md:px-6">
          <h2 className="text-[16px] font-bold tracking-[-0.03em] text-[#0F172A]">
            {title}
          </h2>

          {children}

          {footer && (
            <div className="mt-6 flex flex-wrap items-center justify-end gap-4 pb-2">
              {footer}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}