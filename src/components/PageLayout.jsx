import React from 'react'
import Home from '../Pages/Home'
import { Outlet } from 'react-router-dom'
import { Header } from './header/header'
import Footer from './footer/footer'
function PageLayout() {
  return (
    <>
      <Header/>
      <Outlet />
      <footer/>
    </>

  )
}

export default PageLayout