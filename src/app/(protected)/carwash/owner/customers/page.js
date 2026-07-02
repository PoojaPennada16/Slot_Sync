import AllCustomers from "@/components/carwash/owner/customers/AllCustomers";

export default function CustomersPage() {
    return (
        <div className="space-y-5">
            {/* Keep heading only here */}
            <div className="ml-1">
                <h1 className="text-3xl leading-none font-bold bg-gradient-to-r from-[#5563f0] to-[#2aa8df] bg-clip-text text-transparent">
                    Customers
                </h1>
                <p className="mt-2 text-base text-[#667085]">
                    Lifetime value, vehicles owned, retention and feedback per customer.
                </p>

            </div>
            {/* Table */}
            <AllCustomers />
        </div>
    );
}