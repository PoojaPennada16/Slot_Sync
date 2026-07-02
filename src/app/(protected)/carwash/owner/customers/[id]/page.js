"use client";

import CustomerDetails from "@/components/carwash/owner/customers/CustomerDetails";
import ServiceHeader from "@/components/carwash/common/ResuableHeader";

export default function CustomerPage({ params }) {
  return (
    <div className="space-y-6">
      <ServiceHeader
        backText="All customers"
        title="Kiara Joshi"
        subtitle="+91 9970411227 • customer1@mail.com"
        rightContent={<></>}
      />

      <CustomerDetails />
    </div>
  );
}