import React from 'react'
import "./service.css"
import { motion, useScroll, useTransform } from "framer-motion";

const Service = () => {
    const { scrollYProgress } = useScroll();
    const engineer = useTransform(scrollYProgress, [0, 1], [0, 600]);
    const developer = useTransform(scrollYProgress, [0, 1], [0, 400]);
    const reactNext = useTransform(scrollYProgress, [0, 1], [0, 200]);
  return (
      <section id="service">
          <div className="serviceTypo">
              <motion.span style={{x: engineer}}>Frontend{" "}<span className="outlineTypo">Engineer</span> - Frontend{" "}
                  <span className="outlineTypo">Engineer</span> - Frontend{" "}
                  <span className="outlineTypo">Engineer</span> -{" "}
              </motion.span>
              <motion.span style={{x: developer}}>Frontend{" "}<span className="outlineTypo">Developer</span> - Frontend{" "}
                  <span className="outlineTypo">Developer</span> - Frontend{" "}
                  <span className="outlineTypo">Developer</span> -{" "}
              </motion.span>
              <motion.span style={{x: reactNext}}>{" "}
                  <span className="outlineTypo">React & Next</span> Developer -{" "}
                  <span className="outlineTypo">React & Next</span> Developer -{" "}
                  <span className="outlineTypo">React & Next</span> Developer -{" "}
              </motion.span>
          </div>
          <div className="serviceStack">
              <div className="serviceTechStack">
              <span>HTML</span>
              <span>CSS</span>
              <span>Javascript</span>
              <span>React</span>
              <span>Next</span>
          </div>
           <div className="serviceTechStack">
              <span>Tailwind</span>
              <span>Node</span>
              <span>Figma</span>
              <span>Express</span>
          </div>
          </div>  
    </section>
  )
}

export default Service