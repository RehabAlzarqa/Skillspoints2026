import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";


// GET rewards
export async function GET() {

    const rewards = await prisma.reward.findMany();
  
    return NextResponse.json(
      {
        msg: "Rewards retrived successfully",
        data: rewards,
      },
      {
        status: 200,
      }
    );
  }
  // GET rewards

// POST rewards

export async function POST(request: NextRequest) {
// POST rewards

  // 1. Read request body
  const body = await request.json();

  const {
    name,
    description,
    requiredPoints,
    pointsCost,
    availableQuantity,
    image,
  } = body;

  const cost = pointsCost !== undefined ? Number(pointsCost) : (requiredPoints !== undefined ? Number(requiredPoints) : undefined);

  // 2. Validate reward data
  if (!name || cost === undefined) {
    return NextResponse.json(
      {
        msg: "Missing required fields",
      },
      {
        status: 400,
      }
    );
  }

  // 3. Create reward
  const createReward = await prisma.reward.create({
    data: {
      name,
      description,
      pointsCost: cost,
      availableQuantity,
      image,
    },
  });

  // 4. Return response
  return NextResponse.json(
    {
      msg: "Reward created successfully",
      data: createReward,
    },
    {
      status: 201,
    }
  );
}