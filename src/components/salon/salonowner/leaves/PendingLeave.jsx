"use client";

import React, { useState } from "react";
import { Plus, Check, X } from "lucide-react";
import ApprovedLeave from "./ApprovedLeave";
import RejectedLeave from "./RejectedLeave";

const PendingLeave = () => {
  const [activeTab, setActiveTab] = useState("pending");

  const tabClass = (tab) =>
    activeTab === tab
      ? "bg-[#5458E8] text-white"
      : "text-[#111827]";

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f6f4fb] via-[#f7f5f6] to-[#eef8fb] mr-2">
      {/* Header */}

      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-[30px] font-bold text-[#0F172A]">
            Leave Management
          </h1>

          <p className="text-[12px] text-[#667085] mt-1">
            Approval flow for barber leave requests. Approved leaves
            automatically block slots.
          </p>
        </div>

        <button className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-indigo-600 to-sky-500 text-white text-[13px] font-medium">
          <Plus size={16} />
          New Leave Request
        </button>
      </div>

      {/* Tabs */}

      <div className="mt-6 inline-flex items-center gap-2 bg-white rounded-full p-1 shadow-sm">
        <button
          onClick={() => setActiveTab("pending")}
          className={`px-5 py-2 rounded-full text-[13px] font-medium ${tabClass(
            "pending"
          )}`}
        >
          Pending (1)
        </button>

        <button
          onClick={() => setActiveTab("approved")}
          className={`px-5 py-2 rounded-full text-[13px] font-medium ${tabClass(
            "approved"
          )}`}
        >
          Approved (1)
        </button>

        <button
          onClick={() => setActiveTab("rejected")}
          className={`px-5 py-2 rounded-full text-[13px] font-medium ${tabClass(
            "rejected"
          )}`}
        >
          Rejected (2)
        </button>
      </div>

      {/* Pending */}

      {activeTab === "pending" && (
        <div className="mt-6 max-w-[700px]">
          <div className="bg-white rounded-[22px] p-6 shadow-sm">
            <div className="flex justify-between">
              <div>
                <h2 className="text-[16px] font-semibold">
                  Riya Joshi
                </h2>

                <p className="text-[13px] text-slate-500">
                  SlotSync Atelier Mumbai
                </p>
              </div>

              <span className="px-4 py-1 rounded-full bg-amber-100 text-amber-600 text-[12px] font-medium h-fit">
                Pending
              </span>
            </div>

            <div className="mt-4">
              <p className="text-[15px] font-medium">
                Full Day · 2026-06-23
              </p>

              <p className="text-[13px] text-slate-500 mt-1">
                Reason: Personal Leave
              </p>
            </div>

            <div className="flex gap-3 mt-5">
              <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-600 text-[13px] font-medium">
                <Check size={14} />
                Approve
              </button>

              <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-red-100 text-red-500 text-[13px] font-medium">
                <X size={14} />
                Reject
              </button>
            </div>
          </div>
        </div>
      )}

      {activeTab === "approved" && <ApprovedLeave />}

      {activeTab === "rejected" && <RejectedLeave />}
    </div>
  );
};

export default PendingLeave;