"use client";

import React from "react";
import { CalendarDays } from "lucide-react";

const BarberPersonal = () => {
  return (
    <div className="w-full bg-white rounded-[24px] border border-[#EEF2F6] p-5 shadow-sm">

      {/* Heading */}

      <h2 className="text-[16px] font-semibold text-[#111827] mb-5">
        Personal
      </h2>

      {/* Form */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-4">

        {/* Full Name */}

        <div>
          <label className="block text-[12px] font-medium text-[#667085] mb-1.5">
            Full Name <span className="text-red-500">*</span>
          </label>

          <input
            type="text"
            className="w-full h-[40px] rounded-full border border-[#D9E0EA] px-4 text-[13px] outline-none bg-white focus:border-[#5458E8]"
          />
        </div>

        {/* Mobile */}

        <div>
          <label className="block text-[12px] font-medium text-[#667085] mb-1.5">
            Mobile <span className="text-red-500">*</span>
          </label>

          <input
            type="text"
            className="w-full h-[40px] rounded-full border border-[#D9E0EA] px-4 text-[13px] outline-none bg-white focus:border-[#5458E8]"
          />
        </div>

        {/* Email */}

        <div>
          <label className="block text-[12px] font-medium text-[#667085] mb-1.5">
            Email
          </label>

          <input
            type="email"
            className="w-full h-[40px] rounded-full border border-[#D9E0EA] px-4 text-[13px] outline-none bg-white focus:border-[#5458E8]"
          />
        </div>

        {/* DOB */}

        <div>
          <label className="block text-[12px] font-medium text-[#667085] mb-1.5">
            DOB
          </label>

          <div className="relative">
            <input
              type="text"
              placeholder="dd-mm-yyyy"
              className="w-full h-[40px] rounded-full border border-[#D9E0EA] pl-4 pr-10 text-[13px] placeholder:text-[#667085] outline-none bg-white focus:border-[#5458E8]"
            />

            <CalendarDays
              size={14}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-[#667085]"
            />
          </div>
        </div>

        {/* Gender */}

        <div>
          <label className="block text-[12px] font-medium text-[#667085] mb-1.5">
            Gender
          </label>

          <select className="w-full h-[40px] rounded-full border border-[#D9E0EA] px-4 text-[13px] outline-none bg-white focus:border-[#5458E8]">
            <option>M</option>
            <option>Female</option>
            <option>Other</option>
          </select>
        </div>

        {/* Address */}

        <div>
          <label className="block text-[12px] font-medium text-[#667085] mb-1.5">
            Address
          </label>

          <input
            type="text"
            className="w-full h-[40px] rounded-full border border-[#D9E0EA] px-4 text-[13px] outline-none bg-white focus:border-[#5458E8]"
          />
        </div>

      </div>

    </div>
  );
};

export default BarberPersonal;