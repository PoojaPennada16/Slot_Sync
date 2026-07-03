"use client";

import React, { useEffect, useState } from "react";
import { X, ChevronDown } from "lucide-react";
import Button from "@/components/common/button";
import InputField from "@/components/common/inputfield";

export default function AddDoctorModal({
  isOpen,
  onClose,
  onSubmit,
  doctor,
}) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    department: "Cardiology",
    specialization: "",
    qualification: "MBBS, MD",
    experience: "",
    fee: 600,
    hospital: "Main Campus",
    about: "",
  });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setForm({
        name: doctor?.name || "",
        email: doctor?.email || "",
        phone: doctor?.phone || "",
        department: doctor?.dept || "Cardiology",
        specialization: doctor?.role || "",
        qualification: doctor?.qualification || "MBBS, MD",
        experience: doctor?.experience ? doctor.experience.replace("y exp", "") : "",
        fee: doctor?.fee || 600,
        hospital: doctor?.hospital || "Main Campus",
        about: doctor?.about || "",
      });
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen, doctor]);

  if (!isOpen) return null;

  function update(field, val) {
    setForm((prev) => ({ ...prev, [field]: val }));
  }

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
            <InputField
              label="Name"
              name="name"
              required
              value={form.name}
              onChange={(e) => update("name", e.target.value)}
            />
            <InputField
              label="Email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={(e) => update("email", e.target.value)}
            />
          </div>

          {/* Phone & Department */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <InputField
              label="Phone"
              name="phone"
              type="tel"
              value={form.phone}
              onChange={(e) => update("phone", e.target.value)}
            />

            <div>
              <label className="block text-sm font-semibold text-slate-800 mb-1">
                Department
              </label>

              <div className="relative">
                <select
                  name="department"
                  value={form.department}
                  onChange={(e) => update("department", e.target.value)}
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
            <InputField
              label="Specialization"
              name="specialization"
              value={form.specialization}
              onChange={(e) => update("specialization", e.target.value)}
            />
            <InputField
              label="Qualification"
              name="qualification"
              value={form.qualification}
              onChange={(e) => update("qualification", e.target.value)}
            />
          </div>

          {/* Experience & Fee */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <InputField
              label="Experience (yrs)"
              name="experience"
              type="number"
              value={form.experience}
              onChange={(e) => update("experience", e.target.value)}
            />
            <InputField
              label="Consultation Fee"
              name="fee"
              type="number"
              value={form.fee}
              onChange={(e) => update("fee", e.target.value)}
            />
          </div>

          {/* Hospital */}
          <div className="sm:w-1/2">
            <InputField
              label="Hospital"
              name="hospital"
              value={form.hospital}
              onChange={(e) => update("hospital", e.target.value)}
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
              value={form.about}
              onChange={(e) => update("about", e.target.value)}
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