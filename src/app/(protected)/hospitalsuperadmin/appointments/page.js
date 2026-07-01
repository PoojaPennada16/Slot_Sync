"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

import { Table,TableBody,TableCell,TableHead,TableRow,TableHeader } from "@/components/common/table";
import AppointmentDetailModal from "@/hospitalmodels/appointmentdetailmodel";

export default function AppointmentsPage() {
    const [filter, setFilter] = useState("All");
    const [selectedAppointment, setSelectedAppointment] = useState(null);

    const appointments = [
        {
            patient: "Ananya Chopra",
            doctor: "Dr. Tara Chopra",
            slot: "26 Apr · 12:00",
            type: "Video",
            status: "completed",
            previousVisits: 3,
        },
        {
            patient: "Aryan Bose",
            doctor: "Dr. Priya Chopra",
            slot: "31 Mar · 15:30",
            type: "Physical",
            status: "cancelled",
            previousVisits: 1,
        },
        {
            patient: "Aryan Mehta",
            doctor: "Dr. Dev Iyer",
            slot: "02 Jul · 09:30",
            type: "Physical",
            status: "scheduled",
            previousVisits: 2,
        },
        {
            patient: "Myra Bose",
            doctor: "Dr. Priya Chopra",
            slot: "18 Mar · 15:00",
            type: "Physical",
            status: "completed",
            previousVisits: 5,
        },
        {
            patient: "Aditya Reddy",
            doctor: "Dr. Pari Reddy",
            slot: "23 Jun · 09:00",
            type: "Physical",
            status: "completed",
            previousVisits: 4,
        },
    ];

    return (
        <div className="p-8 bg-slate-50 min-h-screen font-sans">
            {/* HEADER */}
            <div className="flex items-start justify-between mb-6">
                <div>
                    <h1 className="text-3xl font-bold text-slate-900 tracking-tight">
                        Appointments
                    </h1>
                    <p className="text-sm text-slate-500 mt-1">
                        2100 total appointments
                    </p>
                </div>

                {/* FILTER */}
                <div className="relative">
                    <select
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                        className="appearance-none bg-white border border-slate-200 rounded-xl px-4 py-2 pr-10 text-sm font-medium text-slate-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 cursor-pointer min-w-[120px]"
                    >
                        <option value="All">All</option>
                        <option value="Completed">Completed</option>
                        <option value="Cancelled">Cancelled</option>
                        <option value="Scheduled">Scheduled</option>
                    </select>

                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none" />
                </div>
            </div>

            {/* TABLE */}
            <div className="bg-white border border-slate-100 rounded-2xl shadow-sm overflow-hidden">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Patient</TableHead>
                            <TableHead>Doctor</TableHead>
                            <TableHead>Date / Slot</TableHead>
                            <TableHead>Type</TableHead>
                            <TableHead>Status</TableHead>
                        </TableRow>
                    </TableHeader>

                    <TableBody>
                        {appointments.map((appointment, index) => (
                            <TableRow key={index}>
                                {/* CLICK TO OPEN MODAL */}
                                <TableCell>
                                    <span
                                        className="font-semibold text-black-600 cursor-pointer hover:underline"
                                        onClick={() => {
                                            console.log("CLICKED:", appointment);
                                            setSelectedAppointment(appointment);
                                        }}
                                    >
                                        {appointment.patient}
                                    </span>
                                </TableCell>

                                <TableCell className="text-slate-600 font-medium">
                                    {appointment.doctor}
                                </TableCell>

                                <TableCell className="text-slate-600 font-medium">
                                    {appointment.slot}
                                </TableCell>

                                <TableCell className="text-slate-600 font-medium">
                                    {appointment.type}
                                </TableCell>

                                <TableCell>
                                    {appointment.status === "completed" && (
                                        <span className="inline-block px-3 py-1 bg-emerald-50 text-emerald-600 rounded-full text-xs font-semibold border border-emerald-100/50">
                                            completed
                                        </span>
                                    )}

                                    {appointment.status === "cancelled" && (
                                        <span className="inline-block px-3 py-1 bg-rose-50 text-rose-600 rounded-full text-xs font-semibold border border-rose-100/50">
                                            cancelled
                                        </span>
                                    )}

                                    {appointment.status === "scheduled" && (
                                        <span className="inline-block px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-xs font-semibold border border-indigo-100/50">
                                            scheduled
                                        </span>
                                    )}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>

            {/* MODAL DRAWER */}
            <AppointmentDetailModal
                isOpen={!!selectedAppointment}
                appointment={selectedAppointment}
                onClose={() => setSelectedAppointment(null)}
            />
        </div>
    );
}