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
  { time: "10:00", value: 35, color: "#5656E9" },
  { time: "", value: 76, color: "#18B7C0" },
  { time: "", value: 93, color: "#F59E0B" },

  { time: "12:00", value: 26, color: "#C552C7" },
  { time: "", value: 81, color: "#21BA7A" },

  { time: "14:00", value: 29, color: "#5656E9" },
  { time: "", value: 76, color: "#18B7C0" },

  { time: "16:00", value: 79, color: "#F59E0B" },
  { time: "", value: 78, color: "#C552C7" },

  { time: "18:00", value: 34, color: "#21BA7A" },
  { time: "", value: 75, color: "#5656E9" },

  { time: "20:00", value: 50, color: "#18B7C0" },
];

export default function PeakHours() {
  return (
    <div className="rounded-[28px] bg-white p-7 shadow-sm h-[340px]">
      <h2 className="text-[16px] font-semibold text-[#111827]">
        Peak Hours
      </h2>

      <div className="mt-5 h-[270px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            layout="vertical"
            margin={{ top: 5, right: 20, left: 35, bottom: 5 }}
            barCategoryGap={6}
          >
            <CartesianGrid
              stroke="#D9E2F1"
              strokeDasharray="4 4"
              horizontal={false}
            />

            <XAxis
              type="number"
              domain={[0, 100]}
              ticks={[0, 25, 50, 75, 100]}
              tick={{ fill: "#596275", fontSize: 13, fontWeight: 600 }}
              tickLine={false}
              axisLine={false}
            />

            <YAxis
              type="category"
              dataKey="time"
              width={55}
              tick={{ fill: "#596275", fontSize: 13, fontWeight: 600 }}
              tickLine={false}
              axisLine={false}
            />

            <Bar
              dataKey="value"
              radius={[0, 10, 10, 0]}
              barSize={20}
            >
              {data.map((item, index) => (
                <Cell key={index} fill={item.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}