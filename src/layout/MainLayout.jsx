import React from 'react'
import Header from '../pages/Header'
import { Team } from '../pages/Team'
import { Projects } from '../pages/Projects'
import { Calendar } from '../pages/Calendar'
import { Product } from '../pages/Product'

export default function MainLayout() {
  return (
    <div>
        <Header />
        <Team />
        <Projects />
        <Calendar />
        <Product />
    </div>
  )
}