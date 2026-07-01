"use client";

import React from "react";
import {
    Wallet,
    RefreshCcw,
    Clock,
    Activity,
} from "lucide-react";
import PortalCard from "@/app/components/common/card";

import {
    ResponsiveContainer,
    LineChart,
    Line,
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip
} from "recharts";

const monthlyAppointments = [
    { month: "Jan", appointments: 40, patients: 24 },
    { month: "Feb", appointments: 30, patients: 13 },
    { month: "Mar", appointments: 20, patients: 98 },
    { month: "Apr", appointments: 27, patients: 39 },
    { month: "May", appointments: 18, patients: 48 },
    { month: "Jun", appointments: 23, patients: 38 },
    { month: "Jul", appointments: 34, patients: 43 },
];

const revenueData = [
    { month: "Jan", revenue: 40000 },
    { month: "Feb", revenue: 45000 },
    { month: "Mar", revenue: 55000 },
    { month: "Apr", revenue: 60000 },
    { month: "May", revenue: 80000 },
    { month: "Jun", revenue: 95000 },
    { month: "Jul", revenue: 110000 },
];

const heatmapData = [
    ["Mon", [0.6, 0.6, 0.6, 0.4, 0.6, 0.4, 0.4, 0.4]],
    ["Tue", [0.5, 0.5, 0.5, 0.2, 0.5, 0.5, 0.6, 0.3]],
    ["Wed", [0.6, 0.5, 0.5, 0.2, 0.5, 0.4, 0.6, 0.3]],
    ["Thu", [0.4, 0.5, 0.6, 0.3, 0.6, 0.6, 0.5, 0.3]],
    ["Fri", [0.5, 0.5, 0.7, 0.4, 0.6, 0.5, 0.6, 0.3]],
    ["Sat", [0.5, 0.7, 0.6, 0.4, 0.6, 0.5, 0.6, 0.3]],
];

export default function AdvancedAnalytics() {
    const topStats = [
        {
            label: "Total Revenue",
            value: "₹8,87,000",
            icon: <Wallet className="w-5 h-5 text-amber-600" />,
            iconBg: "bg-amber-50",
        },
        {
            label: "Revisit Ratio",
            value: "48%",
            icon: <RefreshCcw className="w-5 h-5 text-cyan-600" />,
            iconBg: "bg-cyan-50",
        },
        {
            label: "Cancellation Rate",
            value: "13%",
            icon: <Clock className="w-5 h-5 text-rose-600" />,
            iconBg: "bg-rose-50",
        },
        {
            label: "Emergency Consults",
            value: "98%",
            icon: <Activity className="w-5 h-5 text-amber-600" />,
            iconBg: "bg-amber-50",
        },
         {
            label: "Emergency Consults",
            value: "98%",
            icon: <Activity className="w-5 h-5 text-amber-600" />,
            iconBg: "bg-amber-50",
        },
         {
            label: "Emergency Consults",
            value: "98%",
            icon: <Activity className="w-5 h-5 text-amber-600" />,
            iconBg: "bg-amber-50",
        },
         {
            label: "Emergency Consults",
            value: "98%",
            icon: <Activity className="w-5 h-5 text-amber-600" />,
            iconBg: "bg-amber-50",
        },
         {
            label: "Emergency Consults",
            value: "98%",
            icon: <Activity className="w-5 h-5 text-amber-600" />,
            iconBg: "bg-amber-50",
        },
    ];

    const bookingData = [90, 120, 150, 80, 140, 110, 130, 70];
    const hours = ["9", "10", "11", "12", "14", "15", "16", "17"];

    return (
        <div className="space-y-6">
            {/* Header */}
            <div>
                <h1 className="text-3xl font-bold text-slate-900">
                    Advanced Analytics
                </h1>
                <p className="text-sm text-slate-500">
                    Real-time hospital intelligence
                </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {topStats.map((stat, idx) => (
                    <PortalCard
                        key={idx}
                        variant="stat"
                        label={stat.label}
                        value={stat.value}
                        icon={stat.icon}
                        iconBg={stat.iconBg}
                    />
                ))}
            </div>

            {/* Revenue Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <PortalCard
                    title="Monthly Appointments"
                    description={
                        <div className="w-full h-[220px] mt-2">
                            <ResponsiveContainer width="100%" height="100%">
                                <LineChart data={monthlyAppointments}>
                                    <CartesianGrid
                                        strokeDasharray="3 3"
                                        vertical={false}
                                        stroke="#e2e8f0"
                                    />

                                    <XAxis
                                        dataKey="month"
                                        tick={{ fontSize: 12 }}
                                        axisLine={false}
                                        tickLine={false}
                                    />

                                    <YAxis
                                        tick={{ fontSize: 12 }}
                                        axisLine={false}
                                        tickLine={false}
                                    />

                                    <Tooltip />

                                    <Line
                                        type="monotone"
                                        dataKey="appointments"
                                        stroke="#6366f1"
                                        strokeWidth={3}
                                        dot={false}
                                    />

                                    <Line
                                        type="monotone"
                                        dataKey="patients"
                                        stroke="#06b6d4"
                                        strokeWidth={3}
                                        dot={false}
                                    />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    }
                />

                <PortalCard
                    title="Total Revenue"
                    description={
                        <div className="w-full h-[220px] mt-2">
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={revenueData}>
                                    <defs>
                                        <linearGradient id="revenue" x1="0" y1="0" x2="0" y2="1">
                                            <stop
                                                offset="5%"
                                                stopColor="#6366f1"
                                                stopOpacity={0.35}
                                            />
                                            <stop
                                                offset="95%"
                                                stopColor="#6366f1"
                                                stopOpacity={0}
                                            />
                                        </linearGradient>
                                    </defs>

                                    <CartesianGrid
                                        strokeDasharray="3 3"
                                        vertical={false}
                                        stroke="#e2e8f0"
                                    />

                                    <XAxis
                                        dataKey="month"
                                        tick={{ fontSize: 12 }}
                                        axisLine={false}
                                        tickLine={false}
                                    />

                                    <YAxis
                                        tick={{ fontSize: 12 }}
                                        axisLine={false}
                                        tickLine={false}
                                        tickFormatter={(value) => `₹${value / 1000}K`}
                                    />

                                    <Tooltip
                                        formatter={(value) => [`₹${value.toLocaleString()}`, "Revenue"]}
                                    />

                                    <Area
                                        type="monotone"
                                        dataKey="revenue"
                                        stroke="#6366f1"
                                        strokeWidth={3}
                                        fill="url(#revenue)"
                                    />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    }
                />
            </div>

            {/* Bottom */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <PortalCard
                    title="Peak Booking Hours"
                    description={
                        <div className="h-64">
                            <svg viewBox="0 0 500 260" className="w-full h-full">
                                <line x1="50" y1="20" x2="50" y2="220" stroke="#94a3b8" />
                                <line x1="50" y1="220" x2="480" y2="220" stroke="#94a3b8" />

                                {[0, 50, 100, 150].map((v, i) => {
                                    const y = 220 - v;
                                    return (
                                        <g key={i}>
                                            <line
                                                x1="50"
                                                y1={y}
                                                x2="480"
                                                y2={y}
                                                stroke="#e2e8f0"
                                                strokeDasharray="5 5"
                                            />
                                            <text x="20" y={y + 5} fontSize="12">
                                                {v}
                                            </text>
                                        </g>
                                    );
                                })}

                                {bookingData.map((h, i) => {
                                    const x = 70 + i * 50;
                                    const height = h;

                                    return (
                                        <g key={i}>
                                            <rect
                                                x={x}
                                                y={220 - height}
                                                width="30"
                                                height={height}
                                                fill="#f59e0b"
                                                rx="6"
                                            />
                                            <text
                                                x={x + 15}
                                                y="245"
                                                textAnchor="middle"
                                                fontSize="12"
                                            >
                                                {hours[i]}
                                            </text>
                                        </g>
                                    );
                                })}
                            </svg>
                        </div>
                    }
                />

                <PortalCard
                    title="Booking Heatmap"
                    description={
                        <div>
                            <p className="text-xs text-slate-400 mb-6">
                                Day × hour density
                            </p>

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
                                {heatmapData.map(([day, blocks], rowIdx) => (
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
                    }
                />
            </div>
        </div>
    );
}