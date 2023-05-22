import React from 'react'
import "./service.css"
import { motion, useScroll, useTransform } from "framer-motion";
import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiHtml5,
  SiExpress,
  SiTailwindcss,
  SiNetlify,
} from "react-icons/si";
import { DiCss3, DiMongodb } from "react-icons/di";
import { SiJavascript, SiNextdotjs } from "react-icons/si";
import { VscGithub } from "react-icons/vsc";
import { BsBootstrap } from "react-icons/bs";

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
          <div className="techsection" >
          <div>
            <SiJavascript />
            <h5>Javascript</h5>
          </div>
          <div>
            <SiHtml5 />
            <h5>HTML</h5>
          </div>
          <div>
            <DiCss3 />
            <h5>CSS</h5>
          </div>
          <div>
            <FaReact />
            <h5>React</h5>
          </div>
          <div>
            <SiNextdotjs />
            <h5>Nextjs</h5>
          </div>
          <div>
            <DiMongodb />
            <h5>MongoDb</h5>
          </div>
          <div>
            <SiExpress />
            <h5>Express</h5>
          </div>
          <div>
            <BsBootstrap />
            <h5>Bootstrap</h5>
          </div>
          <div>
            <FaNodeJs />
            <h5>Heroku</h5>
          </div>
          <div>
            <VscGithub />
            <h5>Github</h5>
          </div>
          <div>
            <SiNetlify />
            <h5>Netlify</h5>
          </div>
          <div>
            <SiTailwindcss />
            <h5>TailwindCSS</h5>
          </div>
        </div>
    </section>
  )
}

export default Service