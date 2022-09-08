import React, { useRef, useState } from 'react'

const Ref = () => {
  const [stateNum,setStateNum] = useState(0);
  const numRef = useRef(0)

  function incrementAndDelayLogging(){
    setStateNum(stateNum + 1);
    numRef.current++
    setTimeout(() => alert(`state: ${stateNum} | ref: ${numRef.current}`), 1000)
  }

  return (
    <div>
      <h1>useRef Example</h1>
      <button onClick={incrementAndDelayLogging}>Delay Logging</button>
      <h4>state: {stateNum}</h4>
      <h4>ref: {numRef.current}</h4>
    </div>
  )
}

export default Ref