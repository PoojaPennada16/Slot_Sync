"use client";

import PortalCard from "../common/card";
import { TrendingUp, Clock } from "lucide-react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";

// --- MOCK DATA ---
const revenueData = [
  { name: "Nov", revenue: 0 },
  { name: "Dec", revenue: 0 },
  { name: "Jan", revenue: 0 },
  { name: "Feb", revenue: 2000 },
  { name: "Mar", revenue: 15000 },
  { name: "Apr", revenue: 23460 },
  { name: "May", revenue: 22000 },
  { name: "Jun", revenue: 25000 },
];

const peakHoursData = [
  { hour: "09:00", count: 270 },
  { hour: "10:00", count: 295 },
  { hour: "11:00", count: 335 },
  { hour: "12:00", count: 160 },
  { hour: "14:00", count: 310 },
  { hour: "15:00", count: 280 },
  { hour: "16:00", count: 295 },
  { hour: "17:00", count: 120 },
];

// --- CUSTOM TOOLTIPS ---
const RevenueTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-2xl bg-white px-4 py-3 shadow-lg border border-slate-100">
        <p className="text-sm font-semibold text-slate-800 mb-1">{label}</p>
        <p className="text-sm font-medium text-indigo-500">
          revenue : {payload[0].value.toLocaleString()}
        </p>
      </div>
    );
  }
  return null;
};

const PeakTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-2xl bg-white px-4 py-3 shadow-lg border border-slate-100">
        <p className="text-sm font-semibold text-slate-800 mb-1">{label}</p>
        <p className="text-sm font-medium text-teal-500">
          appointments : {payload[0].value}
        </p>
      </div>
    );
  }
  return null;
};

// --- MAIN COMPONENT ---
export default function DashboardCharts() {
  return (
    <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
      {/* Revenue Trend */}
      <PortalCard
        title="My Revenue Trend"
        description={
          <>
            <p className="-mt-1 text-sm text-slate-400">Estimated monthly</p>
            <ResponsiveContainer width="100%" height={260}>
              <AreaChart
                data={revenueData}
                margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6366f1" stopOpacity={0.18} />
                    <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="4 4" vertical={false} stroke="#e2e8f0" />
                <XAxis dataKey="name" tick={{ fontSize: 11, fill: "#94a3b8" }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 11, fill: "#94a3b8" }} axisLine={false} tickLine={false} tickFormatter={(v) => (v === 0 ? "0" : `${v / 1000}k`)} />
                <Tooltip content={<RevenueTooltip />} cursor={{ stroke: "#6366f1", strokeWidth: 1, strokeDasharray: "4 4" }} />
                <Area type="monotone" dataKey="revenue" stroke="#6366f1" strokeWidth={2.5} fill="url(#revenueGradient)" dot={false} activeDot={{ r: 5, fill: "#6366f1", stroke: "#fff", strokeWidth: 2 }} />
              </AreaChart>
            </ResponsiveContainer>
          </>
        }
        // icon={<TrendingUp className="w-5 h-5 text-indigo-600" />}
        iconBg="bg-indigo-50"
        badgeText="Financials"
        badgeColor="bg-indigo-50 text-indigo-700"
      />

      {/* Peak Hours */}
      <PortalCard
        title="My Peak Hours"
        description={
          <>
            <p className="-mt-1 text-sm text-slate-400">Appointments by hour</p>
            <ResponsiveContainer width="100%" height={260}>
              <BarChart
                data={peakHoursData}
                margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
                barCategoryGap="20%"
              >
                <CartesianGrid strokeDasharray="4 4" vertical={false} stroke="#e2e8f0" />
                <XAxis dataKey="hour" tick={{ fontSize: 11, fill: "#94a3b8" }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 11, fill: "#94a3b8" }} axisLine={false} tickLine={false} />
                <Tooltip content={<PeakTooltip />} cursor={{ fill: "rgba(0,0,0,0.04)" }} />
                <Bar dataKey="count" fill="#14b8a6" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </>
        }
        // icon={<Clock className="w-5 h-5 text-teal-600" />}
        iconBg="bg-teal-50"
        badgeText="Schedule"
        badgeColor="bg-teal-50 text-teal-700"
      />
    </div>
  );
}