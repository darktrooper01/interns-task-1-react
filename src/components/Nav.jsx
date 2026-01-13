import React from 'react'
import "./Nav.css"

function Nav() {
  return (
    <div>
         <nav className="navbar">
    <div className="logo">V</div>

    <ul className="nav-links">
      <li>Home</li>
      <li>About</li>
      <li>Services</li>
      <li>Team</li>
    </ul>
  </nav>
    </div>
  )
}

export default Nav