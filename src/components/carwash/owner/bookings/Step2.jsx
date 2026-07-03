"use client";

import ReusableDropdown from "../../common/ReusableDropdown";

export default function Step2({
  vehicle,
  setVehicle,
  error,
}) {
  const vehicles = [
    "Hyundai Creta • MH 14 BN 2211",
    "Honda City • MH 12 AB 4567",
    "Tata Nexon • MH 01 XY 9876",
    "Kia Seltos • MH 14 PQ 7654",
    "Maruti Baleno • MH 02 KL 4521",
    "Toyota Fortuner • MH 04 RS 1122",
  ];

  return (
    <div className="mt-3">
      <ReusableDropdown
        label="Vehicle"
        placeholder="Select customer vehicle"
        value={vehicle}
        onChange={(value) => {
          setVehicle(value);
        }}
        options={vehicles}
      />

      {error && (
        <p className="mt-2 ml-2 text-[13px] font-medium text-[#E5484D]">
          {error}
        </p>
      )}
    </div>
  );
}