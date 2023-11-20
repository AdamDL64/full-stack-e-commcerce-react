import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import React,{useState,useEffect} from "react";
import Login from "./components/pages/auth/Login";
import Register from "./components/pages/auth/Register";

import { Routes, Route } from 'react-router-dom';

import { useDispatch } from 'react-redux'

//admin
import HomeAdmin from "./components/pages/admin/HomeAdmin";


// //user
import HomeUser from "./components/pages/user/HomeUser"
import { currentUser } from "./components/functions/auth";

function App() {

  const dispatch = useDispatch()

//ดึงค่าจากlocastorageส่งไปยังหลังบ้าน
const idtoken = localStorage.token;
if(idtoken){
  currentUser(idtoken).then((res)=>{
    console.log(res)

    dispatch({type:"LOGIN",
    payload:{
      token:idtoken,
      username:res.data.username,
      role:res.data.role
    }
  })
  }).catch((err)=>{
    console.log(err)
  })
}



  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        <Route path="/admin/index" element={<HomeAdmin />} />
        <Route path="/user/index" element={<HomeUser />} />
      </Routes>
    </div>
  );
}

export default App;
