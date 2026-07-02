"use client";

import { IndianRupee, CalendarDays, Users, Car } from "lucide-react";

export default function StatsCardsGrid() {
  const cards = [
    {
      title: "REVENUE\nTODAY",
      value: "₹0",
      change: "14.2%",
      note: "vs last week",
      icon: IndianRupee,
      iconBg: "bg-[#c9c3ff]",
      iconColor: "text-[#5b5ce9]",
      changeColor: "text-[#20c26b]",
      cardBg: "bg-[#f7f6ff]",
    },
    {
      title: "THIS\nWEEK",
      value: "₹0",
      change: "9.4%",
      note: "vs last week",
      icon: IndianRupee,
      iconBg: "bg-[#d6d1ff]",
      iconColor: "text-[#5b5ce9]",
      changeColor: "text-[#20c26b]",
      cardBg: "bg-[#f7f6ff]",
    },
    {
      title: "THIS\nMONTH",
      value: "₹0",
      change: "11.2%",
      note: "vs last week",
      icon: IndianRupee,
      iconBg: "bg-[#d8d3ff]",
      iconColor: "text-[#5b5ce9]",
      changeColor: "text-[#20c26b]",
      cardBg: "bg-[#f7f6ff]",
    },
    {
      title: "ACTIVE\nBOOKINGS",
      value: "0",
      change: "6.4%",
      note: "vs last week",
      icon: CalendarDays,
      iconBg: "bg-[#bdf3ef]",
      iconColor: "text-[#00c7c7]",
      changeColor: "text-[#20c26b]",
      cardBg: "bg-[#f4fffe]",
    },
    {
      title: "CUSTOMERS",
      value: "6",
      change: "4.3%",
      note: "vs last week",
      icon: Users,
      iconBg: "bg-[#c9f3e1]",
      iconColor: "text-[#22c55e]",
      changeColor: "text-[#20c26b]",
      cardBg: "bg-[#f6fffb]",
    },
    {
      title: "VEHICLES\nIN",
      value: "0",
      change: "3.1%",
      note: "vs last week",
      icon: Car,
      iconBg: "bg-[#ffe7b8]",
      iconColor: "text-[#f5a623]",
      changeColor: "text-[#20c26b]",
      cardBg: "bg-[#fffaf0]",
    },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-8 gap-3">
      {cards.map((card, index) => {
        const Icon = card.icon;

        return (
          <div
            key={index}
            className={`rounded-3xl ${card.cardBg} border border-white/70 shadow-[0_10px_40px_rgba(130,130,170,0.08)] shadow-lg px-4 py-4 min-h-[148px] flex flex-col`}
          >
            {/* Top row */}
            <div className="flex items-start justify-between gap-4 min-h-[42px]">
              <h3 className="dashboard-card-label break-words overflow-wrap-anywhere min-w-0 flex-1 text-[11px] leading-[1.35] font-semibold text-[#5f677b]">
                {card.title}
              </h3>

              <div
                className={`w-[24px] h-[24px] rounded-full ${card.iconBg} flex items-center justify-center shrink-0`}
              >
                <Icon className={`w-3 h-3 ${card.iconColor}`} />
              </div>
            </div>

            {/* Value */}
            <div className="mt-3 text-[23px] leading-none font-bold text-[#0f172a]">
              {card.value}
            </div>

            {/* Bottom row stays aligned */}
            <div className="mt-auto pt-3 flex items-end gap-3">
              <span className={`text-[11px] font-semibold ${card.changeColor}`}>
                ↗ {card.change}
              </span>
              <span className="text-[11px] leading-[1.2] text-[#667085]">
                {card.note}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}