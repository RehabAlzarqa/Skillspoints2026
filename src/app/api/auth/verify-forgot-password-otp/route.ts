import { NextRequest, NextResponse } from "next/server";

//STEPS
//write the controller funcation
//collect the info form body
//check the info that we need to send the otpcode to our email
//validation if the email existe or no

//return the secces msg
export async function POST(request: NextRequest) {
  const body = await request.json();
  const { otpCode, email } = body;

  if (!email || !otpCode) {
    return NextResponse.json({
      msg: "email and otpCode are required",
    });
  }

  return NextResponse.json("");
}
