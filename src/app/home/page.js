"use client";

import { useState } from "react";
import PortalCard from "@/components/common/card";
import {
  Activity,
  Sparkles,
  Car,
  ArrowLeft,
  Building2,
  Stethoscope,
  ClipboardList,
} from "lucide-react";

// ---- Business verticals ----
const businesses = [
  {
    key: "hospital",
    name: "MediSync",
    description:
      "Appointments, slots, prescriptions, queues and follow-ups stay in sync.",
    icon: Activity,
    iconBg: "bg-indigo-600",
  },
  {
    key: "carwash",
    name: "ShineFleet",
    description:
      "Bookings, bay scheduling, staff and payments stay in sync.",
    icon: Car,
    iconBg: "bg-cyan-600",
  },
  {
    key: "salon",
    name: "GlowDesk",
    description:
      "Stylist schedules, client bookings and billing stay in sync.",
    icon: Sparkles,
    iconBg: "bg-pink-600",
  },
];

// ---- Portals per business ----
const portalsByBusiness = {
  hospital: [
    {
      href: "/hospitalsuperadmin/dashboard",
      icon: Building2,
      iconBg: "bg-indigo-100",
      iconColor: "text-indigo-600",
      badge: "Admin Portal",
      badgeColor: "bg-indigo-600",
      title: "Hospital Management",
      description:
        "Oversee doctors, departments, patients, appointments, receptionists and hospital-wide analytics.",
    },
    {
      href: "/hospitalAdmin/dashboard",
      icon: Stethoscope,
      iconBg: "bg-teal-50",
      iconColor: "text-teal-500",
      badge: "Doctor Portal",
      badgeColor: "bg-teal-500",
      title: "Doctors",
      description:
        "Manage today's schedule, patient records, prescriptions, availability and reception coordination.",
    },
    {
      href: "/receptionadmin/dashboard",
      icon: ClipboardList,
      iconBg: "bg-amber-50",
      iconColor: "text-amber-500",
      badge: "Receptionist Portal",
      badgeColor: "bg-amber-400",
      title: "Reception",
      description:
        "Book offline appointments, manage queues, check-ins, follow-ups and prescription handoffs.",
    },
  ],
  carwash: [
    {
      href: "/carwash/owner/dashboard",
      icon: Building2,
      iconBg: "bg-cyan-100",
      iconColor: "text-cyan-600",
      badge: "Admin Portal",
      badgeColor: "bg-cyan-600",
      title: "Wash Center Management",
      description:
        "Oversee bays, staff, bookings, inventory and revenue analytics.",
    },
    {
      href: "/carwash/manager/dashboard",
      icon: Car,
      iconBg: "bg-sky-50",
      iconColor: "text-sky-500",
      badge: "Staff Portal",
      badgeColor: "bg-sky-500",
      title: "Wash Bay Staff",
      description:
        "Manage today's queue, vehicle check-in/out and job status.",
    },
    {
      href: "/carwash/technician/dashboard",
      icon: ClipboardList,
      iconBg: "bg-amber-50",
      iconColor: "text-amber-500",
      badge: "Reception Portal",
      badgeColor: "bg-amber-400",
      title: "Front Desk",
      description: "Book walk-ins, manage queue and handle payments.",
    },
  ],
  salon: [
    {
      href: "/SalonAdmin/dashboard",
      icon: Building2,
      iconBg: "bg-pink-100",
      iconColor: "text-pink-600",
      badge: "Admin Portal",
      badgeColor: "bg-pink-600",
      title: "Salon Management",
      description:
        "Oversee stylists, services, bookings, inventory and analytics.",
    },
    {
      href: "/SalonStylist/dashboard",
      icon: Sparkles,
      iconBg: "bg-fuchsia-50",
      iconColor: "text-fuchsia-500",
      badge: "Stylist Portal",
      badgeColor: "bg-fuchsia-500",
      title: "Stylists",
      description:
        "Manage appointments, client history and service notes.",
    },
    {
      href: "/SalonReception/dashboard",
      icon: ClipboardList,
      iconBg: "bg-amber-50",
      iconColor: "text-amber-500",
      badge: "Front Desk",
      badgeColor: "bg-amber-400",
      title: "Reception",
      description:
        "Book walk-ins, manage queue and handle billing.",
    },
  ],
};

export default function Home() {
  const [activeBusiness, setActiveBusiness] = useState(null);

  const current = businesses.find((b) => b.key === activeBusiness);
  const portals = activeBusiness ? portalsByBusiness[activeBusiness] : [];

  return (
    <main className="relative min-h-screen w-full bg-gradient-to-tr from-indigo-50/20 via-white to-cyan-50/30 overflow-hidden px-6 py-8 md:px-16 md:py-12">
      {/* Header */}
      <header className="flex items-center justify-between mb-10 max-w-6xl mx-auto w-full">
        <div className="flex items-center gap-2.5">
          <div
            className={`w-9 h-9 rounded-xl flex items-center justify-center shadow-md ${
              current ? current.iconBg : "bg-indigo-600"
            }`}
          >
            {current ? (
              <current.icon className="w-5 h-5 text-white" />
            ) : (
              <Activity className="w-5 h-5 text-white" />
            )}
          </div>

          <div>
            <h2 className="text-base font-bold text-slate-900">
              {current ? current.name : "OneDesk"}
            </h2>
            <span className="text-[11px] text-slate-400 font-medium">
              {current
                ? "Connected Business Suite"
                : "Multi-business Management Suite"}
            </span>
          </div>
        </div>

        {activeBusiness && (
          <button
            onClick={() => setActiveBusiness(null)}
            className="flex items-center gap-1.5 text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            All businesses
          </button>
        )}
      </header>

      <section className="max-w-6xl mx-auto w-full">
        {!activeBusiness ? (
          <>
            {/* Business selection header */}
            <div className="mb-12 max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
                One platform,{" "}
                <span className="text-indigo-600">every</span>
                <br />
                <span className="text-sky-500">business you run</span>
              </h1>
              <p className="text-base md:text-lg text-slate-500">
                Pick a business to open its connected portals.
              </p>
            </div>

            {/* Business Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
              {businesses.map((b) => (
                <div
                  key={b.key}
                  onClick={() => setActiveBusiness(b.key)}
                  className="cursor-pointer"
                >
                  <PortalCard
                    icon={
                      <b.icon
                        className="w-6 h-6 text-white"
                        strokeWidth={2}
                      />
                    }
                    iconBg={b.iconBg}
                    title={b.name}
                    description={b.description}
                    className="h-full hover:-translate-y-1 transition-all"
                  />
                </div>
              ))}
            </div>
          </>
        ) : (
          <>
            {/* Portal header */}
            <div className="mb-12 max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
                {current.name},{" "}
                <span className="text-indigo-600">three</span>
                <br />
                <span className="text-sky-500">connected portals</span>
              </h1>
              <p className="text-base md:text-lg text-slate-500">
                {current.description}
              </p>
            </div>

            {/* Portal Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
              {portals.map((p) => (
                <PortalCard
                  key={p.title}
                  href={p.href}
                  icon={
                    <p.icon
                      className={`w-6 h-6 ${p.iconColor}`}
                      strokeWidth={2}
                    />
                  }
                  iconBg={p.iconBg}
                  badgeText={p.badge}
                  badgeColor={`${p.badgeColor} text-white`}
                  title={p.title}
                  description={p.description}
                  className="h-full hover:-translate-y-1"
                >
                  <span className="text-sm font-semibold text-slate-700 group-hover:text-slate-900">
                    Enter →
                  </span>
                </PortalCard>
              ))}
            </div>
          </>
        )}
      </section>
    </main>
  );
}