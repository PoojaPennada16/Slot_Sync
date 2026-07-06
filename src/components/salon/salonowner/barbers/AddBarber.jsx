"use client";

import React from "react";
import BarberPersonal from "./BarberPersonal";
import BarberEmployment from "./BarberEmployment";
import BarberSchedule from "./BarberSchedule";
import BarberDocuments from "./BarberDocuments";

const AddBarber = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F7F5FB] via-[#FAFAFA] to-[#EEF8FB] p-2">

      {/* Header */}

      <div className="flex items-start justify-between mb-7">
        <div>
          <h1 className="text-[30px] font-bold text-[#0F172A]">
            Add Barber
          </h1>

          <p className="text-[15px] text-[#667085] mt-1">
            Full onboarding for a new stylist.
          </p>
        </div>

        {/* Back Button */}

        <button
          onClick={onBack}
          className="h-[32px] px-3 rounded-full border border-[#111827] bg-white text-[12x] font-medium text-[#111827] hover:bg-gray-50 transition-all"
        >
          Back
        </button>
      </div>

      {/* Personal + Submission */}

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-5 items-start">

        {/* Personal */}

        <div className="xl:col-span-8">
          <BarberPersonal />
        </div>

        {/* Submission */}

        <div className="xl:col-span-4">

          <div className="bg-white rounded-[32px] border border-[#EEF2F6] shadow-sm p-4">

            {/* Heading */}

            <h2 className="text-[15px] font-semibold text-[#111827]">
              Submission
            </h2>

            {/* Description */}

            <p className="mt-5 text-[12px] leading-8 text-[#667085]">
              Submitting creates a pending approval request.
              The barber will not be available for booking
              until approved by the Super Admin.
            </p>

            {/* Submit */}

            <button
             className="mt-8 w-full h-[34px] rounded-full bg-gradient-to-r from-[#5458E8] to-[#1EA7FD] text-white text-[14px] font-semibold hover:opacity-95 transition-all"

            >
              Submit for Approval
            </button>

            {/* Draft */}

            <button
              className="mt-4 w-full h-[34px] rounded-full border border-[#111827] bg-white text-[#111827] text-[14px] font-medium hover:bg-gray-50 transition-all"

            >
              Save as Draft
            </button>

          </div>

        </div>

      </div>

      {/* Employment */}

      <div className="mt-7">
        <BarberEmployment />
      </div>

      {/* Schedule */}

      <div className="mt-7">
        <BarberSchedule />
      </div>

      {/* Documents */}

      <div className="mt-7 pb-8">
        <BarberDocuments />
      </div>

    </div>
  );
};

export default AddBarber;