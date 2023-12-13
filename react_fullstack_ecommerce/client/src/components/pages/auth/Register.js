import React, { useState } from 'react'

//functions
import { register } from '../../functions/auth'
import { useNavigate } from 'react-router-dom'
import { toast} from 'react-toastify';
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
            toast.error('password not match')
        } else {
            // alert("login success")
            //code 
            //             export const register = async (value)=> 
            // await axios.post(process.env.REACT_APP_API + "/register",value) แบบเดิมไใเรียกfucntions

            register(value)
                .then((res) => {
                    console.log(res.data)
                    toast.success(res.data)

                    navigate('/login')
                }).catch((err) => {
                    console.log(err.response.data)
                    toast.error(err.response.data)
                })
        }
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 offset-md-3'>
                    <h1>Register Page</h1>


                    <form onSubmit={handleSubmit}>

                        <div className='form-group'>
                            <label htmlFor="username">Username</label>

                            <input
                                className='form-control'
                                type="text"
                                name='username'
                                onChange={handleChang} />

                        </div>

                        <div className='form-group'>
                            <label htmlFor="password">Password</label>
                            <input
                                className='form-control'
                                type="text" name='password' onChange={handleChang} /><br />

                        </div>

                        <div className='form-group'>
                            <label htmlFor="password1">Confirn Password</label>
                            <input
                                className='form-control'
                                type="text" name='password1' onChange={handleChang} />
                                <br />
                            <button 
                                className='btn btn-success'                            
                            disabled={value.password.length < 6}>Submit</button>
                        </div>


                    </form>

                </div>
            </div>

        </div>
    )
}

export default Register