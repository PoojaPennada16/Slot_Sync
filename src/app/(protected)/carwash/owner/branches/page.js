import BranchesSection from "@/components/carwash/owner/branches/BranchesSection";

export default function BranchesPage() {
  return (
    <div className="min-h-screen bg-#eef0ff px-1 py-1 md:px-1">
      <div className="mb-1">
        <h1 className="text-3xl font-bold leading-tight tracking-[-0.03em] text-[#4B57E7]">
          Branch Management
        </h1>
        <p className="mt-2 text-base text-[#667085]">
          Create, approve, suspend and monitor every service center in the network.
        </p>
        
      </div>

      <BranchesSection />
    </div>
  );
}