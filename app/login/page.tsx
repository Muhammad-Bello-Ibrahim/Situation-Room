"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { LockKeyhole, Mail } from "lucide-react";

export default function Login() {
  const [email, setEmail] = useState("admin@example.com");
  const [password, setPassword] = useState("password123");
  const router = useRouter();

  const submit = async () => {
    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();

    if (data.token) {
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      router.push("/dashboard");
    }
  };

  return (
    <div className="min-h-screen grid place-items-center px-6">
      <div className="glass w-full max-w-md rounded-3xl p-8 shadow-2xl shadow-cyan-950/50">
        <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">Welcome back</p>
        <h2 className="mt-2 text-2xl font-bold">Sign in to Situation Room</h2>

        <div className="mt-6 space-y-4">
          <label className="block">
            <span className="mb-2 block text-sm text-slate-300">Email</span>
            <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-slate-900/70 px-3">
              <Mail size={16} className="text-slate-400" />
              <input className="w-full bg-transparent py-3 outline-none" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
          </label>

          <label className="block">
            <span className="mb-2 block text-sm text-slate-300">Password</span>
            <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-slate-900/70 px-3">
              <LockKeyhole size={16} className="text-slate-400" />
              <input type="password" className="w-full bg-transparent py-3 outline-none" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
          </label>

          <button onClick={submit} className="w-full rounded-xl bg-cyan-500 p-3 font-semibold text-slate-950 transition hover:bg-cyan-400">
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
}
