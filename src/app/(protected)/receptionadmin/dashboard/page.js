"use client";

import { useState } from "react";
import {
  CalendarDays, UserPlus, LogIn, RefreshCcw,
  Clock, Users, Stethoscope,
} from "lucide-react";
import PortalCard from "@/components/common/card";

const quickActions = [
  { label: "Book Appointment",    icon: <CalendarDays className="h-6 w-6 text-amber-500" />, iconBg: "bg-amber-100", href: "/Reception/bookappointment"  },
  { label: "Register Walk-in",    icon: <UserPlus     className="h-6 w-6 text-amber-500" />, iconBg: "bg-amber-100", href: "/Reception/walkin"             },
  { label: "Check In Patient",    icon: <LogIn        className="h-6 w-6 text-amber-500" />, iconBg: "bg-amber-100", href: "/Reception/checkin"            },
  { label: "Add Follow-up",       icon: <RefreshCcw   className="h-6 w-6 text-amber-500" />, iconBg: "bg-amber-100", href: "/Reception/followups"          },
];

const stats = [
  { label: "Today's Appointments", value: 14, icon: <CalendarDays className="h-5 w-5 text-indigo-500" />, iconBg: "bg-indigo-100" },
  { label: "Waiting Patients",     value: 3,  icon: <Clock        className="h-5 w-5 text-amber-500"  />, iconBg: "bg-amber-100"  },
  { label: "With Doctor",          value: 2,  icon: <Users        className="h-5 w-5 text-teal-500"   />, iconBg: "bg-teal-100"   },
  { label: "Walk-ins Today",       value: 11, icon: <UserPlus     className="h-5 w-5 text-amber-500"  />, iconBg: "bg-amber-100"  },
  { label: "Available Doctors",    value: 14, icon: <Stethoscope  className="h-5 w-5 text-emerald-500"/>, iconBg: "bg-emerald-100"},
  { label: "Follow-ups Today",     value: 6,  icon: <RefreshCcw   className="h-5 w-5 text-rose-500"   />, iconBg: "bg-rose-100"   },
];

const schedule = [
  { name: "Pari Chopra",    time: "10:00", doctor: "Dr. Riya Joshi", status: "waiting"    },
  { name: "Aryan Nair",     time: "10:30", doctor: "Dr. Riya Joshi", status: "with-doctor"},
  { name: "Dev Nair",       time: "11:00", doctor: "Dr. Riya Joshi", status: "waiting"    },
  { name: "Krish Sharma",   time: "11:30", doctor: "Dr. Riya Joshi", status: "checked-in" },
  { name: "Priya Sharma",   time: "12:00", doctor: "Dr. Riya Joshi", status: "waiting"    },
  { name: "Neil Joshi",     time: "12:30", doctor: "Dr. Riya Joshi", status: "with-doctor"},
  { name: "Kabir Nair",     time: "14:00", doctor: "Dr. Riya Joshi", status: "upcoming"   },
  { name: "Meera Patel",    time: "14:30", doctor: "Dr. Riya Joshi", status: "upcoming"   },
];

const statusStyle = {
  "waiting":     "bg-amber-100 text-amber-600",
  "with-doctor": "bg-teal-100 text-teal-600",
  "checked-in":  "bg-indigo-100 text-indigo-600",
  "upcoming":    "bg-slate-100 text-slate-500",
  "done":        "bg-emerald-100 text-emerald-600",
};

export default function ReceptionDashboard() {
  const [scheduleItems, setScheduleItems] = useState(schedule);

  function markDone(idx) {
    setScheduleItems((prev) =>
      prev.map((s, i) => i === idx ? { ...s, status: "done" } : s)
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Front Desk</h1>
        <p className="mt-1 text-sm text-slate-500">Today's overview and quick actions</p>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {quickActions.map((a) => (
          <PortalCard
            key={a.label}
            href={a.href}
            icon={a.icon}
            iconBg={a.iconBg}
            title={a.label}
          />
        ))}
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
        {stats.map((s) => (
          <PortalCard
            key={s.label}
            variant="stat"
            label={s.label}
            value={s.value}
            icon={s.icon}
            iconBg={s.iconBg}
          />
        ))}
      </div>

      {/* Today's Schedule */}
      <PortalCard
        title="Today's Schedule"
        description={
          <div className="space-y-2 mt-1">
            {scheduleItems.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3"
              >
                {/* Left */}
                <div>
                  <p className="text-sm font-bold text-slate-900">{item.name}</p>
                  <p className="text-xs text-slate-400 mt-0.5">
                    {item.time} · {item.doctor}
                  </p>
                </div>

                {/* Right */}
                <div className="flex items-center gap-3 shrink-0">
                  <span className={`rounded-full px-3 py-1 text-xs font-semibold ${statusStyle[item.status]}`}>
                    {item.status.replace("-", " ")}
                  </span>
                  {item.status !== "done" && (
                    <button
                      onClick={() => markDone(idx)}
                      className="text-xs font-semibold text-slate-400 hover:text-emerald-600 transition"
                    >
                      Done
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        }
      />
    </div>
  );
}