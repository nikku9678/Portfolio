import React from 'react'
import Home from '../../components/home/Home'
import About from '../../components/about/About'
import Project from '../../components/project/Project'
import Resume from '../../components/resume/Resume'
const Homepage = () => {
  return (
    <div>
      <Home/>
      <About/>
      {/* <Resume/> */}
      <Project/>
    </div>
  )
}

export default Homepage
