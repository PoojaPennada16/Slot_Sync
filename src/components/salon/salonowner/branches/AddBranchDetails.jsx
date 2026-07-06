"use client";

import React from "react";
import { Upload } from "lucide-react";

const services = [
    "Haircut",
    "Beard Trim",
    "Hair Spa",
    "Coloring",
    "Facial",
    "Massage",
    "Bridal",
    "Keratin",
];

const amenities = [
    "Parking",
    "WiFi",
    "AC",
    "Wallet Payments",
    "Online Payments",
    "Cafe",
    "Lounge",
];

const AddBranchDetails = () => {
    return (
        <div className="space-y-4">
            {/* Operations */}

            <div className="bg-white rounded-[20px] p-5 shadow-sm">
                <h2 className="text-[14px] font-semibold text-[#111827] mb-5">
                    Operations
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    {/* Opening Time */}

                    <div>
                        <label className="block text-[11px] text-[#667085] mb-2">
                            Opening Time
                        </label>

                        <input
                            type="time"
                            defaultValue="10:00"
                            className="w-full h-[40px] px-3 rounded-full border border-[#E4E7EC] text-[13px] outline-none"
                        />
                    </div>

                    {/* Closing Time */}

                    <div>
                        <label className="block text-[11px] text-[#667085] mb-2">
                            Closing Time
                        </label>

                        <input
                            type="time"
                            defaultValue="21:00"
                            className="w-full h-[40px] px-3 rounded-full border border-[#E4E7EC] text-[13px] outline-none"
                        />
                    </div>

                    {/* Chairs */}

                    <div>
                        <label className="block text-[11px] text-[#667085] mb-2">
                            Chairs
                        </label>

                        <input
                            type="number"
                            min="1"
                            defaultValue="4"
                            className="w-full h-[40px] px-3 rounded-full border border-[#E4E7EC] text-[13px] outline-none"
                        />
                    </div>

                    {/* Staff */}

                    <div>
                        <label className="block text-[11px] text-[#667085] mb-2">
                            Staff
                        </label>

                        <input
                            type="number"
                            min="1"
                            defaultValue="6"
                            className="w-full h-[40px] px-3 rounded-full border border-[#E4E7EC] text-[13px] outline-none"
                        />
                    </div>
                </div>

                {/* Services */}

                <div className="mt-5">
                    <h3 className="text-[11px] text-[#667085] mb-3">
                        Available Services
                    </h3>

                    <div className="flex flex-wrap gap-2">
                        {services.map((service) => (
                            <button
                                key={service}
                                className="h-[34px] px-4 rounded-full border border-[#E4E7EC] text-[12px] text-[#1D2433]"
                            >
                                {service}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Amenities */}

                <div className="mt-5">
                    <h3 className="text-[11px] text-[#667085] mb-3">
                        Amenities
                    </h3>

                    <div className="flex flex-wrap gap-2">
                        {amenities.map((item) => (
                            <button
                                key={item}
                                className={`h-[34px] px-4 rounded-full border text-[12px]
                  ${item === "WiFi" || item === "AC"
                                        ? "border-[#5458E8] text-[#5458E8]"
                                        : "border-[#E4E7EC] text-[#1D2433]"
                                    }`}
                            >
                                {item}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Documents */}

            <div className="bg-white rounded-[16px] p-4 shadow-sm">
                <h2 className="text-[12px] font-semibold text-[#111827] mb-4">
                    Documents
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <input
                        type="text"
                        placeholder="GST Number"
                        className="w-full h-[36px] px-3 rounded-full border border-[#E4E7EC] text-[12px] outline-none"
                    />

                    <input
                        type="text"
                        placeholder="Business Registration Number"
                        className="w-full h-[36px] px-3 rounded-full border border-[#E4E7EC] text-[12px] outline-none"
                    />

                    <button className="h-[55px] rounded-[12px] border border-dashed border-[#D0D5DD] flex items-center justify-center gap-2 text-[11px] text-[#667085]">
                        <Upload size={13} />
                        Upload Branch Images
                    </button>

                    <button className="h-[55px] rounded-[12px] border border-dashed border-[#D0D5DD] flex items-center justify-center gap-2 text-[11px] text-[#667085]">
                        <Upload size={13} />
                        Upload Lease / Ownership Proof
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddBranchDetails;