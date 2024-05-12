import React from 'react'
import './article.css'
import { MdOutlineDeleteOutline } from "react-icons/md"
import { MdOutlineEdit } from "react-icons/md"

const Article = () => {
  return (
    <article className="article">
      <div className="article-description">
      <h2 className="title">Article Title</h2>
      <p className="excerpt">The articles excerpt ......</p>
      </div>

      <div className="article-icons">
        <i><MdOutlineEdit /></i>
        <i><MdOutlineDeleteOutline /></i>
      </div>
      

    </article>
  )
}

export default Article