"use client";

import PortalCard from "@/components/common/card";

import DashboardCharts from "@/components/hospitaldashboard/doctordashbordanalytics";
import { CalendarDays, ListTodo, RefreshCcw, Bell, Users } from "lucide-react";

const stats = [
  {
    label: "Today's Schedule",
    value: 0,
    icon: <CalendarDays className="h-5 w-5 text-indigo-600" />,
    iconBg: "bg-indigo-100",
  },
  {
    label: "In Queue",
    value: 0,
    icon: <ListTodo className="h-5 w-5 text-cyan-600" />,
    iconBg: "bg-cyan-100",
  },
  {
    label: "Pending Follow-Ups",
    value: 0,
    icon: <RefreshCcw className="h-5 w-5 text-amber-500" />,
    iconBg: "bg-amber-100",
  },
  {
    label: "Unread Alerts",
    value: 1,
    icon: <Bell className="h-5 w-5 text-orange-500" />,
    iconBg: "bg-orange-100",
  },
  {
    label: "Total Patients",
    value: 38,
    icon: <Users className="h-5 w-5 text-emerald-600" />,
    iconBg: "bg-emerald-100",
  },
];

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Welcome */}
      <div>
        <h1 className="text-xl font-bold text-slate-900">
          Welcome, Dr. Riya Joshi
        </h1>
        <p className="mt-1 text-base text-slate-500">
          Head &amp; Neck Surgeon · 25 years experience
        </p>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {stats.map((item) => (
          <PortalCard
            key={item.label}
            variant="stat"
            label={item.label}
            value={item.value}
            icon={item.icon}
            iconBg={item.iconBg}
          />
        ))}
      </div>

      {/* Charts */}
      <DashboardCharts />
    </div>
  );
}