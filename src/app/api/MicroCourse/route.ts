import { NextResponse, NextRequest } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  return NextResponse.json({ message: "API route is ready" });
}

export const POST = async (request: NextRequest) => {
  // Parse course info from request body
  const { title, description, authorId, creatorId } = await request.json();

  // Validate fields
  if (!title || !description) {
    return NextResponse.json(
      { message: "All fields are required!" },
      { status: 400 }
    );
  }

  // Check if course already exists
  const courseAlreadyExist = await prisma.microCourse.findFirst({
    where: { title },
  });

  if (courseAlreadyExist) {
    return NextResponse.json(
      { message: "Course already exists!" },
      { status: 400 }
    );
  }

  const newCourse = await prisma.microCourse.create({
    data: {
      title,
      description,
      authorId: Number(authorId ?? creatorId ?? 1),
    },
  });

  return NextResponse.json(newCourse, { status: 201 });
};