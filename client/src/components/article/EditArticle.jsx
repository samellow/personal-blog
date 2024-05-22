import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { deleteArticle, selectArticleById, updateArticle } from './articlesSlice'
import toast from 'react-hot-toast'

const EditArticle = () => {
    const { articleId } = useParams()
    const navigate = useNavigate()

    const article = useSelector((state)=> selectArticleById(state, articleId))

    const [title, setTitle] = useState(article?.title)
    const [excerpt, setExcerpt] = useState(article?.excerpt)
    const [content, setContent] = useState(article?.content)

    const dispatch = useDispatch()

    if(!article) {
        <section>
            <h2>Article not found!</h2>
        </section>
    }

    const onTitleChange = (e) => {
        setTitle(e.target.value)
    }
    const onExcerptChange = (e) => {
        setExcerpt(e.target.value)
    }
    const onContentChange = (e) => {
        setContent(e.target.value)
    }
    
    const onSaveArticleClicked =  (e) => {
        e.preventDefault()
        if(!excerpt, !title, !content) {
            toast.error('Fill all fields')
            return
        }

        try {
           dispatch(updateArticle({id: articleId, title, excerpt, content})).unwrap()

            
            navigate(`/thisArticle/${articleId}`)
        } catch (error) {
            console.log(error)
        }
        finally{
            setTitle('')
            setExcerpt('')
            setContent('')
        }
    }
  
    const onDeleteArticleClicked = (e) => {
        e.preventDefault()
        try {
            dispatch(deleteArticle(articleId))
            toast.success('Article deleted successfully')

            setTitle('')
            setExcerpt('')
            setContent('')
        } catch (error) {
            console.error(error)
        }
    }



  return (
    <main className="create-article">
        <h2>Edit Article</h2>
        <form  className='article-input'>
    
            <input type="text" name="title" id="title" className='article-title' placeholder='Title' value={title} onChange={onTitleChange} />
            <textarea name="excerpt" id="excerpt" cols="150" rows="10"  placeholder='Enter short description' className='article-excerpt' value={excerpt} onChange={onExcerptChange}></textarea>
            <textarea name="content" id="content" cols="150" rows="50" placeholder='Write blog' className='article-content' value={content} onChange={onContentChange}></textarea>
            
            <button className="article-btn" onClick={onSaveArticleClicked}>Save Article</button>
            <button className="article-btn" onClick={onDeleteArticleClicked}>Delete Article</button>
        </form>
    </main>
  )
}

export default EditArticle