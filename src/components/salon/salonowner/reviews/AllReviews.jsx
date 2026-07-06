"use client";

import React from "react";
import {
  Eye,
  EyeOff,
  MessageSquare,
  Star,
} from "lucide-react";

const reviews = [
  {
    customer: "Anika Mehta",
    barber: "Tara Joshi",
    date: "2026-06-06",
    review:
      "Booking was smooth and the staff were super friendly.",
  },
  {
    customer: "Priya Joshi",
    barber: "Aarav Joshi",
    date: "2026-05-19",
    review:
      "Best haircut I've had in years. Highly recommend!",
  },
  {
    customer: "Aarav Iyer",
    barber: "Aarav Joshi",
    date: "2026-05-11",
    review:
      "Booking was smooth and the staff were super friendly.",
  },
  {
    customer: "Priya Iyer",
    barber: "Ishaan Patel",
    date: "2026-06-13",
    review:
      "Amazing fade, the barber really listened to what I wanted.",
  },
  {
    customer: "Aditya Verma",
    barber: "Ananya Singh",
    date: "2026-06-10",
    review:
      "Booking was smooth and the staff were super friendly.",
  },
];

export default function AllReviews() {
  return (
    <div className="mt-7 bg-white rounded-[18px] border border-[#EEF1F7] shadow-sm p-8">
      <h2 className="text-[18px] font-semibold text-[#111827] mb-2">
        All Reviews
      </h2>

      {reviews.map((item, index) => (
        <div
          key={index}
          className={`flex justify-between items-start py-3 ${
            index !== reviews.length - 1
              ? "border-b border-[#EEF2F6]"
              : ""
          }`}
        >
          {/* Left */}

          <div className="flex-1">
            <div className="flex items-center flex-wrap gap-3">
              <h3 className="text-[15px] font-semibold text-[#111827]">
                {item.customer}
              </h3>

              <span className="text-[13px] text-[#667085]">
                on
              </span>

              <span className="text-[13px] text-[#667085]">
                {item.barber}
              </span>

              <span className="text-[#98A2B3]">·</span>

              <span className="text-[13px] text-[#667085]">
                {item.date}
              </span>
            </div>

            {/* Stars */}

            <div className="flex items-center gap-1 mt-3">
              {[1, 2, 3].map((star) => (
                <Star
                  key={star}
                  size={12}
                  fill="#F5A524"
                  stroke="#F5A524"
                />
              ))}
            </div>

            {/* Review */}

            <p className="mt-3 text-[13px] text-[#1D2939]">
              {item.review}
            </p>
          </div>

          {/* Right */}

          <div className="flex items-center gap-3 ml-8">
            {/* Status */}

            <span className="bg-[#DFF8EC] text-[#10B981] text-[12px] font-medium px-4 py-1.5 rounded-full">
              approved
            </span>

            {/* Buttons */}

            <button className="w-9 h-9 rounded-full border border-[#E4E7EC] flex items-center justify-center hover:bg-gray-50 transition">
              <Eye size={17} className="text-[#111827]" />
            </button>

            <button className="w-9 h-9 rounded-full border border-[#E4E7EC] flex items-center justify-center hover:bg-gray-50 transition">
              <EyeOff size={17} className="text-[#111827]" />
            </button>

            <button className="w-9 h-9 rounded-full border border-[#E4E7EC] flex items-center justify-center hover:bg-gray-50 transition">
              <MessageSquare
                size={17}
                className="text-[#111827]"
              />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}