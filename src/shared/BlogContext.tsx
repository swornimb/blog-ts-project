import React, { createContext, useState, useContext } from "react";
import type { Blog } from "./type";

interface BlogContextType{
    blogs: Blog[],
    addBlog: (blog: Blog)=>void;
    updateBlog: (blog: Blog)=>void;
    deleteBlog: (id:number)=>void;

}

const BlogContext = createContext<BlogContextType|undefined>(undefined);

export const BlogContextProvider: React.FC<{children: React.ReactNode}> = ({children})=>{
    
    const [blogs, setBlogs] = useState<Blog[]>([]);

    const addBlog = (newBlog: Blog)=>{setBlogs([...blogs, newBlog])}

    const updateBlog = (updateBlog: Blog)=>{
        setBlogs(blogs.map((blog)=>{
            return blog.id===updateBlog.id? updateBlog:blog
        }))
    }

    const deleteBlog= (id:number)=> setBlogs(blogs.filter((blog)=> blog.id !== id))

    return(
        <BlogContext.Provider value={{blogs, addBlog, updateBlog, deleteBlog}}>
            {children}
        </BlogContext.Provider>
    )

}

export const useBlog= ()=>{
    const context = useContext(BlogContext)

    if(!context){
        throw new Error('useBlog must be within BlogProvider')
    }

    return context
}