import { NextRequest, NextResponse } from "next/server";

// What are we doing?
// Logging out the user
// What do we need?
// We need the user's token/session
// Where do we get it?
// From cookies or Authorization header
// How do we use it?
// - Check if the token/session exists
// - Remove the token or clear the cookie
// - Return success message


function Logout(request:NextRequest) {


    return NextResponse.json({
        msg: "Logout successful"

    })
}