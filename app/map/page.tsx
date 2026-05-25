"use client";

import { AppShell } from "@/components/layout/AppShell";

export default function Page() {
  return (
    <AppShell>
      <section className="card">
        <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">map</p>
        <h2 className="mt-2 text-2xl font-semibold capitalize">map Console</h2>
        <p className="mt-3 text-slate-300">
          This workspace is ready for production-grade tables, filters, and real-time controls in the upgraded UI system.
        </p>
      </section>
    </AppShell>
  );
}
