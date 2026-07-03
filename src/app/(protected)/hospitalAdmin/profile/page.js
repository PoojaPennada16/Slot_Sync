"use client";

import { useState } from "react";
import { Star } from "lucide-react";
import PortalCard from "@/components/common/card";
import Button from "@/components/common/button";
import InputField from "@/components/common/inputfield";

const stats = [
  { label: "Total Appointments", value: "63"      },
  { label: "Completed",          value: "20"      },
  { label: "Patients",           value: "38"      },
  { label: "Revenue",            value: "₹18,000" },
];

const inputClass =
  "w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400 transition";

const labelClass = "block text-sm font-medium text-slate-700 mb-1.5";

export default function ProfilePage() {
  const [form, setForm] = useState({
    name:            "Dr. Riya Joshi",
    specialization:  "Head & Neck Surgeon",
    qualification:   "MBBS, DNB",
    languages:       "Hindi, Bengali, English",
    experience:      "25",
    fee:             "900",
    about:           "Dedicated to providing compassionate, evidence-based care with a patient-first approach.",
    clinic:          "Apollo Clinic, Mumbai",
    address:         "123 MG Road, Andheri West, Mumbai - 400053",
    phone:           "+91 9876543210",
    email:           "riya.joshi@apolloclinic.in",
  });

  function update(field, val) {
    setForm((prev) => ({ ...prev, [field]: val }));
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Profile</h1>
        <p className="mt-1 text-sm text-slate-500">Manage your professional information</p>
      </div>

      {/* Doctor Identity Card */}
      <PortalCard
        description={
          <div className="flex items-center gap-5">
            {/* Avatar */}
            <div className="h-20 w-20 shrink-0 rounded-2xl bg-amber-100 overflow-hidden flex items-center justify-center text-4xl select-none">
              👨‍⚕️
            </div>

            {/* Info */}
            <div className="space-y-1">
              <h2 className="text-xl font-bold text-slate-900">{form.name}</h2>
              <p className="text-sm text-slate-400 font-medium">ENT</p>
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                <span className="text-sm font-semibold text-slate-700">4.8 · 72 reviews</span>
                <span className="rounded-full border border-slate-200 bg-white px-3 py-0.5 text-xs font-semibold text-slate-600">
                  active
                </span>
              </div>
            </div>
          </div>
        }
      />

      {/* Stat Cards */}
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {stats.map((s) => (
          <PortalCard
            key={s.label}
            variant="stat"
            label={s.label}
            value={s.value}
          />
        ))}
      </div>

      {/* Profile Form */}
      <PortalCard
        description={
          <div className="space-y-5">

            {/* Row 1 */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <InputField
                label="Name"
                name="name"
                value={form.name}
                onChange={(e) => update("name", e.target.value)}
              />
              <InputField
                label="Specialization"
                name="specialization"
                value={form.specialization}
                onChange={(e) => update("specialization", e.target.value)}
              />
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <InputField
                label="Qualification"
                name="qualification"
                value={form.qualification}
                onChange={(e) => update("qualification", e.target.value)}
              />
              <InputField
                label="Languages (comma separated)"
                name="languages"
                value={form.languages}
                onChange={(e) => update("languages", e.target.value)}
              />
            </div>

            {/* Row 3 */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
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

            {/* About */}
            <div>
              <label className={labelClass}>About</label>
              <textarea
                rows={3}
                value={form.about}
                onChange={(e) => update("about", e.target.value)}
                className={`${inputClass} resize-none`}
              />
            </div>

            {/* Row 4 */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <InputField
                label="Clinic / Hospital"
                name="clinic"
                value={form.clinic}
                onChange={(e) => update("clinic", e.target.value)}
              />
              <InputField
                label="Address"
                name="address"
                value={form.address}
                onChange={(e) => update("address", e.target.value)}
              />
            </div>

            {/* Row 5 */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <InputField
                label="Phone"
                name="phone"
                value={form.phone}
                onChange={(e) => update("phone", e.target.value)}
              />
              <InputField
                label="Email"
                name="email"
                type="email"
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
              />
            </div>

            {/* Save */}
            <div className="flex justify-end pt-2">
              <Button variant="primary" size="lg" className="rounded-2xl px-8 font-bold">
                Save Changes
              </Button>
            </div>
          </div>
        }
      />
    </div>
  );
}