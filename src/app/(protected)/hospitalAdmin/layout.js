"use client"
import DoctorSidebar from "@/components/hospitalmanagementsidebars/doctorsidebar";
import Header from "@/components/hospitalmanagementheaders/doctorheader";

export default function Layout({ children }) {
  return (
    <div className="flex">
      
      {/* Sidebar */}
      <DoctorSidebar/>

      {/* Main Content */}
      <div className="flex-1 flex flex-col h-screen bg-gray-50">
        
        {/* Header */}
        <Header />

        {/* Page Content */}
        <div className="p-6 overflow-auto">
          {children}
        </div>

      </div>
    </div>
  );
}