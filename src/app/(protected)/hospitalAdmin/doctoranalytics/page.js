"use client";

import React from "react";
import { Wallet, RefreshCcw, Clock, Activity } from "lucide-react";
import PortalCard from "@/components/common/card";
import { MonthlyAppointmentsChart,RevenueChart,PeakBookingHoursChart,BookingHeatmap } from "@/components/hospitaldashboard/doctoranalytics";

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

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Advanced Analytics</h1>
        <p className="text-sm text-slate-500">Real-time hospital intelligence</p>
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
        <PortalCard title="Monthly Appointments" description={<MonthlyAppointmentsChart />} />
        <PortalCard title="Total Revenue" description={<RevenueChart />} />
      </div>

      {/* Bottom */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <PortalCard title="Peak Booking Hours" description={<PeakBookingHoursChart />} />
        <PortalCard title="Booking Heatmap" description={<BookingHeatmap />} />
      </div>
    </div>
  );
}