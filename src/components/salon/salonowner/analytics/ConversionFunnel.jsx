"use client";

import { ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const data = [
  { name: "Visitors", value: 46, color: "#5756E9" },
  { name: "Bookings", value: 30, color: "#18B7C0" },
  { name: "Confirmed", value: 20, color: "#F59E0B" },
  { name: "Completed", value: 4, color: "#C552C7" },
];

export default function ConversionFunnel() {
  return (
    <div className="rounded-[28px] bg-white p-7 shadow-sm h-[340px]">
      <h2 className="text-[16px] font-semibold text-[#111827]">
        Conversion Funnel
      </h2>

      <div className="mt-6 h-[270px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              cx="50%"
              cy="50%"
              innerRadius={52}
              outerRadius={100}
              startAngle={0}
              endAngle={360}
              paddingAngle={3}
              stroke="#FFFFFF"
              strokeWidth={4}
            >
              {data.map((entry, index) => (
                <Cell
                  key={index}
                  fill={entry.color}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}