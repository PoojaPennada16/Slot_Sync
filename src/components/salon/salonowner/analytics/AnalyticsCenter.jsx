"use client";

import BookingAnalytics from "./BookingAnalytics";
import RevenueAnalytics from "./RevenueAnalytics";
import BranchAnalytics from "./BranchAnalytics";
import BarberAnalytics from "./BarberAnalytics";
import ServiceAnalytics from "./ServiceAnalytics";
import CustomerRetention from "./CustomerRetention";
import PeakHours from "./PeakHours";
import ConversionFunnel from "./ConversionFunnel";

export default function AnalyticsCenter() {
  const cards = [
    {
      id: 1,
      title: "TOTAL BOOKINGS",
      value: "180",
      change: "▲ 14.2% vs last period",
      color: "text-[#14B86A]",
    },
    {
      id: 2,
      title: "TOTAL REVENUE",
      value: "₹2,41,347",
      change: "▲ 18.4% vs last period",
      color: "text-[#14B86A]",
    },
    {
      id: 3,
      title: "RETENTION",
      value: "68%",
      change: "▲ 3.1% vs last period",
      color: "text-[#14B86A]",
    },
    {
      id: 4,
      title: "CONVERSION",
      value: "42%",
      change: "▼ 1.2% vs last period",
      color: "text-[#FF3131]",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f6f4fb] via-[#f7f5f6] to-[#eef8fb] mr-2">
      {/* Heading */}
      <div>
        <h1 className="text-[26px] font-bold leading-none text-[#0F172A]">
          Analytics Center
        </h1>

        <p className="mt-2 text-[12px] font-normal text-[#667085]">
          Deep dive across every dimension of your business.
        </p>
      </div>

      {/* Summary Cards */}
      <div className="mt-6 grid grid-cols-4 gap-4">
        {cards.map((card) => (
          <div
            key={card.id}
            className="h-[100px] rounded-2xl bg-white px-4 py-4 shadow-sm"
          >
            <p className="text-[10px] font-medium tracking-[1px] uppercase text-[#667085]">
              {card.title}
            </p>

            <h2 className="mt-3 text-[20px] font-bold leading-none text-[#0F172A]">
              {card.value}
            </h2>

            <p className={`mt-3 text-[11px] font-medium ${card.color}`}>
              {card.change}
            </p>
          </div>
        ))}
      </div>

      {/* Row 1 */}
      <div className="mt-6 grid grid-cols-2 gap-6">
        <BookingAnalytics />
        <RevenueAnalytics />
      </div>

      {/* Row 2 */}
      <div className="mt-6 grid grid-cols-2 gap-6">
        <BranchAnalytics />
        <BarberAnalytics />
      </div>

      {/* Row 3 */}
      <div className="mt-6 grid grid-cols-2 gap-6">
        <ServiceAnalytics />
        <CustomerRetention />
      </div>

      {/* Row 4 */}
      <div className="mt-6 grid grid-cols-2 gap-6">
        <PeakHours />
        <ConversionFunnel />
      </div>
    </div>
  );
}