import React from 'react'
import { NavLink } from 'react-router-dom'
import './nav.css'

const Navbar = () => {
  return (
    < >
      <div className="navbar">
        <div className="nav">
          <div className="logo"><h1>HAFEEZ ULLA</h1></div>
        <div className="links">
          <ul>
          <li><NavLink className={'link'} to='/'>Home</NavLink></li>
          <li><NavLink className={'link'} to='/skills'>Skills</NavLink></li>
          <li><NavLink className={'link'} to='/qualification'>Qualification</NavLink></li>
          <li><NavLink className={'link'} to='/projects'>Projects</NavLink></li>
          <li><NavLink className={'link'} to='/about'>About</NavLink></li>
          <li><NavLink className={'link'} to='/contact'>Contact me</NavLink></li>
        </ul>
        </div>
        </div>
      </div>
    </ >
  )
}

export default Navbar
