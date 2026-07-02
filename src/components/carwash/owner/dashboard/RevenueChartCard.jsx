"use client";

import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export default function RevenueChartCard() {
  const data = [
    { day: "Mon", revenue: 180000 },
    { day: "Tue", revenue: 210000 },
    { day: "Wed", revenue: 165000 },
    { day: "Thu", revenue: 245000 },
    { day: "Fri", revenue: 310000 },
    { day: "Sat", revenue: 385000 },
    { day: "Sun", revenue: 300000 },
  ];

  const formatYAxis = (value) => {
    if (value === 0) return "₹0k";
    return `₹${value / 1000}k`;
  };

  return (
    <div className="rounded-[38px] bg-white/70 border border-white/70 shadow-[0_10px_40px_rgba(130,130,170,0.08)] shadow-md px-4 pt-7 pb-6 h-full">
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-[18px] font-bold text-[#0f172a]">
          Revenue this week
        </h2>

        <div className="rounded-full bg-[#eef1ff] px-3 py-1 text-[10px] font-semibold text-[#1f2937]">
          +14.2% WoW
        </div>
      </div>

      <div className="mt-5 h-[410px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="ownerRevenueFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#6A63F6" stopOpacity={0.22} />
                <stop offset="100%" stopColor="#6A63F6" stopOpacity={0.04} />
              </linearGradient>
            </defs>

            <CartesianGrid
              vertical={false}
              stroke="#dbe3f0"
              strokeDasharray="4 6"
            />

            <XAxis
              dataKey="day"
              axisLine={{ stroke: "#6b7280", strokeWidth: 1.5 }}
              tickLine={{ stroke: "#6b7280", strokeWidth: 1.5 }}
              tick={{ fill: "#667085", fontSize: 11 }}
            />

            <YAxis
              domain={[0, 400000]}
              ticks={[0, 100000, 200000, 300000, 400000]}
              tickFormatter={formatYAxis}
              axisLine={{ stroke: "#6b7280", strokeWidth: 1.5 }}
              tickLine={{ stroke: "#6b7280", strokeWidth: 1.5 }}
              tick={{ fill: "#667085", fontSize: 11 }}
              width={50}
            />

            <Tooltip
              cursor={{ stroke: "#6A63F6", strokeOpacity: 0.15 }}
              formatter={(value) => [`₹${value.toLocaleString("en-IN")}`, "Revenue"]}
              contentStyle={{
                borderRadius: "16px",
                border: "1px solid #e5e7eb",
                background: "#ffffff",
                boxShadow: "0 12px 30px rgba(15,23,42,0.08)",
              }}
            />

            <Area
              type="monotone"
              dataKey="revenue"
              stroke="#5148e5"
              strokeWidth={3}
              fill="url(#ownerRevenueFill)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}