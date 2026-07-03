"use client";

import React from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

/* ── Default/mock data (used if no data prop is passed) ────────── */

export const DEFAULT_MONTHLY_APPOINTMENTS = [
  { month: "Jan", appointments: 40, patients: 24 },
  { month: "Feb", appointments: 30, patients: 13 },
  { month: "Mar", appointments: 20, patients: 98 },
  { month: "Apr", appointments: 27, patients: 39 },
  { month: "May", appointments: 18, patients: 48 },
  { month: "Jun", appointments: 23, patients: 38 },
  { month: "Jul", appointments: 34, patients: 43 },
];

export const DEFAULT_REVENUE_DATA = [
  { month: "Jan", revenue: 40000 },
  { month: "Feb", revenue: 45000 },
  { month: "Mar", revenue: 55000 },
  { month: "Apr", revenue: 60000 },
  { month: "May", revenue: 80000 },
  { month: "Jun", revenue: 95000 },
  { month: "Jul", revenue: 110000 },
];

export const DEFAULT_HEATMAP_DATA = [
  ["Mon", [0.6, 0.6, 0.6, 0.4, 0.6, 0.4, 0.4, 0.4]],
  ["Tue", [0.5, 0.5, 0.5, 0.2, 0.5, 0.5, 0.6, 0.3]],
  ["Wed", [0.6, 0.5, 0.5, 0.2, 0.5, 0.4, 0.6, 0.3]],
  ["Thu", [0.4, 0.5, 0.6, 0.3, 0.6, 0.6, 0.5, 0.3]],
  ["Fri", [0.5, 0.5, 0.7, 0.4, 0.6, 0.5, 0.6, 0.3]],
  ["Sat", [0.5, 0.7, 0.6, 0.4, 0.6, 0.5, 0.6, 0.3]],
];

export const DEFAULT_BOOKING_DATA = [90, 120, 150, 80, 140, 110, 130, 70];
export const DEFAULT_HOURS = ["9", "10", "11", "12", "14", "15", "16", "17"];

/* ── Monthly Appointments (Line chart) ──────────────────────────── */

export function MonthlyAppointmentsChart({ data = DEFAULT_MONTHLY_APPOINTMENTS }) {
  return (
    <div className="w-full h-[220px] mt-2">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />

          <XAxis dataKey="month" tick={{ fontSize: 12 }} axisLine={false} tickLine={false} />

          <YAxis tick={{ fontSize: 12 }} axisLine={false} tickLine={false} />

          <Tooltip />

          <Line type="monotone" dataKey="appointments" stroke="#6366f1" strokeWidth={3} dot={false} />

          <Line type="monotone" dataKey="patients" stroke="#06b6d4" strokeWidth={3} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

/* ── Total Revenue (Area chart) ─────────────────────────────────── */

export function RevenueChart({ data = DEFAULT_REVENUE_DATA }) {
  return (
    <div className="w-full h-[220px] mt-2">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <defs>
            <linearGradient id="revenue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#6366f1" stopOpacity={0.35} />
              <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
            </linearGradient>
          </defs>

          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />

          <XAxis dataKey="month" tick={{ fontSize: 12 }} axisLine={false} tickLine={false} />

          <YAxis
            tick={{ fontSize: 12 }}
            axisLine={false}
            tickLine={false}
            tickFormatter={(value) => `₹${value / 1000}K`}
          />

          <Tooltip formatter={(value) => [`₹${value.toLocaleString()}`, "Revenue"]} />

          <Area type="monotone" dataKey="revenue" stroke="#6366f1" strokeWidth={3} fill="url(#revenue)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

/* ── Peak Booking Hours (custom SVG bar chart) ──────────────────── */

export function PeakBookingHoursChart({
  data = DEFAULT_BOOKING_DATA,
  hours = DEFAULT_HOURS,
}) {
  return (
    <div className="h-64">
      <svg viewBox="0 0 500 260" className="w-full h-full">
        <line x1="50" y1="20" x2="50" y2="220" stroke="#94a3b8" />
        <line x1="50" y1="220" x2="480" y2="220" stroke="#94a3b8" />

        {[0, 50, 100, 150].map((v, i) => {
          const y = 220 - v;
          return (
            <g key={i}>
              <line x1="50" y1={y} x2="480" y2={y} stroke="#e2e8f0" strokeDasharray="5 5" />
              <text x="20" y={y + 5} fontSize="12">
                {v}
              </text>
            </g>
          );
        })}

        {data.map((h, i) => {
          const x = 70 + i * 50;
          const height = h;

          return (
            <g key={i}>
              <rect x={x} y={220 - height} width="30" height={height} fill="#f59e0b" rx="6" />
              <text x={x + 15} y="245" textAnchor="middle" fontSize="12">
                {hours[i]}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}

/* ── Booking Heatmap (day × hour density grid) ──────────────────── */

export function BookingHeatmap({
  data = DEFAULT_HEATMAP_DATA,
  hours = DEFAULT_HOURS,
}) {
  return (
    <div>
      <p className="text-xs text-slate-400 mb-6">Day × hour density</p>

      <div className="flex items-center mb-3">
        <div className="w-10" />
        <div className="flex gap-2">
          {hours.map((h) => (
            <div key={h} className="w-8 text-xs text-center">
              {h}
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-3">
        {data.map(([day, blocks], rowIdx) => (
          <div key={rowIdx} className="flex items-center gap-2">
            <div className="w-10 text-xs">{day}</div>

            <div className="flex gap-2">
              {blocks.map((alpha, colIdx) => (
                <div
                  key={colIdx}
                  className="w-8 h-8 bg-indigo-600 rounded-lg"
                  style={{ opacity: alpha }}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}