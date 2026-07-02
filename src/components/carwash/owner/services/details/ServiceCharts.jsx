"use client";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

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

function TrendChart({
  title,
  data,
  stroke,
  gradientId,
  yDomain,
  ticks,
}) {
  return (
    <div className="rounded-[30px] border border-white/60 bg-white/75 p-6 shadow-sm backdrop-blur-md">
      <h2 className="mb-4 text-[15px] font-semibold text-[#182230]">
        {title}
      </h2>

      <div className="h-[250px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={stroke} stopOpacity={0.35} />
                <stop offset="100%" stopColor={stroke} stopOpacity={0.08} />
              </linearGradient>
            </defs>

            <CartesianGrid
              stroke="#E5E7EB"
              strokeDasharray="4 4"
            />

            <XAxis
              dataKey="date"
              tick={{ fill: "#667085", fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />

            <YAxis
              domain={yDomain}
              ticks={ticks}
              tick={{ fill: "#667085", fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />

            <Area
              type="monotone"
              dataKey="value"
              stroke={stroke}
              strokeWidth={2}
              fill={`url(#${gradientId})`}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default function ServiceCharts() {
  return (
    <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
      <TrendChart
        title="Revenue Trend"
        data={revenueData}
        stroke="#4F56E5"
        gradientId="revenueGradient"
        yDomain={[0, 6000]}
        ticks={[0, 1500, 3000, 4500, 6000]}
      />

      <TrendChart
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