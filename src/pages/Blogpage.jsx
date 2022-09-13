import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom';

const Blogpage = () => {

  const [posts,setPosts] = useState([]);

  useEffect(()=>{
    fetchPosts()
    console.log('helo')
  },[])

  async function fetchPosts(){
    const fetchData = await fetch("https://jsonplaceholder.typicode.com/posts")
    const res = await fetchData.json();
    setPosts(res)
  }

  return (
    <div>
      <h1>Our News</h1>
      <Link to='/posts/new'>Add new post</Link>
      {
        posts.map((post) => (
          <Link key={post.id} to={`/posts/${post.id}`}>
            <li>{post.title}</li>
          </Link>
        ))
      }
    </div>
  )
}

export default Blogpage