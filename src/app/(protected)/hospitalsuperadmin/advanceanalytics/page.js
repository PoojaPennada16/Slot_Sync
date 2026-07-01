"use client";

import React from "react";
import { Wallet, RefreshCcw, Clock, Activity, TrendingUp, TrendingDown } from "lucide-react";
import PortalCard from "@/components/common/card";

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
      trend: "+11%",
      trendUp: true,
      icon: <Wallet className="w-5 h-5 text-amber-600" />,
      iconBg: "bg-amber-50",
    },
    {
      label: "Revisit Ratio",
      value: "48%",
      trend: "+6%",
      trendUp: true,
      icon: <RefreshCcw className="w-5 h-5 text-cyan-600" />,
      iconBg: "bg-cyan-50",
    },
    {
      label: "Cancellation Rate",
      value: "13%",
      trend: "-2%",
      trendUp: false,
      icon: <Clock className="w-5 h-5 text-rose-600" />,
      iconBg: "bg-rose-50",
    },
    {
      label: "Emergency Consults",
      value: "98%",
      trend: "+3%",
      trendUp: true,
      icon: <Activity className="w-5 h-5 text-amber-600" />,
      iconBg: "bg-amber-50",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Advanced Analytics</h1>
        <p className="text-sm text-slate-500 mt-1">Real-time hospital intelligence</p>
      </div>

      {/* ROW 1: Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {topStats.map((stat, idx) => (
          <PortalCard
            key={idx}
            variant="stat"
            label={stat.label}
            value={stat.value}
            trend={stat.trend}
            trendUp={stat.trendUp}
            icon={stat.icon}
            iconBg={stat.iconBg}
          />
        ))}
      </div>

      {/* ROW 2: Line Graphs */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <PortalCard
          title="Revenue & Booking Trends"
          description={
            <div className="-mt-1">
              <p className="text-xs text-slate-400 font-medium mb-4">Monthly</p>
              <div className="w-full h-56 pt-2">
                <svg viewBox="0 0 500 200" className="w-full h-full overflow-visible text-[11px] fill-slate-400 font-medium">
                  <text x="25" y="15" textAnchor="end">600</text>
                  <line x1="35" y1="10" x2="500" y2="10" stroke="#f1f5f9" strokeWidth="1" strokeDasharray="4 4" />
                  <text x="25" y="65" textAnchor="end">450</text>
                  <line x1="35" y1="60" x2="500" y2="60" stroke="#f1f5f9" strokeWidth="1" strokeDasharray="4 4" />
                  <text x="25" y="115" textAnchor="end">300</text>
                  <line x1="35" y1="110" x2="500" y2="110" stroke="#f1f5f9" strokeWidth="1" strokeDasharray="4 4" />
                  <text x="25" y="165" textAnchor="end">150</text>
                  <line x1="35" y1="160" x2="500" y2="160" stroke="#f1f5f9" strokeWidth="1" strokeDasharray="4 4" />
                  <line x1="35" y1="10" x2="35" y2="185" stroke="#94a3b8" strokeWidth="1.5" />
                  <line x1="35" y1="185" x2="500" y2="185" stroke="#94a3b8" strokeWidth="1.5" />
                  <text x="35" y="198" textAnchor="middle">0</text>
                  <path d="M35,180 Q150,170 270,70 T440,50 T500,30" fill="none" stroke="#6366f1" strokeWidth="3" strokeLinecap="round" />
                  <path d="M35,183 Q150,178 270,130 T440,110 T500,105" fill="none" stroke="#06b6d4" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </div>
            </div>
          }
        />

        <PortalCard
          title="Total Revenue"
          description={
            <div className="-mt-1">
              <p className="text-xs text-slate-400 font-medium mb-4">Monthly completed revenue</p>
              <div className="w-full h-56 pt-2">
                <svg viewBox="0 0 500 200" className="w-full h-full overflow-visible text-[11px] fill-slate-400 font-medium">
                  <defs>
                    <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#6366f1" />
                      <stop offset="100%" stopColor="#ffffff" />
                    </linearGradient>
                  </defs>
                  <text x="35" y="15" textAnchor="end">60000</text>
                  <line x1="45" y1="10" x2="500" y2="10" stroke="#f1f5f9" strokeWidth="1" strokeDasharray="4 4" />
                  <text x="35" y="65" textAnchor="end">45000</text>
                  <line x1="45" y1="60" x2="500" y2="60" stroke="#f1f5f9" strokeWidth="1" strokeDasharray="4 4" />
                  <text x="35" y="115" textAnchor="end">30000</text>
                  <line x1="45" y1="110" x2="500" y2="110" stroke="#f1f5f9" strokeWidth="1" strokeDasharray="4 4" />
                  <text x="35" y="165" textAnchor="end">15000</text>
                  <line x1="45" y1="160" x2="500" y2="160" stroke="#f1f5f9" strokeWidth="1" strokeDasharray="4 4" />
                  <line x1="45" y1="10" x2="45" y2="185" stroke="#94a3b8" strokeWidth="1.5" />
                  <line x1="45" y1="185" x2="500" y2="185" stroke="#94a3b8" strokeWidth="1.5" />
                  <text x="45" y="198" textAnchor="middle">0</text>
                  <path d="M45,185 L45,170 Q160,150 280,60 T440,35 T500,20 L500,185 Z" fill="url(#areaGrad)" opacity="0.12" />
                  <path d="M45,170 Q160,150 280,60 T440,35 T500,20" fill="none" stroke="#6366f1" strokeWidth="3" />
                </svg>
              </div>
            </div>
          }
        />
      </div>

      {/* ROW 3: Bar Graphs */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <PortalCard
          title="Peak Booking Hours"
          description={
            <div className="-mt-1">
              <p className="text-xs text-slate-400 font-medium mb-4">Across the day</p>
              <div className="w-full h-52">
                <svg viewBox="0 0 500 180" className="w-full h-full overflow-visible text-[11px] fill-slate-400 font-medium">
                  <text x="25" y="15" textAnchor="end">340</text>
                  <line x1="35" y1="10" x2="500" y2="10" stroke="#f1f5f9" strokeWidth="1" strokeDasharray="4 4" />
                  <text x="25" y="60" textAnchor="end">255</text>
                  <line x1="35" y1="55" x2="500" y2="55" stroke="#f1f5f9" strokeWidth="1" strokeDasharray="4 4" />
                  <text x="25" y="105" textAnchor="end">170</text>
                  <line x1="35" y1="100" x2="500" y2="100" stroke="#f1f5f9" strokeWidth="1" strokeDasharray="4 4" />
                  <text x="25" y="150" textAnchor="end">85</text>
                  <line x1="35" y1="145" x2="500" y2="145" stroke="#f1f5f9" strokeWidth="1" strokeDasharray="4 4" />
                  <line x1="35" y1="10" x2="35" y2="155" stroke="#94a3b8" strokeWidth="1.5" />
                  <line x1="35" y1="155" x2="500" y2="155" stroke="#94a3b8" strokeWidth="1.5" />
                  <text x="25" y="158" textAnchor="end">0</text>
                  {[
                    { hr: "09:00", h: 110 }, { hr: "10:00", h: 120 }, { hr: "11:00", h: 135 },
                    { hr: "12:00", h: 60 },  { hr: "14:00", h: 122 }, { hr: "15:00", h: 114 },
                    { hr: "16:00", h: 118 }, { hr: "17:00", h: 45 },
                  ].map((item, idx) => {
                    const xPos = 55 + idx * 54;
                    return (
                      <g key={idx}>
                        <rect x={xPos} y={155 - item.h} width="32" height={item.h} fill="#f59e0b" rx="4" />
                        <text x={xPos + 16} y="172" textAnchor="middle">{item.hr}</text>
                      </g>
                    );
                  })}
                </svg>
              </div>
            </div>
          }
        />

        <PortalCard
          title="Weekly Distribution"
          description={
            <div className="-mt-1">
              <p className="text-xs text-slate-400 font-medium mb-4">Bookings by weekday</p>
              <div className="w-full h-52">
                <svg viewBox="0 0 500 180" className="w-full h-full overflow-visible text-[11px] fill-slate-400 font-medium">
                  <text x="25" y="15" textAnchor="end">360</text>
                  <line x1="35" y1="10" x2="500" y2="10" stroke="#f1f5f9" strokeWidth="1" strokeDasharray="4 4" />
                  <text x="25" y="60" textAnchor="end">270</text>
                  <line x1="35" y1="55" x2="500" y2="55" stroke="#f1f5f9" strokeWidth="1" strokeDasharray="4 4" />
                  <text x="25" y="105" textAnchor="end">180</text>
                  <line x1="35" y1="100" x2="500" y2="100" stroke="#f1f5f9" strokeWidth="1" strokeDasharray="4 4" />
                  <text x="25" y="150" textAnchor="end">90</text>
                  <line x1="35" y1="145" x2="500" y2="145" stroke="#f1f5f9" strokeWidth="1" strokeDasharray="4 4" />
                  <line x1="35" y1="10" x2="35" y2="155" stroke="#94a3b8" strokeWidth="1.5" />
                  <line x1="35" y1="155" x2="500" y2="155" stroke="#94a3b8" strokeWidth="1.5" />
                  {["Mon","Tue","Wed","Thu","Fri","Sat","Sun"].map((day, idx) => {
                    const heights = [115, 90, 93, 110, 111, 117, 136];
                    const xPos = 50 + idx * 62;
                    return (
                      <g key={idx}>
                        <rect x={xPos} y={155 - heights[idx]} width="36" height={heights[idx]} fill="#06b6d4" rx="4" />
                        <text x={xPos + 18} y="172" textAnchor="middle">{day}</text>
                      </g>
                    );
                  })}
                </svg>
              </div>
            </div>
          }
        />
      </div>

      {/* ROW 4: Gender & Age */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <PortalCard
          title="Gender Analytics"
          description={
            <div className="-mt-1 flex flex-col">
              <p className="text-xs text-slate-400 font-medium mb-2">Patient gender split</p>
              <div className="flex flex-col items-center justify-center py-4 relative h-52">
                <svg className="w-36 h-36 transform -rotate-90">
                  <circle cx="72" cy="72" r="50" stroke="#06b6d4" strokeWidth="16" fill="transparent" strokeDasharray="314" strokeDashoffset="80" />
                  <circle cx="72" cy="72" r="50" stroke="#6366f1" strokeWidth="16" fill="transparent" strokeDasharray="314" strokeDashoffset="200" />
                  <circle cx="72" cy="72" r="50" stroke="#f59e0b" strokeWidth="16" fill="transparent" strokeDasharray="314" strokeDashoffset="280" />
                </svg>
                <div className="absolute bottom-2 right-4 bg-white px-3 py-1.5 border border-slate-100 rounded-xl shadow-sm text-xs font-bold text-slate-800">
                  Other : 107
                </div>
              </div>
            </div>
          }
        />

        <PortalCard
          title="Age Analytics"
          description={
            <div className="-mt-1">
              <p className="text-xs text-slate-400 font-medium mb-4">Patient age groups</p>
              <div className="w-full h-52">
                <svg viewBox="0 0 500 180" className="w-full h-full overflow-visible text-[11px] fill-slate-400 font-medium">
                  <text x="25" y="15" textAnchor="end">200</text>
                  <line x1="35" y1="10" x2="500" y2="10" stroke="#f1f5f9" strokeWidth="1" strokeDasharray="4 4" />
                  <text x="25" y="50" textAnchor="end">150</text>
                  <line x1="35" y1="45" x2="500" y2="45" stroke="#f1f5f9" strokeWidth="1" strokeDasharray="4 4" />
                  <text x="25" y="85" textAnchor="end">100</text>
                  <line x1="35" y1="80" x2="500" y2="80" stroke="#f1f5f9" strokeWidth="1" strokeDasharray="4 4" />
                  <text x="25" y="120" textAnchor="end">50</text>
                  <line x1="35" y1="115" x2="500" y2="115" stroke="#f1f5f9" strokeWidth="1" strokeDasharray="4 4" />
                  <line x1="35" y1="10" x2="35" y2="150" stroke="#94a3b8" strokeWidth="1.5" />
                  <line x1="35" y1="150" x2="500" y2="150" stroke="#94a3b8" strokeWidth="1.5" />
                  {["0-17","18-35","36-55","56+"].map((group, idx) => {
                    const heights = [95, 82, 80, 138];
                    const xPos = 65 + idx * 105;
                    return (
                      <g key={idx}>
                        <rect x={xPos} y={150 - heights[idx]} width="58" height={heights[idx]} fill="#c084fc" rx="4" />
                        <text x={xPos + 29} y="168" textAnchor="middle">{group}</text>
                      </g>
                    );
                  })}
                </svg>
              </div>
            </div>
          }
        />
      </div>

      {/* ROW 5: Diseases & Heatmap */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <PortalCard
          title="Most Treated Diseases"
          description={
            <div className="-mt-1 relative">
              <p className="text-xs text-slate-400 font-medium mb-4">By diagnosis count</p>
              <div className="w-full h-56">
                <svg viewBox="0 0 500 180" className="w-full h-full overflow-visible text-[11px] fill-slate-400 font-medium">
                  <text x="25" y="15" textAnchor="end">160</text>
                  <line x1="35" y1="10" x2="500" y2="10" stroke="#f1f5f9" strokeWidth="1" strokeDasharray="4 4" />
                  <text x="25" y="55" textAnchor="end">120</text>
                  <line x1="35" y1="50" x2="500" y2="50" stroke="#f1f5f9" strokeWidth="1" strokeDasharray="4 4" />
                  <text x="25" y="95" textAnchor="end">80</text>
                  <line x1="35" y1="90" x2="500" y2="90" stroke="#f1f5f9" strokeWidth="1" strokeDasharray="4 4" />
                  <text x="25" y="135" textAnchor="end">40</text>
                  <line x1="35" y1="130" x2="500" y2="130" stroke="#f1f5f9" strokeWidth="1" strokeDasharray="4 4" />
                  <line x1="35" y1="10" x2="35" y2="155" stroke="#94a3b8" strokeWidth="1.5" />
                  <line x1="35" y1="155" x2="500" y2="155" stroke="#94a3b8" strokeWidth="1.5" />
                  <rect x="420" y="10" width="65" height="145" fill="#f8fafc" opacity="0.9" />
                  {[
                    { label: "Viral Fever", h: 135 }, { label: "Gastric", h: 112 },
                    { label: "Hypertension", h: 109 }, { label: "Back Pain", h: 108 },
                    { label: "Arthritis", h: 104 }, { label: "Migraine", h: 103 },
                    { label: "Bronchitis", h: 96 },
                  ].map((d, idx) => {
                    const xPos = 42 + idx * 63;
                    return (
                      <g key={idx}>
                        <rect x={xPos} y={155 - d.h} width="48" height={d.h} fill="#10b981" rx="4" />
                      </g>
                    );
                  })}
                </svg>
                <div className="absolute right-14 top-20 bg-white border border-slate-100 rounded-2xl p-3 shadow-xl text-left min-w-[96px] z-10">
                  <p className="text-xs font-bold text-slate-800">Bronchitis</p>
                  <p className="text-xs font-semibold text-emerald-500 mt-1">count : 111</p>
                </div>
              </div>
            </div>
          }
        />

        <PortalCard
          title="Booking Heatmap"
          description={
            <div className="-mt-1">
              <p className="text-xs text-slate-400 font-medium mb-6">Day × hour density</p>
              <div className="flex flex-col gap-3.5 pl-4 select-none">
                <div className="flex items-center text-[11px] font-semibold text-slate-500">
                  <div className="w-10" />
                  {["9","10","11","12","14","15","16","17"].map((h, i) => (
                    <div key={i} className="flex-1 max-w-[44px] mr-2">{h}</div>
                  ))}
                </div>
                {heatmapData.map(([day, blocks], rowIdx) => (
                  <div key={rowIdx} className="flex items-center text-[11px] font-medium text-slate-400">
                    <div className="w-10">{day}</div>
                    <div className="flex items-center flex-1">
                      {blocks.map((alpha, colIdx) => (
                        <div
                          key={colIdx}
                          style={{ opacity: alpha }}
                          className="flex-1 h-11 max-w-[44px] bg-indigo-600 rounded-xl mr-2 transition-transform hover:scale-105 cursor-pointer"
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