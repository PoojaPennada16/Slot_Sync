"use client";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

const data = [
  { date: "2026-06-08", revenue: 20500 },
  { date: "2026-06-09", revenue: 21500 },
  { date: "2026-06-10", revenue: 21200 },
  { date: "2026-06-11", revenue: 21800 },
  { date: "2026-06-12", revenue: 22200 },
  { date: "2026-06-13", revenue: 22400 },

  { date: "2026-06-15", revenue: 22000 },
  { date: "2026-06-16", revenue: 21400 },
  { date: "2026-06-17", revenue: 22000 },
  { date: "2026-06-18", revenue: 24000 },
  { date: "2026-06-19", revenue: 29000 },
  { date: "2026-06-20", revenue: 34000 },
  { date: "2026-06-21", revenue: 33500 },
  { date: "2026-06-22", revenue: 37000 },
  { date: "2026-06-23", revenue: 39000 },
  { date: "2026-06-24", revenue: 39200 },
  { date: "2026-06-25", revenue: 43500 },
  { date: "2026-06-26", revenue: 43800 },
  { date: "2026-06-27", revenue: 44800 },
  { date: "2026-06-28", revenue: 41000 },
  { date: "2026-06-29", revenue: 45000 },
  { date: "2026-06-30", revenue: 43000 },
  { date: "2026-07-01", revenue: 43200 },

  { date: "2026-07-03", revenue: 49500 },
  { date: "2026-07-04", revenue: 50000 },
  { date: "2026-07-05", revenue: 54000 },
  { date: "2026-07-06", revenue: 58500 },
  { date: "2026-07-07", revenue: 56500 },
];

export default function RevenueAnalytics() {
  return (
    <div className="rounded-[26px] bg-white p-6 shadow-sm h-[340px]">
      <h2 className="text-[16px] font-semibold text-[#111827]">
        Revenue Analytics
      </h2>

      <div className="mt-4 h-[270px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="revenueFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#00B8C9" stopOpacity={0.35} />
                <stop offset="100%" stopColor="#00B8C9" stopOpacity={0.06} />
              </linearGradient>
            </defs>

            <CartesianGrid
              stroke="#D9E2F1"
              strokeDasharray="4 4"
              vertical={true}
            />

            <XAxis
              dataKey="date"
              tick={{ fill: "#5B6475", fontSize: 13, fontWeight: 600 }}
              tickLine={false}
              axisLine={false}
              interval={5}
            />

            <YAxis
              domain={[0, 60000]}
              ticks={[0, 15000, 30000, 45000, 60000]}
              tick={{ fill: "#5B6475", fontSize: 13, fontWeight: 600 }}
              tickLine={false}
              axisLine={false}
            />

            <Area
              type="monotone"
              dataKey="revenue"
              stroke="#00B8C9"
              strokeWidth={3}
              fill="url(#revenueFill)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}