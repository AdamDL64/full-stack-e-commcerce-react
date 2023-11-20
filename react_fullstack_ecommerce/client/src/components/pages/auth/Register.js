import React, { useState } from 'react'

//functions
import { register } from '../../functions/auth'
import { useNavigate } from 'react-router-dom'

const Register = () => {
    const navigate = useNavigate()
    const [value, setValue] = useState({
        username: "",
        password: "",
        password1: ""
    })

    const handleChang = (e) => {
        setValue({
            ...value,
            [e.target.name]: e.target.value
        })
    }
    console.log(value)

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(value)
        if (value.password !== value.password1) {
            alert('password not match')
        } else {
            alert("login success")
            //code 
            //             export const register = async (value)=> 
            // await axios.post(process.env.REACT_APP_API + "/register",value) แบบเดิมไใเรียกfucntions

            register(value)
            .then((res) => {
                console.log(res.data)
                alert(res)

                navigate('/login')
            }).catch((err) => {
                console.log(err.response.data)
                alert(err.response.data)
            })
        }
    }

    return (
        <div>
            <h1>Register Page</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input type="text" name='username' onChange={handleChang} /> <br />

                <label htmlFor="password">Password</label>
                <input type="text" name='password' onChange={handleChang} /><br />

                <label htmlFor="password1">Confirn Password</label>
                <input type="text" name='password1' onChange={handleChang} />
                <button disabled={value.password.length < 6}>Submit</button>

            </form>

        </div>
    )
}

export default Register