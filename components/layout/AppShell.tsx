"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bell, LayoutDashboard, MapPinned, Settings, ShieldAlert, Users2, Vote } from "lucide-react";

const nav = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/reports", label: "Reports", icon: Vote },
  { href: "/incidents", label: "Incidents", icon: ShieldAlert },
  { href: "/map", label: "Map", icon: MapPinned },
  { href: "/users", label: "Users", icon: Users2 },
  { href: "/settings", label: "Settings", icon: Settings },
];

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-[260px_1fr]">
      <aside className="glass m-3 rounded-3xl p-5 lg:m-6">
        <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">Situation Room</p>
        <h1 className="mt-2 text-2xl font-bold">Command UI</h1>

        <nav className="mt-6 space-y-1">
          {nav.map(({ href, label, icon: Icon }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`flex items-center gap-3 rounded-xl px-3 py-2.5 transition ${active ? "bg-cyan-500/20 text-cyan-200" : "text-slate-300 hover:bg-white/5"}`}
              >
                <Icon size={16} />
                {label}
              </Link>
            );
          })}
        </nav>
      </aside>

      <main className="p-3 lg:p-6">
        <div className="glass mb-4 flex items-center justify-between rounded-2xl px-5 py-3">
          <p className="font-semibold">Election Monitoring Hub</p>
          <div className="inline-flex items-center gap-2 text-sm text-slate-300">
            <Bell size={15} className="text-cyan-300" /> 24/7 Live Monitoring
          </div>
        </div>
        {children}
      </main>
    </div>
  );
}
