import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { randomBytes } from "node:crypto";
import bcrypt from "bcrypt";

// Create the controller function.
// Read the email address and OTP from the request body.
// Check if a user exists with this email.
// Find the OTP related to the password reset request.
// Check whether the OTP has expired.
// Check whether the maximum number of attempts has been reached.
// Check whether the OTP is correct.
// Increase the attempt count if the OTP is incorrect.
// Generate a temporary reset token.

export async function POST(req: NextRequest) {
  try {
    // Read the email address and OTP from the request body.
    const body = await req.json();

    const email =
      typeof body.email === "string" ? body.email.trim().toLowerCase() : "";

    const otpCode = typeof body.otpCode === "string" ? body.otpCode.trim() : "";
    // Read the email address and OTP from the request body.

    // Validate the email address and OTP.
    if (!email || !email.includes("@") || !/^\d{6}$/.test(otpCode)) {
      return NextResponse.json(
        { msg: "Invalid email or OTP code", error: true },
        { status: 400 },
      );
    }
    // Validate the email address and OTP.

    // Check if a user exists with this email.
    const userExist = await prisma.user.findUnique({
      where: { email },
    });

    if (!userExist) {
      return NextResponse.json(
        { msg: "Invalid email or OTP code", error: true },
        { status: 400 },
      );
    }
    // Check if a user exists with this email.

    // Find the OTP related to the password reset request.
    const storedOtp = await prisma.otp.findUnique({
      where: { email },
    });

    if (!storedOtp) {
      return NextResponse.json(
        { msg: "Invalid or expired OTP code", error: true },
        { status: 400 },
      );
    }
    // Find the OTP related to the password reset request.

    // Check whether the OTP has expired.
    const otpExpired = storedOtp.expiresAt <= new Date();

    if (otpExpired) {
      return NextResponse.json(
        { msg: "Invalid or expired OTP code", error: true },
        { status: 400 },
      );
    }
    // Check whether the OTP has expired.

    // Check whether the maximum number of attempts has been reached.
    const tooManyAttempts = storedOtp.attemptCount >= 3;

    if (tooManyAttempts) {
      return NextResponse.json(
        {
          msg: "Too many attempts. Please request a new OTP code.",
          error: true,
        },
        { status: 429 },
      );
    }
    // Check whether the maximum number of attempts has been reached.

    // Check whether the OTP is correct.
    const otpMatches = await bcrypt.compare(otpCode, storedOtp.otpHashed);
    // Check whether the OTP is correct.

    // Increase the attempt count if the OTP is incorrect.
    if (!otpMatches) {
      await prisma.otp.update({
        where: { email },
        data: {
          attemptCount: {
            increment: 1,
          },
        },
      });

      return NextResponse.json(
        { msg: "Invalid or expired OTP code", error: true },
        { status: 400 },
      );
    }
    // Increase the attempt count if the OTP is incorrect.

    // Generate a temporary reset token.
    // Generate a temporary reset token.
  } catch (error) {
    console.error("OTP verification error:", error);

    return NextResponse.json(
      {
        msg: "Something went wrong",
        error: true,
      },
      { status: 500 },
    );
  }
}
