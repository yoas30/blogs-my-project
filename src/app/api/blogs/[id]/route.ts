import { NextRequest, NextResponse } from "next/server";

export async function GET (req:NextRequest, {params}: {params: {id:string}}){
    return new NextResponse (`Get Blog Detail ${params.id}`)
}

export async function DELETE (req:NextRequest, {params}: {params: {id:string}}){
    return new NextResponse (`Delete Blog Detail ${params.id}`)
}

export async function PUT (req:NextRequest, {params}: {params: {id:string}}){
    return new NextResponse (`Update Blog Detail ${params.id}`)
}