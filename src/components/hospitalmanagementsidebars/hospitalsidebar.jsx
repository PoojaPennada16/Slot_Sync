"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Stethoscope,
  Users,
  Calendar,
  Building2,
  Headphones,
  BarChart3,
  Bell,
  Settings,
  LogOut,
} from "lucide-react";

const menuSections = [
  {
    label: "Overview",
    items: [
      { name: "Dashboard", icon: LayoutDashboard, href: "/HospitalAdmin/dashboard" },
      { name: "Analytics", icon: BarChart3, href: "/HospitalAdmin/advanceanalytics" },
    ],
  },
  {
    label: "People",
    items: [
      { name: "Doctors", icon: Stethoscope, href: "/HospitalAdmin/doctor" },
      { name: "Patients", icon: Users, href: "/HospitalAdmin/patient" },
      { name: "Receptionists", icon: Headphones, href: "/HospitalAdmin/receptionists" },
    ],
  },
  {
    label: "Operations",
    items: [
      { name: "Appointments", icon: Calendar, href: "/HospitalAdmin/appointments" },
      { name: "Departments", icon: Building2, href: "/HospitalAdmin/departments" },
      {
        name: "Notifications",
        icon: Bell,
        href: "/HospitalAdmin/notifications",
        badge: 3,
      },
    ],
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-72 h-screen bg-white border-r border-slate-100 flex flex-col sticky top-0">
      {/* Header */}
      <Link href="/home">
        <div className="flex items-center gap-3 px-5 py-5 border-b border-slate-100">
          <div className="w-9 h-9 rounded-xl bg-indigo-600 text-white flex items-center justify-center text-sm font-bold shrink-0">
            M
          </div>
          <div className="min-w-0">
            <h2 className="text-sm font-bold text-slate-900 truncate">
              Hospital Admin
            </h2>
            <p className="text-xs text-slate-400 truncate">
              Management Console
            </p>
          </div>
        </div>
      </Link>

      {/* Menu */}
      <nav className="flex-1 px-3 py-4 overflow-y-auto hide-scrollbar">
        {menuSections.map((section) => (
          <div key={section.label} className="mb-5">
            <p className="px-3 mb-1.5 text-[11px] font-semibold uppercase tracking-wide text-slate-400">
              {section.label}
            </p>
            <div className="space-y-0.5">
              {section.items.map((item) => {
                const Icon = item.icon;
                const active = pathname === item.href;

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-colors duration-150
                      ${
                        active
                          ? "bg-indigo-50 text-indigo-700 font-semibold"
                          : "text-slate-600 hover:bg-slate-50 hover:text-slate-900 font-medium"
                      }`}
                  >
                    <Icon
                      size={18}
                      className={`shrink-0 ${
                        active ? "text-indigo-600" : "text-slate-400"
                      }`}
                    />
                    <span className="truncate flex-1">{item.name}</span>
                    {item.badge && (
                      <span className="bg-red-500 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center shrink-0">
                        {item.badge}
                      </span>
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </nav>

      {/* Footer / profile */}
      <Link href="/HospitalAdmin/settings">
        <div className="flex items-center gap-3 px-5 py-4 border-t border-slate-100 hover:bg-slate-50 transition-colors">
          <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
            <Settings size={16} className="text-slate-500" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-sm font-semibold text-slate-900 truncate">
              Hospital Admin
            </p>
            <p className="text-xs text-slate-400 truncate">Settings</p>
          </div>
          <LogOut size={16} className="text-slate-300 shrink-0" />
        </div>
      </Link>
    </aside>
  );
}