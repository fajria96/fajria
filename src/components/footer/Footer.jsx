import React from 'react'
import "./footer.css"
import Picture from "../../assets/footerPicture.jpg"

const Footer = () => {
  return (
      <section id="footer">
          <div className="footerText">
              <img src={Picture} alt="" className="" />
              <span>Let's work together!</span>
          </div>
          <div className="footerLink">
              <a href="#" className="">E-mail Me</a>
              <a href="#" className="">WhatsApp Me</a>
               <a href="#" className="">More Contact</a>
          </div>
          <div className="linkSocmed">
              <a href="#" className="">Instagram</a>
               <a href="#" className="">GitHub</a>
              <a href="#" className="">LinkedIn</a>
              <a href="#" className="">TikTok</a>
          </div>
    </section>
  )
}

export default Footer