"use client";

import { AlertTriangle } from "lucide-react";

export default function QuickStatsRow() {
  const stats = [
    {
      label: "Bays occupied",
      value: "6",
      valueColor: "text-[#5b5ce9]",
    },
    {
      label: "Bays available",
      value: "2",
      valueColor: "text-[#20c26b]",
    },
    {
      label: "Techs busy",
      value: "3",
      valueColor: "text-[#00c7c7]",
    },
    {
      label: "Techs free",
      value: "4",
      valueColor: "text-[#20c26b]",
    },
    {
      label: "In queue",
      value: "1",
      valueColor: "text-[#f5a623]",
    },
    {
      label: "Emergency",
      value: "0",
      valueColor: "text-[#ef4444]",
      icon: AlertTriangle,
    },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-8 gap-3">
      {stats.map((item, index) => {
        const Icon = item.icon;

        return (
          <div
            key={index}
            className="rounded-3xl bg-white/70 border border-white/70 shadow-[0_10px_40px_rgba(130,130,170,0.08)] shadow-md px-4 py-3 min-h-[100px]"
          >
            <div className="flex items-center gap-2 text-[12px] font-medium text-[#667085]">
              {Icon ? <Icon className="w-3 h-3 text-[#667085]" /> : null}
              <span>{item.label}</span>
            </div>

            <div className={`mt-4 text-[27px] leading-none font-bold ${item.valueColor}`}>
              {item.value}
            </div>
          </div>
        );
      })}
    </div>
  );
}