"use client";

import { useState } from "react";
import PortalCard from "@/components/common/card";
import Button from "@/components/common/button";
import { Clock, ArrowUp, Check, X } from "lucide-react";

const stats = [
    { label: "CURRENT TOKEN", value: "#7", icon: null, iconBg: "" },
    { label: "NEXT TOKEN", value: "—", icon: null, iconBg: "" },
    { label: "IN QUEUE", value: "1", icon: Clock, iconBg: "bg-amber-50 text-amber-500" },
    { label: "AVG WAIT", value: "15m", icon: null, iconBg: "" },
];

const initialQueue = [
    {
        token: 7,
        name: "Kiara Gupta",
        doctor: "Dr. Aisha Bose",
        arrived: "10:46 AM",
        wait: "~0m wait",
        status: "waiting",
    },
];

export default function QueueManagement() {
    const [queue, setQueue] = useState(initialQueue);

    const handlePriority = (token) => console.log("priority", token);
    const handleConfirm = (token) => console.log("confirm", token);
    const handleRemove = (token) =>
        setQueue((q) => q.filter((p) => p.token !== token));

    return (
        <main className="min-h-screen w-full bg-[#f4f5fb] px-6 py-8 md:px-4">
            <div className="max-w-5xl mx-auto w-full">
                <h1 className="text-2xl font-extrabold text-slate-900 mb-1">
                    Queue Management
                </h1>
                <p className="text-slate-500 text-base mb-8">Live waiting room board</p>

                {/* Stat cards */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    {stats.map((stat, idx) => (
                        <div
                            key={idx}
                            className="relative bg-white rounded-3xl border border-white/60 shadow-[0_2px_12px_rgba(15,23,42,0.04)] p-6"
                        >
                            <p className="text-xs font-semibold tracking-wide text-slate-400 mb-3">
                                {stat.label}
                            </p>
                            <p className="text-xl font-extrabold text-slate-900">
                                {stat.value}
                            </p>
                            {stat.icon && (
                                <div
                                    className={`absolute top-5 right-5 w-9 h-9 rounded-full flex items-center justify-center ${stat.iconBg}`}
                                >
                                    <stat.icon className="w-4 h-4" />
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Queue list */}
                <div className="flex flex-col gap-4">
                    {queue.map((p) => (
                        <PortalCard
                            key={p.token}
                            className="bg-white shadow-[0_2px_12px_rgba(15,23,42,0.04)]"
                            leading={
                                <div className="flex items-start gap-4 flex-1 min-w-0">
                                    <div className="w-11 h-11 rounded-full bg-indigo-100 flex items-center justify-center shrink-0">
                                        <span className="text-indigo-600 font-bold text-sm">
                                            #{p.token}
                                        </span>
                                    </div>
                                    <div className="min-w-0">
                                        <h3 className="text-lg font-bold text-slate-900">{p.name}</h3>
                                        <p className="text-sm text-slate-400 mt-0.5">
                                            {p.doctor} · arrived {p.arrived} · {p.wait}
                                        </p>
                                    </div>
                                </div>
                            }
                        >
                            <div className="flex items-center gap-2.5 shrink-0">
                                <span className="bg-slate-100 text-slate-700 text-sm font-semibold px-3.5 py-1.5 rounded-full">
                                    {p.status}
                                </span>

                                <Button
                                    variant="secondary"
                                    size="sm"
                                    className="rounded-full bg-white border border-slate-200 text-slate-900 hover:bg-slate-50 font-semibold"
                                    onClick={() => handlePriority(p.token)}
                                >
                                    <ArrowUp className="w-4 h-4 mr-1.5" />
                                    Priority
                                </Button>

                                <button
                                    onClick={() => handleConfirm(p.token)}
                                    aria-label="Confirm"
                                    className="w-9 h-9 rounded-full bg-indigo-600 hover:bg-indigo-700 flex items-center justify-center transition-colors"
                                >
                                    <Check className="w-4 h-4 text-white" />
                                </button>

                                <button
                                    onClick={() => handleRemove(p.token)}
                                    aria-label="Remove"
                                    className="w-9 h-9 rounded-full flex items-center justify-center text-red-500 hover:bg-red-50 transition-colors"
                                >
                                    <X className="w-4 h-4" />
                                </button>
                            </div>
                        </PortalCard>
                    ))}

                    {queue.length === 0 && (
                        <p className="text-slate-400 text-sm py-8 text-center">
                            No patients in the queue.
                        </p>
                    )}
                </div>
            </div>
        </main>
    );
}