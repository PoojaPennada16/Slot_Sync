"use client";

import React from "react";
import { Star, Circle } from "lucide-react";

const barbers = [
    {
        initials: "AR",
        name: "Aarav Reddy",
        branch: "SlotSync Lounge Bengaluru",
        rating: "4.1",
        status: "on-leave",
        revenue: "₹278k",
        bookings: "539",
        exp: "6y",
    },
    {
        initials: "SK",
        name: "Saanvi Khan",
        branch: "SlotSync Lounge Chennai",
        rating: "5",
        status: "on-leave",
        revenue: "₹276k",
        bookings: "699",
        exp: "11y",
    },
    {
        initials: "TM",
        name: "Tara Mehta",
        branch: "SlotSync Loft Pune",
        rating: "3.8",
        status: "on-leave",
        revenue: "₹257k",
        bookings: "93",
        exp: "9y",
    },
    {
        initials: "TJ",
        name: "Tara Joshi",
        branch: "SlotSync Lounge Bengaluru",
        rating: "4.4",
        status: "inactive",
        revenue: "₹244k",
        bookings: "844",
        exp: "10y",
    },
    {
        initials: "RJ",
        name: "Riya Joshi",
        branch: "SlotSync Atelier Mumbai",
        rating: "4.6",
        status: "active",
        revenue: "₹238k",
        bookings: "773",
        exp: "6y",
    },
    {
        initials: "AI",
        name: "Aditi Iyer",
        branch: "SlotSync Loft Pune",
        rating: "4.4",
        status: "active",
        revenue: "₹238k",
        bookings: "571",
        exp: "12y",
    },
];

const badgeStyle = (status) => {
    switch (status) {
        case "active":
            return "bg-green-100 text-green-600";
        case "inactive":
            return "bg-gray-100 text-gray-500";
        default:
            return "bg-orange-100 text-orange-500";
    }
};

const AllBarbers = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {barbers.map((barber, index) => (
                <div
                    key={index}
                    className="bg-white rounded-[24px] p-6 shadow-sm hover:shadow-md transition"
                >
                    {/* Top */}

                    <div className="flex items-start gap-4">
                        <div className="w-10 h-10  rounded-full bg-gradient-to-br from-[#5458E8] to-[#2FA8F9] flex items-center justify-center text-white text-[15px] font-bold">
                            {barber.initials}
                        </div>

                        <div className="flex-1">
                            <h2 className="text-[16px] font-semibold text-[#111827] leading-none">
                                {barber.name}
                            </h2>

                            <p className="text-[11px] text-[#667085] mt-2">
                                {barber.branch}
                            </p>

                            <div className="flex items-center gap-2 mt-4">
                                <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-[#ECE9FF] text-[#5458E8] text-[11px] font-medium">
                                    <Star
                                        size={11}
                                        className="fill-[#5458E8] text-[#5458E8]"
                                    />
                                    {barber.rating}
                                </div>

                                <div
                                    className={`px-3 py-1 rounded-full text-[11px] font-medium capitalize ${badgeStyle(
                                        barber.status
                                    )}`}
                                >
                                    {barber.status}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Stats */}

                    <div className="grid grid-cols-3 text-center mt-6">
                        <div>
                            <p className="text-[10px] uppercase text-[#667085]">
                                Revenue
                            </p>

                            <h3 className="text-[15px] font-semibold text-[#111827] mt-1">
                                {barber.revenue}
                            </h3>
                        </div>

                        <div>
                            <p className="text-[10px] uppercase text-[#667085]">
                                Bookings
                            </p>

                            <h3 className="text-[15px] font-semibold text-[#111827] mt-1">
                                {barber.bookings}
                            </h3>
                        </div>

                        <div>
                            <p className="text-[10px] uppercase text-[#667085]">
                                EXP
                            </p>

                            <h3 className="text-[15px] font-semibold text-[#111827] mt-1">
                                {barber.exp}
                            </h3>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default AllBarbers;