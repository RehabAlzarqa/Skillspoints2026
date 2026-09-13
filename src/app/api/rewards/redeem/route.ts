import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

// User wants to exchange points for a reward

export async function POST(request: NextRequest) {

  // 1. Read request
  const body = await request.json();

  const { userId, idReward } = body;

  // 2. Check user exists
  const findUser = await prisma.user.findUnique({
    where: {
      idUser: userId,
    },
  });

  if (!findUser) {
    return NextResponse.json({
      msg: "User not found",
    });
  }

  // 3. Check reward exists
  const findReward = await prisma.reward.findUnique({
    where: {
      idReward: idReward,
    },
  });

  if (!findReward) {
    return NextResponse.json({
      msg: "Reward not found",
    });
  }

  // 4. Check user points
  if (findUser.totalPoints < findReward.pointsCost) {
    return NextResponse.json({
      msg: "Not enough points",
    });
  }

  // 5. Decrement points
  await prisma.user.update({
    where: {
      idUser: userId,
    },

    data: {
      totalPoints: {
        decrement: findReward.pointsCost,
      },
    },
  });

  // 6. Create reward history
  await prisma.myRewards.create({
    data: {
      userId,
      rewardId: idReward,
    },
  });

  // 7. Return response
  return NextResponse.json({
    msg: "Reward redeemed successfully",
  });
}