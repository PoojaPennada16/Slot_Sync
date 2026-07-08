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
  { date: "2026-06-08", value: 34 },
  { date: "2026-06-09", value: 43 },
  { date: "2026-06-10", value: 37 },
  { date: "2026-06-11", value: 43 },
  { date: "2026-06-12", value: 43 },
  { date: "2026-06-13", value: 39 },

  { date: "2026-06-15", value: 43 },
  { date: "2026-06-16", value: 40 },
  { date: "2026-06-17", value: 46 },
  { date: "2026-06-18", value: 45 },
  { date: "2026-06-19", value: 54 },
  { date: "2026-06-20", value: 54 },
  { date: "2026-06-21", value: 48 },
  { date: "2026-06-22", value: 53 },
  { date: "2026-06-23", value: 60 },
  { date: "2026-06-24", value: 58 },
  { date: "2026-06-25", value: 52 },
  { date: "2026-06-26", value: 47 },
  { date: "2026-06-27", value: 51 },
  { date: "2026-06-28", value: 54 },
  { date: "2026-06-29", value: 51 },
  { date: "2026-06-30", value: 49 },
  { date: "2026-07-01", value: 53 },
  { date: "2026-07-02", value: 50 },

  { date: "2026-07-04", value: 64 },
  { date: "2026-07-05", value: 62 },
  { date: "2026-07-06", value: 61 },
  { date: "2026-07-07", value: 56 },
];

export default function BookingAnalytics() {
  return (
    <div className="rounded-[26px] bg-white p-6 shadow-sm h-[340px]">
      <h2 className="text-[16px] font-semibold text-[#111827]">
        Booking Analytics
      </h2>

      <div className="mt-4 h-[270px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="bookingFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#5B5BF7" stopOpacity={0.35} />
                <stop offset="100%" stopColor="#5B5BF7" stopOpacity={0.06} />
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
              domain={[0, 80]}
              ticks={[0, 20, 40, 60, 80]}
              tick={{ fill: "#5B6475", fontSize: 13, fontWeight: 600 }}
              tickLine={false}
              axisLine={false}
            />

            <Area
              type="monotone"
              dataKey="value"
              stroke="#5158F6"
              strokeWidth={3}
              fill="url(#bookingFill)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}