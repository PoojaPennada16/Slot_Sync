"use client";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const data = [
  { date: "2026-06-23", value: 30 },
  { date: "2026-06-24", value: 32 },
  { date: "2026-06-25", value: 33 },
  { date: "2026-06-26", value: 36 },
  { date: "2026-06-27", value: 32 },
  { date: "2026-06-28", value: 30 },
  { date: "2026-06-29", value: 31 },
  { date: "2026-06-30", value: 33 },
  { date: "2026-07-01", value: 33 },
  { date: "2026-07-02", value: 31 },
  { date: "2026-07-03", value: 29 },
  { date: "2026-07-04", value: 28 },
  { date: "2026-07-05", value: 30 },
  { date: "2026-07-06", value: 32 },
];

export default function BookingsGrowth() {
  return (
    <div className="bg-white rounded-[30px] shadow-sm border border-[#EEF2F7] p-8 h-[320px]">
      <h2 className="text-[20px] font-bold text-[#111827]">
        Booking Growth
      </h2>

      <p className="text-[12px] text-[#6B7280] mt-1 mb-6">
        Last 14 days
      </p>

      <div className="h-[200px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 10, right: 10, left: -18, bottom: 0 }}
          >
            <defs>
              <linearGradient id="bookingFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#5B5EF7" stopOpacity={0.35} />
                <stop offset="100%" stopColor="#5B5EF7" stopOpacity={0.04} />
              </linearGradient>
            </defs>

            <CartesianGrid
              stroke="#E6EBF5"
              strokeDasharray="4 4"
            />

            <XAxis
              dataKey="date"
              axisLine={false}
              tickLine={false}
              tick={{
                fill: "#596275",
                fontSize: 12,
                fontWeight: 600,
              }}
            />

            <YAxis
              domain={[0, 36]}
              ticks={[0, 9, 18, 27, 36]}
              axisLine={false}
              tickLine={false}
              tick={{
                fill: "#596275",
                fontSize: 12,
                fontWeight: 600,
              }}
            />

            <Tooltip
              contentStyle={{
                borderRadius: 18,
                border: "none",
                boxShadow: "0 8px 24px rgba(0,0,0,.08)",
              }}
            />

            <Area
              type="monotone"
              dataKey="value"
              stroke="#5457F6"
              strokeWidth={3}
              fill="url(#bookingFill)"
              dot={false}
              activeDot={{
                r: 6,
                fill: "#5457F6",
                stroke: "#fff",
                strokeWidth: 3,
              }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}