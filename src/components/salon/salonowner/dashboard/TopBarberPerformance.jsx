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
  { name: "Aarav", value: 288000, color: "#5B5EF7" },
  { name: "Saanvi", value: 286000, color: "#12B8C8" },
  { name: "Tara", value: 268000, color: "#F59E0B" },
  { name: "Tara ", value: 252000, color: "#C44CC2" },
  { name: "Riya", value: 246000, color: "#21BF7A" },
  { name: "Aditi", value: 246000, color: "#5B5EF7" },
];

export default function TopBarberPerformance() {
  return (
    <div className="bg-white rounded-[30px] border border-[#EEF2F7] shadow-sm p-8 h-[320px]">
      <h2 className="text-[20px] font-bold text-[#111827]">
        Top Barber Performance
      </h2>

      <p className="text-[12px] text-[#64748B] mt-1 mb-6">
        By revenue generated
      </p>

      <div className="h-[220px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            layout="vertical"
            margin={{
              top: 5,
              right: 20,
              left: 35,
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
              domain={[0, 290000]}
              ticks={[0, 70000, 140000, 210000, 280000]}
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
              width={80}
              axisLine={false}
              tickLine={false}
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