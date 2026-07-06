"use client";

import { Plus } from "lucide-react";
import AllCoupons from "@/components/carwash/owner/marketing/AllCoupons";

export default function MarketingPage() {
  return (
    <div className="space-y-5">
      {/* Keep heading only here */}
      <div className="flex items-start justify-between">
        <div className="ml-1">
          <h1 className="text-3xl leading-none font-bold bg-gradient-to-r from-[#5563f0] to-[#2aa8df] bg-clip-text text-transparent">
            Marketing <span className="text-[#5563F0]">·</span> Coupons
          </h1>

          <p className="mt-2 text-base text-[#667085]">
            Run promotions, control eligibility, measure ROI.
          </p>
        </div>

           <button
            className="flex items-center gap-1 rounded-xl bg-gradient-to-r from-[#4B5EE4] to-[#2EA7E0] px-4 py-2 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(76,94,228,0.28)]"
          >
            <Plus size={17} />
            Create coupon
          </button>
      </div>

      {/* Coupons */}
      <AllCoupons />
    </div>
  );
}