import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/database";
import { mongo_uri } from "../../../../constant";
import { Blog } from "@/models/blog";

////////////////////////////////////////////////-- Fungsi GET --////////////////////////////////////////////////

export async function GET (req:NextRequest){
    const searchParamms = req.nextUrl.searchParams

    //get 10 data dengan min 1 page
    const limit = searchParamms.get('limit') || '10'
    const page = searchParamms.get('page') || '1'
    const skip  =  (parseInt(page) - 1 ) * parseInt(limit)

    try {
        await connectDB (mongo_uri)
        const blogs = await Blog.find().sort({date:-1}).skip(skip).limit(parseInt(limit))
        const totalData = await Blog.countDocuments()
        return NextResponse.json({
            total: totalData,
            page: page,
            limit: limit,
            data: blogs
        })
    } catch (error:any) {
        return NextResponse.json({
            success : false,
            message : error.message
        },{status: 500})
    }
}

////////////////////////////////////////////////-- Fungsi POST --////////////////////////////////////////////////

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