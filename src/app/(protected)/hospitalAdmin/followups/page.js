"use client";

import { useState } from "react";
import { CalendarRange, FlaskConical, ScanLine, Stethoscope, UserPlus, Send } from "lucide-react";
import PortalCard from "@/components/common/card";


const QUICK_TASKS = [
  { label: "Book Follow-up",      icon: <CalendarRange className="h-4 w-4" /> },
  { label: "Arrange Lab Test",    icon: <FlaskConical  className="h-4 w-4" /> },
  { label: "Arrange Scan",        icon: <ScanLine      className="h-4 w-4" /> },
  { label: "Specialist Referral", icon: <Stethoscope   className="h-4 w-4" /> },
  { label: "Emergency Review",    icon: <UserPlus      className="h-4 w-4" /> },
];

const INITIAL_FOLLOWUPS = [
  { id: 1,  name: "Krish Patel",     date: "06 Jul", type: "Specialist referral", status: "upcoming" },
  { id: 2,  name: "Aditya Patel",    date: "06 Jul", type: "Imaging scan",        status: "upcoming" },
  { id: 3,  name: "Aryan Nair",      date: "08 Jul", type: "Lab test",            status: "upcoming" },
  { id: 4,  name: "Priya Sharma",    date: "09 Jul", type: "Follow-up consult",   status: "upcoming" },
  { id: 5,  name: "Neil Joshi",      date: "10 Jul", type: "Specialist referral", status: "upcoming" },
  { id: 6,  name: "Dev Nair",        date: "11 Jul", type: "Imaging scan",        status: "upcoming" },
  { id: 7,  name: "Kabir Nair",      date: "12 Jul", type: "Lab test",            status: "upcoming" },
  { id: 8,  name: "Rohan Iyer",      date: "13 Jul", type: "Follow-up consult",   status: "upcoming" },
  { id: 9,  name: "Meera Patel",     date: "14 Jul", type: "Emergency review",    status: "upcoming" },
  { id: 10, name: "Vihaan Malhotra", date: "15 Jul", type: "Specialist referral", status: "upcoming" },
  { id: 11, name: "Kabir Patel",     date: "16 Jul", type: "Lab test",            status: "upcoming" },
];

const statusStyle = {
  upcoming: "bg-slate-100 text-slate-600",
  done:     "bg-emerald-100 text-emerald-600",
};

export default function FollowUpsPage() {
  const [days,      setDays]      = useState(7);
  const [followUps, setFollowUps] = useState(INITIAL_FOLLOWUPS);
  const [sent,      setSent]      = useState({});

  function markDone(id) {
    setFollowUps((prev) =>
      prev.map((f) => f.id === id ? { ...f, status: "done" } : f)
    );
  }

  function sendTask(label) {
    setSent((prev) => ({ ...prev, [label]: true }));
    setTimeout(() => setSent((prev) => ({ ...prev, [label]: false })), 2000);
  }

  const pending = followUps.filter((f) => f.status !== "done");
  const done    = followUps.filter((f) => f.status === "done");

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Follow-ups</h1>
        <p className="mt-1 text-sm text-slate-500">
          Schedule revisits and send tasks to reception
        </p>
      </div>

      {/* Quick Task Card */}
      <PortalCard
        description={
          <div className="space-y-4">
            {/* After N days row */}
            <div className="flex items-center gap-3">
              <span className="text-sm font-bold text-slate-800">Quick Task to Reception</span>
              <span className="text-sm text-slate-400">After</span>
              <input
                type="number"
                value={days}
                min={1}
                onChange={(e) => setDays(Number(e.target.value))}
                className="w-16 rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-center text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-200"
              />
              <span className="text-sm text-slate-400">days</span>
            </div>

            {/* Task Buttons */}
            <div className="flex flex-wrap gap-2">
              {QUICK_TASKS.map((task) => (
                <button
                  key={task.label}
                  onClick={() => sendTask(task.label)}
                  className={`flex items-center gap-2 rounded-2xl border px-4 py-2 text-sm font-medium transition ${
                    sent[task.label]
                      ? "border-emerald-200 bg-emerald-50 text-emerald-600"
                      : "border-slate-200 bg-white text-slate-700 hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-700"
                  }`}
                >
                  {task.icon}
                  {sent[task.label] ? "Sent!" : task.label}
                  <Send className="h-3.5 w-3.5 opacity-50" />
                </button>
              ))}
            </div>
          </div>
        }
      />

      {/* Scheduled Follow-ups */}
      <div className="space-y-4">
        <h2 className="text-base font-bold text-slate-800">
          Scheduled Follow-ups ({followUps.length})
        </h2>

        {/* Pending */}
        {pending.map((f) => (
          <PortalCard
            key={f.id}
            description={
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-base font-bold text-slate-900">{f.name}</p>
                  <p className="mt-0.5 text-sm text-slate-400">
                    {f.date} · {f.type}
                  </p>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <span className={`rounded-2xl px-4 py-1.5 text-sm font-medium ${statusStyle[f.status]}`}>
                    {f.status}
                  </span>
                  <button
                    onClick={() => markDone(f.id)}
                    className="text-sm font-semibold text-slate-500 hover:text-emerald-600 transition"
                  >
                    Done
                  </button>
                </div>
              </div>
            }
          />
        ))}

        {/* Done */}
        {done.length > 0 && (
          <div className="space-y-5 opacity-60">
            {done.map((f) => (
              <PortalCard
                key={f.id}
                description={
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-base font-bold text-slate-900 line-through">{f.name}</p>
                      <p className="mt-0.5 text-sm text-slate-400">{f.date} · {f.type}</p>
                    </div>
                    <span className={`rounded-2xl px-4 py-1.5 text-sm font-medium ${statusStyle.done}`}>
                      done
                    </span>
                  </div>
                }
              />
            ))}
          </div>
        )}

        {followUps.length === 0 && (
          <p className="text-center text-sm text-slate-400 py-12">
            No follow-ups scheduled.
          </p>
        )}
      </div>
    </div>
  );
}