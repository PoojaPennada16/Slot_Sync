import Sidebar from "@/components/hospitalmanagementsidebars/hospitalsidebar";
import Header from "@/components/hospitalmanagementheaders/hospitalheader";

export default function Layout({ children }) {
  return (
    <div className="flex">
      
      {/* Sidebar */}
      <Sidebar />

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