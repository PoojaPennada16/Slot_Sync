"use client";

import React, { useEffect } from "react";
import { X, ChevronDown } from "lucide-react";
import Button from "@/components/common/button";

export default function AddDoctorModal({
  isOpen,
  onClose,
  onSubmit,
  doctor,
}) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    onSubmit(data);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm">
      {/* Backdrop */}
      <div
        className="absolute inset-0"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative z-10 w-full max-w-xl bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] flex flex-col max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-100">
          <h2 className="text-xl font-bold text-slate-900">
            {doctor ? "Update Doctor" : "Add Doctor"}
          </h2>

          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-slate-100 transition"
          >
            <X className="w-5 h-5 text-slate-500" />
          </button>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="flex-1 overflow-y-auto p-6 space-y-4"
        >
          {/* Name & Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-slate-800 mb-1">
                Name
              </label>
              <input
                required
                type="text"
                name="name"
                defaultValue={doctor?.name || ""}
                className="w-full px-4 py-2.5 border border-slate-200 rounded-xl bg-slate-50 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-800 mb-1">
                Email
              </label>
              <input
                required
                type="email"
                name="email"
                defaultValue={doctor?.email || ""}
                className="w-full px-4 py-2.5 border border-slate-200 rounded-xl bg-slate-50 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
              />
            </div>
          </div>

          {/* Phone & Department */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-slate-800 mb-1">
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                defaultValue={doctor?.phone || ""}
                className="w-full px-4 py-2.5 border border-slate-200 rounded-xl bg-slate-50 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-800 mb-1">
                Department
              </label>

              <div className="relative">
                <select
                  name="department"
                  defaultValue={doctor?.dept || "Cardiology"}
                  className="w-full appearance-none px-4 py-2.5 border border-slate-200 rounded-xl bg-slate-50 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                >
                  <option value="Cardiology">Cardiology</option>
                  <option value="Dermatology">Dermatology</option>
                  <option value="ENT">ENT</option>
                  <option value="Pediatrics">Pediatrics</option>
                </select>

                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Specialization & Qualification */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-slate-800 mb-1">
                Specialization
              </label>

              <input
                type="text"
                name="specialization"
                defaultValue={doctor?.role || ""}
                className="w-full px-4 py-2.5 border border-slate-200 rounded-xl bg-slate-50 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-800 mb-1">
                Qualification
              </label>

              <input
                type="text"
                name="qualification"
                defaultValue={doctor?.qualification || "MBBS, MD"}
                className="w-full px-4 py-2.5 border border-slate-200 rounded-xl bg-slate-50 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
              />
            </div>
          </div>

          {/* Experience & Fee */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-slate-800 mb-1">
                Experience (yrs)
              </label>

              <input
                type="number"
                name="experience"
                defaultValue={
                  doctor?.experience
                    ? doctor.experience.replace("y exp", "")
                    : ""
                }
                className="w-full px-4 py-2.5 border border-slate-200 rounded-xl bg-slate-50 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-800 mb-1">
                Consultation Fee
              </label>

              <input
                type="number"
                name="fee"
                defaultValue={doctor?.fee || 600}
                className="w-full px-4 py-2.5 border border-slate-200 rounded-xl bg-slate-50 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
              />
            </div>
          </div>

          {/* Hospital */}
          <div>
            <label className="block text-sm font-semibold text-slate-800 mb-1">
              Hospital
            </label>

            <input
              type="text"
              name="hospital"
              defaultValue={doctor?.hospital || "Main Campus"}
              className="w-full sm:w-1/2 px-4 py-2.5 border border-slate-200 rounded-xl bg-slate-50 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
            />
          </div>

          {/* About */}
          <div>
            <label className="block text-sm font-semibold text-slate-800 mb-1">
              About
            </label>

            <textarea
              name="about"
              rows={3}
              defaultValue={doctor?.about || ""}
              className="w-full px-4 py-2.5 border border-slate-200 rounded-xl bg-slate-50 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
            />
          </div>

          {/* Footer */}
          <div className="flex justify-end gap-3 pt-4 border-t border-slate-100">
            <Button
              type="button"
              variant="secondary"
              onClick={onClose}
            >
              Cancel
            </Button>

            <Button type="submit" variant="primary">
              {doctor ? "Update Doctor" : "Add Doctor"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}