"use client";

import React from "react";
import { Sparkles, Star } from "lucide-react";

const services = [
  {
    id: 1,
    name: "Classic Haircut",
    category: "Styling",
    price: "₹788",
    duration: "60m",
    score: 81,
    bookings: 353,
    revenue: "₹71k",
    rating: 4,
  },
  {
    id: 2,
    name: "Beard Trim",
    category: "Spa",
    price: "₹882",
    duration: "60m",
    score: 93,
    bookings: 642,
    revenue: "₹95k",
    rating: 4.3,
  },
  {
    id: 3,
    name: "Hair Spa",
    category: "Styling",
    price: "₹1420",
    duration: "15m",
    score: 84,
    bookings: 705,
    revenue: "₹166k",
    rating: 4.9,
  },
  {
    id: 4,
    name: "Hair Coloring",
    category: "Beauty",
    price: "₹1850",
    duration: "90m",
    score: 88,
    bookings: 420,
    revenue: "₹132k",
    rating: 4.8,
  },
  {
    id: 5,
    name: "Facial",
    category: "Skin Care",
    price: "₹1250",
    duration: "45m",
    score: 91,
    bookings: 510,
    revenue: "₹104k",
    rating: 4.7,
  },
  {
    id: 6,
    name: "Head Massage",
    category: "Relax",
    price: "₹650",
    duration: "30m",
    score: 85,
    bookings: 610,
    revenue: "₹82k",
    rating: 4.6,
  },
];

const ServicesCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
      {services.map((service) => (
        <div
          key={service.id}
          className="bg-white rounded-[18px] border border-[#ECEEF5] shadow-sm p-4 hover:shadow-md transition-all"
        >
          {/* Header */}
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-[15px] font-bold text-[#111827]">
                {service.name}
              </h2>

              <p className="text-[11px] text-[#667085] mt-1">
                {service.category}
              </p>
            </div>

            <div className="flex items-center gap-1 bg-[#D9F8F2] px-2.5 py-1 rounded-full">
              <Sparkles
                size={11}
                className="text-[#1B9C85]"
                fill="#1B9C85"
              />

              <span className="text-[11px] font-semibold text-[#1B9C85]">
                {service.score}
              </span>
            </div>
          </div>

          {/* Price */}
          <div className="mt-5 flex items-end gap-2">
            <h1 className="text-[17px] font-bold text-[#111827] leading-none">
              {service.price}
            </h1>

            <span className="text-[11px] text-[#667085] mb-1">
              / {service.duration}
            </span>
          </div>

          {/* Bottom */}
          <div className="grid grid-cols-3 gap-2 mt-5">
            {/* Bookings */}
            <div >
              <p className="text-[9px] font-medium uppercase text-[#98A2B3] text-center">
                BOOKINGS
              </p>

              <h3 className="text-[13px] font-semibold text-[#111827] text-center mt-1">
                {service.bookings}
              </h3>
            </div>

            {/* Revenue */}
            <div >
              <p className="text-[10px] font-medium uppercase text-[#98A2B3] text-center">
                REVENUE
              </p>

              <h3 className="text-[13px] font-semibold text-[#111827] text-center mt-1">
                {service.revenue}
              </h3>
            </div>

            {/* Rating */}
            <div>
              <p className="text-[10px] font-medium uppercase text-[#98A2B3] text-center">
                RATING
              </p>
              <div className="flex items-center justify-center gap-1 mt-1">
                <Star
                  size={11}
                  fill="#FDB022"
                  className="text-[#FDB022]"
                />

                <span className="text-[13px] font-semibold text-[#111827]">
                  {service.rating}
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServicesCards;