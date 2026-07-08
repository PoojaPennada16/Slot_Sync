"use client";

import React, { useState } from "react";
import {
  Plus,
  MapPin,
  Star,
  Users,
} from "lucide-react";

import AddBranchIdentity from "./AddBranchIdentity";
import AddBranchDetails from "./AddBranchDetails";

const branches = [
  {
    name: "SlotSync Lounge Pune",
    address: "35 Brigade Rd, Bandra",
    manager: "Aditi Singh",
    today: 37,
    revenue: "₹34.9k",
    staff: 8,
    rating: 4.7,
    services: 12,
    growth: "+0.9%",
  },
  {
    name: "SlotSync Lounge Bengaluru",
    address: "11 Brigade Rd, Indiranagar",
    manager: "Karthik Mehta",
    today: 10,
    revenue: "₹18.6k",
    staff: 15,
    rating: 3.8,
    services: 10,
    growth: "+20.3%",
  },
];

const SalonBranches = () => {
  const [showAddBranch, setShowAddBranch] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f6f4fb] via-[#f7f5f6] to-[#eef8fb] mr-2">
      {!showAddBranch ? (
        <>
          {/* Header */}

          <div className="flex items-start justify-between mb-5">
            <div>
              <h1 className="text-[30px] font-bold text-[#0F172A]">
                Branches
              </h1>

              <p className="text-[12px] text-slate-500 mt-1">
                2 locations operating
              </p>
            </div>

            <button
              onClick={() => setShowAddBranch(true)}
              className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-600 to-sky-500 text-white text-[12px] font-medium"
            >
              <Plus size={14} />
              Add Branch
            </button>
          </div>

          {/* Branch Cards */}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {branches.map((branch, index) => (
              <div
                key={index}
                className="bg-white rounded-[20px] p-5 shadow-sm"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-[16px] font-semibold text-slate-900">
                      {branch.name}
                    </h2>

                    <div className="flex items-center gap-2 mt-2 text-slate-500 text-[12px]">
                      <MapPin size={13} />
                      {branch.address}
                    </div>

                    <p className="text-[12px] text-slate-500 mt-3">
                      Manager · {branch.manager}
                    </p>
                  </div>

                  <span className="px-3 py-1 rounded-full bg-green-100 text-green-600 text-[11px] font-semibold">
                    {branch.growth}
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-3 mt-5">
                  <div className="bg-slate-0 rounded-2xl p-3 text-center">
                    <p className="text-[10px] text-slate-500 uppercase">
                      Today
                    </p>

                    <h3 className="text-[16px] font-semibold mt-1">
                      {branch.today}
                    </h3>
                  </div>

                  <div className="bg-slate-0 rounded-2xl p-3 text-center">
                    <p className="text-[10px] text-slate-500 uppercase">
                      Revenue
                    </p>

                    <h3 className="text-[16px] font-semibold mt-1">
                      {branch.revenue}
                    </h3>
                  </div>

                  <div className="bg-slate-0 rounded-2xl p-3 text-center">
                    <p className="text-[10px] text-slate-500 uppercase">
                      Staff
                    </p>

                    <h3 className="text-[16px] font-semibold mt-1">
                      {branch.staff}
                    </h3>
                  </div>
                </div>

                <div className="flex justify-between items-center mt-5">
                  <div className="flex items-center gap-1 text-slate-500 text-[12px]">
                    <Star
                      size={13}
                      className="fill-yellow-400 text-yellow-400"
                    />
                    {branch.rating}
                  </div>

                  <div className="flex items-center gap-1.5 text-slate-500 text-[12px]">
                    <Users size={13} />
                    {branch.services} services
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <>
          {/* Add Branch Header */}

          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-[32px] font-bold text-[#0F172A]">
                Add Branch
              </h1>

              <p className="text-[14px] text-slate-500 mt-1">
                Complete onboarding for a new branch location.
              </p>
            </div>

            <button
              onClick={() => setShowAddBranch(false)}
              className="px-4 py-2 rounded-full border bg-white text-[12px] font-medium"
            >
              Back
            </button>
          </div>

          {/* Identity + Submission */}

          <div className="grid lg:grid-cols-[1fr_320px] gap-5 mb-5">
            <AddBranchIdentity />

            <div className="bg-white rounded-[24px] p-5 h-fit shadow-sm">
              <h2 className="text-[18px] font-semibold mb-3">
                Submission
              </h2>

              <p className="text-slate-500 text-[13px] leading-6">
                Submitting a branch creates a Pending Approval
                request. The branch cannot accept bookings
                until the Super Admin approves it.
              </p>

              <button className="w-full mt-5 h-11 rounded-full bg-gradient-to-r from-indigo-600 to-sky-500 text-white text-[13px] font-semibold">
                Submit for Approval
              </button>

              <button className="w-full mt-3 h-11 rounded-full border text-[13px]">
                Save as Draft
              </button>
            </div>
          </div>

          {/* Branch Details */}

          <AddBranchDetails />
        </>
      )}
    </div>
  );
};

export default SalonBranches;