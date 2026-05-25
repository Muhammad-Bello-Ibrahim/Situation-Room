import Link from "next/link";
import { ArrowRight, BarChart3, ShieldCheck, Siren, Waypoints } from "lucide-react";

const features = [
  { title: "Live Election Dashboard", icon: BarChart3, text: "See turnout, wards reporting, and incidents with clear visual summaries." },
  { title: "Incident Intelligence", icon: Siren, text: "Track, prioritize, and escalate security or logistics events in real time." },
  { title: "Geo Situation Map", icon: Waypoints, text: "Monitor polling-unit status by location and quickly identify critical hotspots." },
  { title: "Secure by Design", icon: ShieldCheck, text: "Role-aware access and protected APIs for sensitive election operations." },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen px-6 py-10 md:px-12 lg:px-20">
      <div className="mx-auto max-w-6xl">
        <header className="glass rounded-3xl p-6 md:p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">Election Operations Platform</p>
              <h1 className="mt-2 text-3xl font-bold leading-tight md:text-5xl">Situation Room Command Center</h1>
              <p className="mt-4 max-w-2xl text-slate-300">
                A modern control surface for election monitoring, rapid decision-making, and coordinated response.
              </p>
            </div>
            <Link href="/login" className="inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400">
              Launch Dashboard <ArrowRight size={18} />
            </Link>
          </div>
        </header>

        <section className="mt-8 grid gap-4 md:grid-cols-2">
          {features.map(({ title, icon: Icon, text }) => (
            <article key={title} className="card">
              <Icon className="text-cyan-300" size={20} />
              <h2 className="mt-3 text-lg font-semibold">{title}</h2>
              <p className="mt-2 text-sm text-slate-300">{text}</p>
            </article>
          ))}
        </section>
      </div>
    </div>
  );
}
