"use client";

import React, { useState } from "react";
import { Building2, Plus } from "lucide-react";
import PortalCard from "@/components/common/card";
import Button from "@/components/common/button";
import DepartmentModal from "@/hospitalmodels/departmentmodel";
import AddDepartmentModal from "@/hospitalmodels/adddepartment";

export default function DepartmentsPage() {
  const [departments, setDepartments] = useState([
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
    // ...rest of your existing departments unchanged
  ]);

  // holds the index of the currently open department, or null when closed
  const [openIndex, setOpenIndex] = useState(null);
  const openDept = openIndex !== null ? departments[openIndex] : null;

  // controls the Add Department modal
  const [isAddOpen, setIsAddOpen] = useState(false);

  const handleAddDepartment = (form) => {
    setDepartments((prev) => [
      ...prev,
      {
        title: form.name,
        desc: form.description,
        head: form.head || "—",
        doctors: 0,
        visits: 0,
        revenue: "₹0",
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
    ]);
    setIsAddOpen(false);
  };

  return (
    <div className="p-8 bg-slate-50 min-h-screen font-sans">
      {/* Header Section */}
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Departments</h1>
          <p className="text-sm text-slate-500 mt-1">{departments.length} departments</p>
        </div>

        <Button variant="primary" size="md" onClick={() => setIsAddOpen(true)}>
          <Plus className="w-4 h-4 mr-1.5" />
          Add Department
        </Button>
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
            description={
              <div className="flex flex-col h-full justify-between">
                <p className="text-slate-400 text-sm font-medium mb-4">
                  {dept.desc}
                </p>

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

      <AddDepartmentModal
        open={isAddOpen}
        onClose={() => setIsAddOpen(false)}
        onSubmit={handleAddDepartment}
      />
    </div>
  );
}