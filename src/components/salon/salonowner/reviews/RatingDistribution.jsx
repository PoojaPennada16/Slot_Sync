"use client";

import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";

const RatingDistribution = () => {
  const data = [
    { name: "5 Star", value: 42 },
    { name: "4 Star", value: 58 },
  ];

  const COLORS = ["#18B7BD", "#F8A109"];

  return (
    <div className=" w-full bg-white rounded-[30px] border border-[#EEF1F7] shadow-sm p-8 h-[300px]">
      {/* Heading */}

      <h2 className="text-[18px] font-semibold text-[#111827] mb-6">
        Rating Distribution
      </h2>

      {/* Chart */}

      <div className="w-full h-[200px] flex items-center justify-center">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              innerRadius={52}
              outerRadius={90}
              startAngle={165}
              endAngle={-195}
              dataKey="value"
              stroke="#FFFFFF"
              strokeWidth={5}
              paddingAngle={2}
            >
              {data.map((entry, index) => (
                <Cell
                  key={index}
                  fill={COLORS[index]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default RatingDistribution;