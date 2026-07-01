"use client";

import React, { useState } from "react";
import PortalCard from "@/components/common/card";
import Button from "@/components/common/button";
import AddDoctorModal from "@/hospitalmodels/adddoctormodel";

import {
  UserPlus,
  Check,
  Ban,
  Pencil,
  Trash2,
  Star,
  Search,
  ChevronDown,
} from "lucide-react";

const initialDoctors = [
  {
    id: "doc-0001",
    name: "Dr. Aisha Sharma",
    role: "Pediatric Dermatologist",
    dept: "Dermatology",
    status: "suspended",
    rating: "4.7",
    reviews: "68",
    experience: "23y exp",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aisha",
  },
  {
    id: "doc-0002",
    name: "Dr. Riya Joshi",
    role: "Head & Neck Surgeon",
    dept: "ENT",
    status: "active",
    rating: "4.8",
    reviews: "72",
    experience: "25y exp",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Riya",
  },
  {
    id: "doc-0003",
    name: "Dr. Aarav Reddy",
    role: "Interventional Cardiologist",
    dept: "Cardiology",
    status: "active",
    rating: "3.7",
    reviews: "68",
    experience: "11y exp",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aarav",
  },
  {
    id: "doc-0004",
    name: "Dr. Nisha Nair",
    role: "Interventional Cardiologist",
    dept: "Cardiology",
    status: "suspended",
    rating: "4.2",
    reviews: "91",
    experience: "13y exp",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Nisha",
  },
];

export default function DoctorsPortal() {
  const [doctors, setDoctors] = useState(initialDoctors);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingDoctor, setEditingDoctor] = useState(null);

  const openAddModal = () => {
    setEditingDoctor(null);
    setIsModalOpen(true);
  };

  const openEditModal = (e, doctor) => {
    e.preventDefault();
    e.stopPropagation();

    setEditingDoctor(doctor);
    setIsModalOpen(true);
  };

  const handleApprove = (e, id) => {
    e.preventDefault();
    e.stopPropagation();

    setDoctors((prev) =>
      prev.map((doc) =>
        doc.id === id ? { ...doc, status: "active" } : doc
      )
    );
  };

  const handleSuspend = (e, id) => {
    e.preventDefault();
    e.stopPropagation();

    setDoctors((prev) =>
      prev.map((doc) =>
        doc.id === id ? { ...doc, status: "suspended" } : doc
      )
    );
  };

  const handleDelete = (e, id) => {
    e.preventDefault();
    e.stopPropagation();

    setDoctors((prev) =>
      prev.filter((doc) => doc.id !== id)
    );
  };

  const handleSubmitDoctor = (data) => {
    if (editingDoctor) {
      setDoctors((prev) =>
        prev.map((doc) =>
          doc.id === editingDoctor.id
            ? {
                ...doc,
                name: data.name,
                dept: data.department,
                role: data.specialization,
                experience: `${data.experience}y exp`,
              }
            : doc
        )
      );
    } else {
      const newDoctor = {
        id: `doc-${Date.now()}`,
        name: data.name,
        role: data.specialization,
        dept: data.department,
        status: "active",
        rating: "0",
        reviews: "0",
        experience: `${data.experience}y exp`,
        avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${data.name}`,
      };

      setDoctors((prev) => [...prev, newDoctor]);
    }

    setIsModalOpen(false);
    setEditingDoctor(null);
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* HEADER */}
      <div className="flex flex-col sm:flex-row justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">
            Doctors
          </h1>
          <p className="text-sm text-slate-500">
            {doctors.length} doctors across departments
          </p>
        </div>

        <Button
          className="gap-2"
          onClick={openAddModal}
        >
          <UserPlus className="w-4 h-4" />
          Add Doctor
        </Button>
      </div>

      {/* FILTERS */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />

          <input
            type="text"
            placeholder="Search doctors..."
            className="w-full pl-11 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder:text-slate-400 shadow-sm"
          />
        </div>

        <div className="flex gap-3">
          <Button
            variant="secondary"
            className="min-w-[160px] justify-between"
          >
            All departments
            <ChevronDown className="w-4 h-4" />
          </Button>

          <Button
            variant="secondary"
            className="min-w-[140px] justify-between"
          >
            All status
            <ChevronDown className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* DOCTOR CARDS */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {doctors.map((doc) => (
          <PortalCard
            key={doc.id}
            
            badgeText={doc.dept}
            badgeColor="bg-slate-100 text-slate-600"
            icon={
              <img
                src={doc.avatar}
                alt={doc.name}
                className="w-full h-full object-cover"
              />
            }
            iconBg="bg-slate-50 overflow-hidden"
            title=""
            description={
              <div className="flex flex-col gap-3">
                <div>
                  <h3 className="text-sm font-semibold text-slate-900">
                    {doc.name}
                  </h3>

                  <p className="text-xs text-slate-500">
                    {doc.role}
                  </p>
                </div>

                <div className="flex items-center gap-3 text-xs">
                  <span
                    className={`px-2 py-0.5 rounded-full ${
                      doc.status === "active"
                        ? "bg-green-50 text-green-600"
                        : "bg-red-50 text-red-500"
                    }`}
                  >
                    {doc.status}
                  </span>

                  <span className="flex items-center gap-1">
                    <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                    {doc.rating} ({doc.reviews})
                  </span>

                  <span className="text-gray-400">
                    {doc.experience}
                  </span>
                </div>

                <div className="flex items-center gap-2 pt-2">
                  {doc.status === "suspended" ? (
                    <Button
                      variant="success"
                      size="sm"
                      className="gap-1"
                      onClick={(e) =>
                        handleApprove(e, doc.id)
                      }
                    >
                      <Check className="w-3 h-3" />
                      Approve
                    </Button>
                  ) : (
                    <Button
                      variant="danger"
                      size="sm"
                      className="gap-1"
                      onClick={(e) =>
                        handleSuspend(e, doc.id)
                      }
                    >
                      <Ban className="w-3 h-3" />
                      Suspend
                    </Button>
                  )}

                  <div className="ml-auto flex gap-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={(e) =>
                        openEditModal(e, doc)
                      }
                    >
                      <Pencil className="w-4 h-4" />
                    </Button>

                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={(e) =>
                        handleDelete(e, doc.id)
                      }
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            }
          />
        ))}
      </div>

      <AddDoctorModal
        isOpen={isModalOpen}
        doctor={editingDoctor}
        onClose={() => {
          setIsModalOpen(false);
          setEditingDoctor(null);
        }}
        onSubmit={handleSubmitDoctor}
      />
    </div>
  );
}