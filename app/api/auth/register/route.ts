import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { connectDB } from "@/lib/db";
import User from "@/models/User";
import { registerSchema } from "@/lib/validation";
import { secureHeaders, rateLimit } from "@/lib/security";
export async function POST(req:NextRequest){ if(!rateLimit(req.ip||"register",20,60000)) return NextResponse.json({error:"Too many requests"},{status:429,headers:secureHeaders()}); const body=registerSchema.parse(await req.json()); await connectDB(); const exists=await User.findOne({email:body.email}); if(exists) return NextResponse.json({error:"Email exists"},{status:409,headers:secureHeaders()}); const password=await bcrypt.hash(body.password,12); const user=await User.create({...body,password}); return NextResponse.json({id:user._id,email:user.email},{headers:secureHeaders()}); }
