"use client";

import Card from "@/components/carwash/common/Card";

export default function CustomerDetails() {
  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-4 gap-6">
        <Card>
          <p className="text-[14px] font-medium uppercase tracking-wide text-[#667085]">
            Total Visits
          </p>
          <h2 className="mt-3 text-5xl font-bold text-[#111827]">39</h2>
          <p className="mt-3 text-[15px] font-medium text-[#10B981]">
            ▲ 4.2% vs last period
          </p>
        </Card>

        <Card>
          <p className="text-[14px] font-medium uppercase tracking-wide text-[#667085]">
            Lifetime Spend
          </p>
          <h2 className="mt-3 text-5xl font-bold text-[#111827]">
            ₹13,165
          </h2>
          <p className="mt-3 text-[15px] font-medium text-[#10B981]">
            ▲ 8.1% vs last period
          </p>
        </Card>

        <Card>
          <p className="text-[14px] font-medium uppercase tracking-wide text-[#667085]">
            Last Visit
          </p>
          <h2 className="mt-3 text-[34px] leading-tight font-bold text-[#111827]">
            2026-04-04
          </h2>
        </Card>

        <Card>
          <p className="text-[14px] font-medium uppercase tracking-wide text-[#667085]">
            Avg / Visit
          </p>
          <h2 className="mt-3 text-5xl font-bold text-[#111827]">
            ₹338
          </h2>
        </Card>
      </div>

      {/* Favorites + History */}
      <div className="grid grid-cols-2 gap-6">
        <Card padding="p-8">
          <h3 className="text-[18px] font-semibold text-[#111827]">
            Favorites
          </h3>

          <div className="mt-8 space-y-6">
            <div className="flex justify-between">
              <span className="text-[16px] text-[#667085]">Barber</span>
              <span className="text-[16px] font-medium text-[#111827]">
                Vihaan Patel
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-[16px] text-[#667085]">Service</span>
              <span className="text-[16px] font-medium text-[#111827]">
                Scalp Therapy
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-[16px] text-[#667085]">Birthday</span>
              <span className="text-[16px] font-medium text-[#111827]">
                1982-11-19
              </span>
            </div>
          </div>
        </Card>

        <Card padding="p-8">
          <h3 className="text-[18px] font-semibold text-[#111827]">
            Recent History
          </h3>

          <div className="mt-10 flex items-start justify-between">
            <div>
              <h4 className="text-[18px] font-semibold text-[#111827]">
                Hair Styling
              </h4>

              <p className="mt-1 text-[15px] text-[#667085]">
                2026-06-02 12:45
              </p>
            </div>

            <span className="rounded-full bg-[#FFF4DD] px-4 py-1.5 text-[15px] font-medium capitalize text-[#F59E0B]">
              Cancelled
            </span>
          </div>
        </Card>
      </div>

      {/* Reviews */}
      <Card className="min-h-[120px]" padding="p-8">
        <h3 className="text-[18px] font-semibold text-[#111827]">
          Reviews
        </h3>
      </Card>
    </div>
  );
}