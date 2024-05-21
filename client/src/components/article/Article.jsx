import React, { useState } from 'react'
import './article.css'
import { MdOutlineDeleteOutline } from "react-icons/md"
import { MdOutlineEdit } from "react-icons/md"
import { useDispatch } from 'react-redux'
import { deleteArticle } from './articlesSlice'
import { Link } from 'react-router-dom'


const Article = ({title, excerpt, _id}) => {
const dispatch = useDispatch()

const handleDelete = ()=> {
  dispatch(deleteArticle(_id))
}
  
  
  return (
    <>
    
    <article className="article">
      <div className="article-description">
    <Link to= {`/thisArticle/${_id}`}>  <h2 className="title">{title}</h2></Link>
      <p className="excerpt">{excerpt}</p>
      </div>

      <div className="article-icons">
        <Link to={`/edit/${_id}`}><i><MdOutlineEdit /></i></Link>
        
        <i><MdOutlineDeleteOutline  onClick={handleDelete}/></i>
      </div>
      

    </article>
   
    </>
  
  )
}

export default Article