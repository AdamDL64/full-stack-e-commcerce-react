import React from 'react'
import { useState } from 'react';
import { AppstoreOutlined, MailOutlined, } from '@ant-design/icons';
import { Menu } from 'antd';
import { Navigate} from 'react-router-dom';
import { useDispatch } from 'react-redux';


import { Link } from 'react-router-dom'


const items = [
    {
        label: <Link to={'/login'} >Login</Link>,
        key: 'mail',
        icon: <MailOutlined />,
    },
    {
        label: <Link to={'register'}>Register</Link>,
        key: 'app',
        icon: <AppstoreOutlined />,
        // disabled: true,
    },
    {
        label: <Link to={'/'} >LogOut</Link>,
        key: 'app',
        icon: <AppstoreOutlined />,
        // disabled: true,
    },
    
    
];
//  const logout = ()=>{
//         dispathc({type:"LOGOUT"})
//     }
const Navbar = () => {

    const dispathc = useDispatch()

 
    
    const [current, setCurrent] = useState('mail');

    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
        if(e.key==="mail"){
           
        }else{
            
        }
      };
    return (
        <div><Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} /></div>
    )
}

export default Navbar