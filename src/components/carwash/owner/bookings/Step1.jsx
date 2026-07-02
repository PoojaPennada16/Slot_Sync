"use client";

import ReusableDropdown from "./ReusableDropdown";

export default function Step1({
  customer,
  setCustomer,
  error,
}) {
  const customers = [
    "Aryan Malhotra · +91 98200 12345",
    "Riya Bhandari · +91 99670 88123",
    "Karan Verma · +91 98904 32100",
    "Ishita Nair · +91 97689 56712",
    "Rohan Desai · +91 98213 76542",
    "Anaya Kapadia · +91 99303 21987",
  ];

  return (
    <div className="mt-3">
      <ReusableDropdown
        label="Customer"
        placeholder="Select existing customer"
        value={customer}
        onChange={(value) => {
          setCustomer(value);
        }}
        options={customers}
      />

      {error && (
        <p className="mt-2 ml-2 text-[13px] font-medium text-[#E5484D]">
          {error}
        </p>
      )}
    </div>
  );
}