"use client";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const data = [
  { day: "2026-06-23", booking: 30, revenue: 28 },
  { day: "2026-06-24", booking: 32, revenue: 28 },
  { day: "2026-06-25", booking: 33, revenue: 32 },
  { day: "2026-06-26", booking: 36, revenue: 36 },
  { day: "2026-06-27", booking: 32, revenue: 35 },
  { day: "2026-06-28", booking: 30, revenue: 33 },
  { day: "2026-06-29", booking: 31, revenue: 30 },
  { day: "2026-06-30", booking: 33, revenue: 29 },
  { day: "2026-07-01", booking: 33, revenue: 27 },
  { day: "2026-07-02", booking: 31, revenue: 24 },
  { day: "2026-07-03", booking: 29, revenue: 23 },
  { day: "2026-07-04", booking: 28, revenue: 21 },
  { day: "2026-07-05", booking: 30, revenue: 22 },
  { day: "2026-07-06", booking: 32, revenue: 21 },
];

export default function BookingsVsRevenue() {
  return (
    <div className="bg-white rounded-[30px] border border-[#EEF2F7] shadow-sm p-8 h-[320px]">
      {/* Header */}
      <h2 className="text-[20px] font-bold text-[#111827]">
        Bookings vs Revenue
      </h2>

      <p className="text-[12px] text-[#64748B] mt-1 mb-6">
        Normalized comparison
      </p>

      {/* Chart */}
      <div className="h-[220px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{
              top: 5,
              right: 10,
              left: -18,
              bottom: 0,
            }}
          >
            <CartesianGrid
              stroke="#E8EDF6"
              strokeDasharray="4 4"
            />

            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              tick={{
                fill: "#5B6478",
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
                fill: "#5B6478",
                fontSize: 12,
                fontWeight: 600,
              }}
            />

            <Tooltip
              contentStyle={{
                borderRadius: 16,
                border: "none",
                boxShadow: "0 10px 24px rgba(0,0,0,.08)",
              }}
            />

            <Line
              type="monotone"
              dataKey="booking"
              stroke="#5B5EF7"
              strokeWidth={3}
              dot={false}
              activeDot={{
                r: 6,
                fill: "#5B5EF7",
                stroke: "#fff",
                strokeWidth: 2,
              }}
            />

            <Line
              type="monotone"
              dataKey="revenue"
              stroke="#11B5C9"
              strokeWidth={3}
              dot={false}
              activeDot={{
                r: 6,
                fill: "#11B5C9",
                stroke: "#fff",
                strokeWidth: 2,
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      
    </div>
  );
}