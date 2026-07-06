"use client";

import {
  CalendarDays,
  TrendingUp,
  Scissors,
  IndianRupee,
  Users,
  ClipboardList,
  BadgeCheck,
  Zap,
} from "lucide-react";

export default function Overalldata() {
  const stats = [
    {
      title: "TODAY'S BOOKINGS",
      value: "5",
      change: "▲ 12.4% vs last period",
      icon: CalendarDays,
    },
    {
      title: "WEEKLY BOOKINGS",
      value: "80",
      change: "▲ 8.1% vs last period",
      icon: CalendarDays,
    },
    {
      title: "MONTHLY BOOKINGS",
      value: "180",
      change: "▲ 18.7% vs last period",
      icon: TrendingUp,
    },
    {
      title: "ACTIVE BARBERS",
      value: "12",
      change: "▲ 2.3% vs last period",
      icon: Scissors,
    },
    {
      title: "REVENUE TODAY",
      value: "₹1,702",
      change: "▲ 5.6% vs last period",
      icon: IndianRupee,
    },
    {
      title: "REVENUE THIS WEEK",
      value: "₹66,760",
      change: "▲ 11.2% vs last period",
      icon: IndianRupee,
    },
    {
      title: "REVENUE THIS MONTH",
      value: "₹2,41,347",
      change: "▲ 22.9% vs last period",
      icon: IndianRupee,
    },
    {
      title: "TOTAL CUSTOMERS",
      value: "80",
      change: "▲ 6.5% vs last period",
      icon: Users,
    },
    {
      title: "PENDING APPROVALS",
      value: "0",
      change: "",
      icon: ClipboardList,
    },
    {
      title: "PENDING LEAVES",
      value: "1",
      change: "",
      icon: BadgeCheck,
    },
    {
      title: "OFFLINE BOOKINGS TODAY",
      value: "0",
      change: "",
      icon: Zap,
    },
    {
      title: "WALK-IN REVENUE",
      value: "₹0",
      change: "",
      icon: IndianRupee,
    },
  ];

  return (
    <div className="mt-7">
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {stats.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="bg-white rounded-[22px] p-5 shadow-sm border border-gray-100"
            >
              <div className="flex justify-between items-start">
                <h4 className="text-[12px] font-medium tracking-wide text-slate-500 uppercase leading-5">
                  {item.title}
                </h4>

                <Icon
                  size={14}
                  className="text-indigo-500"
                />
              </div>

              <h2 className="text-[20px] font-bold text-slate-900 mt-3">
                {item.value}
              </h2>

              {item.change && (
                <p className="text-[11px] font-medium text-emerald-500 mt-2">
                  {item.change}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}