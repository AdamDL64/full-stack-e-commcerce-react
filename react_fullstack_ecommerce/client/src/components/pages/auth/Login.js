import React from 'react'
import { useState } from 'react'
import { login } from '../../functions/auth'
//redux
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {toast} from "react-toastify"


import { Spin } from 'antd'
const Login = () => {
const navigate = useNavigate()

  const dispatch = useDispatch()
  const [value, setValue] = useState({
    username: "",
    password: "",
   
})

const [loading,setLoading]=useState(false)

  const roleBaseRedirect = (role)=>{
    console.log(role)
    if(role==="admin"){
     navigate('/admin/index')
    }
    else{
      navigate('/user/index')
    }
  }

const handleChang = (e) => {
    setValue({
        ...value,
        [e.target.name]: e.target.value
    })
}


const handleSubmit = (e) => {
  setLoading(true)
  e.preventDefault()
  console.log(value)

  //send to back
  login(value)
  .then((res)=>{
    setLoading(false)
    console.log(res.data)
    toast.success( "WeCome    "+res.data.payload.user.username + "  LoginSuccess")

    dispatch({type:"LOGIN",
    payload:{
      token:res.data.token,
      username:res.data.payload.user.username,
      role:res.data.payload.user.role
    }
  })
  //เก็บที่ locastorage
  localStorage.setItem('token',res.data.token)

  //check สิทธิ
  roleBaseRedirect(res.data.payload.user.role)

  })
  .catch((err)=>{
    setLoading(false)
    console.log(err)
    toast.error(err.response.data)
  })

}



  return (
    <div className='container'>

      <div className='row'>
        <div className='col-md-6 offset-md-3'>

          {
            loading ? <h1>loding... <Spin/></h1>
            :<h1>Login Page</h1>
          }
 
    <form onSubmit={handleSubmit}>

        <div className='form-group'>
  <label htmlFor="username">Username</label>
        <input 
        className='form-control'
        type="text" name='username' onChange={handleChang} /> 
        </div>
        <br />

      
      <div className='form-group'>
 <label htmlFor="password">Password</label>
        <input type="text" name='password' onChange={handleChang}
        className='form-control'
        />
      </div>
      <br />
       

        <button disabled={value.password.length < 6}
        className='btn btn-success'
        >  {
          loading ? <div>loding... <Spin/></div>
          :<div>summit</div>
        }
</button>

    </form>

        </div>
      </div>
   
</div>
  )
}

export default Login