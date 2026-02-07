import React from 'react'
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import NavBar from '../NavbarContainer/Navbar';


const Layout = () => {
  return (
    <div>
      <Toaster/>
      <NavBar/>
    <Outlet />
    </div>
  )
}

export default Layout;
