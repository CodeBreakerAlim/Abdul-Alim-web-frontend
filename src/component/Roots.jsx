import React from 'react'
import Footer from './Footer'
import Navbar from '../pages/Navbar'
import { Outlet } from 'react-router-dom'

function Roots() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Roots