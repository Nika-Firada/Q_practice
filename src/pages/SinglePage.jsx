import React from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react';

const SinglePage = () => {
    const navigate = useNavigate() //გზებს იმახსოვრებს/ისტორიას
    const {id} = useParams();
    const [post,setPost] = useState(null);

    const goBack = () => navigate(-1) // ერთით უკან დაბრუნება 
    const goHome = () => navigate('/', {replace: true})
    useEffect(()=>{
        fetchPosts()
    },[id])

    async function fetchPosts(){
        const fetchData = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        const res = await fetchData.json();
        setPost(res)
    }
    

  return (
    <div>
        <button onClick={goBack}>Go  Back</button>
        {/* Bad approach --  */}
        <button onClick={goHome}>Go  Home</button> 
        {post && (
            <>
                <h1>{post.title}</h1>
                <br />
                <p>{post.body}</p>
                <Link to={`/posts/${id}/edit`}>Edit Post</Link>

            </>
        )}
    </div>
  )
}

export default SinglePage