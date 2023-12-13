import axios from "axios"
//register
export const register = async(value)=>await axios.post("http://localhost:5000/api/register",value)

// export const register = async(value)=>
// await axios.post(process.env.REACT_APP_API +"/register",value)

//login

export const login = async(value)=>await axios.post("http://localhost:5000/api/login",value)


//locastorage

export const currentUser = async(authtoken)=>{

    console.log(authtoken)
  return  await axios.post("http://localhost:5000/api/current-user",
  {},
    {
        headers :{
            authtoken,
        }
    }
    )
}
export const currentAdmin = async(authtoken)=>{

    console.log(authtoken)
  return  await axios.post("http://localhost:5000/api/current-admin",
  {},
    {
        headers :{
            authtoken,
        }
    }
    )
}




