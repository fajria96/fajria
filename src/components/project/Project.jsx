import React from 'react'
import "./project.css";
import Picture from "../../assets/projectPictureSushi.png";

const Project = () => {
  return (
    <section id="project">
        <div className="allProjects">
          <h1 className="section__titledifferent"><span className="different">MY </span>PROJECTS</h1>
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img src={Picture} alt="yukari" className="" />
                </div>
              </div>
              <div className="project_information">
                <h2>Yukari Sushi House</h2>
                <p>
                  BMI Calculator is simple web app that allows you to calculate
                  your body mass index and show the result of your weight is
                  ideal, underweight, or overweight BMI Calculator is simple web app that allows you to calculate
                  your body mass index and show the result of your weight is
                  ideal, underweight, or overweight
                </p>
                <div className="btn_container">
                  <a href="https://delivery-food-yukari.vercel.app/" target="_blank" rel="noreferrer">
                    <span type="button" className="btns onbt">
                      See this Live
                    </span>
                  </a>
                  <a href="https://github.com/fajria96/delivery-food-order.git" target="_blank" rel="noreferrer">
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img src={Picture} alt="yukari" className="" />
                </div>
              </div>
              <div className="project_information">
                <h2>Yukari Sushi House</h2>
                <p>
                  BMI Calculator is simple web app that allows you to calculate
                  your body mass index and show the result of your weight is
                  ideal, underweight, or overweight
                </p>
                <div className="btn_container">
                  <a href="https://delivery-food-yukari.vercel.app/" target="_blank" rel="noreferrer">
                    <span type="button" className="btns onbt">
                      See this Live
                    </span>
                  </a>
                  <a href="https://github.com/fajria96/delivery-food-order.git" target="_blank" rel="noreferrer">
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
}

export default Project