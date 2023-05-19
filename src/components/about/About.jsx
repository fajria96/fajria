import React from 'react'
import "./about.css"

const About = () => {
  return (
    <section className="about" id="about">
      <div className="aboutTypo">
        <span className="aboutTypoText">about me</span>
        <span className="aboutTypoText">about me</span>
        <span className="aboutTypoText">about me</span>
      </div>
      <div className="aboutContent">
        <h1 className="aboutInfo">
          Hello, I'm Fajria, a passionate Frontend Engineer with a focus on Javascript tech stack such as React and Next.
        </h1>
        <a className="aboutButton" href="#">Read More About Me<i class="uil uil-arrow-up-right"></i></a>
      </div>
    </section>
  )
}

export default About