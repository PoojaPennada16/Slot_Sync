"use client";

import React, { useState } from "react";
import { Plus, Headphones, Ban, ArrowLeftRight } from "lucide-react";
import Button from "@/components/common/button";
import PortalCard from "@/components/common/card";
import AddReceptionistModal from "@/hospitalmodels/addreceptionist";

export default function ReceptionistsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const staff = [
    {
      name: "Zara Joshi",
      empId: "EMP-1001",
      campus: "Main Campus",
      floor: "Floor 3",
      shift: "22:00 - 06:00",
      status: "suspended",
      stats: { booked: 125, walkIns: 87, checkIns: 283, avgWait: "14m" },
    },
    {
      name: "Tara Gupta",
      empId: "EMP-1002",
      campus: "North Wing",
      floor: "Floor 1",
      shift: "22:00 - 06:00",
      status: "active",
      stats: { booked: 554, walkIns: 107, checkIns: 489, avgWait: "11m" },
    },
    {
      name: "Tara Verma",
      empId: "EMP-1003",
      campus: "Main Campus",
      floor: "Floor 5",
      shift: "08:00 - 16:00",
      status: "active",
      stats: { booked: 465, walkIns: 180, checkIns: 449, avgWait: "23m" },
    },
  ];

  function handleAddReceptionist(data) {
    console.log("New receptionist:", data);
    // TODO: wire up to your create-receptionist API / state
  }

  return (
    <div className="p-8 bg-slate-50 min-h-screen font-sans relative">
      {/* Header Section */}
      <div className="flex items-start justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">
            Receptionists
          </h1>
          <p className="text-sm text-slate-500 mt-1">10 front-desk staff</p>
        </div>

        <Button
          variant="primary"
          size="md"
          className="gap-1.5 rounded-xl font-semibold shadow-md shadow-indigo-600/10"
          onClick={() => setIsModalOpen(true)}
        >
          <Plus className="w-4 h-4" /> Add
        </Button>
      </div>

      {/* Grid Wrapper */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1400px]">
        {staff.map((member, index) => (
          <PortalCard
            key={index}
            className="bg-white shadow-[0_2px_12px_rgba(15,23,42,0.04)] !flex-col !items-stretch p-6"
            leading={
              <div className="flex flex-col w-full">
                {/* Icon + status row */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center">
                    <Headphones className="w-5 h-5 text-amber-500" />
                  </div>
                  <span
                    className={`inline-block px-3 py-1 text-xs font-semibold rounded-full capitalize ${
                      member.status === "active"
                        ? "bg-emerald-50 text-emerald-600"
                        : "bg-rose-50 text-rose-600"
                    }`}
                  >
                    {member.status}
                  </span>
                </div>

                {/* Name + meta */}
                <h3 className="text-lg font-bold text-slate-900 mb-0.5">
                  {member.name}
                </h3>
                <p className="text-sm text-slate-400">
                  {member.empId} · {member.campus} · {member.floor}
                </p>
                <p className="text-sm text-slate-400 mb-4">
                  Shift: {member.shift}
                </p>

                {/* Stats grid */}
                <div className="grid grid-cols-2 gap-y-2 gap-x-4 mb-5 text-sm">
                  <div>
                    <span className="text-slate-400">Booked: </span>
                    <span className="font-bold text-slate-900">
                      {member.stats.booked}
                    </span>
                  </div>
                  <div>
                    <span className="text-slate-400">Walk-ins: </span>
                    <span className="font-bold text-slate-900">
                      {member.stats.walkIns}
                    </span>
                  </div>
                  <div>
                    <span className="text-slate-400">Check-ins: </span>
                    <span className="font-bold text-slate-900">
                      {member.stats.checkIns}
                    </span>
                  </div>
                  <div>
                    <span className="text-slate-400">Avg wait: </span>
                    <span className="font-bold text-slate-900">
                      {member.stats.avgWait}
                    </span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2">
                  <Button
                    variant="secondary"
                    size="sm"
                    className="px-4 py-2 bg-white text-slate-700 border border-slate-200 font-semibold rounded-xl hover:bg-slate-50"
                  >
                    View
                  </Button>
                  <Button
                    variant="secondary"
                    size="sm"
                    className="p-2 bg-white text-slate-600 border border-slate-200 rounded-xl hover:bg-slate-50"
                  >
                    <Ban className="w-4 h-4" />
                  </Button>
                  <button className="p-2 text-slate-500 hover:text-slate-700 transition-colors">
                    <ArrowLeftRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            }
          />
        ))}
      </div>

      {/* --- Add Receptionist Modal --- */}
      <AddReceptionistModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddReceptionist}
      />
    </div>
  );
}