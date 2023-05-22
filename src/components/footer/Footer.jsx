import React from 'react'
import "./footer.css"
import { VscGithub } from "react-icons/vsc";
import { CgMail } from "react-icons/cg";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";

const Footer = () => {
  return (
      <section id="footer">
          <div className="container">
        <h2 className="section__title" data-aos="fade-right">
          GET IN <span className="different">TOUCH</span>
        </h2>
        <div className="contactMain">
          <div
            className="contactcontainer"
            data-aos="fade-right"
          >
            <a
              href="https://www.linkedin.com/in/fajriatun-munawaroh09/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className="linkedin" />
            </a>
            <a
              href="https://github.com/fajria96"
              target="_blank"
              rel="noreferrer"
            >
              <VscGithub className="github" />
            </a>
            <a
              href="mailto:fajria.jobs@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <CgMail className="email" />
            </a>
            <a href="tel:+6285336154384" target="_blank" rel="noreferrer">
              <BsFillTelephoneFill className="phone" />
            </a>
          </div>
          <div className="mailNumber" data-aos="fade-right">
            <div>
              <span>
                <CgMail className="email" />
              </span>
              <span>
                <p>fajria.jobs@gmail.com</p>
              </span>
            </div>
            <div className="iconsCont">
              <span>
                <BsFillTelephoneFill className="phone" />
              </span>
              <span>
                <p>+628 533 615 4384</p>
              </span>
            </div>
          </div>
        </div>
         <div className="footerBox">
            <h5 className="footer">Made with <FiHeart color="red"/> by Fajria</h5>
          </div>
      </div>
    </section>
  )
}

export default Footer