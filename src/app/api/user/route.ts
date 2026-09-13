import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  const users = await prisma.user.findMany();
  return NextResponse.json(users);
}

export async function POST(request: Request) {
  const { name, email } = await request.json();

  if (!name || !email) {
    return NextResponse.json({ message: "Name and email are required" }, { status: 400 });
  }
 
  const user = await prisma.user.create({
    data: {
      name,
      email,
      password: "defaultPassword",
      totalPoints: 0,
    },
  });

  return NextResponse.json({
    message: "User created successfully",
    user: { 
      name: user.name,
      email: user.email,
    },
  });
}