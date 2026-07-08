"use client";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

const data = [
  { date: "2026-06-26", current: 63, previous: 40 },
  { date: "2026-06-27", current: 62, previous: 41 },
  { date: "2026-06-28", current: 59, previous: 43 },
  { date: "2026-06-29", current: 59, previous: 45 },
  { date: "2026-06-30", current: 61, previous: 47 },
  { date: "2026-07-01", current: 65, previous: 49 },
  { date: "2026-07-02", current: 69, previous: 51 },
  { date: "2026-07-03", current: 73, previous: 53 },
  { date: "2026-07-04", current: 78, previous: 56 },
  { date: "2026-07-05", current: 77, previous: 58 },
  { date: "2026-07-06", current: 78, previous: 60 },
  { date: "2026-07-07", current: 79, previous: 62 },
];

export default function CustomerRetention() {
  return (
    <div className="rounded-[28px] bg-white p-7 shadow-sm h-[340px]">
      <h2 className="text-[16px] font-semibold text-[#111827]">
        Customer Retention
      </h2>

      <div className="mt-5 h-[270px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 10, right: 10, left: 10, bottom: 10 }}
          >
            <CartesianGrid
              stroke="#D9E2F1"
              strokeDasharray="4 4"
            />

            <XAxis
              dataKey="date"
              tick={{ fill: "#596275", fontSize: 13, fontWeight: 600 }}
              tickLine={false}
              axisLine={false}
              interval={2}
            />

            <YAxis
              domain={[0, 80]}
              ticks={[0, 20, 40, 60, 80]}
              tick={{ fill: "#596275", fontSize: 13, fontWeight: 600 }}
              tickLine={false}
              axisLine={false}
            />

            <Line
              type="monotone"
              dataKey="current"
              stroke="#08B3B8"
              strokeWidth={3}
              dot={false}
            />

            <Line
              type="monotone"
              dataKey="previous"
              stroke="#5658F2"
              strokeWidth={3}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}