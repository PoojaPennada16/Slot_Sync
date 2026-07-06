"use client";

import React, { useState } from "react";

const BarberEmployment = () => {
  const [selectedServices, setSelectedServices] = useState(["Haircut"]);

  const services = [
    "Haircut",
    "Beard",
    "Coloring",
    "Spa",
    "Facial",
    "Massage",
  ];

  const toggleService = (service) => {
    if (selectedServices.includes(service)) {
      setSelectedServices(
        selectedServices.filter((item) => item !== service)
      );
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };

  return (
    <div className="w-full flex ">
      <div className="w-full max-w-[620px] bg-white rounded-[16px] border border-[#EEF2F6] p-4 shadow-sm">

        {/* Heading */}

        <h2 className="text-[14px] font-semibold text-[#111827] mb-4">
          Employment
        </h2>

        {/* Form */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-3 gap-y-3">

          {/* Branch */}

          <div>
            <label className="block text-[11px] font-medium text-[#667085] mb-1.5">
              Branch
            </label>

            <select className="w-full h-[36px] rounded-full border border-[#D9DEE8] px-3 bg-white text-[11px] outline-none focus:border-[#5458E8]">
              <option>SlotSync Lounge Pune</option>
              <option>SlotSync Lounge Bengaluru</option>
              <option>SlotSync Lounge Chennai</option>
              <option>SlotSync Loft Hyderabad</option>
            </select>
          </div>

          {/* Experience */}

          <div>
            <label className="block text-[11px] font-medium text-[#667085] mb-1.5">
              Experience (yrs)
            </label>

            <input
              type="number"
              defaultValue="1"
              className="w-full h-[36px] rounded-full border border-[#D9DEE8] px-3 text-[11px] outline-none focus:border-[#5458E8]"
            />
          </div>

          {/* Specialization */}

          <div>
            <label className="block text-[11px] font-medium text-[#667085] mb-1.5">
              Specialization
            </label>

            <input
              type="text"
              defaultValue="Fades"
              className="w-full h-[36px] rounded-full border border-[#D9DEE8] px-3 text-[11px] outline-none focus:border-[#5458E8]"
            />
          </div>

          {/* Commission */}

          <div>
            <label className="block text-[11px] font-medium text-[#667085] mb-1.5">
              Commission %
            </label>

            <input
              type="number"
              defaultValue="15"
              className="w-full h-[36px] rounded-full border border-[#D9DEE8] px-3 text-[11px] outline-none focus:border-[#5458E8]"
            />
          </div>

          {/* Employment Type */}

          <div>
            <label className="block text-[11px] font-medium text-[#667085] mb-1.5">
              Employment Type
            </label>

            <select className="w-full h-[36px] rounded-full border border-[#D9DEE8] px-3 bg-white text-[11px] outline-none focus:border-[#5458E8]">
              <option>Full Time</option>
              <option>Part Time</option>
              <option>Contract</option>
              <option>Freelancer</option>
            </select>
          </div>

          {/* Emergency Contact */}

          <div>
            <label className="block text-[11px] font-medium text-[#667085] mb-1.5">
              Emergency Contact
            </label>

            <input
              type="tel"
              className="w-full h-[36px] rounded-full border border-[#D9DEE8] px-3 text-[11px] outline-none focus:border-[#5458E8]"
            />
          </div>

        </div>

        {/* Services */}

        <div className="mt-4">

          <label className="block text-[11px] font-medium text-[#667085] mb-2">
            Services
          </label>

          <div className="flex flex-wrap gap-2">

            {services.map((service) => {
              const active = selectedServices.includes(service);

              return (
                <button
                  key={service}
                  type="button"
                  onClick={() => toggleService(service)}
                  className={`h-[28px] px-3 rounded-full border text-[11px] font-medium transition-all duration-200 ${
                    active
                      ? "border-[#5458E8] bg-[#EEF1FF] text-[#5458E8]"
                      : "border-[#D9DEE8] bg-white text-[#1D2433] hover:border-[#5458E8]"
                  }`}
                >
                  {service}
                </button>
              );
            })}

          </div>

        </div>

      </div>
    </div>
  );
};

export default BarberEmployment;