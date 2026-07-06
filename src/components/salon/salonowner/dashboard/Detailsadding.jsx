"use client";

import {
  Zap,
  Building2,
  UserPlus,
  ClipboardList,
} from "lucide-react";

import Overalldata from "./Overalldata";
import BookingsGrowth from "./BookingsGrowth";
import RevenueGrowth from "./RevenueGrowth";
import ServicePopularity from "./ServicePopularity";
import TopBarberPerformance from "./TopBarberPerformance";
import BranchPerformance from "./BranchPerformance";
import BookingsVsRevenue from "./BookingsVsRevenue";

export default function Detailsadding() {
  const cards = [
    {
      title: "Quick Book\nAppointment",
      icon: Zap,
      gradient: true,
    },
    {
      title: "Add Branch",
      icon: Building2,
    },
    {
      title: "Add Barber",
      icon: UserPlus,
    },
    {
      title: "Approval Queue",
      icon: ClipboardList,
    },
  ];

  return (
    <div className="w-full pb-8">
      {/* Heading */}
      <h1 className="text-[30px] font-bold text-[#0F172A]">
        Welcome back
      </h1>

      <p className="mt-2 text-[12px] text-[#64748B]">
        Here's what's happening across your salons today.
      </p>

      {/* Quick Actions */}
      <div className="grid grid-cols-4 gap-4 mt-6">
        {cards.map((card, index) => {
          const Icon = card.icon;

          return (
            <div
              key={index}
              className={`h-[70px] rounded-[22px] px-4 flex items-center gap-3 cursor-pointer transition-all duration-300 hover:shadow-md ${
                card.gradient
                  ? "bg-gradient-to-r from-[#5B5FF6] to-[#11B5E4] text-white"
                  : "bg-white border border-[#EEF2F7]"
              }`}
            >
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  card.gradient
                    ? "bg-white/20"
                    : "bg-[#F1F0FF]"
                }`}
              >
                <Icon
                  size={16}
                  className={
                    card.gradient
                      ? "text-white"
                      : "text-[#6366F1]"
                  }
                />
              </div>

              <h3
                className={`text-[14px] font-semibold whitespace-pre-line ${
                  card.gradient
                    ? "text-white"
                    : "text-[#111827]"
                }`}
              >
                {card.title}
              </h3>
            </div>
          );
        })}
      </div>

      {/* Overall Stats */}
      <div className="mt-6">
        <Overalldata />
      </div>

      {/* Booking & Revenue */}
      <div className="grid grid-cols-2 gap-6 mt-6">
        <BookingsGrowth />
        <RevenueGrowth />
      </div>

      {/* Services & Barbers */}
      <div className="grid grid-cols-2 gap-6 mt-6">
        <ServicePopularity />
        <TopBarberPerformance />
      </div>

      {/* Branch Performance & Booking vs Revenue */}
      <div className="grid grid-cols-2 gap-6 mt-6">
        <BranchPerformance />
        <BookingsVsRevenue />
      </div>
    </div>
  );
}