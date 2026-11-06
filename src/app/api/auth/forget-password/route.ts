import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { randomInt } from "node:crypto";
import bcrypt from "bcrypt";
import { Resend } from "resend";
export async function POST(request: NextRequest) {
  try {
    //نقرأ الإيميل من الطلب:
    const { email } = await request.json();
    //نتحقق إن الإيميل موجود وصيغته صحيحة، وإن الطلبات ما تجاوزت الحد المسموح.
    if (!email) {
      return NextResponse.json({ msg: "Email is required" }, { status: 400 });
    }
    //نبحث عن حساب بهذا الإيميل في قاعدة البيانات.
    const userExist = await prisma.user.findUnique({
        where: {email}
    });

    if(!userExist) {
        return NextResponse.json({
            msg: "user not existe "
        },
    {status:400})
    }
    // نولّد كود OTP عشوائيًا وآمنًا.
    const otp = randomInt(0, 1000000).toString().padStart(6, "0");
    // نولّد كود OTP عشوائيًا وآمنًا.
    // Hash the OTP
    const hashedOtp = await bcrypt.hash(otp, 10);
    // Hash the OTP
    // save the expiry time
    const otpExpiry = new Date(Date.now() + 5 * 60 * 1000);
    // save the expiry time
    await prisma.oTP.create({
      data: {
        otpHashed: hashedOtp,
        email: userExist.email,
        expiresAt: otpExpiry,
        attemptCount: 0,
      },
    });
    const resend = new Resend(process.env.RESEND_API_KEY);
  } catch (error) {
    console.error("forget-password error:", error);

    return NextResponse.json({ msg: "Something went wrong" }, { status: 500 });
  }
}