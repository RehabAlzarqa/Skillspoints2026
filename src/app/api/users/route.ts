import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";


// ? Steps
// 1. Read Request
// 2. Validate Data
// 3. Check Database
// 6. Return Response
// 7. Handle Errors
// // ? Steps


export async function GET() {
  const users = await prisma.user.findMany();

  return NextResponse.json(users);
}

 export async function POST(request: NextRequest) {
// 1. Read Request

const body =  await request.json();
const { name ,email, password} = body;
// 1. Read Request

// 2. Validate Data

if (!name) {
  return NextResponse.json({
    msg: "name is required"
  });
}


if (!email) {
  return NextResponse.json({
    msg: "Email is required"
  });
}

if (!email.includes("@")) {
  return NextResponse.json({
    msg: "Invalid email"
  });
}

if (!password) {
  return NextResponse.json({
    msg: "Password is required"
  });
}

if (password.length < 8) {
  return NextResponse.json({
    msg: "Password must be at least 8 characters"
  });
}// 2. Validate Data

// 3. Check Database
const existingUser =  await prisma.user.findUnique({
  where: {email}
});

if (existingUser) {
  return NextResponse.json({
    msg:"User already exists"
  })
}

// 3. Check Database

// Create data
const newUser =  await prisma.user.create({
  data:{
     name,
    email,
    password,
    totalPoints: 0
  }
})



  return NextResponse.json({
    meg: "Api route is ready"
  });
  
}







