import { NextResponse, NextRequest } from "next/server";
import prisma from "@/lib/prisma";




 export async function POST(request:NextRequest) {
  // // 1. Read request body
  const body =  await request.json();
  const { title, description, creatorId, authorId } = body; 
// // 1. Read request body

  // // 2. Validate course data
  if (!title){
    return NextResponse.json({
      msg: "Title is required"
    })

  }
  if (!description || description.length < 10) {
    return NextResponse.json(
      {msg:
        "Description must be at least 10 characters"
      }
    )
  }

// // 2. Validate course data


// // 3. create course

 const createNewCourse =  await prisma.microCourse.create({
  data: {
    title,
    description,
    authorId: Number(authorId ?? creatorId ?? 1),
  }

})
// // 3. find course

  // 4. Return response
  return NextResponse.json({
    msg: "Course created successfully",
    course: createNewCourse
  });
    // 4. Return response

}

export async function GET() {

  //find data
  const courses = await prisma.microCourse.findMany();
  //find data
  
      // 4. Return response

  return NextResponse.json(courses);
      // 4. Return response


}