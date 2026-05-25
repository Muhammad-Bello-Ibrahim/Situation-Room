"use client";
import useSWR from "swr"; const f=(u:string)=>fetch(u,{headers:{authorization:`Bearer ${localStorage.getItem("token")||""}`}}).then(r=>r.json());
export function StatsCards(){ const {data:reports=[]}=useSWR("/api/reports",f); const {data:incidents=[]}=useSWR("/api/incidents",f); const {data:units=[]}=useSWR("/api/polling-units",f);
const cards=[['Total LGAs Active',new Set(units.map((u:any)=>u.lga)).size],['Wards Reporting',new Set(reports.map((r:any)=>r.ward)).size],['Polling Units Active',units.length],['Incident Count',incidents.length]];
return <div className="grid md:grid-cols-4 gap-3">{cards.map(([k,v])=><div key={String(k)} className="card"><p className="text-slate-400 text-sm">{k}</p><p className="text-2xl font-bold">{v as any}</p></div>)}</div>; }
