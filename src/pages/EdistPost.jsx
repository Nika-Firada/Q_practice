import React from 'react'
import { useParams } from 'react-router-dom'

const EdistPost = () => {
    const {id} = useParams()

  return (
    <div>
        <h1>Edit Post {id}</h1>
    </div>
  )
}

export default EdistPost