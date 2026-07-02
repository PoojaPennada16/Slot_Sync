"use client";

import { useParams } from "next/navigation";

import ServiceHeader from "@/components/carwash/common/ResuableHeader";
import ServiceStats from "@/components/carwash/owner/services/details/ServiceStats";
import ServiceCharts from "@/components/carwash/owner/services/details/ServiceCharts";
import ServiceInfo from "@/components/carwash/owner/services/details/ServiceInfo";

export default function ServiceDetailsPage() {
  const { id } = useParams();

  // id is available for future API integration
  console.log(id);

  const service = {
    title: "Paint Protection Film",
    category: "PPF",
    duration: "24 Hours",
    price: "₹1,84,999",
    bookings: 7,
    revenue: "₹12,94,993",
    popularity: "100%",
    rating: "5.0",
    description:
      "Premium paint protection film safeguarding the vehicle from scratches and stone chips.",
  };

  return (
    <div className="-mt-4 min-h-screen px-3 py-3">
      <ServiceHeader
        title={service.title}
        subtitle={`${service.category} • ${service.duration}`}
        price={service.price}
      />

      <div className="mt-4">
        <ServiceStats
          bookings={service.bookings}
          revenue={service.revenue}
          popularity={service.popularity}
          rating={service.rating}
        />
      </div>

      <div className="mt-4">
        <ServiceCharts />
      </div>

      <div className="mt-4">
        <ServiceInfo />
      </div>

      {/* Description */}
      <div className="mt-4 rounded-[20px] border border-white/60 bg-white/70 px-6 py-4 shadow-[0_8px_30px_rgba(31,41,55,0.06)] backdrop-blur-sm">
        <h3 className="text-[16epx] font-semibold text-[#101828]">
          Description
        </h3>

        <p className="mt-2 text-[14px] leading-3 text-[#667085]">
          {service.description}
        </p>
      </div>
    </div>
  );
}