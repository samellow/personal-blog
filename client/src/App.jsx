import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Dashboard from './components/dashboard/Dashboard'
import Articles from './components/article/Articles'
import CreateArticle from './components/createArticle/CreateArticle'
import { Toaster } from 'react-hot-toast'
import EditArticle from './components/article/EditArticle'

const App = () => {
  return (
    <div>
      <Toaster position = "bottom-right" toastOptions={{duration: 3000}}/>
      <Dashboard></Dashboard>
      <Routes>
        <Route path='/' element={<Articles></Articles>}></Route>
        <Route path='/create' element={ <CreateArticle></CreateArticle>}> </Route>
        <Route path='/edit' element={<EditArticle/>}></Route>
      </Routes>
     
    
      
    </div>
  )
}

export default App