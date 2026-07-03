"use client";

import Card from "@/components/carwash/common/Card";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

export default function Chart({
  title,
  data,
  stroke,
  gradientId,
  yDomain,
  ticks,
  xDataKey = "date",
  dataKey = "value",
  height = "250px",
}) {
  return (
    <Card padding="p-6">
      <h2 className="mb-4 text-[15px] font-semibold text-[#182230]">
        {title}
      </h2>

      <div style={{ height }}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={stroke} stopOpacity={0.35} />
                <stop offset="100%" stopColor={stroke} stopOpacity={0.08} />
              </linearGradient>
            </defs>

            <CartesianGrid
              stroke="#E5E7EB"
              strokeDasharray="4 4"
            />

            <XAxis
              dataKey={xDataKey}
              tick={{ fill: "#667085", fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />

            <YAxis
              domain={yDomain}
              ticks={ticks}
              tick={{ fill: "#667085", fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />

            <Area
              type="monotone"
              dataKey={dataKey}
              stroke={stroke}
              strokeWidth={2}
              fill={`url(#${gradientId})`}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}