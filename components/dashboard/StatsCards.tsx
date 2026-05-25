"use client";

import useSWR from "swr";
import { AlertTriangle, Landmark, Map, Users } from "lucide-react";

const fetcher = (url: string) =>
  fetch(url, { headers: { authorization: `Bearer ${localStorage.getItem("token") || ""}` } }).then((r) => r.json());

export function StatsCards() {
  const { data: reports = [] } = useSWR("/api/reports", fetcher);
  const { data: incidents = [] } = useSWR("/api/incidents", fetcher);
  const { data: units = [] } = useSWR("/api/polling-units", fetcher);

  const cards = [
    { label: "Active LGAs", value: new Set(units.map((u: any) => u.lga)).size, icon: Landmark },
    { label: "Wards Reporting", value: new Set(reports.map((r: any) => r.ward)).size, icon: Map },
    { label: "Polling Units", value: units.length, icon: Users },
    { label: "Incidents", value: incidents.length, icon: AlertTriangle },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {cards.map(({ label, value, icon: Icon }) => (
        <div key={label} className="card">
          <div className="flex items-start justify-between">
            <p className="text-sm text-slate-300">{label}</p>
            <Icon size={16} className="text-cyan-300" />
          </div>
          <p className="mt-4 text-3xl font-bold">{value}</p>
        </div>
      ))}
    </div>
  );
}
