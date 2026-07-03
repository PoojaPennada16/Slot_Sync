"use client";

import { useState } from "react";
import Card from "@/components/carwash/common/Card";
import Toggle from "@/components/carwash/common/Toggle";

export default function AllSettings() {
  const [notifications, setNotifications] = useState({
    booking: true,
    checkin: true,
    inspection: false,
    approval: true,
    invoice: true,
    feedback: false,
    promotional: true,
  });

  const notificationItems = [
    { label: "Booking confirmation", key: "booking" },
    { label: "Vehicle check-in", key: "checkin" },
    { label: "Inspection completed", key: "inspection" },
    { label: "Approval required", key: "approval" },
    { label: "Invoice generated", key: "invoice" },
    { label: "Feedback request", key: "feedback" },
    { label: "Promotional campaigns", key: "promotional" },
  ];

  return (
    <div className="grid grid-cols-12 gap-6">
      {/* Business Profile */}
      <Card className="col-span-8 p-5">
        <h2 className="text-[16px] font-bold tracking-[-0.03em] text-[#0F172A]">
          Business profile
        </h2>

        <div className="mt-4 grid grid-cols-2 gap-x-6 gap-y-4">
          {/* Business Name */}
          <div>
            <label className="ml-2 mb-1 block text-[12px] font-semibold uppercase tracking-wide text-[#667085]">
              Business name
            </label>
            <input
              type="text"
              defaultValue="SlotSync Auto Pvt. Ltd."
              className="h-[36px] w-full rounded-xl border border-[#D7DDEA] bg-white px-5 text-[13px] text-[#0F172A] shadow-[0_3px_10px_rgba(15,23,42,0.06)] outline-none transition focus:border-[#5B52EA]"
            />
          </div>

          {/* GSTIN */}
          <div>
            <label className="ml-2 mb-1 block text-[12px] font-semibold uppercase tracking-wide text-[#667085]">
              GSTIN
            </label>
            <input
              type="text"
              defaultValue="27ABCDE1234F1Z5"
              className="h-[36px] w-full rounded-xl border border-[#D7DDEA] bg-white px-5 text-[13px] text-[#0F172A] shadow-[0_3px_10px_rgba(15,23,42,0.06)] outline-none transition focus:border-[#5B52EA]"
            />
          </div>

          {/* Owner Email */}
          <div>
            <label className="ml-2 mb-1 block text-[12px] font-semibold uppercase tracking-wide text-[#667085]">
              Owner email
            </label>
            <input
              type="email"
              defaultValue="aditya@slotsync.io"
              className="h-[36px] w-full rounded-xl border border-[#D7DDEA] bg-white px-5 text-[13px] text-[#0F172A] shadow-[0_3px_10px_rgba(15,23,42,0.06)] outline-none transition focus:border-[#5B52EA]"
            />
          </div>

          {/* Support Phone */}
          <div>
            <label className="ml-2 mb-1 block text-[12px] font-semibold uppercase tracking-wide text-[#667085]">
              Support phone
            </label>
            <input
              type="text"
              defaultValue="+91 98200 00000"
              className="h-[36px] w-full rounded-xl border border-[#D7DDEA] bg-white px-5 text-[13px] text-[#0F172A] shadow-[0_3px_10px_rgba(15,23,42,0.06)] outline-none transition focus:border-[#5B52EA]"
            />
          </div>

          {/* Tax */}
          <div>
            <label className="ml-2 mb-1 block text-[12px] font-semibold uppercase tracking-wide text-[#667085]">
              Default tax rate (%)
            </label>
            <input
              type="number"
              defaultValue="18"
              className="h-[36px] w-full rounded-xl border border-[#D7DDEA] bg-white px-5 text-[13px] text-[#0F172A] shadow-[0_3px_10px_rgba(15,23,42,0.06)] outline-none transition focus:border-[#5B52EA]"
            />
          </div>

          {/* Currency */}
          <div>
            <label className="ml-2 mb-1 block text-[12px] font-semibold uppercase tracking-wide text-[#667085]">
              Currency
            </label>
            <input
              type="text"
              defaultValue="INR (₹)"
              className="h-[36px] w-full rounded-xl border border-[#D7DDEA] bg-white px-5 text-[13px] text-[#0F172A] shadow-[0_3px_10px_rgba(15,23,42,0.06)] outline-none transition focus:border-[#5B52EA]"
            />
          </div>
        </div>

        <button className="mt-8 inline-flex h-[38px] items-center justify-center rounded-xl bg-gradient-to-r from-[#5B52EA] to-[#2F9BDB] px-6 text-[15px] font-semibold text-white shadow-[0_10px_30px_rgba(91,82,234,0.24)] transition hover:opacity-95">
          Save changes
        </button>
      </Card>

      {/* Notifications */}
      <Card className="col-span-4 p-5">
        <h2 className="text-[16px] font-bold tracking-[-0.03em] text-[#0F172A]">
          Notifications
        </h2>

        <div className="mt-4 space-y-4">
          {notificationItems.map((item) => (
            <div
              key={item.key}
              className="flex items-center justify-between"
            >
              <p className="text-[14px] font-medium text-[#0F172A]">
                {item.label}
              </p>

              <Toggle
                checked={notifications[item.key]}
                onChange={() =>
                  setNotifications((prev) => ({
                    ...prev,
                    [item.key]: !prev[item.key],
                  }))
                }
              />
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}