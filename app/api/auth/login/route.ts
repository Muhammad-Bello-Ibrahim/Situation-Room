import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { connectDB } from "@/lib/db";
import User from "@/models/User";
import { loginSchema } from "@/lib/validation";
import { signToken } from "@/lib/auth";
import { secureHeaders, rateLimit } from "@/lib/security";
export async function POST(req:NextRequest){ if(!rateLimit(req.ip||"login",10,60000)) return NextResponse.json({error:"Too many requests"},{status:429,headers:secureHeaders()}); const body=loginSchema.parse(await req.json()); await connectDB(); const user=await User.findOne({email:body.email}); if(!user) return NextResponse.json({error:"Invalid credentials"},{status:401,headers:secureHeaders()}); const ok=await bcrypt.compare(body.password,user.password); if(!ok) return NextResponse.json({error:"Invalid credentials"},{status:401,headers:secureHeaders()}); const token=signToken({id:String(user._id),role:user.role,email:user.email}); return NextResponse.json({token,user:{id:user._id,name:user.name,role:user.role,lga:user.lga,ward:user.ward,pollingUnit:user.pollingUnit}},{headers:secureHeaders()}); }
