"use client";

import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { Activity, Radio } from "lucide-react";

import { StatsCards } from "@/components/dashboard/StatsCards";
import { AppShell } from "@/components/layout/AppShell";

export default function Dashboard() {
  const [alerts, setAlerts] = useState<string[]>([]);

  useEffect(() => {
    fetch("/api/socket");
    const socket = io({ path: "/api/socket_io" });

    socket.on("incident-created", (incident: any) => {
      setAlerts((current) => [`CRITICAL: ${incident.title}`, ...current].slice(0, 5));
    });

    socket.on("report-created", () => {
      setAlerts((current) => ["New polling report received", ...current].slice(0, 5));
    });

    return () => socket.disconnect();
  }, []);

  return (
    <AppShell>
      <StatsCards />
      <div className="mt-4 grid gap-4 lg:grid-cols-2">
        <div className="card">
          <div className="flex items-center gap-2">
            <Radio size={16} className="text-cyan-300" />
            <h3 className="font-semibold">Live Alerts</h3>
          </div>
          <div className="mt-3 space-y-2">
            {alerts.length === 0 ? (
              <p className="text-sm text-slate-400">No active alert yet. Real-time events will appear here.</p>
            ) : (
              alerts.map((alert, index) => (
                <p key={index} className="rounded-lg border border-rose-400/20 bg-rose-400/10 px-3 py-2 text-sm text-rose-200">
                  {alert}
                </p>
              ))
            )}
          </div>
        </div>

        <div className="card">
          <div className="flex items-center gap-2">
            <Activity size={16} className="text-cyan-300" />
            <h3 className="font-semibold">Operations Feed</h3>
          </div>
          <p className="mt-3 text-sm text-slate-300">
            The command feed consolidates reports, incidents, and user activity into one operator-friendly timeline.
          </p>
        </div>
      </div>
    </AppShell>
  );
}
