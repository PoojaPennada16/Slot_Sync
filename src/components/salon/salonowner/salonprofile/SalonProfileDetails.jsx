"use client";

import {
  Phone,
  Mail,
  Globe,
  Camera,
  Clock3,
  CalendarDays,
  Car,
  Wifi,
  Snowflake,
  PawPrint,
  Wallet,
  CreditCard,
} from "lucide-react";

export default function SalonProfileDetails() {
  const details = [
    {
      title: "CONTACT NUMBER",
      value: "+91 98765 43210",
      icon: Phone,
    },
    {
      title: "EMAIL",
      value: "hello@slotsync.studio",
      icon: Mail,
    },
    {
      title: "WEBSITE",
      value: "https://slotsync.studio",
      icon: Globe,
    },
    {
      title: "INSTAGRAM",
      value: "@slotsync.studio",
      icon: Camera,
    },
    {
      title: "WORKING HOURS",
      value: "Mon–Sun • 10:00 – 21:00",
      icon: Clock3,
    },
    {
      title: "HOLIDAY",
      value: "2nd Tuesday of every month",
      icon: CalendarDays,
    },
  ];

  const amenities = [
    { icon: Car, label: "Parking" },
    { icon: Wifi, label: "WiFi" },
    { icon: Snowflake, label: "AC" },
    { icon: PawPrint, label: "Pet Friendly" },
    { icon: Wallet, label: "Wallet Payments" },
    { icon: CreditCard, label: "Online Payments" },
  ];

  return (
    <div className="grid grid-cols-1 xl:grid-cols-[2fr_1fr] gap-4 mt-4">
      {/* Contact & Hours */}
      <div className="bg-white rounded-[20px] p-5 shadow-sm">
        <h2 className="text-[15px] font-bold text-slate-900 mb-4">
          Contact & Hours
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {details.map((item, index) => (
            <div
              key={index}
              className="border border-slate-200 rounded-[16px] p-3"
            >
              <p className="text-[9px] tracking-wider text-slate-500 uppercase mb-1">
                {item.title}
              </p>

              <p className="text-[14px] text-slate-900 font-medium">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Amenities */}
      <div className="bg-white rounded-[20px] p-5 shadow-sm">
        <h2 className="text-[15px] font-bold text-slate-900 mb-4">
          Amenities
        </h2>

        <div className="grid grid-cols-2 gap-3">
          {amenities.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="border border-slate-200 rounded-[16px] px-3 py-3 flex items-center gap-2"
              >
                <div className="w-4 h-4 flex items-center justify-center text-indigo-500 text-[10px] font-bold">
                  ✓
                </div>

                <Icon
                  size={14}
                  className="text-indigo-500"
                />

                <span className="text-[13px] text-slate-900">
                  {item.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}