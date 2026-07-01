import ReceptionSidebar from "@/components/hospitalmanagementsidebars/receptionsidebar";
import ReceptionHeader from "@/components/hospitalmanagementheaders/receptionheader";

export default function Layout({ children }) {
  return (
    <div className="flex h-screen bg-[#f6f7fc]">
     <ReceptionSidebar/>

      <div className="flex flex-1 flex-col overflow-hidden">
        <ReceptionHeader/>

        <main className="flex-1 overflow-y-auto p-8">
          {children}
        </main>
      </div>
    </div>
  );
}