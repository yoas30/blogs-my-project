/* eslint-disable @typescript-eslint/no-unused-vars */
import BlogList from "@/components/blogs/BlogList"

async function fetchBlogs(){
    try {
        const data = await fetch('http://localhost:3000/api/blogs',{ cache: 'no-store' })
        return data.json()
    } catch (error) {
        throw new Error('Failed Fetch Resource')
    }
}

export default async function BlogPage(){
    const blogs = await fetchBlogs ()
    console.log(blogs)
    return  <BlogList blogs={blogs.data}/>
}