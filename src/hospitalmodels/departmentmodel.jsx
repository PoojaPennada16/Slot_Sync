"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { X, Users, Wallet, Star } from "lucide-react";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import PortalCard from "@/components/common/card";

export default function DepartmentModal({ open, name, data, onClose }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!open || !data || !mounted) return null;

  const modal = (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center bg-slate-900/40 p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-slate-50 rounded-3xl w-full max-w-4xl mt-4 mb-6 p-4 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full border border-indigo-200 flex items-center justify-center text-indigo-500 hover:bg-indigo-50 transition"
          aria-label="Close"
        >
          <X size={18} />
        </button>

        <h2 className="text-2xl font-bold text-slate-900">{name}</h2>
        <p className="text-slate-400 mt-1">Head: {data.head}</p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6">
          <PortalCard
            variant="stat"
            label="Doctors"
            value={data.doctors}
            icon={<Users size={18} className="text-indigo-500" />}
            iconBg="bg-indigo-50"
          />
          <PortalCard variant="stat" label="Available" value={data.available} />
          <PortalCard variant="stat" label="On Leave" value={data.onLeave} />
          <PortalCard
            variant="stat"
            label="Revenue"
            value={data.revenue}
            icon={<Wallet size={18} className="text-amber-500" />}
            iconBg="bg-amber-50"
          />
        </div>

        <div className="grid grid-cols-2 gap-3 mt-3">
          <PortalCard title="Most Booked" description={data.mostBooked} />
          <PortalCard
            title="Highest Rated"
            leading={
              <div className="flex flex-col flex-1 min-w-0">
                <p className="text-xs uppercase tracking-wide text-slate-500">
                  Highest Rated
                </p>
                <h2 className="mt-1 text-lg font-semibold text-slate-900 flex items-center gap-1">
                  {data.highestRated.name}
                  <Star size={16} className="text-amber-400 fill-amber-400 ml-1" />
                  <span className="text-slate-500 font-normal">
                    {data.highestRated.rating}
                  </span>
                </h2>
              </div>
            }
          />
        </div>

        <PortalCard
          className="mt-3 block"
          leading={
            <div className="flex flex-col flex-1 min-w-0 w-full">
              <div className="text-lg font-bold text-slate-900">Doctor Utilization</div>
              <div className="text-slate-400 text-sm mb-2">Visits per doctor</div>
              <div style={{ width: "100%", height: 220 }}>
                <ResponsiveContainer>
                  <BarChart
                    data={data.utilization}
                    margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#eef0f6" />
                    <XAxis
                      dataKey="name"
                      tick={{ fontSize: 11, fill: "#94a3b8" }}
                      interval={0}
                      angle={-15}
                      textAnchor="end"
                      height={50}
                    />
                    <YAxis tick={{ fontSize: 12, fill: "#94a3b8" }} />
                    <Tooltip cursor={{ fill: "rgba(99,102,241,0.06)" }} />
                    <Bar dataKey="visits" fill="#6366f1" radius={[8, 8, 0, 0]} maxBarSize={40} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          }
        />

        <PortalCard
          className="mt-3 block"
          leading={
            <div className="flex flex-col flex-1 min-w-0 w-full">
              <div className="text-lg font-bold text-slate-900">Appointment Trend</div>
              <div className="text-slate-400 text-sm mb-2">Monthly</div>
              <div style={{ width: "100%", height: 220 }}>
                <ResponsiveContainer>
                  <LineChart
                    data={data.trend}
                    margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#eef0f6" />
                    <XAxis dataKey="month" tick={{ fontSize: 12, fill: "#94a3b8" }} />
                    <YAxis tick={{ fontSize: 12, fill: "#94a3b8" }} />
                    <Tooltip />
                    <Line
                      type="monotone"
                      dataKey="visits"
                      stroke="#6366f1"
                      strokeWidth={3}
                      dot={false}
                      activeDot={{ r: 5 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          }
        />
      </div>
    </div>
  );

  return createPortal(modal, document.body);
}