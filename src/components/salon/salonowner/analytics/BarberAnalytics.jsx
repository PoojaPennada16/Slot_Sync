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
  { barber: "Priya", bookings: 900, color: "#5B57E8" },
  { barber: "Ishaan", bookings: 880, color: "#18B7C0" },
  { barber: "Tara", bookings: 850, color: "#F59E0B" },
  { barber: "Vihaan", bookings: 800, color: "#C04EC1" },
  { barber: "Ishaan", bookings: 790, color: "#21BA7A" },
  { barber: "Riya", bookings: 785, color: "#5B57E8" },
];

export default function BarberAnalytics() {
  return (
    <div className="rounded-[28px] bg-white p-7 shadow-sm h-[340px]">
      <h2 className="text-[16px] font-semibold text-[#111827]">
        Barber Analytics
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
              domain={[0, 1000]}
              ticks={[0, 250, 500, 750, 1000]}
              tick={{ fill: "#596275", fontSize: 13, fontWeight: 600 }}
              tickLine={false}
              axisLine={false}
            />

            <YAxis
              type="category"
              dataKey="barber"
              width={80}
              tick={{ fill: "#596275", fontSize: 13, fontWeight: 600 }}
              tickLine={false}
              axisLine={false}
            />

            <Bar
              dataKey="bookings"
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