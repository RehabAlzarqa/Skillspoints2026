import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcrypt";

export async function POST(req: Request) {
  try {
    // 1️⃣ Parse request body
    const { email, password } = await req.json();

    // 2️⃣ Initial validation
    if (!email || !password) {
      return NextResponse.json(
        { message: "Missing email or password" },
        { status: 400 }
      );
    }

    // 3️⃣ Fetch user
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user || !user.password) {
      return NextResponse.json(
        { message: "User not found" },
        { status: 401 }
      );
    }

    // 4️⃣ Verify password
    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) {
      return NextResponse.json(
        { message: "Incorrect password" },
        { status: 401 }
      );
    }

    // 5️⃣ Successful login response
    return NextResponse.json(
      {
        message: "success",
        user: {
          id: user.idUser,
          name: user.name,
          email: user.email,
          totalPoints: user.totalPoints,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("LOGIN_ERROR:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}

