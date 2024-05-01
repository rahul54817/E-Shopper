import React, { useEffect } from 'react'
import TopBar from '../Components/TopBar'
import NavBar from '../Components/NavBar'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/Footer'



const Layout = () => {
  

  return (
    <>
        <TopBar />
        <NavBar />
        <Outlet />
        <Footer />
    </>
  )
}

export default Layout
