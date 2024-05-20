import { configureStore } from '@reduxjs/toolkit'
import articlesReducer from '../components/article/articlesSlice'

export const store = configureStore ({
    reducer: {
        articles: articlesReducer,
    }
})