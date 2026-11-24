import { NextRequest, NextResponse } from "next/server";

// Create the controller function.
// Read the email address and OTP from the request body.
// Find the associated password reset request.
// Check that the OTP is correct, has not expired, and has not already been used.
// Limit failed verification attempts.
// If verification succeeds, invalidate the OTP.
// Generate a temporary, single-use reset token linked to the user and restricted to password reset.
//Return the reset token so the user can proceed to the reset password form.
//Invalidate the reset token and any remaining password reset codes.
//Invalidate existing login sessions.
//Return a success message.

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { otpCode, email } = body;

  if (!email || !otpCode || otpCode.length !== 6 || email.trim() === "") {
    return NextResponse.json({
      msg: "email and otpCode are required",
    });
  }
  if (otpCode.length !== 6) {
    return NextResponse.json({
      msg: "otpCode must be 6 digits",

    },{
      status: 400,
    });
  }


  return NextResponse.json("");
}
