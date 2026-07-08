"use client";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Cell,
} from "recharts";

const data = [
  { branch: "Chennai", revenue: 35000, color: "#5B57E8" },
  { branch: "Mumbai", revenue: 19000, color: "#18B7C0" },
  { branch: "Chennai", revenue: 26000, color: "#F59E0B" },
  { branch: "Kolkata", revenue: 15000, color: "#C04EC1" },
  { branch: "Kolkata", revenue: 60000, color: "#21BA7A" },
  { branch: "Hyderabad", revenue: 48000, color: "#5B57E8" },
];

export default function BranchAnalytics() {
  return (
    <div className="rounded-[28px] bg-white p-7 shadow-sm h-[340px]">
      <h2 className="text-[16px] font-semibold text-[#111827]">
        Branch Analytics
      </h2>

      <div className="mt-5 h-[270px]">
        <ResponsiveContainer width="100%" height="90%">
          <BarChart
            data={data}
            layout="vertical"
            margin={{ top: 5, right: 25, left: 30, bottom: 5 }}
            barCategoryGap={10}
          >
            <CartesianGrid
              stroke="#D9E2F1"
              strokeDasharray="4 4"
              horizontal={false}
            />

            <XAxis
              type="number"
              domain={[0, 80000]}
              ticks={[0, 20000, 40000, 60000, 80000]}
              tick={{ fill: "#596275", fontSize: 13, fontWeight: 600 }}
              tickLine={false}
              axisLine={false}
            />

            <YAxis
              type="category"
              dataKey="branch"
              width={80}
              tick={{ fill: "#596275", fontSize: 13, fontWeight: 600 }}
              tickLine={false}
              axisLine={false}
            />

            <Bar
              dataKey="revenue"
              radius={[0, 12, 12, 0]}
              barSize={40}
            >
              {data.map((entry, index) => (
                <Cell key={index} fill={entry.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}