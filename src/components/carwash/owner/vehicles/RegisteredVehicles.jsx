"use client";

import { CarFront, Fuel, Gauge } from "lucide-react";

const vehicles = [
  {
    id: 1,
    name: "BMW X5 xDrive40i",
    customer: "Aryan Malhotra",
    fuel: "Petrol",
    km: "18,420 km",
    plate: "MH 02 AB 1234",
  },
  {
    id: 2,
    name: "Mercedes GLC 300",
    customer: "Aryan Malhotra",
    fuel: "Petrol",
    km: "26,100 km",
    plate: "MH 04 KL 9981",
  },
  {
    id: 3,
    name: "Audi Q3 Sportback",
    customer: "Riya Bhandari",
    fuel: "Petrol",
    km: "6,840 km",
    plate: "MH 01 XY 7766",
  },
  {
    id: 4,
    name: "Porsche Macan GTS",
    customer: "Karan Verma",
    fuel: "Petrol",
    km: "9,210 km",
    plate: "MH 12 CD 4521",
  },
  {
    id: 5,
    name: "Range Rover Velar",
    customer: "Karan Verma",
    fuel: "Diesel",
    km: "22,890 km",
    plate: "MH 02 PQ 3344",
  },
  {
    id: 6,
    name: "Honda City ZX",
    customer: "Ishita Nair",
    fuel: "Petrol",
    km: "41,200 km",
    plate: "MH 47 GH 1122",
  },
  {
    id: 7,
    name: "Tesla Model Y LR",
    customer: "Rohan Desai",
    fuel: "Electric",
    km: "4,120 km",
    plate: "MH 02 RT 9090",
  },
  {
    id: 8,
    name: "Hyundai Creta SX(O)",
    customer: "Anaya Kapadia",
    fuel: "Diesel",
    km: "19,840 km",
    plate: "MH 14 BN 2211",
  },
];

export default function RegisteredVehicles() {
  return (
    <div className="mt-5 rounded-3xl border border-[#EEF1F5] bg-[#F7FBFC] p-4 shadow-[0_12px_32px_rgba(16,24,40,0.06)]">
      <h2 className="mb-3 text-[17px] font-bold text-[#182230]">
        All registered vehicles
      </h2>

      <div className="grid grid-cols-1 gap-3 xl:grid-cols-3">
        {vehicles.map((vehicle) => (
          <div
            key={vehicle.id}
            className="rounded-[20px] border border-[#E8EDF3] bg-white px-4 py-2 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
          >
            {/* Top */}
            <div className="mb-3 mt-1 flex items-start justify-between">
              <div className="flex h-[34px] w-[34px] items-center justify-center rounded-full bg-[#C9F1F1]">
                <CarFront size={15} className="text-[#0F172A]" />
              </div>

              <span className="rounded-full bg-indigo-50 px-2 py-1 text-[9px] font-bold tracking-[0.14em] text-[#344054]">
                {vehicle.plate}
              </span>
            </div>

            {/* Vehicle Name */}
            <h3 className="text-[14px] font-bold leading-snug text-[#182230]">
              {vehicle.name}
            </h3>

            {/* Customer */}
            <p className="mt-1 text-[12px] font-medium text-[#667085]">
              {vehicle.customer}
            </p>

            {/* Bottom */}
            <div className="mt-4 flex flex-wrap items-center gap-5 text-[11px] text-[#667085]">
              <div className="flex items-center gap-1.5">
                <Fuel size={13} />
                <span>{vehicle.fuel}</span>
              </div>

              <div className="flex items-center gap-1.5">
                <Gauge size={13} />
                <span>{vehicle.km}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}