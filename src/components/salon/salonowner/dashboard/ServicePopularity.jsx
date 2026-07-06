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
  { name: "Classic\nHaircut", value: 350, color: "#5B5EF7" },
  { name: "Beard Trim", value: 640, color: "#11B8C8" },
  { name: "Hair Spa", value: 700, color: "#F59E0B" },
  { name: "Hair Coloring", value: 580, color: "#C44CC2" },
  { name: "Premium\nFacial", value: 790, color: "#20BF7A" },
  { name: "Head\nMassage", value: 560, color: "#5B5EF7" },
];

export default function ServicePopularity() {
  return (
    <div className="bg-white rounded-[30px] border border-[#EEF2F7] shadow-sm p-8 h-[320px]">
      <h2 className="text-[20px] font-bold text-[#111827]">
        Service Popularity
      </h2>

      <p className="text-[12px] text-[#64748B] mt-1 mb-6">
        Top services this month
      </p>

      <div className="h-[220px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            layout="vertical"
            margin={{
              top: 5,
              right: 20,
              left: 40,
              bottom: 5,
            }}
          >
            <CartesianGrid
              stroke="#E7EDF6"
              strokeDasharray="4 4"
              horizontal={false}
            />

            <XAxis
              type="number"
              domain={[0, 800]}
              ticks={[0, 200, 400, 600, 800]}
              axisLine={false}
              tickLine={false}
              tick={{
                fill: "#596275",
                fontSize: 12,
                fontWeight: 600,
              }}
            />

            <YAxis
              dataKey="name"
              type="category"
              axisLine={false}
              tickLine={false}
              width={90}
              tick={{
                fill: "#596275",
                fontSize: 12,
                fontWeight: 700,
              }}
            />

            <Bar
              dataKey="value"
              radius={[0, 12, 12, 0]}
              barSize={40}
            >
              {data.map((item, index) => (
                <Cell
                  key={index}
                  fill={item.color}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}