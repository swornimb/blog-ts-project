import { IoMdAddCircle } from 'react-icons/io'
import './App.css'
import Navigation from './components/Navigation'
import PeopleToFollow from './components/PeopleToFollow'
import TopicsList from './components/TopicList'
import TrendsList from './components/TrendsList'
import { BlogContextProvider } from './shared/BlogContext'
import { useState } from 'react'
import type { Blog } from './shared/type'
import Modal from './components/Modal'
import BlogForm from './components/BlogForm'
import ArticleList from './components/ArticleList'


function App() {

  const [isModelOpen, setModelOpen]=useState(false);
  const [editingBlog, setEditingBlog]= useState<Blog|null>(null);

  const openModelForNewBlog = ()=>{
    setEditingBlog(null)
    setModelOpen(true)
  }

  const openModelForEdit = (blog:Blog)=>{
    setEditingBlog(blog)
    setModelOpen(true)
  }

  return (
    <>
    <BlogContextProvider>
      <Navigation/>
      <div className="flex justify-center mt-[1rem]">
        <section className='mx-auto p-6'>
          <div>
            <button onClick={openModelForNewBlog} className='ml-[7rem] bg-black flex justify-center items-center text-white px-4 py-2 rounded mb-4'>Add new blog <IoMdAddCircle className='ml-[0.5rem]'/></button>
          </div>
        </section>
          <ArticleList onEdit={openModelForEdit} />
        {isModelOpen && (
          <Modal onClose={()=>setModelOpen(false)}>
              <BlogForm existingBlog={editingBlog} onClose={()=>setModelOpen(false)}/>
          </Modal>
        )}
        <div className='w-[30%]'>
          <PeopleToFollow/>
          <TrendsList/>
          <TopicsList/>
        </div>
      </div>
    </BlogContextProvider>
    </> 
  )
}

export default App
