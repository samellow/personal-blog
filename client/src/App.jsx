import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Dashboard from './components/dashboard/Dashboard'
import Articles from './components/article/Articles'
import CreateArticle from './components/createArticle/CreateArticle'

const App = () => {
  return (
    <div>
      <Dashboard></Dashboard>
      <Routes>
        <Route path='/' element={<Articles></Articles>}></Route>
        <Route path='/create' element={ <CreateArticle></CreateArticle>}> </Route>

      </Routes>
     
    
      
    </div>
  )
}

export default App