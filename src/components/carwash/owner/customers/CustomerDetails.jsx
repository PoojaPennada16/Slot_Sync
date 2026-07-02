"use client";

import Card from "@/components/carwash/common/Card";

export default function CustomerDetails() {
  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-4 gap-6">
        <Card padding="p-5">
          <p className="text-[10px] font-medium uppercase tracking-wide text-[#667085]">
            Total Visits
          </p>
          <h2 className="mt-2 text-2xl font-bold text-[#111827]">39</h2>
        </Card>

        <Card padding="p-5">
          <p className="text-[11px] font-medium uppercase tracking-wide text-[#667085]">
            Lifetime Spend
          </p>
          <h2 className="mt-2 text-2xl font-bold text-[#111827]">
            ₹13,165
          </h2>
        </Card>

        <Card padding="p-5">
          <p className="text-[11px] font-medium uppercase tracking-wide text-[#667085]">
            Last Visit
          </p>
          <h2 className="mt-2 text-2xl font-bold text-[#111827]">
            2026-04-04
          </h2>
        </Card>

        <Card padding="p-5">
          <p className="text-[11px] font-medium uppercase tracking-wide text-[#667085]">
            Avg / Visit
          </p>
          <h2 className="mt-2 text-2xl font-bold text-[#111827]">
            ₹338
          </h2>
        </Card>
      </div>

      {/* Favorites + History */}
      <div className="grid grid-cols-1 gap-6">
        
        <Card padding="p-6">
          <h3 className="text-[14px] font-semibold text-[#111827]">
            Recent History
          </h3>

          <div className="mt-4 flex items-start justify-between">
            <div>
              <h4 className="text-[14px] font-semibold text-gray-700">
                Hair Styling
              </h4>

              <p className="mt-1 text-[12px] text-[#667085]">
                2026-06-02 12:45
              </p>
            </div>

            <span className="rounded-full bg-[#FFF4DD] px-3 py-1.5 text-[11px] font-medium capitalize text-[#F59E0B]">
              Cancelled
            </span>
          </div>
        </Card>
      </div>

      {/* Reviews */}
      <Card className="min-h-[80px]" padding="p-6">
        <h3 className="text-[14px] font-semibold text-[#111827]">
          Reviews
        </h3>
        <p className="font-semibold text-[12px] text-gray-600 mt-2">
            nice service.
        </p>
      </Card>
    </div>
  );
}