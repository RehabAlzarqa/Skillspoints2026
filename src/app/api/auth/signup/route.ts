import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function POST(request: NextRequest) {
  try {
    // Read the data sent by the Signup page
    const body = await request.json();

    const email =
      typeof body.email === "string" ? body.email.trim().toLowerCase() : "";

    const firstName =
      typeof body.firstName === "string" ? body.firstName.trim() : "";

    const lastName =
      typeof body.lastName === "string" ? body.lastName.trim() : "";

    const password = typeof body.password === "string" ? body.password : "";

    // Validate required fields
    if (!email || !password || !firstName || !lastName) {
      return NextResponse.json(
        { msg: "All fields are required" },
        { status: 400 },
      );
    }

    // Validate email format
    if (!email.includes("@")) {
      return NextResponse.json(
        { msg: "Enter a valid email address" },
        { status: 400 },
      );
    }

    // Validate password length
    if (password.length < 8) {
      return NextResponse.json(
        { msg: "Password must contain at least 8 characters" },
        { status: 400 },
      );
    }

    // Check whether the email is already registered
    const userExists = await prisma.user.findUnique({
      where: {
        email,
      },
      select: {
        idUser: true,
      },
    });

    if (userExists) {
      return NextResponse.json({ msg: "User already exists" }, { status: 409 });
    }

    // Hash the password before storing it
    const saltRounds = 10;

    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Create the user in PostgreSQL
    await prisma.user.create({
      data: {
        email,
        firstName,
        lastName,
        password: hashedPassword,
      },
    });

    return NextResponse.json(
      {
        msg: "User created successfully",
      },
      {
        status: 201,
      },
    );
  } catch (error) {
    console.error("Signup error:", error);

    return NextResponse.json(
      {
        msg: "An unexpected error occurred",
      },
      {
        status: 500,
      },
    );
  }
}