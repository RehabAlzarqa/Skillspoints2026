
// What are we doing? 
// we create the API for the points system, we will have a GET and a POST method, 
// the GET method will return the points of the user and the POST method will add points to the user, we will use the user id to identify the user and we will use a database to store the points, we will use a simple key-value store for this, we will use the user id as the key and the points as the value, we will also need to authenticate the user to make sure that they are who they say they are, we will use a simple token-based authentication system for this, we will generate a token for the user when they log in and we will use that token to authenticate them when they make requests to the API, we will also need to handle errors and edge cases, such as when t-the user is not authenticated, when the user does not exist, when the user tries to add points that are not valid, etc
// What do we need? we need a database to store the points, we need a way to authenticate the user, we need a way to handle errors and edge cases, we need a way to generate tokens for the user, we need a way to validate the tokens, we need a way to add points to the user, we need a way to get the points of the user, we need a way to handle requests and responses, we need a way to log the requests and responses for debugging purposes
// Where do we get them? we can use a simple in-memory database for this, we can use a simple token-based authentication system for this, we can use a simple error handling system for this, we can use a simple logging system for this, we can use the built-in request and response handling of the framework we are using for this 
// How do we use them? 
// Why do I need this endpoint?
// What information do I need
// to know the user's points?

// What are we doing?
// Getting user points
// What do we need?
// we nned userId
// Where do we get it?
// From request body
// How do we use it?
// - Find user
// - Check user exists
// - Return totalPoints

import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

 export async function GET(request:NextRequest
 ) {

//read request body 
const body = await request.json();
//read request body 

// ? Step 2
const { userId} = body;
// ! Extract userId from body

// ? Step 3
// ! Find user in database
 const findUser = await prisma.user.findUnique({
    where:{

        idUser: userId
    }
 })
// ! Find user in database
// ? Step 4
// ! Check user exists
if(!findUser) {
    return NextResponse.json({
        msg: "User Not Found",
        
    },
{
    status: 404
})
}
// ! Check user exists


// ? Step 5
// ! Return user points
return NextResponse.json(
    {
      points: findUser.totalPoints,
    },
    {
      status: 200,
    }
  );
  // ? Step 5
// ! Return user points



    
}
//  Goal
// // What are we doing?
// Add points to a user Adding points to a user account
// What do we need?
// we need userId and points to add
// Where do we get it?
// From request body
// How do we use it?
// 1. Read request body

// 2. Get userId and points

// 3. Find user

// 4. Check user exists

// 5. Validate points
//    - points > 0

// 6. Increment points

// 7. Return success response    

 export async function POST(request:Request) {

    // 1. Read request body
    const body =  await request.json();
       // 1. Read request body

    // 2. Get userId and points
    const { userId, points} = body;
    // 2. Get userId and points

// 3. Find user
const findUser = await prisma.user.findUnique({
    where: {
        idUser: userId
    }
})
// 3. Find user

// 4. Check user exists
if( !findUser) {
    return NextResponse.json({
        msg: "User Not Found"
    },
    {
        status:404
    }
)
}
// 4. Check user exists

// 5. Validate points
//    - points > 0
if(points <= 0) {
    return NextResponse.json({
        msg: "Points must be greater than 0"
    },
{
    status: 400
})
}
// 5. Validate points
//    - points > 0

// 6. Increment points
 const updatedUser = await prisma.user.update({
    where: {
        idUser: userId
    },
    data: {
        totalPoints: {
            increment: points
        }
    }
 })
// 6. Increment points

// 7. Return success response    
return NextResponse.json({
    msg: "Points added successfully",
    totalPoints: updatedUser.totalPoints
},
{
    status: 200
})
// 7. Return success response    

}