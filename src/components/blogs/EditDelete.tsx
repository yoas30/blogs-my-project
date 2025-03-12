

"use client"

import { Button } from "@/components/ui/button";
import {
      Delete,
      Edit
} from 'lucide-react'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import AddBlog from "./AddBlog";
import { DTOBlogs } from "@/types";
import { toast } from "sonner"
import { useRouter } from "next/navigation";

export function EditDelete({blog}: {blog:DTOBlogs}) {
  const router = useRouter()

  async function handleDeleteById() {
    try {
      const apiResponse = await fetch (`http://localhost:3000/api/blogs/${blog._id}`, {
            method : 'DELETE'
        });
        const result = await apiResponse.json()
        if (result?.success){
          toast('Succeed deleted blog data')
          router.push('/blogs');
          router.refresh()
        }
    } catch (error) {
      console.error(error)
      toast('Failed deleted blog data')
    }
    
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost">...</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuGroup>
          <DropdownMenuItem>
              <AddBlog 
                blog={blog} 
                title="Update Blog" 
                description="Update your blog here. Click save when you`re done.">
                <div className="flex gap-1">
                  <Edit className='mr-2 h-4 w-4' />
                  <span>Edit</span>
                </div>
              </AddBlog>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleDeleteById()}>
            <Delete className='mr-2 h-4 w-4' />
              <span>Delete</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
