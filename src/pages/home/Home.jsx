import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import './Home.css'
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";
const Home = () => {
  return (
     <div>
      <section className="home" id="home">
        <div className="home-img" id="shrink">
          {/* <div className='border'>

          </div> */}
          <img src={"nikku_image.jpg"} alt="" />
        </div>
        <div className="home-text">
          <span>Hi, Myself</span>
          <h1>Nikku Kumar Das</h1>
          <div>
            <span> </span>
            <span id="type-writer"
             
            >
              <Typewriter
                words={["Frontend Developer","Software Engineer","Tech Enthusiast"]}
                loop={true}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={800}
              />
            </span>
          </div>
          <h2>
            <a
              href=""
              className="typewrite"
              data-period="500"
              data-type='[ "Software Developer.", "Frontend Developer.", "I Love Coding &hearts;", "I Love to Develop." ]'
            >
              <span className="wrap"></span>
            </a>
          </h2>
          {/* <p>
            <h2 style={{ fontWeight: "bold;", fontSize:'1.2rem'}}>Welcome to my Portfolio.</h2>
            I am a Frontend developer, Programming enthusiast. <br />
      
          </p> */}

          <ul>
            <li>
              <a href="https://www.instagram.com/_nikku_9678/" target="_blank">
                <img src={"insta.png"} alt="" />
              </a>
            </li>
            <li>
              <a href="https://github.com/nikku9678" target="_blank">
                <img src={"github.png"} alt="" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/nikku-kumar-das-b6955121b/"
                target="_blank"
              >
              
                <img src={"linkedin.png"} alt="" />
              </a>
            </li>
          </ul>
          <div className="home-links">
          <a
            href="https://drive.google.com/file/d/1dpMWliByMLFDaC9bBiIBVxYCdJua70gP/view?usp=drive_link"
            target="_blank"
            className="btn"
          >
            Hire me
          </a>
          <Link
            to="/contact"
           
            className="btn"
          >
            Contact us
          </Link>
          </div>
        </div>
      </section>
    </div>

  )
}

export default Home
