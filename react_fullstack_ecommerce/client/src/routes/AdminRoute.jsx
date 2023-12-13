import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import LoadingToRedirect from './LoadingToRedirect'
import { currentAdmin } from '../components/functions/auth'

const AdminRoute = ({ children }) => {
    //เลือกรับค่าจากredux
    const { user } = useSelector((stete) => ({ ...stete }))
    // console.log(user.role,"role")

    const [ok, setOK] = useState(false)

    useEffect(() => {
        if(user && user.token){
            currentAdmin(user.token)
            .then(res=>{
                console.log(res)
                setOK(true)
            })
            .catch(err=>{
                console.log(err)
                setOK(false)
            })
        }
    }, [user])
    return ok
        ? children
        : <LoadingToRedirect />
}

export default AdminRoute