import React, { useState } from 'react'
import './createArticle.css'
import { useDispatch } from 'react-redux'
import { addArticle } from '../article/articlesSlice';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const CreateArticle = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [title, setTitle] = useState('')
  const [excerpt, setExcerpt] = useState('')
  const [content, setContent] = useState('')
  
  const onTitleChange = (e) => setTitle(e.target.value);
  const onExcerptChange = (e) => setExcerpt(e.target.value);
  const onContentChange = (e) => setContent(e.target.value);


  const handleSubmit = (e) => {
    e.preventDefault()
    if(!title ||!excerpt ||!content) {
      toast.error('Please fill all fields ')
      return
    }
     
      dispatch(addArticle({title, excerpt, content}))
      setTitle('')
      setExcerpt('')
      setContent('')

  }
  return (
    <main className="create-article">
        <h2>Create Article</h2>
        <form onSubmit={handleSubmit} className='article-input'>
    
            <input type="text" name="title" id="title" className='article-title' placeholder='Title' value={title} onChange={onTitleChange} />
            <textarea name="excerpt" id="excerpt" cols="150" rows="10"  placeholder='Enter short description' className='article-excerpt' value={excerpt} onChange={onExcerptChange}></textarea>
            <textarea name="content" id="content" cols="150" rows="50" placeholder='Write blog' className='article-content' value={content} onChange={onContentChange}></textarea>
            <input type="submit" value="Publish" className='article-btn' />
        </form>
    </main>
  )
}

export default CreateArticle