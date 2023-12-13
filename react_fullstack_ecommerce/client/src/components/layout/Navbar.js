// import React from 'react'
// import { useState } from 'react';
// import { PlusSquareOutlined ,HomeOutlined,LoginOutlined,LogoutOutlined  } from '@ant-design/icons';
// import { Menu } from 'antd';
// import {  useNavigate} from 'react-router-dom';
// import { useDispatch ,useSelector } from 'react-redux';






// const items = [
//     {
//         label: "Home",
//         key: 'home',
//         icon: <HomeOutlined />,
      
//     },
//     {
//         label: "Login",
//         key: 'mail',
//         icon: <LoginOutlined />,
      
//     },
//     {
//         label: "Register",
//         key: 'app',
//         icon:<PlusSquareOutlined /> ,
//         // disabled: true,
//     },
//     {
//         label: "logout",
//         key: 'LOGOUT',
//         icon: <LogoutOutlined />,
//         // disabled: true,
//     },
    
    
// ];

// const Navbar = () => {
//     const navigate = useNavigate()

//     const dispathc = useDispatch()
//     const user = useSelector((state)=>({...state}))

//     console.log("user",user)

//      const logout = ()=>{
//         dispathc({type:"LOGOUT",
//         payload:null
//         })
//         navigate('/')
//         // eslint-disable-next-line
//     }
 
    
//     const [current, setCurrent] = useState('mail');

//     const onClick = (e) => {
//         console.log('click ', e);
//         setCurrent(e.key);
//         if(e.key==="mail"){
//          navigate('/login')
//         }else if(e.key==="LOGOUT"){
//             logout()
//         }else if(e.key==="home"){
//             navigate('/')
//         }
//         else{
//             console.log(e.key)
//             navigate('/register')
//         }
//       };
//     return (
//         <div><Menu  
//         style={{ flex: "auto", minWidth: 0,  order:2, }}
//         onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
               
//         </div>
//     )
// }

// export default Navbar

import React from "react";
import { Menu } from "antd";
import {
//   MailOutlined,
//   AppstoreOutlined,
//   SettingOutlined,
  HomeOutlined,
  UserAddOutlined,
  LoginOutlined,
  LogoutOutlined,
  DownOutlined
} from "@ant-design/icons";

// Router
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {
  const { SubMenu } = Menu;

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => ({ ...state }));
  console.log("user Navbar", user);

  const logout = () => {
    dispatch({
      type: "LOGOUT",
      payload: null,
    });
    navigate("/");
  };
  return (
    <Menu mode="horizontal">
      <Menu.Item key="home" icon={<HomeOutlined />}>
        {/* <a href="" ></a>*/}
        <Link to="/">Home</Link>
      </Menu.Item>

      {user && (
        <>
          {/* {user.username} */}
          <SubMenu
            style={{ float: "right" }}
            key="SubMenu"
            icon={<DownOutlined />}
            title={user.username}
          >
            <Menu.Item 
            icon={<LogoutOutlined />}
            key="setting:1" onClick={logout}>
              Logout
            </Menu.Item>

          </SubMenu>
        </>
      )}

      {!user && (
        <>
          <Menu.Item
            key="mail"
            style={{ float: "right" }}
            icon={<LoginOutlined />}
          >
            {/* <a href="" ></a>*/}
            <Link to="/login">Login</Link>
          </Menu.Item>

          <Menu.Item
            style={{ float: "right" }}
            key="register"
            icon={<UserAddOutlined />}
          >
            <Link to="/register">Register</Link>
          </Menu.Item>
        </>
      )}
    </Menu>
  );
};

export default Navbar;