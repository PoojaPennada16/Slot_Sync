"use client";

import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const data = [
  { name: "Branch A", value: 32, color: "#22C55E" },
  { name: "Branch B", value: 24, color: "#5B5EF7" },
  { name: "Branch C", value: 18, color: "#4F46E5" },
  { name: "Branch D", value: 10, color: "#14B8A6" },
  { name: "Branch E", value: 8, color: "#F59E0B" },
  { name: "Branch F", value: 8, color: "#C44CC2" },
];

export default function BranchPerformance() {
  return (
    <div className="bg-white rounded-[30px] border border-[#EEF2F7] shadow-sm p-8 h-[320px]">
      <h2 className="text-[20px] font-bold text-[#111827]">
        Branch Performance
      </h2>

      <p className="text-[12px] text-[#64748B] mt-1">
        Revenue contribution
      </p>

      <div className="h-[220px] mt-4">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              innerRadius={52}
              outerRadius={100}
              paddingAngle={3}
              stroke="#fff"
              strokeWidth={3}
            >
              {data.map((item, index) => (
                <Cell
                  key={index}
                  fill={item.color}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}