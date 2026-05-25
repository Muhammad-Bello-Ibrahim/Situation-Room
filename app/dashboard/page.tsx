"use client";

import { useEffect, useState } from "react";
import { io } from "socket.io-client";

import { StatsCards } from "@/components/dashboard/StatsCards";
import { AppShell } from "@/components/layout/AppShell";

export default function Dashboard() {
  const [alerts, setAlerts] = useState<string[]>([]);

  useEffect(() => {
    fetch("/api/socket");

    const socket = io({ path: "/api/socket_io" });

    socket.on("incident-created", (incident: any) => {
      setAlerts((current) => [`CRITICAL: ${incident.title}`, ...current].slice(0, 4));
    });

    socket.on("report-created", () => {
      setAlerts((current) => ["New polling report received", ...current].slice(0, 4));
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <AppShell>
      <StatsCards />

      <div className="grid md:grid-cols-2 gap-4 mt-4">
        <div className="card">
          <h3 className="font-semibold">Live Alerts</h3>
          {alerts.map((alert, index) => (
            <p key={index} className="text-sm mt-2 text-rose-300">
              {alert}
            </p>
          ))}
        </div>

        <div className="card">
          <h3 className="font-semibold">Live Feed</h3>
          <p className="text-slate-400">Real-time updates stream in here.</p>
        </div>
      </div>
    </AppShell>
  );
}
