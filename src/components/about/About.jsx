import React from 'react'
import "./about.css"
import profilePic from "../../assets/footerPicture.jpg"

const About = () => {
  return (
    <section className="about" id="about">
      <div className="aboutTypo">
        <span className="aboutTypoText">about me</span>
        <span className="aboutTypoText">about me</span>
        <span className="aboutTypoText">about me</span>
      </div>
      <div className="aboutContent">
        <div className="section" data-aos="fade-right">
          <div className={"introduction "}>
            <div className="introduction_logocontainer">
              <img src={profilePic} alt="Images" />
            </div>
            <div className="introduction_datacontainer">
              <h4>
                Hello Everyone, My name is{" "}
                <span className="different">Fajriatun Munawaroh</span> and I am
                from{" "}
                <span className="different">
                  {" "}
                  Kendal, Central Java (Indonesia)
                </span>
                . I am Diploma of Informatics Management from{" "}
                <span className="different">
                  Academy of Informatics & Computer Management JTC, Semarang
                </span>
                . Then I joined full stack MERN development course by{" "}
                <span className="different">Eduwork.</span> <br /> I brings a keen eye for{" "}
                <span className="different">design</span> and{" "}
                <span className="different">aesthetics</span> to my work. I like
                to build <span className="different">dynamic</span> and{" "}
                <span className="different">responsive</span> web applications
                that are both beautiful and functional. Whether you're looking
                for a custom website, a web application, or an e-commerce
                platform, I has the skills and experience to deliver a
                good-quality product that meets your needs. Explore{" "}
                <span className="different">my portofolio</span> today to see
                some of the amazing projects I've created and get a glimpse of
                my talent and creativity in action.
              </h4>
              <button className="btnResume" onClick={() => {window.open("https://docs.google.com/document/d/1saKGPpx_QzuHSg_jUnVo4Ds5yncdmNOa/edit?usp=share_link&ouid=110836129932401095539&rtpof=true&sd=true")}}>Resume</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About