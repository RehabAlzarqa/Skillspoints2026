import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";





// ! QA (Question and Answer)
// !What are we doing?
// !Register a user
// !What do we need?
// !Info of the user
// !Where do we get them?
// !From the request body
// !How do we use them?
// ! We use them to create a profile  or an account for the user


// !Steps
// Create the controller function
// Collect info from the body
// Validate the info of the user (validation like spellings, ) for the fields and their values
// Validate if the user already exist
// Create the user
// Return the a success msg

// Create the controller function

export async function POST(request: NextRequest) {
  // Collect info from the body
  const { email, password, firstName, lastName } = await request.json();

  // Validate the info of the user (validation like spellings, ) for the fields and their values
  if (!email || !password || !firstName || !lastName) {
    return NextResponse.json(
      { message: "All fields are required" },
      { status: 400 },
    );
  }
  // Validate if the user already exist
  const userExists = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  if (userExists) {
    return NextResponse.json(
      { message: "User already exists" },
      { status: 409 },
    );
  }

  const strongness = 10;
  const hash = await bcrypt.hash(password, strongness);

  // Generate a token for the user.
  // Generate a token for the user.

  await prisma.user.create({
    data: {
      email,
      firstName,
      lastName,
      password: hash,
      totalPoints: 0,
    },
  });

  return NextResponse.json(
    {
      message: "successfully created user",
    },
    {
      status: 201,
    },
  );
}
