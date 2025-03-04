import { NextRequest, NextResponse } from "next/server";

export async function GET (req:NextRequest){
    return new NextResponse ("Get Blogs")
}

export async function POST (req:NextRequest){
    return new NextResponse ("Add Blogs")
}