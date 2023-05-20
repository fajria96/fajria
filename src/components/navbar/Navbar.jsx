import React from 'react'
import "./navbar.css"

const Navbar = () => {
  return (
      <nav>
          <div className="containerNav">
              <div className="navName">
                  <span>Hi, my name is</span>
                  <span>Fajriatun Munawaroh</span>
              </div>
              <div className="navMenuRight">
                  <a href="#home">Home</a>
                  <a href="#about">About</a>
                  <a href="#project">Project</a>
              </div>
              <div className="navMenuButton">
                   <a href="#service">Service</a>
                  <a href="#footer">Contact</a>
            </div>
          </div>
    </nav>
  )
}

export default Navbar