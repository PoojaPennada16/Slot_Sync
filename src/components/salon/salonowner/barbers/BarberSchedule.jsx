"use client";

import React, { useState } from "react";

const BarberSchedule = () => {
  const [selectedDays, setSelectedDays] = useState([
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
  ]);

  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const toggleDay = (day) => {
    if (selectedDays.includes(day)) {
      setSelectedDays(selectedDays.filter((d) => d !== day));
    } else {
      setSelectedDays([...selectedDays, day]);
    }
  };

  return (
    <div className="w-full flex ">
      <div className="w-full max-w-[620px] bg-white rounded-[16px] p-4 shadow-sm">
        {/* Heading */}
        <h2 className="text-[14px] font-bold text-[#111827] mb-4">
          Schedule
        </h2>

        {/* Working Days */}
        <div className="mb-5">
          <label className="block text-[12px] font-medium text-[#667085] mb-2">
            Working Days
          </label>

          <div className="flex flex-wrap gap-2">
            {days.map((day) => {
              const active = selectedDays.includes(day);

              return (
                <button
                  key={day}
                  type="button"
                  onClick={() => toggleDay(day)}
                  className={`h-[30px] px-4 rounded-full border transition-all duration-200 text-[11px] font-medium ${
                    active
                      ? "bg-[#EEF1FF] border-[#5458E8] text-[#5458E8]"
                      : "bg-white border-[#D9DEE8] text-[#344054] hover:border-[#5458E8]"
                  }`}
                >
                  {day}
                </button>
              );
            })}
          </div>
        </div>

        {/* Time Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-4">
          {/* Work Start */}
          <div>
            <label className="block text-[12px] font-medium text-[#667085] mb-2">
              Work Start
            </label>

            <input
              type="time"
              defaultValue="09:00"
              className="w-full h-[36px] rounded-full border border-[#D9DEE8] px-4 text-[11px] outline-none focus:border-[#5458E8]"
            />
          </div>

          {/* Work End */}
          <div>
            <label className="block text-[12px] font-medium text-[#667085] mb-2">
              Work End
            </label>

            <input
              type="time"
              defaultValue="18:00"
              className="w-full h-[36px] rounded-full border border-[#D9DEE8] px-4 text-[11px] outline-none focus:border-[#5458E8]"
            />
          </div>

          {/* Break Start */}
          <div>
            <label className="block text-[12px] font-medium text-[#667085] mb-2">
              Break Start
            </label>

            <input
              type="time"
              defaultValue="13:00"
              className="w-full h-[36px] rounded-full border border-[#D9DEE8] px-4 text-[11px] outline-none focus:border-[#5458E8]"
            />
          </div>

          {/* Break End */}
          <div>
            <label className="block text-[12px] font-medium text-[#667085] mb-2">
              Break End
            </label>

            <input
              type="time"
              defaultValue="14:00"
              className="w-full h-[36px] rounded-full border border-[#D9DEE8] px-4 text-[11px] outline-none focus:border-[#5458E8]"
            />
          </div>
        </div>

        {/* Notes */}
        <div className="mt-5">
          <label className="block text-[12px] font-medium text-[#667085] mb-2">
            Notes
          </label>

          <textarea
            rows={3}
            placeholder="Add any scheduling notes..."
            className="w-full rounded-[14px] border border-[#D9DEE8] p-3 text-[11px] outline-none resize-none focus:border-[#5458E8]"
          />
        </div>
      </div>
    </div>
  );
};

export default BarberSchedule;