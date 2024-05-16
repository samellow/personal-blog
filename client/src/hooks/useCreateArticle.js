import { useState } from "react"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"

const useCreateArticle = () => {
    const [loading, setLoading] = useState(false)
    const navigate =  useNavigate()

    const createArticle = async ({title, excerpt, content})=> {
        if(!title || !excerpt || !content) {
            toast.error('Please fill all fields ')
            return
        }

        setLoading(true)

        try {
            const res = await fetch("/api/article/create", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({title, excerpt, content})
            })

            const data = await res.json()
            if(res.status === 201) {
                toast.success('Article created successfully')
            } else {
                toast.error(data.message)
            }

            navigate('/')
        } catch (error) {
            toast.error(error.message)
            
        }finally {
            setLoading(false)
        }


    }

    return {createArticle, loading}
}

export default useCreateArticle