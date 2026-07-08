"use client";

import { ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const data = [
  { name: "Hair Cut", value: 18, color: "#5456E9" },
  { name: "Hair Spa", value: 16, color: "#4F52E5" },
  { name: "Beard", value: 22, color: "#21BA7A" },
  { name: "Facial", value: 16, color: "#C04EC1" },
  { name: "Color", value: 18, color: "#F59E0B" },
  { name: "Others", value: 18, color: "#18B7C0" },
];

export default function ServiceAnalytics() {
  return (
    <div className="rounded-[28px] bg-white p-7 shadow-sm h-[340px]">
      <h2 className="text-[16px] font-semibold text-[#111827]">
        Service Analytics
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
              outerRadius={110}
              startAngle={90}
              endAngle={-270}
              paddingAngle={3}
              stroke="#FFFFFF"
              strokeWidth={4}
            >
              {data.map((item, index) => (
                <Cell key={index} fill={item.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}