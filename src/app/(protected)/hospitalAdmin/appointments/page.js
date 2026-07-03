"use client";

import { useState } from "react";
import PortalCard from "@/components/common/card";
import Button from "@/components/common/button";
import { Sparkles, Check, X } from "lucide-react";
import InputField from "@/components/common/inputfield";

const tabs = [
  { key: "today", label: "Today", count: 7 },
  { key: "upcoming", label: "Upcoming", count: 6 },
];

const appointmentsData = {
  today: [
    {
      id: 1,
      name: "Pari Chopra",
      isFirstTime: true,
      date: "30 Jun",
      time: "16:00",
      type: "Physical",
      age: 48,
      gender: "Male",
      bloodGroup: "B-",
      status: "not-arrived",
    },
    {
      id: 2,
      name: "Pari Chopra",
      isFirstTime: true,
      date: "30 Jun",
      time: "15:00",
      type: "Physical",
      age: 48,
      gender: "Male",
      bloodGroup: "B-",
      status: "not-arrived",
    },
  ],
  upcoming: [],
};

export default function Appointments() {
  const [activeTab, setActiveTab] = useState("today");
  const appointments = appointmentsData[activeTab] || [];

  // tracks which appointment's prescribe form is open
  const [openId, setOpenId] = useState(null);

  // local form state per appointment id
  const [forms, setForms] = useState({});

  const getForm = (id) =>
    forms[id] || { medicine: "", notes: "Rest and stay hydrated.", forward: true };

  const updateForm = (id, patch) => {
    setForms((prev) => ({
      ...prev,
      [id]: { ...getForm(id), ...patch },
    }));
  };

  const handleCompleteClick = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const handleNoShow = (id) => console.log("no show", id);

  const handleSave = (id) => {
    console.log("save prescription", id, getForm(id));
    setOpenId(null);
  };

  const handleCancel = (id) => {
    setOpenId(null);
  };

  return (
    <main className="min-h-screen w-full bg-[#f4f5fb] px-6 py-6 md:px-4">
      <div className="max-w-6xl mx-auto w-full">
        <h1 className="text-2xl font-extrabold text-slate-900 mb-1">
          Appointments
        </h1>
        <p className="text-slate-500 text-base mb-6">
          Manage today's queue and upcoming patients
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

        {/* Appointment cards */}
        <div className="flex flex-col gap-4">
          {appointments.map((appt) => {
            const isOpen = openId === appt.id;
            const form = getForm(appt.id);

            return (
              <PortalCard
                key={appt.id}
                className="bg-white shadow-[0_2px_12px_rgba(15,23,42,0.04)] !flex-col !items-stretch"
                leading={
                  <div className="flex flex-col w-full">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <h3 className="text-lg font-bold text-slate-900">
                          {appt.name}
                        </h3>
                        {appt.isFirstTime && (
                          <span className="flex items-center gap-1 bg-amber-50 text-amber-600 text-xs font-semibold px-2.5 py-1 rounded-full">
                            <Sparkles className="w-3 h-3" />
                            First Time
                          </span>
                        )}
                      </div>
                      <span className="bg-slate-100 text-slate-700 text-sm font-semibold px-3.5 py-1.5 rounded-full shrink-0">
                        {appt.status}
                      </span>
                    </div>

                    <p className="text-sm text-slate-400 mb-4">
                      {appt.date} · {appt.time} · {appt.type} · {appt.age}/
                      {appt.gender} · {appt.bloodGroup}
                    </p>

                    <div className="flex items-center gap-5 mb-1">
                      <Button
                        variant="primary"
                        size="md"
                        onClick={() => handleCompleteClick(appt.id)}
                        className="rounded-full font-semibold bg-indigo-600 hover:bg-indigo-700"
                      >
                        <Check className="w-4 h-4 mr-2" />
                        Complete & Prescribe
                      </Button>

                      <button
                        onClick={() => handleNoShow(appt.id)}
                        className="flex items-center gap-1.5 text-sm font-semibold text-red-500 hover:text-red-600 transition-colors"
                      >
                        <X className="w-4 h-4" />
                        No Show
                      </button>
                    </div>

                    {/* Inline prescribe form */}
                    {isOpen && (
                      <div className="mt-4 bg-slate-50 rounded-2xl p-4 flex flex-col gap-3">
                       <InputField
  label="Medicine"
  name={`medicine-${appt.id}`}
  type="text"
  value={form.medicine}
  onChange={(e) =>
    updateForm(appt.id, {
      medicine: e.target.value,
    })
  }
  placeholder="Medicine (e.g. Paracetamol)"
/>

                        <textarea
                          value={form.notes}
                          onChange={(e) =>
                            updateForm(appt.id, { notes: e.target.value })
                          }
                          rows={1}
                          className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-700 outline-none focus:border-indigo-300 resize-none"
                        />

                        <label className="flex items-center gap-2 text-sm text-slate-700">
                          <input
                            type="checkbox"
                            checked={form.forward}
                            onChange={(e) =>
                              updateForm(appt.id, { forward: e.target.checked })
                            }
                            className="w-4 h-4 rounded accent-indigo-600"
                          />
                          Forward to reception
                        </label>

                        <div className="flex items-center gap-4 mt-1">
                          <Button
                            variant="primary"
                            size="sm"
                            onClick={() => handleSave(appt.id)}
                            className="rounded-full font-semibold bg-indigo-600 hover:bg-indigo-700"
                          >
                            Save
                          </Button>
                          <button
                            onClick={() => handleCancel(appt.id)}
                            className="text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors"
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                }
              />
            );
          })}

          {appointments.length === 0 && (
            <p className="text-slate-400 text-sm py-8 text-center">
              No appointments in this category.
            </p>
          )}
        </div>
      </div>
    </main>
  );
}