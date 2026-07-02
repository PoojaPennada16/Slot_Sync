"use client";

import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function ServiceHeader({
  title,
  subtitle,
  price,
}) {
  const router = useRouter();

  return (
    <div className="p-1">
      {/* Back */}
      <button
        onClick={() => router.back()}
        className="mb-6 flex items-center gap-2 text-[#667085] transition hover:text-[#3F63DD]"
      >
        <ChevronLeft size={20} />
        <span className="text-sm font-medium">Back to Services</span>
      </button>

      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-[24px] font-semibold leading-none tracking-[-0.03em] text-[#101828]">
            {title}
          </h1>

          <p className="mt-2 text-sm text-[#667085]">
            {subtitle}
          </p>
        </div>

        <div className="rounded-xl bg-indigo-200 px-2 py-1 text-indigo-500 shadow-lg">
          <h2 className="mt-1 text-xs font-bold">
            {price}
          </h2>
        </div>
      </div>
    </div>
  );
}