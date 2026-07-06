"use client";

import { Star } from "lucide-react";

import RatingDistribution from "./RatingDistribution";
import TopRatedBarbers from "./TopRatedBarbers";
import AllReviews from "./AllReviews";

export default function Reviews() {
  const cards = [
    {
      title: "AVERAGE RATING",
      value: "3",
      change: "▲ 2.1% vs last period",
      positive: true,
      star: true,
    },
    {
      title: "TOTAL REVIEWS",
      value: "40",
      change: "▲ 11.4% vs last period",
      positive: true,
    },
    {
      title: "PENDING APPROVAL",
      value: "7",
      change: "▼ 3.2% vs last period",
      positive: false,
    },
    {
      title: "HIDDEN",
      value: "6",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f6f4fb] via-[#f7f5f6] to-[#eef8fb] mr-2">
      {/* Heading */}
      <div className="mb-6">
        <h1 className="text-[28px] font-bold text-[#111827]">
          Reviews
        </h1>

        <p className="mt-1 text-[14px] text-[#667085]">
          40 reviews · avg 3.45★
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-4 gap-4">
        {cards.map((item, index) => (
          <div
            key={index}
            className="h-[110px] rounded-[18px] border border-[#EEF1F7] bg-white px-5 py-4 shadow-sm"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-[11px] font-medium tracking-[0.08em] text-[#667085]">
                {item.title}
              </h3>

              {item.star && (
                <Star
                  size={12}
                  strokeWidth={2}
                  className="text-[#5B5FF6]"
                />
              )}
            </div>

            <div className="mt-4">
              <h2 className="text-[20px] font-semibold leading-none text-[#111827]">
                {item.value}
              </h2>

              {item.change && (
                <p
                  className={`mt-3 text-[10px] font-medium ${
                    item.positive
                      ? "text-[#16A34A]"
                      : "text-[#EF4444]"
                  }`}
                >
                  {item.change}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Rating Distribution + Top Rated Barbers */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
        <RatingDistribution />
        <TopRatedBarbers />
      </div>

      {/* All Reviews */}
      <div className="mt-8">
        <AllReviews />
      </div>
    </div>
  );
}