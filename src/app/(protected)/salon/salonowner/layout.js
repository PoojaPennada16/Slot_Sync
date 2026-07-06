"use client";

import { useState } from "react";
import Sidebar from "@/components/salon/salonowner/layout/Sidebar";
import Header from "@/components/salon/salonowner/layout/Header";

export default function ProtectedLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-[#F7F7FC]">
      {/* Sidebar */}
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      {/* Right Side */}
      <div className="flex-1 lg:ml-[260px]">
        <Header
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />

        <main className="px-6 py-5">
          {children}
        </main>
      </div>
    </div>
  );
}