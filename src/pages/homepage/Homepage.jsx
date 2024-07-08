import React from 'react'
import Home from '../../components/home/Home'
import About from '../../components/about/About'
import Project from '../../components/project/Project'
import Resume from '../../components/resume/Resume'
import Navbar from '../../components/navbar/Navbar'
import Contact from '../../components/contact/Contact'
const Homepage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div id='home'><Home/></div>
      <div id='about'><About/></div>
      <div id='project'><Project/></div>
      <div id='cobtact'><Contact/></div>
      {/* <Resume/> */}
    </div>
  )
}

export default Homepage
