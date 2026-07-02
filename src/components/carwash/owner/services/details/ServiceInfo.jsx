"use client";

import { User, MapPin } from "lucide-react";

const technicians = [
  "Riya Joshi",
  "Diya Reddy",
  "Vihaan Patel",
  "Rohan Iyer",
  "Vihaan Sharma",
];

const branches = [
  "SlotSync Lounge Pune",
  "SlotSync Lounge Bengaluru",
  "SlotSync Loft Pune",
  "SlotSync Lounge Chennai",
  "SlotSync Atelier Mumbai",
];

function ListCard({ title, icon: Icon, items }) {
  return (
    <div className="rounded-[28px] border border-white/60 bg-white/70 p-4 shadow-[0_8px_30px_rgba(31,41,55,0.06)] backdrop-blur-sm">
      <div className="mb-3 flex items-center gap-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#EEF2FF]">
          <Icon size={15} className="text-[#4B5EE4]" />
        </div>

        <h3 className="text-base font-semibold text-[#101828]">
          {title}
        </h3>
      </div>

      <div className="space-y-1">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between"
          >
            <span className="text-[13px] font-medium text-[#344054]">
              {item}
            </span>

            <span className="rounded-full bg-[#EEF4FF] px-3 py-1 text-xs font-medium text-[#3F63DD]">
              Active
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ServiceInfo() {
  return (
    <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
      <ListCard
        title="Assigned Technicians"
        icon={User}
        items={technicians}
      />

      <ListCard
        title="Available at Branches"
        icon={MapPin}
        items={branches}
      />
    </div>
  );
}