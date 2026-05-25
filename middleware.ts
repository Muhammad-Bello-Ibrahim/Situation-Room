import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
export function middleware(req:NextRequest){ const res=NextResponse.next(); res.headers.set("Access-Control-Allow-Origin", process.env.CORS_ORIGIN || "*"); res.headers.set("Access-Control-Allow-Methods","GET,POST,OPTIONS"); res.headers.set("Access-Control-Allow-Headers","Content-Type,Authorization"); res.headers.set("X-DNS-Prefetch-Control","off"); return res; }
export const config = { matcher:["/api/:path*"] };
