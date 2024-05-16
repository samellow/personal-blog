import { useEffect, useState } from "react"
import toast from "react-hot-toast"


const useGetArticles = () => {
    const [loading, setLoading] = useState(false)
    const [articles, setArticles] = useState('')

    useEffect(()=>{
        const getArticles = async () => {
        try {
            
                setLoading(true)
                const response = await fetch('/api/article')
                const data = await response.json()

                if(data.error) {
                    toast.error(data.error)
                    console.log(data.error)
                }
                setArticles(data)
                
            }catch (error) {
            toast.error(error.message)
        }finally {
            setLoading(false)
        }
    }
        getArticles()

    },[])
    return { articles, loading}

}

export default useGetArticles;