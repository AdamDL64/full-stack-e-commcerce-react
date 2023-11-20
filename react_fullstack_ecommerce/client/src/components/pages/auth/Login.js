import React from 'react'
import { useState } from 'react'
import { login } from '../../functions/auth'
//redux
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Login = () => {
const navigate = useNavigate()

  const dispatch = useDispatch()
  const [value, setValue] = useState({
    username: "",
    password: "",
   
})

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
  e.preventDefault()
  console.log(value)

  //send to back
  login(value)
  .then((res)=>{
    console.log(res.data)
    alert(res.data)

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
    console.log(err)
    alert(err.response.data)
  })

}



  return (
    <div>
    <h1>Login Page</h1>
    <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input type="text" name='username' onChange={handleChang} /> <br />

        <label htmlFor="password">Password</label>
        <input type="text" name='password' onChange={handleChang} /><br />

        <button disabled={value.password.length < 6}>Submit</button>

    </form>

</div>
  )
}

export default Login