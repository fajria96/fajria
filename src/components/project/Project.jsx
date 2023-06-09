import React from 'react'
import "./project.css";
import Picture from "../../assets/projectPictureSushi.png";
import PictureFashion from "../../assets/fashionCatalog.png";
import PictureCalculator from "../../assets/calculator_img.png";
import PictureTravel from "../../assets/touravel.jpg";

const Project = () => {
  return (
    <section id="project">
      <div className="allProjects">
        <h1 className="section__titledifferent">
          <span className="different">MY </span>PROJECTS
        </h1>
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
                Yukari Sushi House is a convenient website designed to allows
                users to easily place their favorite sushi orders online. It has
                dashboard for admin to manage order data. It also offers two
                payment methods: Cash on Delivery (COD) and PayPal. This website
                is built using Next.js and MongoDB.
              </p>
              <div className="btn_container">
                <a
                  href="https://delivery-food-yukari.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btns onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/fajria96/delivery-food-order.git"
                  target="_blank"
                  rel="noreferrer"
                >
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
                <img src={PictureFashion} alt="fashion" className="" />
              </div>
            </div>
            <div className="project_information">
              <h2>Fashion Catalog</h2>
              <p>
                This website showcases a collection of the latest clothing and
                fashion accessories. Through the implemented features, users can
                view related items that may be of interest to them. The product
                data displayed on this website is retrieved from FakeStoreAPI,
                providing a realistic experience when exploring the fashion
                catalog. Each product is accompanied by detailed information
                such as images, descriptions, categories, and prices. This
                website is built using Vue.js and CSS.
              </p>
              <div className="btn_container">
                <a
                  href="https://ecommerce-catalog-pink.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btns onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/fajria96/ecommerce-catalog.git"
                  target="_blank"
                  rel="noreferrer"
                >
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
                <img src={PictureTravel} alt="Touravel" className="" />
              </div>
            </div>
            <div className="project_information">
              <h2>Slicing Touravel UI Design</h2>
              <p>
                This website is the remarkable outcome of slicing the Figma
                design, bringing it to life with seamless interactivity and
                captivating visuals. Touravel is a modern and intuitive travel
                website designed to provide a seamless and enjoyable experience
                for travelers. It offers a wide range of features and
                functionalities to help users plan, book, and explore their
                dream destinations with ease. This website is built using HTML,
                CSS, and Javascript.
              </p>
              <div className="btn_container">
                <a
                  href="https://touravel.vercel.app//"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btns onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/fajria96/touravel.git"
                  target="_blank"
                  rel="noreferrer"
                >
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
                <img src={PictureCalculator} alt="calculator" className="" />
              </div>
            </div>
            <div className="project_information">
              <h2>BMI Calculator</h2>
              <p>
                This website allows users to input their weight and height, and
                then calculates and displays their BMI (Body Mass Index). The
                BMI is automatically calculated when the user clicks the
                "Calculate" button, and the result is shown on the page. The
                design and appearance of this website are customized using
                Javascript & CSS.
              </p>
              <div className="btn_container">
                <a
                  href="https://fajria96.github.io/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btns onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/fajria96/fajria96.github.io.git"
                  target="_blank"
                  rel="noreferrer"
                >
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
};

export default Project