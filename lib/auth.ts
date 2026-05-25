import jwt from "jsonwebtoken";
import { NextRequest } from "next/server";
export type Role = "SUPER_ADMIN"|"LGA_COORDINATOR"|"WARD_SUPERVISOR"|"POLLING_UNIT_AGENT"|"OBSERVER";
const JWT_SECRET = process.env.JWT_SECRET || "change_me_secret";
export function signToken(payload:{id:string;role:Role;email:string}){ return jwt.sign(payload, JWT_SECRET,{expiresIn:"12h"}); }
export function verifyToken(token:string){ return jwt.verify(token, JWT_SECRET) as {id:string;role:Role;email:string}; }
export function readAuth(req:NextRequest){ const h=req.headers.get("authorization")||""; const token=h.replace("Bearer ",""); if(!token) return null; try{return verifyToken(token);}catch{return null;} }
export function canAccess(role:Role, allowed:Role[]){ return allowed.includes(role); }
