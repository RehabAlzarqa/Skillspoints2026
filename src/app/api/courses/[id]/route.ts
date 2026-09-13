import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  const course = await prisma.microCourse.findUnique({
    where: {
      idMicroCourse: Number(id)
    }
  });

  return NextResponse.json(course);
}