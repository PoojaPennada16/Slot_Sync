"use client";

import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Cell,
} from "recharts";

const TopRatedBarbers = () => {
  const data = [
    {
      name: "Anika",
      rating: 5,
      color: "#5750E8",
    },
    {
      name: "Saanvi",
      rating: 5,
      color: "#18B7BD",
    },
    {
      name: "Vihaan",
      rating: 4.9,
      color: "#F8A109",
    },
    {
      name: "Diya",
      rating: 4.8,
      color: "#C04EC2",
    },
    {
      name: "Rohan",
      rating: 4.8,
      color: "#22B873",
    },
  ];

  return (
    <div className="w-full bg-white rounded-[30px] border border-[#EEF1F7] shadow-sm p-8 h-[300px]">
      {/* Title */}

      <h2 className="text-[18px] font-semibold text-[#111827] mb-6">
        Top Rated Barbers
      </h2>

      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="70%">
          <BarChart
            data={data}
            layout="vertical"
            margin={{
              top: 8,
              right: 20,
              left: 25,
              bottom: 10,
            }}
            barCategoryGap={10}
          >
            <CartesianGrid
              strokeDasharray="4 4"
              horizontal={false}
              stroke="#E5E7EB"
            />

            <XAxis
              type="number"
              domain={[0, 8]}
              ticks={[0, 2, 4, 6, 8]}
              tick={{
                fontSize: 14,
                fill: "#667085",
                fontWeight: 600,
              }}
              axisLine={false}
              tickLine={false}
            />

            <YAxis
              dataKey="name"
              type="category"
              tick={{
                fontSize: 14,
                fill: "#475467",
                fontWeight: 600,
              }}
              axisLine={false}
              tickLine={false}
              width={80}
            />

            <Bar
              dataKey="rating"
              radius={[10, 10, 10, 10]}
              barSize={25}
            >
              {data.map((entry, index) => (
                <Cell
                  key={index}
                  fill={entry.color}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default TopRatedBarbers;