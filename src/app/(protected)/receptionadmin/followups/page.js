"use client";

import { useState } from "react";
import PortalCard from "@/components/common/card";
import Button from "@/components/common/button";
import { Phone, Calendar } from "lucide-react";

const tabs = [
  { key: "today", label: "Today", count: 6 },
  { key: "tomorrow", label: "Tomorrow", count: 12 },
  { key: "overdue", label: "Overdue", count: 8 },
  { key: "missed", label: "Missed", count: 15 },
];

const followUps = {
  today: [
    { name: "Meera Verma", date: "25 Jun", reason: "Medication review", doctor: "Dr. Priya Chopra" },
    { name: "Aryan Sharma", date: "25 Jun", reason: "Re-check vitals", doctor: "Dr. Aisha Bose" },
    { name: "Myra Rao", date: "25 Jun", reason: "Post-surgery review", doctor: "Dr. Myra Iyer" },
    { name: "Anaya Patel", date: "25 Jun", reason: "Post-surgery review", doctor: "Dr. Meera Gupta" },
  ],
  tomorrow: [],
  overdue: [],
  missed: [],
};

export default function FollowUpCenter() {
  const [activeTab, setActiveTab] = useState("today");
  const patients = followUps[activeTab] || [];

  const handleCall = (name) => console.log("call", name);
  const handleBook = (name) => console.log("book", name);

  return (
    <main className="min-h-screen w-full bg-[#f4f5fb] px-6 py-8 md:px-4">
      <div className="max-w-5xl mx-auto w-full">
        <h1 className="text-2xl font-extrabold text-slate-900 mb-1">
          Follow-up Center
        </h1>
        <p className="text-slate-500 text-base mb-6">
          Manage patient follow-ups
        </p>

        {/* Tabs */}
        <div className="inline-flex items-center gap-1 bg-slate-100 rounded-full p-1 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                activeTab === tab.key
                  ? "bg-white text-slate-900 shadow-[0_2px_6px_rgba(15,23,42,0.08)]"
                  : "text-slate-500 hover:text-slate-700"
              }`}
            >
              {tab.label} ({tab.count})
            </button>
          ))}
        </div>

        {/* List */}
        <div className="flex flex-col gap-4">
          {patients.map((p, idx) => (
            <PortalCard
              key={idx}
              title={p.name}
              description={`${p.date} · ${p.reason} · ${p.doctor}`}
              className="bg-white shadow-[0_2px_12px_rgba(15,23,42,0.04)]"
            >
              <div className="flex items-center gap-2.5 shrink-0">
                <Button
                  variant="secondary"
                  size="sm"
                  className="rounded-full bg-white border border-slate-200 text-slate-900 hover:bg-slate-50 font-semibold"
                  onClick={() => handleCall(p.name)}
                >
                  <Phone className="w-4 h-4 mr-1.5" />
                  Call
                </Button>
                <Button
                  variant="primary"
                  size="sm"
                  className="rounded-full font-semibold"
                  onClick={() => handleBook(p.name)}
                >
                  <Calendar className="w-4 h-4 mr-1.5" />
                  Book
                </Button>
              </div>
            </PortalCard>
          ))}

          {patients.length === 0 && (
            <p className="text-slate-400 text-sm py-8 text-center">
              No follow-ups in this category.
            </p>
          )}
        </div>
      </div>
    </main>
  );
}