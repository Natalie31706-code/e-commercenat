import React from 'react'
import Nav from '../Nav/nav'
import Footer from '../Footer/footer'
import { Outlet } from 'react-router-dom'

export default function layout() {
  return (
    <div>
        <Nav/>

        <Outlet/>

        <Footer/>
    </div>
  )
}
