
// Question: 
 // what we will doing ?
 // we want to login a user
 // what we need to login ?
 // we need a user info email/pass
 //how we will get them?
 // we will get them for the body 

import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';



//STEPS
//write the controller funcation
//collect the info form body
//check the info that we need to login if it is exist 
//validation if the info  of the user existe or no
//return the secces msg


//write the controller funcation
 export async function POST(request:NextRequest) {
//collect the info form body
const body = await request.json()
//extract the user info from the body
const {email, password} = body;
//check the info that we need to login if it is exist 
 if (!email || !password) {
    return NextResponse.json({
        msg:" all fields are required",
        status: 409
    })
 }
// check the user if it is existe
const userExistes = await prisma.user.findUnique({
   where: {email} 
})

//validation if the info  of the user existe or no

if (!userExistes) {
    return NextResponse.json({
        msg: "user not existe",
        status: 400
    })
}

const isPasswordCorrect = await bcrypt.compare(password, userExistes.password);

// Generate a token for the user.
const JWT_PASSWORD = process.env.JWT_PASSWORD;
const token = jwt.sign({ email }, JWT_PASSWORD);
// Generate a token for the user.


if (!isPasswordCorrect) {
    return NextResponse.json({
        msg: "Invalid credentials",
        
    },
{status:401})
}

// save the token in the user profile
await prisma.user.update({
    where: {email},
    data: {token}

})

//return the token to the user with a success msg
return NextResponse.json({
    msg:"Login successful",
    token: token,
    
});
    //return the token to the user with a success msg

}


