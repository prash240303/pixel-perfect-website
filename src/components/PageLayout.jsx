import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from "./Header"
import Navbar from './Navbar'
function PageLayout() {
  return (
    <>
      <Header />
      <Navbar />
      <Outlet />
    </>

  )
}

export default PageLayout