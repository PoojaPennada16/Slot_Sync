"use client";

import Chart from "@/components/carwash/common/Charts";

const revenueData = [
  { date: "2026-06-16", value: 3600 },
  { date: "2026-06-17", value: 3850 },
  { date: "2026-06-18", value: 3900 },
  { date: "2026-06-19", value: 3750 },
  { date: "2026-06-20", value: 3650 },
  { date: "2026-06-21", value: 4100 },
  { date: "2026-06-22", value: 3950 },
  { date: "2026-06-23", value: 3720 },
  { date: "2026-06-24", value: 4020 },
  { date: "2026-06-25", value: 4200 },
  { date: "2026-06-26", value: 4650 },
  { date: "2026-06-27", value: 5200 },
  { date: "2026-06-28", value: 4700 },
  { date: "2026-06-29", value: 4500 },
];

const bookingData = [
  { date: "2026-06-16", value: 11 },
  { date: "2026-06-17", value: 12 },
  { date: "2026-06-18", value: 13 },
  { date: "2026-06-19", value: 15 },
  { date: "2026-06-20", value: 14 },
  { date: "2026-06-21", value: 14 },
  { date: "2026-06-22", value: 16 },
  { date: "2026-06-23", value: 16 },
  { date: "2026-06-24", value: 18 },
  { date: "2026-06-25", value: 17 },
  { date: "2026-06-26", value: 17 },
  { date: "2026-06-27", value: 17 },
  { date: "2026-06-28", value: 15 },
  { date: "2026-06-29", value: 16 },
];

export default function ServiceCharts() {
  return (
    <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
      <Chart
        title="Revenue Trend"
        data={revenueData}
        stroke="#4F56E5"
        gradientId="revenueGradient"
        yDomain={[0, 6000]}
        ticks={[0, 1500, 3000, 4500, 6000]}
      />

      <Chart
        title="Booking Trend"
        data={bookingData}
        stroke="#06B6C9"
        gradientId="bookingGradient"
        yDomain={[0, 20]}
        ticks={[0, 5, 10, 15, 20]}
      />
    </div>
  );
}