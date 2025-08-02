import { useBlog } from "../shared/BlogContext"
import type { Blog } from "../shared/type"
import ArticleCard from "./ArticleCard"


const ArticleList: React.FC<{onEdit: (blog:Blog)=>void}> = ({onEdit})=>{
  const {blogs, deleteBlog} = useBlog()
  return (
    <div className="ml-[5rem]">
        {blogs.map((blog)=>(<ArticleCard key={blog.id} article={blog} onDelete={()=>deleteBlog(blog.id)} onEdit={()=>onEdit(blog)}/>))}        
    </div>
  )}

export default ArticleList