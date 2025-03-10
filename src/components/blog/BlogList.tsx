/* eslint-disable @typescript-eslint/no-explicit-any */
import { DTOBlogs } from "@/types"
import BlogItem from "./BlogItem"

export default function BlogList({blogs} : {blogs:any}){
    return <div className="grid grid-cols-4 ">
        {blogs.map((blog:DTOBlogs)=>{
            // karena list makannya di kasih key
            return <div key={blog._id}>  
                <BlogItem blog={blog}/>
            </div>
        })}
    </div>
}