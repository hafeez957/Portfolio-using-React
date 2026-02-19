import { useState } from 'react'
import './App.css'
import MainApp from './MainApp'
import Hero from './Components/Hero'
import Skills from './Components/Skills'
import Projects from './Components/Projects'
import Education from './Components/Education'
import Contact from './Components/Contact'
import Footer from './Components/Footer'

function App() {

  return (
    <>
      <MainApp/>
      <Hero/>
      <Skills/>
      <Projects/>
      <Education/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
