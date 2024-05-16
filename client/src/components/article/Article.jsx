import React from 'react'
import './article.css'
import { MdOutlineDeleteOutline } from "react-icons/md"
import { MdOutlineEdit } from "react-icons/md"

const Article = ({title, excerpt}) => {
  
  return (
    <article className="article">
      <div className="article-description">
      <h2 className="title">{title}</h2>
      <p className="excerpt">{excerpt}</p>
      </div>

      <div className="article-icons">
        <i><MdOutlineEdit /></i>
        <i><MdOutlineDeleteOutline /></i>
      </div>
      

    </article>
  )
}

export default Article