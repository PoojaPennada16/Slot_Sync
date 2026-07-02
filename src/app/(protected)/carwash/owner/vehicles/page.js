import AllVehicles from "@/components/carwash/owner/vehicles/AllVehicles";

export default function VehiclesPage() {
  return (
    <div className="space-y-5">
      {/* Keep heading only here */}
      <div className="ml-1">
        <h1 className="text-3xl leading-none font-bold bg-gradient-to-r from-[#5563f0] to-[#2aa8df] bg-clip-text text-transparent">
          Vehicle Database
        </h1>
        <p className="mt-2 text-base text-[#667085]">
          Live vehicle tracking by status — click a card to filter, click a row to drill down.
        </p>
        
      </div>

      <AllVehicles />
    </div>
  );
}