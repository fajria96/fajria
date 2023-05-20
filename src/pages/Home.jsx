import React from 'react'
import LoaderHome from '../components/loaderHome/LoaderHome'
import Navbar from "../components/navbar/Navbar";
import Hero from '../components/hero/Hero';
import About from "../components/about/About";
import Project from "../components/project/Project";
import Service from "../components/service/Service";
import Footer from "../components/footer/Footer";

const Home = () => {
  return (
    <div>
      <LoaderHome />
      <Navbar />
      <Hero />
      <About />
      <Project />
      <Service />
      <Footer />
    </div>
  )
}

export default Home