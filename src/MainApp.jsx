import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Education from './Components/Education'
import Skills from './Components/Skills'
import Projects from './Components/Projects'
import Contact from './Components/Contact'

const MainApp = () => {
  return (
    <>
      <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route element={<Navbar/>} path='/nav'/>
                <Route element={<Education/>} path='/qualification'/>
                <Route element={<Skills/>} path='/skills'/>
                <Route element={<Projects/>} path='/projects'/>
                <Route element={<Contact/>} path='/contact'/>
            </Routes>
      </BrowserRouter>
    </>
  )
}

export default MainApp
