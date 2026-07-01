
"use client";

import React from "react";
import { Building2 } from "lucide-react";
import PortalCard from "@/components/common/card";

export default function DepartmentsPage() {
  const departments = [
    {
      title: "Cardiology",
      desc: "Heart and cardiovascular care",
      doctors: 6,
      visits: 410,
      revenue: "₹1,49,600",
    },
    {
      title: "Neurology",
      desc: "Brain, spine and nervous system",
      doctors: 2,
      visits: 110,
      revenue: "₹74,000",
    },
    {
      title: "Orthopedics",
      desc: "Bones, joints and musculoskeletal",
      doctors: 0,
      visits: 0,
      revenue: "₹0",
    },
    {
      title: "Pediatrics",
      desc: "Child and infant healthcare",
      doctors: 4,
      visits: 240,
      revenue: "₹77,600",
    },
    {
      title: "Dermatology",
      desc: "Skin, hair and nail conditions",
      doctors: 5,
      visits: 383,
      revenue: "₹1,08,000",
    },
    {
      title: "ENT",
      desc: "Ear, nose and throat care",
      doctors: 2,
      visits: 124,
      revenue: "₹35,500",
    },
  ];

  return (
    <div className="p-8 bg-slate-50 min-h-screen font-sans">
      {/* Header Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Departments</h1>
        <p className="text-sm text-slate-500 mt-1">10 departments</p>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {departments.map((dept, index) => (
          <PortalCard
            key={index}
           
            title={dept.title}
            icon={<Building2 className="w-6 h-6 text-indigo-600" />}
            iconBg="bg-indigo-50/70"
            // We pass the layout details inside the description slot
            description={
              <div className="flex flex-col h-full justify-between">
                {/* Department Description Text */}
                <p className="text-slate-400 text-sm font-medium mb-4">
                  {dept.desc}
                </p>

                {/* Metrics Footer Row */}
                <div className="flex items-center gap-4 text-slate-900 text-sm font-semibold">
                  <span>
                    {dept.doctors}{" "}
                    <span className="text-slate-400 font-medium">doctors</span>
                  </span>
                  <span>
                    {dept.visits}{" "}
                    <span className="text-slate-400 font-medium">visits</span>
                  </span>
                  <span className="text-slate-900 font-bold">
                    {dept.revenue}
                  </span>
                </div>
              </div>
            }
          />
        ))}
      </div>
    </div>
  );
}