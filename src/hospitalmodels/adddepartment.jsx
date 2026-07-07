"use client";

import React, { useState } from "react";
import InputField from "@/components/common/inputfield";
import PortalCard from "@/components/common/card";

export default function AddDepartmentModal({
  open = true,
  onClose = () => {},
  onSubmit = () => {},
}) {
  const [form, setForm] = useState({
    name: "",
    head: "",
    description: "",
  });

  if (!open) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    onSubmit(form);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
      <div className="w-full max-w-2xl rounded-3xl bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.25)]">
        {/* Header */}
        <div className="mb-4 flex items-start justify-between">
          <h2 className="text-xl font-bold text-gray-900">Add Department</h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="text-gray-500 transition-colors hover:text-gray-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Live preview — reuses PortalCard so the person can
            see how the department will look once added */}
        <div className="mb-4">
          <PortalCard
            title={form.name || "Department name"}
            description={form.description || "Short description will appear here"}
            badgeText="Preview"
            badgeColor="bg-indigo-100 text-indigo-700"
            iconBg="bg-indigo-100"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#4f46e5"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 21h18" />
                <path d="M5 21V7l8-4v18" />
                <path d="M19 21V11l-6-4" />
                <path d="M9 9v.01" />
                <path d="M9 12v.01" />
                <path d="M9 15v.01" />
                <path d="M9 18v.01" />
              </svg>
            }
          />
        </div>

        {/* Form — Name and Head sit side by side to keep the modal short */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <InputField
            label="Name"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Cardiology"
          />

          <InputField
            label="Head"
            name="head"
            value={form.head}
            onChange={handleChange}
            placeholder="Dr. Jane Doe"
          />
        </div>

        {/* Description — no textarea variant was provided,
            so it's styled inline to match InputField exactly */}
        <div className="mt-4 w-full">
          <label
            htmlFor="description"
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            rows={2}
            value={form.description}
            onChange={handleChange}
            placeholder="Short description"
            className="
              w-full rounded-xl border border-gray-300
              bg-white px-4 py-2.5 text-sm outline-none
              transition-all duration-200 resize-y
              focus:border-blue-500 focus:ring-2 focus:ring-blue-100
              disabled:cursor-not-allowed disabled:bg-gray-100
            "
          />
        </div>

        {/* Actions */}
        <div className="mt-6 flex justify-end gap-3">
          <button
            type="button"
            onClick={onClose}
            className="rounded-xl border border-gray-300 bg-white px-6 py-2.5 text-sm font-semibold text-gray-900 shadow-sm transition-colors hover:bg-gray-50"
          >
            Cancel
          </button>

          <button
            type="button"
            onClick={handleSubmit}
            className="rounded-xl bg-indigo-400 px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-indigo-500"
          >
            Add Department
          </button>
        </div>
      </div>
    </div>
  );
}