"use client";

import { Bell, Check } from "lucide-react";

export default function Notifications() {
  const notifications = [
    {
      id: 1,
      title: "New booking pending approval",
      subtitle: "dfegh • Walk-In",
      time: "30/6/2026, 2:23:33 pm",
    },
    {
      id: 2,
      title: "Leave request",
      subtitle: "Rohan Iyer requested leave",
      time: "23/6/2026, 12:19:39 pm",
    },
    {
      id: 3,
      title: "Leave approved",
      subtitle: "Rohan Iyer",
      time: "23/6/2026, 12:19:12 pm",
    },
    {
      id: 4,
      title: "Booking approved",
      subtitle: "Anjali • Hair Spa",
      time: "21/6/2026, 10:42:18 am",
    },
    {
      id: 5,
      title: "Staff added successfully",
      subtitle: "New stylist joined your salon",
      time: "20/6/2026, 8:10:44 am",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f6f4fb] via-[#f7f5f6] to-[#eef8fb] mr-2">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-[26px] font-bold text-[#111827] leading-none">
            Notifications
          </h1>

          <p className="mt-2 text-[11px] text-[#6B7280]">
            Real-time alerts across approvals, bookings and leaves.
          </p>
        </div>

        <button className="flex h-10 items-center gap-2 rounded-full border border-[#D9DCE8] bg-white px-5 text-[12px] font-medium text-[#1F2937] transition hover:bg-gray-50">
          <Check size={15} strokeWidth={2.2} />
          Mark all as read
        </button>
      </div>

      {/* Notification List */}
      <div className="mt-6 space-y-3">
        {notifications.map((item) => (
          <div
            key={item.id}
            className="flex items-start gap-3 rounded-2xl bg-white px-5 py-4 shadow-sm"
          >
            {/* Icon */}
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#ECECFF]">
              <Bell
                size={16}
                className="text-[#6E6BF6]"
                strokeWidth={2}
              />
            </div>

            {/* Content */}
            <div className="flex-1">
              <h3 className="text-[15px] font-semibold text-[#4B5563]">
                {item.title}
              </h3>

              <p className="mt-1 text-[12px] text-[#7B8495]">
                {item.subtitle}
              </p>

              <p className="mt-1 text-[10px] text-[#8F96A8]">
                {item.time}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}