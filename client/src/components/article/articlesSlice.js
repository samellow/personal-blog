import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import toast from "react-hot-toast"


const initialState = {
    articles: [],
    status: 'idle',
    error: null,
}

export const fetchArticles = createAsyncThunk('articles/fetch',
async()=> {
    try {
        const response = await fetch('/api/article')
        const data = await response.json()
        return data
    } catch (err) {
        console.log(err)
    }
})

export const addArticle = createAsyncThunk('articles/add',
async(articleData)=> {
    
      
    try {
        
        const response = await fetch('/api/article/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body : JSON.stringify(articleData)
        })
        const data = await response.json()
        if(response.status === 201) {
            toast.success('Article created successfully')
        } else {
            toast.error(data.message)
            console.log(data.message)
        }

        
        return data
    } catch (err) {
        console.log(err)
    }
})

export const deleteArticle = createAsyncThunk('articles/delete', 
async (articleId)=>{
    try {
        const response = await fetch(`api/article/delete/${articleId}`, {
            method: 'DELETE',

        })

        if(response.status === 200) {
            toast.success('Article deleted successfully')
        } else {
            const error = await response.json()
            console.log(error)
        }

        return articleId

    } catch (error) {
        console.log(error)
    }
})

export const updateArticle = createAsyncThunk('articles/update',
async (articleId) => {
    try {
        const response = await fetch(`api/article/${articleId}`)
        return response.data
    } catch (error) {
        console.log(error)
    }
  
}) 



const articlesSlice = createSlice({
    name: 'articles',
    initialState,
    reducers: {},
    extraReducers: (builder)=> {
        builder
            .addCase(fetchArticles.pending, (state) => {
                state.status = 'loading'
                state.error = null
            })
            .addCase(fetchArticles.fulfilled, (state, action) => {
                state.status = 'succeeded'
                 state.articles = action.payload
            })
            .addCase(fetchArticles.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
            .addCase(addArticle.pending, (state,action)=> {
                state.status = 'loading'
                state.error = null
            })
            .addCase(addArticle.fulfilled, (state, action)=>{
                state.status = 'succeeded'
                state.articles.push(action.payload)
            })
            .addCase(addArticle.rejected, (state, action)=>{
                state.status = 'failed'
                state.error = action.error.message
            })
            .addCase(deleteArticle.pending, (state, action)=>{
                state.status = 'loading'
                state.error = null
            })
            .addCase(deleteArticle.fulfilled, (state, action)=>{
                state.status = 'succeeded'
                state.articles = state.articles.filter(article => article._id!== action.payload)
            })
            .addCase(deleteArticle.rejected, (state, action)=>{
                state.status = 'failed'
                state.error = action.error.message
            })
            .addCase(updateArticle.pending, (state, action)=>{
                state.status = 'loading'
                state.error = null
            })
            .addCase(updateArticle.fulfilled, (state, action)=>{
                state.status = 'succeeded'
                state.articles = state.articles.map(article => article._id === action.payload._id? action.payload : article)
            })
            .addCase(updateArticle.rejected, (state, action)=>{
                state.status = 'failed'
                state.error = action.error.message
            })
    }
})

export const selectAllArticles = (state) => state.articles.articles;
export const getArticlesStatus = (state) => state.articles.status;
export const getArticlesError = (state) => state.articles.error;

export default articlesSlice.reducer