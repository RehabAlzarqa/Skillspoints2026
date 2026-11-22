import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { randomInt } from "node:crypto";
import bcrypt from "bcrypt";
import { Resend } from "resend";
export async function POST(request: NextRequest) {
  // 2xx -  user success
  // 4xx -  user errors
  // 5xx -  server/backend errors

  try {
    //نقرأ الإيميل من الطلب:
    const { email } = await request.json();
    //نتحقق إن الإيميل موجود وصيغته صحيحة، وإن الطلبات ما تجاوزت الحد المسموح.
    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json(
        { msg: "Email is required", error: true },
        { status: 400 },
      );
    }
    //نبحث عن حساب بهذا الإيميل في قاعدة البيانات.
    const userExist = await prisma.user.findUnique({
      where: { email },
    });

    if (!userExist) {
      return NextResponse.json(
        {
          error: false,
          msg: "If an account exists, an OTP code has been sent. Please check your email.",
        },
        { status: 404 },
      );
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

    //Store the OTP hash, expiration time, and attempt count, linked to the user.

    // insert -> create or put smth
    // upsert -> insert + update
    await prisma.otp.upsert({
      where: {
        email: userExist.email,
      },
      update: {
        otpHashed: hashedOtp,
        expiresAt: otpExpiry,
        attemptCount: 0,
        createdAt: new Date(),
      },

      create: {
        email: userExist.email,
        otpHashed: hashedOtp,
        expiresAt: otpExpiry,
        attemptCount: 0,
      },
    });
    //Store the OTP hash, expiration time, and attempt count, linked to the user.

    //Send the original OTP to the user’s email.
    const resend = new Resend(process.env.RESEND_API_KEY);

    const { data, error } = await resend.emails.send({
      from: "SkillPoints <onboarding@resend.dev>", // use your verified domain
      to: email,
      subject: "Your verification code",
      html: `Your code is <strong>${otp}</strong>.`,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        {
          error: true,
          msg:
            error?.message ||
            "Failed to send OTP email. Please try again later",
        },
        { status: 500 },
      );
    }
    //Send the original OTP to the user’s email.

    // Return a success message.
    return NextResponse.json(
      {
        error: false,
        msg: "An OTP code has been sent to your gmail.",
      },
      {
        status: 201,
      },
    );
    // Return a success message.
  } catch (error) {
    return NextResponse.json(
      {
        msg: error?.message || "Error sending OTP to your email",
      },
      {
        status: 500,
      },
    );
  }
}