"use client";

import React, { useState } from "react";
import { Building2 } from "lucide-react";
import PortalCard from "@/components/common/card";
import DepartmentModal from "@/hospitalmodels/departmentmodel";

export default function DepartmentsPage() {
  const departments = [
    {
      title: "Cardiology",
      desc: "Heart and cardiovascular care",
      doctors: 6,
      visits: 410,
      revenue: "₹1,49,600",
      head: "Dr. Riya Mehta",
      available: 3,
      onLeave: 1,
      mostBooked: "Dr. Diya Khan",
      highestRated: { name: "Dr. Zara Gupta", rating: 4.9 },
      utilization: [
        { name: "Aarav Reddy", visits: 62 },
        { name: "Nisha Nair", visits: 78 },
        { name: "Dev Iyer", visits: 68 },
        { name: "Diya Khan", visits: 90 },
        { name: "Meera Gupta", visits: 82 },
        { name: "Zara Gupta", visits: 86 },
      ],
      trend: [
        { month: "Dec", visits: 2 },
        { month: "Jan", visits: 4 },
        { month: "Feb", visits: 12 },
        { month: "Mar", visits: 68 },
        { month: "Apr", visits: 128 },
        { month: "May", visits: 112 },
        { month: "Jun", visits: 118 },
        { month: "Jul", visits: 108 },
      ],
    },
    {
      title: "Neurology",
      desc: "Brain, spine and nervous system",
      doctors: 2,
      visits: 110,
      revenue: "₹74,000",
      head: "Dr. Kabir Shah",
      available: 1,
      onLeave: 0,
      mostBooked: "Dr. Kabir Shah",
      highestRated: { name: "Dr. Kabir Shah", rating: 4.8 },
      utilization: [
        { name: "Kabir Shah", visits: 71 },
        { name: "Ananya Rao", visits: 39 },
      ],
      trend: [
        { month: "Dec", visits: 1 },
        { month: "Jan", visits: 3 },
        { month: "Feb", visits: 8 },
        { month: "Mar", visits: 20 },
        { month: "Apr", visits: 32 },
        { month: "May", visits: 29 },
        { month: "Jun", visits: 27 },
        { month: "Jul", visits: 25 },
      ],
    },
    {
      title: "Orthopedics",
      desc: "Bones, joints and musculoskeletal",
      doctors: 0,
      visits: 0,
      revenue: "₹0",
      head: "—",
      available: 0,
      onLeave: 0,
      mostBooked: "—",
      highestRated: { name: "—", rating: 0 },
      utilization: [],
      trend: [
        { month: "Dec", visits: 0 },
        { month: "Jan", visits: 0 },
        { month: "Feb", visits: 0 },
        { month: "Mar", visits: 0 },
        { month: "Apr", visits: 0 },
        { month: "May", visits: 0 },
        { month: "Jun", visits: 0 },
        { month: "Jul", visits: 0 },
      ],
    },
    {
      title: "Pediatrics",
      desc: "Child and infant healthcare",
      doctors: 4,
      visits: 240,
      revenue: "₹77,600",
      head: "Dr. Meera Iyer",
      available: 3,
      onLeave: 0,
      mostBooked: "Dr. Meera Iyer",
      highestRated: { name: "Dr. Meera Iyer", rating: 4.6 },
      utilization: [
        { name: "Meera Iyer", visits: 70 },
        { name: "Aditi Rao", visits: 55 },
        { name: "Kunal Shah", visits: 60 },
        { name: "Neha Pillai", visits: 55 },
      ],
      trend: [
        { month: "Dec", visits: 1 },
        { month: "Jan", visits: 5 },
        { month: "Feb", visits: 15 },
        { month: "Mar", visits: 45 },
        { month: "Apr", visits: 70 },
        { month: "May", visits: 65 },
        { month: "Jun", visits: 62 },
        { month: "Jul", visits: 58 },
      ],
    },
    {
      title: "Dermatology",
      desc: "Skin, hair and nail conditions",
      doctors: 5,
      visits: 383,
      revenue: "₹1,08,000",
      head: "Dr. Sanya Kapoor",
      available: 4,
      onLeave: 1,
      mostBooked: "Dr. Sanya Kapoor",
      highestRated: { name: "Dr. Vihaan Joshi", rating: 4.7 },
      utilization: [
        { name: "Sanya Kapoor", visits: 80 },
        { name: "Vihaan Joshi", visits: 75 },
        { name: "Tara Singh", visits: 68 },
        { name: "Yash Malhotra", visits: 60 },
        { name: "Rohan Das", visits: 65 },
      ],
      trend: [
        { month: "Dec", visits: 3 },
        { month: "Jan", visits: 8 },
        { month: "Feb", visits: 22 },
        { month: "Mar", visits: 60 },
        { month: "Apr", visits: 100 },
        { month: "May", visits: 95 },
        { month: "Jun", visits: 90 },
        { month: "Jul", visits: 85 },
      ],
    },
    {
      title: "ENT",
      desc: "Ear, nose and throat care",
      doctors: 2,
      visits: 124,
      revenue: "₹35,500",
      head: "Dr. Ishaan Verma",
      available: 1,
      onLeave: 1,
      mostBooked: "Dr. Ishaan Verma",
      highestRated: { name: "Dr. Ishaan Verma", rating: 4.5 },
      utilization: [
        { name: "Ishaan Verma", visits: 68 },
        { name: "Priya Menon", visits: 56 },
      ],
      trend: [
        { month: "Dec", visits: 1 },
        { month: "Jan", visits: 3 },
        { month: "Feb", visits: 9 },
        { month: "Mar", visits: 22 },
        { month: "Apr", visits: 36 },
        { month: "May", visits: 33 },
        { month: "Jun", visits: 31 },
        { month: "Jul", visits: 29 },
      ],
    },
  ];

  // holds the index of the currently open department, or null when closed
  const [openIndex, setOpenIndex] = useState(null);
  const openDept = openIndex !== null ? departments[openIndex] : null;

  return (
    <div className="p-8 bg-slate-50 min-h-screen font-sans">
      {/* Header Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Departments</h1>
        <p className="text-sm text-slate-500 mt-1">{departments.length} departments</p>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {departments.map((dept, index) => (
          <PortalCard
            key={index}
            onClick={() => setOpenIndex(index)}
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

      <DepartmentModal
        open={openIndex !== null}
        name={openDept?.title}
        data={openDept}
        onClose={() => setOpenIndex(null)}
      />
    </div>
  );
}