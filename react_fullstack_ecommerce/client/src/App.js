import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import React from "react";
import Login from "./components/pages/auth/Login";
import Register from "./components/pages/auth/Register";

import { Routes, Route } from 'react-router-dom';

import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useDispatch } from 'react-redux'
import 'antd/dist/antd.min.css'     

//admin
import HomeAdmin from "./components/pages/admin/Homeadmin";
import ManageAdmin from "./components/pages/admin/ManageAdmin";

// //user
import HomeUser from "./components/pages/user/HomeUser"
import { currentUser } from "./components/functions/auth";


// Routes
import UserRoute from "./routes/UserRoute";
import AdminRoute from "./routes/AdminRoute";

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
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        <Route path="/admin/index" 
        element=
        {<AdminRoute>
          <HomeAdmin />
          </AdminRoute>
          
          } />

<Route path="/admin/manage-admin" 
        element=
        {<AdminRoute>
          <ManageAdmin />
          </AdminRoute>
          
          } />

        <Route path="/user/index" 
        element={
        <UserRoute><HomeUser /></UserRoute>
        } />

      </Routes>
    </div>
  );
}

export default App;
