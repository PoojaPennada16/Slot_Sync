"use client";

import { useState } from "react";
import {
  MoreVertical,
  Tag,
  Pencil,
  Trash2,
} from "lucide-react";

import Card from "@/components/carwash/common/Card";
import CardMenu from "@/components/carwash/common/CardMenu";

const coupons = [
  {
    id: 1,
    title: "Monsoon Detailer",
    code: "MONSOON25",
    offer: "25% off · min ₹1,500",
    expiry: "Expires 2026-09-30",
    usage: 47,
    revenue: "₹1,84,000",
    customers: 41,
    conversion: "87%",
  },
  {
    id: 2,
    title: "First Visit ₹500 off",
    code: "WELCOME500",
    offer: "₹500 off · min ₹2,500",
    expiry: "Expires 2026-12-31",
    usage: 124,
    revenue: "₹6,12,000",
    customers: 124,
    conversion: "100%",
  },
];

export default function AllCoupons() {
  const [openMenu, setOpenMenu] = useState(null);

  const menuItems = (coupon) => [
    {
      label: "Edit",
      icon: <Pencil size={16} />,
      divider: true,
      onClick: () => {
        console.log("Edit", coupon.id);
        setOpenMenu(null);
      },
    },
    {
      label: "Delete",
      icon: <Trash2 size={16} />,
      variant: "delete",
      onClick: () => {
        console.log("Delete", coupon.id);
        setOpenMenu(null);
      },
    },
  ];

  return (
    <div className="grid grid-cols-3 gap-4">
      {coupons.map((coupon) => (
        <Card key={coupon.id} className="relative p-6">
          {/* Header */}
          <div className="flex items-start justify-between">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#C8F0F4]">
              <Tag className="h-4 w-4 text-[#1F2937]" />
            </div>

            <div className="relative">
              <button
                onClick={() =>
                  setOpenMenu(openMenu === coupon.id ? null : coupon.id)
                }
                className="rounded-full p-2 transition hover:bg-[#F5F7FA]"
              >
                <MoreVertical size={17} />
              </button>

              {openMenu === coupon.id && (
                <CardMenu
                  className="absolute right-0 top-10 z-50"
                  items={menuItems(coupon)}
                />
              )}
            </div>
          </div>

          {/* Content */}
          <div className="mt-3">
            <h3 className="text-[17px] font-bold text-[#1D2433]">
              {coupon.title}
            </h3>

            <p className="mt-1 text-[11px] uppercase tracking-wide text-[#667085]">
              {coupon.code}
            </p>

            <p className="mt-2 text-[13px] text-[#1D2433]">
              {coupon.offer}
            </p>

            <p className="text-[11px] text-[#667085]">
              {coupon.expiry}
            </p>
          </div>

          {/* Divider */}
          <div className="my-3 border-t border-[#E6EAF2]" />

          {/* Stats */}
          <div className="grid grid-cols-4 text-center">
            <div>
              <p className="text-[10px] uppercase text-[#667085]">
                Usage
              </p>
              <p className="text-[14px] font-bold text-[#1D2433]">
                {coupon.usage}
              </p>
            </div>

            <div>
              <p className="text-[10px] uppercase text-[#667085]">
                Revenue
              </p>
              <p className="text-[14px] font-bold text-[#1D2433]">
                {coupon.revenue}
              </p>
            </div>

            <div>
              <p className="text-[10px] uppercase text-[#667085]">
                Customers
              </p>
              <p className="text-[14px] font-bold text-[#1D2433]">
                {coupon.customers}
              </p>
            </div>

            <div>
              <p className="text-[10px] uppercase text-[#667085]">
                Conv.
              </p>
              <p className="text-[14px] font-bold text-[#1D2433]">
                {coupon.conversion}
              </p>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}