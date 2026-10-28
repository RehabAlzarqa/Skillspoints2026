import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { randomInt } from "node:crypto";
import bcrypt from 'bcrypt';

 export async function POST(request:NextRequest) {
    
    try{

const body = await request.json();
const {email} = body;
if (typeof !email !=="string" || !email.trim()) {
    return NextResponse.json(
        { msg:"Email is required"},
    {status: 400});

    } 
    
    const userExist = await prisma.user.findUnique({
        where: {email}
    });

    if(!userExist) {
        return NextResponse.json({
            msg: "user not existe "
        },
    {status:400})
    }
  // Generate OTP
    const otp = randomInt(0, 1_000_000).toString().padStart(6, "0");
  // Generate OTP


// First copy -> Hash and save it in the database
  // step 1. Hash the OTP
  const strongness = 10;
  const hashedOtp = await bcrypt.hash(otp, strongness);}
    catch(error){
        console.error("Sign-in error:", error)

    }
    return NextResponse.json({
        msg:"check your Email"
    }, {
        status:400
    })
}