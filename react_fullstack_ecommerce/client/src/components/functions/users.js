import axios from "axios";

export const listUser = async(authtoken)=>{

    // console.log(authtoken)
  return  await axios.get("http://localhost:5000/api/users",
    {
        headers :{
            authtoken,
        }
    }
    )
}



export const changeStatus = async(authtoken,value)=>{

    // console.log(authtoken)
  return  await axios.post("http://localhost:5000/api/change-status",value,
    {
        headers :{
            authtoken,
        }
    }
    )
}

export const changeRole = async(authtoken,value)=>{

    return await axios.post("http://localhost:5000/api/change-role",value,
    {
        headers:{
            authtoken,
        }
    })
}


export const removeUser = async(authtoken,id)=>{

    // console.log(authtoken)
  return  await axios.delete("http://localhost:5000/api/users/" + id,
    {
        headers :{
            authtoken,
        }
    }
    )
}

export const resetPassword = async(authtoken,id,values)=>{

    // console.log(authtoken)
  return  await axios.put("http://localhost:5000/api/users/" + id,values,{
        headers :{
            authtoken,
        }
    }
    )
}

