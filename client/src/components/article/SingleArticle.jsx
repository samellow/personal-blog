import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { selectArticleById } from './articlesSlice'
import { Link } from 'react-router-dom'

const SingleArticle = () => {
  const { articleId } = useParams()


  const article = useSelector((state)=> selectArticleById(state, articleId))

  if(!article) {
    return (
      <section>
        <h2>Article not found</h2>
      </section>
    )
  }

  return (
    <article className="selectedArticle">
      <h2>{article.title}</h2>
      <p>{article.content}</p>
      <Link to = {`/edit/${article._id}`}>
      <button className='article-btn'>Edit Article</button>
      </Link>
    </article>
  )
}

export default SingleArticle