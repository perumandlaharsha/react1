import React, { useState } from 'react'
import Header from '../pages/Header'
import AppRouter from '../routerDOM/AppRouter'
import Footer from '../pages/Footer'
import { useLocation } from 'react-router-dom'
import { Banner } from '../Banner/Banner'



export default function MainLayout() {
 
  let location=useLocation()
  let hidePath=['/','/signup']
  let componentPath=hidePath.includes(location.pathname)
  return (
    <div>
        {!componentPath && <Header />}
        <AppRouter />
        {!componentPath && <Footer />}

       
    </div>
  )
}