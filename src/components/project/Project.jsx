import React from 'react'
import "./project.css";
import Picture from "../../assets/projectPictureSushi.png";

const Project = () => {
  return (
    <section id="project">
      <div className="projectDesign">
        <div className="projectTypo">
          <span className="">project</span>
          <span className="">project</span>
          <span className="">project</span>
        </div>
        <span className="projectOpening">Featured Projects</span>
      </div>
      <div className="projectContainerMain">
        <div className="projectMain">
          <img src={Picture} alt="" className="projectImage" />
          <div className="projectText">
            <span className="projectNumber">01.</span>
            <div className="projectTitle">
              <span className="">Yukari Japanese Sushi House</span>
              <span className="">Lorem ipsum dolor sit amet lore</span>
            </div>
          </div>
        </div>
        <div className="projectLink">
          <a href="https://delivery-food-yukari.vercel.app" className="projectLinked">
            <i class="uil uil-arrow-up-left"></i>
            <span>Online Preview</span>
          </a>
          <a href="https://github.com/fajria96/delivery-food-order.git" className="projectLinked">
            <i class="uil uil-arrow-up-left"></i>
            <span>Github Preview</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Project