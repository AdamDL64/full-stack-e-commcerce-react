import React from 'react'
import { Link } from 'react-router-dom'


const MenubarAdmin1 = () => {
  return (
    <nav className='nav flex-column'>
        <li className='nav-item'>
          <Link to={'/admin/index'}>
          แดชบอร์ด
          </Link>
          </li>


        <li className='nav-item'>
          <Link to={"/admin/manage-admin"}>
          จัดการผู้ใช้
          </Link>
          </li>
    </nav>
  )
}

export default MenubarAdmin1