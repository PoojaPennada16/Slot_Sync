"use client";

import ReusableDropdown from "../../common/ReusableDropdown";

export default function Step5({
  technician,
  setTechnician,
  customer,
  vehicle,
  service,
  date,
  time,
  error,
  onCreateBooking,
}) {
  const technicians = [
    "Tara D'Souza",
    "Rahul Sharma",
    "Ankit Patel",
    "Vikram Singh",
    "Sneha Joshi",
  ];

  return (
    <div className="mt-1 space-y-3">
      {/* Technician */}
      <div>
        <ReusableDropdown
          label="Technician"
          placeholder="Assign technician"
          value={technician}
          onChange={setTechnician}
          options={technicians}
        />

        {error && (
          <p className="mt-2 ml-2 text-[13px] font-medium text-[#E5484D]">
            {error}
          </p>
        )}
      </div>

      {/* Summary */}
      <div className="rounded-[22px] bg-sky-50 p-3">
        <div className="space-y-2 text-[12px] text-[#0F172A]">
          <p>
            <span className="text-[#667085]">Customer:</span>{" "}
            {customer || "-"}
          </p>

          <p>
            <span className="text-[#667085]">Vehicle:</span>{" "}
            {vehicle || "-"}
          </p>

          <p>
            <span className="text-[#667085]">Service:</span>{" "}
            {service || "-"}
          </p>

          <p>
            <span className="text-[#667085]">Slot:</span>{" "}
            {date && time ? `${date} ${time}` : "-"}
          </p>

          <p>
            <span className="text-[#667085]">Amount:</span>{" "}
            ₹24,999
          </p>
        </div>
      </div>
    </div>
  );
}