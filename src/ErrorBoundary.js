// import React, { Component } from 'react'
// export class ErrorBoundary extends Component {
//     state = {hasError: false};
//     static getDrivedStateFromError(){
    //         return {hasError: true}
    //     }
        //     componentDidCatch(error, info){
        //         console.error("ErrorBoundary", error, info)
        //     }
        //   render() {
        //     if (this.state.hasError){
        //         return (
        //             <h1>
        //                 This listing has error <Link to="/">Click Here</Link> to go back to the home page
        //             </h1>
        //         )
        //     }
        //     return this.props.children
                        
        //   }
// }
                        
// export default ErrorBoundary
import { Link, useNavigate } from 'react-router-dom'
import React, { useState, useEffect } from 'react'

const ErrorBoundary = () => {
    const [redirect,setRedirect] = useState(true)
    console.log(redirect)

    let navigate = useNavigate();

    useEffect(() => {
        const red = setTimeout(()=> redirectPage(), 5000)
        return () => clearTimeout(red)
    },[redirect]);

    function redirectPage(){
        return navigate("/");
    }
//აქ შემექმნა პრობლემა -///// მემგონი გამოვასწორე
  return (
    <>
    <h2>
        This listing has error <Link to="/">Click Here</Link> to go back to the home page
    </h2>
    </>
  )
}

export default ErrorBoundary