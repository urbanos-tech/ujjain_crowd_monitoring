import React from 'react'
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/SideBar'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div className='w-full flex min-h-[100vh]'>
        <Sidebar></Sidebar>
        
        <div className='w-full'>
        <Navbar/>
            <Outlet></Outlet>
        </div>
    </div>
  )
}

export default Layout