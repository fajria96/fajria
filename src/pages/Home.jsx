import React from 'react'
import LoaderHome from '../components/loaderHome/LoaderHome'
import Navbar from "../components/navbar/Navbar";
import Hero from '../components/hero/Hero';
import About from "../components/about/About";


const Home = () => {
  return (
    <div>
      <LoaderHome />
      <Navbar />
      <Hero />
      <About />
    </div>
  )
}

export default Home