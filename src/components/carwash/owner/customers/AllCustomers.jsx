"use client";

import { Star } from "lucide-react";
import Link from "next/link";

const customers = [
  {
    id: 1,
    initials: "AM",
    name: "Aryan Malhotra",
    phone: "+91 98200 12345",
    email: "aryan.m@gmail.com",
    vehicles: 2,
    bookings: 14,
    value: "₹1,84,500",
    rating: "5",
  },
  {
    id: 2,
    initials: "RB",
    name: "Riya Bhandari",
    phone: "+91 99670 88123",
    email: "riya.b@outlook.com",
    vehicles: 1,
    bookings: 8,
    value: "₹72,400",
    rating: "4.8",
  },
  {
    id: 3,
    initials: "KV",
    name: "Karan Verma",
    phone: "+91 98904 32100",
    email: "karan@vermatech.in",
    vehicles: 3,
    bookings: 22,
    value: "₹4,21,000",
    rating: "4.9",
  },
  {
    id: 4,
    initials: "IN",
    name: "Ishita Nair",
    phone: "+91 97689 56712",
    email: "ishita.nair@gmail.com",
    vehicles: 1,
    bookings: 5,
    value: "₹34,800",
    rating: "4.6",
  },
  {
    id: 5,
    initials: "RD",
    name: "Rohan Desai",
    phone: "+91 98213 76542",
    email: "rohan.d@desaiventures.com",
    vehicles: 4,
    bookings: 31,
    value: "₹6,12,300",
    rating: "4.9",
  },
  {
    id: 6,
    initials: "AK",
    name: "Anaya Kapadia",
    phone: "+91 99303 21987",
    email: "anaya.k@gmail.com",
    vehicles: 1,
    bookings: 3,
    value: "₹21,800",
    rating: "4.7",
  },
];

export default function AllCustomers() {
  return (
    <div className="overflow-hidden rounded-3xl border border-[#E6EAF2] bg-white shadow-lg">
      <div className="overflow-x-auto">
        <table className="w-full min-w-full">
          <thead className="bg-slate-100">
            <tr className="border-b border-[#E8EDF5]">
              <th className="px-3 py-3 text-left text-[12px] font-semibold uppercase tracking-wide text-[#5B667A]">
                Customer
              </th>
              <th className="px-3 py-3 text-left text-[12px] font-semibold uppercase tracking-wide text-[#5B667A]">
                Contact
              </th>
              <th className="px-3 py-3 text-left text-[12px] font-semibold uppercase tracking-wide text-[#5B667A]">
                Vehicles
              </th>
              <th className="px-3 py-3 text-left text-[12px] font-semibold uppercase tracking-wide text-[#5B667A]">
                Bookings
              </th>
              <th className="px-3 py-3 text-left text-[12px] font-semibold uppercase tracking-wide text-[#5B667A]">
                Lifetime Value
              </th>
              <th className="px-3 py-3 text-left text-[12px] font-semibold uppercase tracking-wide text-[#5B667A]">
                Rating
              </th>
            </tr>
          </thead>

          <tbody>
            {customers.map((customer) => (
              <tr
                key={customer.id}
                className="border-b border-[#EEF2F7] last:border-b-0 hover:bg-[#FAFBFD]"
              >
                <td className="px-3 py-3">
                  <div className="flex items-center gap-4">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-[#5965E8] to-[#2E8DD8] text-xs font-bold text-white">
                      {customer.initials}
                    </div>

                    <Link
                      href={`/carwash/owner/customers/${customer.id}`}
                      className="text-[14px] font-semibold text-[#1F2937] hover:text-[#5563F0] transition-colors"
                    >
                      {customer.name}
                    </Link>
                  </div>
                </td>

                <td className="px-3 py-3">
                  <div className="text-[14px] font-medium text-[#1F2937]">
                    {customer.phone}
                  </div>
                  <div className="mt-1 text-[12px] text-[#667085]">
                    {customer.email}
                  </div>
                </td>

                <td className="px-3 py-3">
                  <span className="inline-flex h-6 min-w-[26px] items-center justify-center rounded-full bg-[#EEF3FF] px-1 text-[12px] font-semibold text-[#2F3C55]">
                    {customer.vehicles}
                  </span>
                </td>

                <td className="px-3 py-3 text-[14px] font-medium text-[#1F2937]">
                  {customer.bookings}
                </td>

                <td className="px-3 py-3 text-[14px] font-bold text-[#1F2937]">
                  {customer.value}
                </td>

                <td className="px-3 py-3">
                  <div className="flex items-center gap-2">
                    <Star
                      size={14}
                      className="fill-[#FFB21D] text-[#FFB21D]"
                    />
                    <span className="text-[14px] font-semibold text-[#1F2937]">
                      {customer.rating}
                    </span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}