import React, { useState, useContext, createContext } from 'react'

const UserContext = createContext([
  {
    firstName:"Bob",
    lastName: 'Bobberson',
    suffix: 1,
    email: "boboboboo@example.com"
  },
  (obj) => obj
]);

//level five
const LevelFive = ({person}) =>{
  const [user,setUser] = useContext(UserContext);
  return (
    <div>
      <h5>{user.firstName}</h5>
      {/* <button onClick={()=>{
        setUser(Object.assign({}, user, {suffix: user.suffix + 1}))
      }}>increment</button> */}
    </div>
  )
}
//level four
const LevelFour = ({person}) =>{
  return(
  <div>
    <h4>fourth level</h4>
    <LevelFive person={person}/>
  </div>
  )
}
//level three
const LevelThree = ({person}) =>{
  return(
  <div>
    <h3>Third level</h3>
    <LevelFour person={person}/>
  </div>
  )
}
//second level
const LevelTwo = ({person}) =>{
  return (
  <div>
    <h2>second level</h2>
    <LevelThree person={person}/>
  </div>
  )
}
// first level
const Context = () => {
  const person = {}
  const userState = useState({
    firstName: 'James',
    lastName: 'Jameson',
    suffix: 1,
    email: 'james.jons@example.com'
  })

  return (
    <UserContext.Provider value={userState}>
      <h1>first level</h1>
      <LevelTwo person={person}/>
    </UserContext.Provider>
  )
}

export default Context