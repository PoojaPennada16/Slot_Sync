"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SIDEBAR_CONFIG } from "@/config/sidebar.config";
import SidebarProfileCard from "./SidebarProfileCard";

export default function Sidebar({ role = "OWNER" }) {
  const pathname = usePathname();

  const config = SIDEBAR_CONFIG[role];

  if (!config) return null;

  return (
    <aside className="fixed top-0 left-0 z-40 h-screen w-[273px] bg-[#eef0ff] px-6 py-6 flex flex-col">
      {/* Logo */}
      <div className="flex items-center gap-4 px-1 mb-5 shrink-0">
        <div className="w-[35px] h-[35px] rounded-full bg-gradient-to-r from-[#5563f0] to-[#2aa8df] flex items-center justify-center text-white text-xl font-bold shadow-sm">
          ✣
        </div>

        <div>
          <h1 className="text-[18px] font-bold text-[#111827] leading-tight">
            SlotSync
          </h1>
          <p className="text-[12px] text-[#6b7280] leading-tight">
            Auto Operations
          </p>
        </div>
      </div>

      {/* Menu Card */}
      <div className="bg-[#f8f9fd] w-[225px] rounded-[34px] p-3 shadow-[0_4px_20px_rgba(90,90,150,0.06)] flex flex-col overflow-hidden">
        <nav className="flex-1 overflow-y-auto sidebar-scroll space-y-2 pr-1">
          {config.items.map((item) => {
            const Icon = item.icon;

            const isActive =
              pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(item.href));

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-4 h-[35px] rounded-full text-sm font-semibold transition-all ${
                  isActive
                    ? "bg-gradient-to-r from-[#5563f0] to-[#2aa8df] text-white shadow-sm"
                    : "text-[#4b5563] hover:bg-[#eef2ff]"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Bottom Profile */}
      <div className="mt-4 shrink-0">
        <SidebarProfileCard
          role={role}
          profileRole={config.profileRole}
        />
      </div>
    </aside>
  );
}