import React from 'react'
import { useSelector } from 'react-redux'
import LoadingToRedirect from './LoadingToRedirect'

const UserRoute = ({children}) => {
    //เลือกรับค่าจากredux
    const {user} = useSelector((stete)=>({...stete}))
    // console.log(user.role,"role")
  return user && user.token ? children : <LoadingToRedirect/>
}

export default UserRoute