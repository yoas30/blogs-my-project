import { Blogs } from "@/types";
import { Schema, model, models } from "mongoose";

const blogSchema = new Schema<Blogs>({
    title: {
        type: String,
        require : [true, 'Title should not be empty']
    },
    description: {
        type: String,
        require : [true, 'Description should not be empty']
    },
    imageURL: {
        type: String,
        default: ''
    }
}, {timestamps: true}

)

export const Blog = models.Blog || model<Blogs>('Blogs', blogSchema)