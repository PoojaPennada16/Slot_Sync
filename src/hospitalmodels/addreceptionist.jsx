"use client";

import React, { useState } from "react";
import { X } from "lucide-react";
import Button from "@/components/common/button";
import InputField from "@/components/common/inputfield";

const selectClass =
  "w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200/80 focus:outline-none text-slate-800 font-medium text-[15px] appearance-none cursor-pointer";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  branch: "Main Campus",
  floor: "Floor 1",
  shift: "08:00 - 16:00",
};

export default function AddReceptionistModal({ isOpen, onClose, onSubmit }) {
  const [form, setForm] = useState(initialForm);

  if (!isOpen) return null;

  function update(field, val) {
    setForm((prev) => ({ ...prev, [field]: val }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit?.(form);
    setForm(initialForm);
    onClose();
  }

  function handleClose() {
    setForm(initialForm);
    onClose();
  }

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 transition-opacity">
      <div className="bg-white rounded-3xl w-full max-w-2xl p-8 shadow-2xl relative mx-4 border border-slate-100">
        <button
          onClick={handleClose}
          className="absolute top-6 right-6 text-slate-400 hover:text-slate-600 p-1.5 rounded-full hover:bg-slate-50 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <h2 className="text-2xl font-bold text-slate-900 mb-6">
          Add Receptionist
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <InputField
              label="Name"
              name="name"
              placeholder="Enter name"
              value={form.name}
              onChange={(e) => update("name", e.target.value)}
              required
            />

            <InputField
              label="Email"
              name="email"
              type="email"
              placeholder="Enter email"
              value={form.email}
              onChange={(e) => update("email", e.target.value)}
              required
            />

            <InputField
              label="Phone"
              name="phone"
              type="tel"
              placeholder="Enter phone number"
              value={form.phone}
              onChange={(e) => update("phone", e.target.value)}
            />

            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-slate-800">
                Branch
              </label>
              <select
                value={form.branch}
                onChange={(e) => update("branch", e.target.value)}
                className={selectClass}
              >
                <option>Main Campus</option>
                <option>West Campus</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-slate-800">
                Floor
              </label>
              <select
                value={form.floor}
                onChange={(e) => update("floor", e.target.value)}
                className={selectClass}
              >
                <option>Floor 1</option>
                <option>Floor 2</option>
                <option>Floor 3</option>
                <option>Floor 4</option>
                <option>Floor 5</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-slate-800">
                Shift
              </label>
              <select
                value={form.shift}
                onChange={(e) => update("shift", e.target.value)}
                className={selectClass}
              >
                <option>08:00 - 16:00</option>
                <option>16:00 - 00:00</option>
                <option>22:00 - 06:00</option>
              </select>
            </div>
          </div>

          <div className="flex justify-end pt-4">
            <Button
              type="submit"
              variant="primary"
              className="px-6 py-2.5 font-bold rounded-xl text-sm"
            >
              Add
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}