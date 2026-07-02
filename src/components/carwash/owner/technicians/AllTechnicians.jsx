"use client";

import { Star } from "lucide-react";

const technicians = [
  {
    initials: "AK",
    name: "Arjun Kapoor",
    branch: "SlotSync HQ — Bandra",
    skills: ["Ceramic", "PPF", "Detailing"],
    active: 3,
    done: 184,
    revenue: "₹3,12,000",
    rating: 4.9,
    exp: "7y exp",
    attendance: 96,
  },
  {
    initials: "VS",
    name: "Vikram Singh",
    branch: "SlotSync HQ — Bandra",
    skills: ["Mechanical", "AC", "Electrical"],
    active: 2,
    done: 221,
    revenue: "₹2,68,000",
    rating: 4.7,
    exp: "9y exp",
    attendance: 92,
  },
  {
    initials: "SK",
    name: "Sana Khurana",
    branch: "SlotSync Andheri West",
    skills: ["Inspection", "Detailing"],
    active: 4,
    done: 156,
    revenue: "₹1,98,000",
    rating: 4.8,
    exp: "4y exp",
    attendance: 98,
  },
  {
    initials: "DR",
    name: "Devansh Rao",
    branch: "SlotSync Andheri West",
    skills: ["Car Wash", "Interior"],
    active: 5,
    done: 312,
    revenue: "₹1,42,000",
    rating: 4.5,
    exp: "3y exp",
    attendance: 92,
  },
  {
    initials: "MP",
    name: "Maya Pillai",
    branch: "SlotSync Powai Lakeside",
    skills: ["Ceramic", "Graphene", "PPF"],
    active: 1,
    done: 92,
    revenue: "₹4,21,000",
    rating: 5,
    exp: "8y exp",
    attendance: 91,
  },
  {
    initials: "IS",
    name: "Imran Sayed",
    branch: "SlotSync Powai Lakeside",
    skills: ["Mechanical", "Wheel"],
    active: 3,
    done: 198,
    revenue: "₹1,87,000",
    rating: 4.6,
    exp: "6y exp",
    attendance: 91,
  },
  {
    initials: "TD",
    name: "Tara D'Souza",
    branch: "SlotSync Thane Hiranandani",
    skills: ["Inspection", "QC"],
    active: 2,
    done: 167,
    revenue: "₹1,56,000",
    rating: 4.8,
    exp: "5y exp",
    attendance: 91,
  },
];

export default function AllTechnicians() {
  return (
    <div className="grid grid-cols-3 gap-4">
      {technicians.map((tech, index) => (
        <div
          key={index}
          className="rounded-3xl bg-white p-5 shadow-sm border border-[#eef1f6]"
        >
          {/* Header */}
          <div className="flex justify-between">
            <div className="flex gap-3">
              <div className="flex h-9 w-9 text-xs items-center justify-center rounded-full bg-[#4678E6] font-semibold text-white">
                {tech.initials}
              </div>

              <div>
                <h3 className="text-[16px] font-semibold text-[#1E293B]">
                  {tech.name}
                </h3>
                <p className="text-xs text-[#667085]">{tech.branch}</p>
              </div>
            </div>

            <div className="text-right">
              <div className="flex items-center justify-end gap-1">
                <Star
                  size={12}
                  className="fill-[#FDB022] text-[#FDB022]"
                />
                <span className="font-semibold text-sm">{tech.rating}</span>
              </div>

              <p className="text-xs text-[#667085]">{tech.exp}</p>
            </div>
          </div>

          {/* Skills */}
          <div className="mt-4 flex flex-wrap gap-2">
            {tech.skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full bg-indigo-50 px-2 py-1 font-semibold text-[9px] text-gray-700"
              >
                {skill}
              </span>
            ))}
          </div>

          <div className="my-4 border-t border-slate-100" />

          {/* Stats */}
          <div className="grid grid-cols-3 text-center">
            <div>
              <p className="text-[12px] text-[#667085]">Active</p>
              <p className="font-semibold text-md">{tech.active}</p>
            </div>

            <div>
              <p className="text-[12px] text-[#667085]">Done</p>
              <p className="font-semibold text-md">{tech.done}</p>
            </div>

            <div>
              <p className="text-[12px] text-[#667085]">Revenue</p>
              <p className="font-semibold text-md">{tech.revenue}</p>
            </div>
          </div>

          {/* Attendance */}
          <div className="mt-3">
            <div className="mb-1 flex justify-between text-[11px]">
              <span className="text-[#667085]">Attendance</span>
              <span className="font-medium">{tech.attendance}%</span>
            </div>

            <div className="h-1 overflow-hidden rounded-full bg-[#E8EAFD]">
              <div
                className="h-full rounded-full bg-[#5B4FF2]"
                style={{ width: `${tech.attendance}%` }}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}