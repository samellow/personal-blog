import React, { useEffect } from 'react'
import Article from './Article'
import { useDispatch, useSelector } from 'react-redux';
import { fetchArticles, getArticlesError, getArticlesStatus, selectAllArticles } from './articlesSlice';

const Articles = () => {
  const dispatch = useDispatch()
  const articles = useSelector(selectAllArticles)
  const status = useSelector(getArticlesStatus)
  const errors = useSelector(getArticlesError)

  useEffect(()=>{
      if(status === 'idle'){
          dispatch(fetchArticles())
      }
    
    }, [status, dispatch])

    console.log(articles)

    let content;
    if (status === 'loading'){ 
      content = <p>Loading articles...</p>;
    } else if (errors) {
      content = <p>Error fetching articles: {errors}</p>;
    } else {
    
      if (articles && articles.length > 0) {
        const orderedArticles = articles.slice().sort((a, b) => b.createdAt.localeCompare(a.createdAt)); 
        content = orderedArticles.map((article) => (
          <Article key={article.id} {...article} />
        ));
      } else {
        content = <p>No articles yet.</p>;
      }
    }
  return (
    <div className="my-articles">
     { content}
     
    </div>
  )
}

export default Articles