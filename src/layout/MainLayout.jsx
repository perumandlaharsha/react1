import React from 'react'
import Header from '../pages/Header'
import AppRouter from '../routerDOM/AppRouter'

export default function MainLayout() {
  return (
    <div>
        <Header />
        <AppRouter />
    </div>
  )
}