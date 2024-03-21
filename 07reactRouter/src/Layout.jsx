import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
        <Header />
        {/* render dynamically kepping other things same */}
        <Outlet />
        <Footer />
    </>
  )
}

export default Layout