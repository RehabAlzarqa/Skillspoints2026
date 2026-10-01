
// Question: 
 // what we will doing ?
 // we want to login a user
 // what we need to login ?
 // we need a user info email/pass
 //how we will get them?
 // we will get them for the body 

import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";


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


return NextResponse.json({
    msg:"login seccfully",
    status: 200
});
    
}




//Body
// URL params
// Query params
// !Steps


