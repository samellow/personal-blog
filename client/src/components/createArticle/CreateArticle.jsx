import React from 'react'
import './createArticle.css'

const CreateArticle = () => {
  return (
    <main className="create-article">
        <h2>Create Article</h2>
        <form className='article-input'>
            <input type="text" name="title" id="title" className='article-title' placeholder='Title' />
            <textarea name="excerpt" id="excerpt" cols="150" rows="10"  placeholder='Enter short description' className='article-excerpt'></textarea>
            <textarea name="content" id="content" cols="150" rows="50" placeholder='Write blog' className='article-content'></textarea>
            <input type="submit" value="Publish" className='article-btn' />
        </form>
    </main>
  )
}

export default CreateArticle