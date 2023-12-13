import React,{useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import IconLoading from './IconLoading'

const LoadingToRedirect = () => {
    const  navigate = useNavigate()
    //จับเวลา redirect
    const [count, setCount]=useState(3)

    useEffect(()=>{
        // เป็นตัวการจับเวลา
        const interval = setInterval(()=>{
            setCount((currentCount)=>--currentCount)
        },1000)

        //redirect
        count === 0 && navigate('/login')
         

        return ()=>clearInterval(interval)
        // eslint-disable-next-line
    },[count])
    
  return (
    <div className='container'>
      <div className='d-flex justify-content-center'>
<h1>No promission ,in redirect {count}
     <br />
     <br /><br /><br />
        <IconLoading/>
     
        
    </h1>
      </div>
      
    </div>
  )
}

export default LoadingToRedirect