"use client";
import Link from "next/link"; import { usePathname } from "next/navigation";
const nav=["dashboard","reports","incidents","map","users","settings"];
export function AppShell({children}:{children:React.ReactNode}){ const p=usePathname(); return <div className="min-h-screen grid grid-cols-1 md:grid-cols-[220px_1fr]"><aside className="border-r border-slate-800 p-4"><h1 className="font-bold mb-4">Situation Room</h1>{nav.map(n=><Link key={n} href={`/${n}`} className={`block rounded px-3 py-2 capitalize ${p?.includes(n)?"bg-slate-800":""}`}>{n}</Link>)}</aside><main className="p-4">{children}</main></div>; }
