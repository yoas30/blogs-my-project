import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/database";
import { mongo_uri } from "../../../../constant";
import { Blog } from "@/models/blog";

export async function GET (req:NextRequest){
    await connectDB (mongo_uri)
    return new NextResponse ("Get Blogs")
}

export async function POST (req:NextRequest){
    try {
        await connectDB(mongo_uri)
        const blogData = await req.json()
        const {title, description, imageURL} = blogData

        const newBlog = new Blog({
            title : title,
            description : description,
            imageURL : imageURL
        })
        const blog = await newBlog.save()
        return NextResponse.json({
            success : true,
            message : 'Blog added successfully',
            data : blog
        }, {status: 201})

    } catch (error:any) {
        return NextResponse.json({
            success : false,
            message : error.message
        },{status: 500})
    }
}