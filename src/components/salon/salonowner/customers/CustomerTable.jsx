"use client";

import React from "react";

const customers = [
  {
    id: 1,
    name: "Kiara Joshi",
    phone: "+91 9970411227",
    lastVisit: "2026-04-01",
    visits: 39,
    lifetime: "₹13,165",
  },
  {
    id: 2,
    name: "Aarav Iyer",
    phone: "+91 9886858919",
    lastVisit: "2026-04-18",
    visits: 16,
    lifetime: "₹67,326",
  },
  {
    id: 3,
    name: "Saanvi Patel",
    phone: "+91 9240527849",
    lastVisit: "2026-04-22",
    visits: 3,
    lifetime: "₹11,472",
  },
  {
    id: 4,
    name: "Aditya Singh",
    phone: "+91 9977013957",
    lastVisit: "2026-04-16",
    visits: 35,
    lifetime: "₹1,774",
  },
  {
    id: 5,
    name: "Kabir Khan",
    phone: "+91 9909516429",
    lastVisit: "2026-05-23",
    visits: 40,
    lifetime: "₹50,678",
  },
  {
    id: 6,
    name: "Ananya Rao",
    phone: "+91 9988776655",
    lastVisit: "2026-05-12",
    visits: 18,
    lifetime: "₹23,450",
  },
  {
    id: 7,
    name: "Rohan Mehta",
    phone: "+91 9876543210",
    lastVisit: "2026-05-05",
    visits: 12,
    lifetime: "₹9,760",
  },
  {
    id: 8,
    name: "Meera Sharma",
    phone: "+91 9123456789",
    lastVisit: "2026-04-27",
    visits: 22,
    lifetime: "₹34,920",
  },
];

const CustomerTable = () => {
  return (
    <div className="mt-6 overflow-hidden rounded-[22px] bg-white border border-[#E9EDF5] shadow-sm">
      <table className="w-full">
        <thead>
          <tr className="bg-[#F7F8FC] border-b border-[#E7EBF3]">
            <th className="py-4 pl-6 text-left text-[12px] font-semibold uppercase tracking-[0.08em] text-[#667085]">
              Customer
            </th>

            <th className="py-4 text-left text-[12px] font-semibold uppercase tracking-[0.08em] text-[#667085]">
              Phone
            </th>

            <th className="py-4 text-left text-[12px] font-semibold uppercase tracking-[0.08em] text-[#667085]">
              Last Visit
            </th>

            <th className="py-4 text-center text-[12px] font-semibold uppercase tracking-[0.08em] text-[#667085]">
              Visits
            </th>

            <th className="py-4 pr-6 text-right text-[12px] font-semibold uppercase tracking-[0.08em] text-[#667085]">
              Lifetime
            </th>
          </tr>
        </thead>

        <tbody>
          {customers.map((customer) => (
            <tr
              key={customer.id}
              className="border-b border-[#EEF2F6] hover:bg-[#FAFBFC] transition-colors duration-200"
            >
              <td className="py-4 pl-6 text-[13px] font-semibold text-[#111827]">
                {customer.name}
              </td>

              <td className="py-4 text-[13px] font-medium text-[#1F2937]">
                {customer.phone}
              </td>

              <td className="py-4 text-[13px] font-medium text-[#1F2937]">
                {customer.lastVisit}
              </td>

              <td className="py-4 text-center text-[13px] font-medium text-[#1F2937]">
                {customer.visits}
              </td>

              <td className="py-4 pr-6 text-right text-[13px] font-semibold text-[#111827]">
                {customer.lifetime}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerTable;