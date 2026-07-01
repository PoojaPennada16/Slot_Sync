"use client";
import React from "react";
import PortalCard from "../common/card";
import {
  BarChart3,
  TrendingUp,
  Users2,
  PieChart as PieIcon,
  Activity,
  Star,
} from "lucide-react";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from "recharts";

// --- MOCK DATA ---
const monthlyTrendData = [
  { name: "Nov", revenue: 0, appointments: 0, patients: 0, growth: 0 },
  { name: "Dec", revenue: 0, appointments: 0, patients: 0, growth: 0 },
  { name: "Jan", revenue: 0, appointments: 0, patients: 0, growth: 0 },
  { name: "Feb", revenue: 0, appointments: 0, patients: 0, growth: 0 },
  { name: "Mar", revenue: 15000, appointments: 100, patients: 50, growth: 50 },
  { name: "Apr", revenue: 54000, appointments: 510, patients: 240, growth: 240 },
  { name: "May", revenue: 52000, appointments: 450, patients: 210, growth: 210 },
  { name: "Jun", revenue: 56000, appointments: 515, patients: 225, growth: 225 },
];

const weeklyBookingData = [
  { day: "Mon", count: 310 },
  { day: "Tue", count: 265 },
  { day: "Wed", count: 270 },
  { day: "Thu", count: 295 },
  { day: "Fri", count: 298 },
  { day: "Sat", count: 315 },
  { day: "Sun", count: 350 },
];

const conditionData = [
  { name: "Viral Fever", count: 145 },
  { name: "Gastric", count: 125 },
  { name: "Hypertension", count: 122 },
  { name: "Back Pain", count: 120 },
  { name: "Arthritis", count: 118 },
  { name: "Migraine", count: 116 },
  { name: "Bronchitis", count: 110 },
];

const genderData = [
  { name: "Female", value: 50 },
  { name: "Male", value: 35 },
  { name: "Other", value: 15 },
];

const GENDER_COLORS = ["#06b6d4", "#6366f1", "#f59e0b"];

// Tooltip
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white/90 backdrop-blur-md p-3 rounded-xl border shadow-lg">
        <p className="text-xs font-bold text-slate-900 mb-1">{label}</p>
        {payload.map((entry, index) => (
          <p key={index} className="text-xs" style={{ color: entry.color }}>
            {entry.name}: {entry.value.toLocaleString()}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export default function DashboardAnalytics() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-6">

      {/* 1. Revenue Trends */}
      <PortalCard
        badgeText="Financials"
        badgeColor="bg-indigo-50 text-indigo-700"
        title="Revenue Trends"
        // icon={<TrendingUp className="w-5 h-5 text-indigo-600" />}
        iconBg="bg-indigo-50"
        href="/dashboard/analytics/revenue"
        description={
          <div className="w-full h-[190px] mt-2">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={monthlyTrendData}>
                <defs>
                  <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6366f1" stopOpacity={0.2} />
                    <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
                  </linearGradient>
                </defs>

                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" tick={{ fontSize: 10 }} />
                <YAxis tick={{ fontSize: 10 }} />
                <Tooltip content={<CustomTooltip />} />

                <Area
                  type="monotone"
                  dataKey="revenue"
                  stroke="#6366f1"
                  fill="url(#colorRevenue)"
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        }
      />

      {/* 2. Booking Trends */}
      <PortalCard
        badgeText="Appointments"
        badgeColor="bg-cyan-50 text-cyan-700"
        title="Booking & Patient Trends"
        // icon={<BarChart3 className="w-5 h-5 text-cyan-600" />}
        iconBg="bg-cyan-50"
        href="/dashboard/analytics/bookings"
        description={
          <div className="w-full h-[190px] mt-2">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={monthlyTrendData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" tick={{ fontSize: 10 }} />
                <YAxis tick={{ fontSize: 10 }} />
                <Tooltip content={<CustomTooltip />} />

                <Line
                  type="monotone"
                  dataKey="appointments"
                  stroke="#6366f1"
                  strokeWidth={2}
                  dot={false}
                />
                <Line
                  type="monotone"
                  dataKey="patients"
                  stroke="#06b6d4"
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        }
      />

      {/* 3. Weekly Distribution */}
      <PortalCard
        badgeText="Schedules"
        badgeColor="bg-emerald-50 text-emerald-700"
        title="Weekly Booking Distribution"
        // icon={<Activity className="w-5 h-5 text-emerald-600" />}
        iconBg="bg-emerald-50"
        href="/dashboard/analytics/weekly"
        description={
          <div className="w-full h-[180px] mt-2">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={weeklyBookingData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="day" tick={{ fontSize: 10 }} />
                <YAxis tick={{ fontSize: 10 }} />
                <Tooltip content={<CustomTooltip />} />
                <Bar dataKey="count" fill="#06b6d4" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        }
      />

      {/* 4. Demographics */}
      <PortalCard
        badgeText="Demographics"
        badgeColor="bg-purple-50 text-purple-700"
        title="Patient Demographics"
        // icon={<Users2 className="w-5 h-5 text-purple-600" />}
        iconBg="bg-purple-50"
        href="/dashboard/analytics/demographics"
        description={
          <div className="flex h-[190px] mt-2 items-center justify-center gap-4">
            <div className="w-[50%] h-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={genderData}
                    cx="50%"
                    cy="50%"
                    innerRadius={40}
                    outerRadius={60}
                    dataKey="value"
                  >
                    {genderData.map((_, i) => (
                      <Cell key={i} fill={GENDER_COLORS[i]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div className="flex flex-col gap-1">
              {genderData.map((item, i) => (
                <div key={item.name} className="flex items-center gap-2">
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: GENDER_COLORS[i] }}
                  />
                  <span className="text-xs text-slate-600">
                    {item.name} ({item.value}%)
                  </span>
                </div>
              ))}
            </div>
          </div>
        }
      />

      {/* 5. Conditions */}
      <PortalCard
        badgeText="Medical Analytics"
        badgeColor="bg-amber-50 text-amber-700"
        title="Most Treated Conditions"
        // icon={<Star className="w-5 h-5 text-amber-600" />}
        iconBg="bg-amber-50"
        href="/dashboard/analytics/conditions"
        description={
          <div className="w-full h-[190px] mt-2">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={conditionData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" tick={{ fontSize: 9 }} />
                <YAxis tick={{ fontSize: 10 }} />
                <Tooltip content={<CustomTooltip />} />
                <Bar dataKey="count" fill="#f59e0b" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        }
      />

      {/* 6. Growth */}
      <PortalCard
        badgeText="Growth"
        badgeColor="bg-rose-50 text-rose-700"
        title="Patient Growth"
        // icon={<PieIcon className="w-5 h-5 text-rose-600" />}
        iconBg="bg-rose-50"
        href="/dashboard/analytics/growth"
        description={
          <div className="w-full h-[190px] mt-2">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={monthlyTrendData}>
                <defs>
                  <linearGradient id="colorGrowth" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#f43f5e" stopOpacity={0.2} />
                    <stop offset="95%" stopColor="#f43f5e" stopOpacity={0} />
                  </linearGradient>
                </defs>

                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" tick={{ fontSize: 10 }} />
                <YAxis tick={{ fontSize: 10 }} />
                <Tooltip content={<CustomTooltip />} />

                <Area
                  type="monotone"
                  dataKey="growth"
                  stroke="#f43f5e"
                  fill="url(#colorGrowth)"
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        }
      />
    </div>
  );
}