import React, { useState } from 'react'
import './createArticle.css'
import useCreateArticle from '../../hooks/useCreateArticle'

const CreateArticle = () => {

  const [data, setData] = useState({
    title: '',
    excerpt: '',
    content: ''
  })

  const { createArticle, loading} = useCreateArticle()

  const handleSubmit = async(e) => {
    e.preventDefault()
    await createArticle(data)
    console.log(data)
  }
  return (
    <main className="create-article">
        <h2>Create Article</h2>
        <form onSubmit={handleSubmit} className='article-input'>
            <input type="text" name="title" id="title" className='article-title' placeholder='Title' onChange={(e)=> setData({...data, title: e.target.value})} />
            <textarea name="excerpt" id="excerpt" cols="150" rows="10"  placeholder='Enter short description' className='article-excerpt' onChange={(e)=> setData({...data, excerpt: e.target.value})}></textarea>
            <textarea name="content" id="content" cols="150" rows="50" placeholder='Write blog' className='article-content' onChange={(e)=> setData({...data, content: e.target.value})}></textarea>
            <input type="submit" value="Publish" className='article-btn' />
        </form>
    </main>
  )
}

export default CreateArticle