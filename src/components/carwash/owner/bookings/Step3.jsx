"use client";

import ReusableDropdown from "./ReusableDropdown";

export default function Step3({
  service,
  setService,
  branch,
  setBranch,
  serviceError,
  branchError,
}) {
  const services = [
    "Premium Foam Wash",
    "Interior Deep Clean",
    "Ceramic Coating",
    "PPF Installation",
    "Engine Detailing",
    "Exterior Detailing",
    "Waterless Wash",
    "Bike Premium Wash",
  ];

  const branches = [
    "SlotSync HQ — Bandra",
    "SlotSync Andheri West",
    "SlotSync Powai Lakeside",
    "SlotSync Thane Hiranandani",
  ];

  return (
    <div className="mt-3 grid grid-cols-2 gap-4">
      {/* Service */}
      <div>
        <ReusableDropdown
          label="Service"
          placeholder="Select service"
          value={service}
          onChange={(value) => {
            setService(value);
          }}
          options={services}
        />

        {serviceError && (
          <p className="mt-2 ml-2 text-[13px] font-medium text-[#E5484D]">
            {serviceError}
          </p>
        )}
      </div>

      {/* Branch */}
      <div>
        <ReusableDropdown
          label="Branch"
          placeholder="Select branch"
          value={branch}
          onChange={(value) => {
            setBranch(value);
          }}
          options={branches}
        />

        {branchError && (
          <p className="mt-2 ml-2 text-[13px] font-medium text-[#E5484D]">
            {branchError}
          </p>
        )}
      </div>
    </div>
  );
}