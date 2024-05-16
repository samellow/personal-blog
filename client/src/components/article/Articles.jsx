import React from 'react'
import Article from './Article'
import useGetArticles from '../../hooks/useGetArticles'

const Articles = () => {
  const {articles, loading} = useGetArticles()
  const sortedArticles = articles.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  return (
    <div className="my-articles">
      {!loading &&
       sortedArticles.length > 0 && 
      sortedArticles.map((article)=> (
        <div key={article.id}>
          <Article {...article}></Article>
        </div>
      ))

      }
    </div>
  )
}

export default Articles