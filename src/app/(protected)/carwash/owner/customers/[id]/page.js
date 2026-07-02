import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import CustomerDetails from "@/components/carwash/owner/customers/CustomerDetails";

export default function CustomerPage({ params }) {
  return (
    <div className="space-y-6">
      {/* Header only */}
      <div className="ml-1">
        <Link
          href="/owner/customers"
          className="flex items-center gap-2 text-[#667085] text-base mb-5"
        >
          <ArrowLeft size={20} />
          All customers
        </Link>

        <h1 className="text-[48px] font-bold text-[#111827]">
          Kiara Joshi
        </h1>

        <p className="mt-2 text-[18px] text-[#667085]">
          +91 9970411227 • customer1@mail.com
        </p>
      </div>

      {/* Remaining UI */}
      <CustomerDetails />
    </div>
  );
}