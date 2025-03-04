import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/database";
import { mongo_uri } from "../../../../constant";

export async function GET (req:NextRequest){
    await connectDB (mongo_uri)
    return new NextResponse ("Get Blogs")
}

export async function POST (req:NextRequest){
    return new NextResponse ("Add Blogs")
}