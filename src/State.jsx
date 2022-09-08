import React, { useState } from 'react'

const State = () => {
  const [isgreen,setIsGreen] = useState(false)

  return (
    <h2 
      onClick={() => setIsGreen(!isgreen)} 
      style={{color: isgreen ? 'limegreen' : 'black'}}>
    useState Example
    </h2>
  )
}

export default State