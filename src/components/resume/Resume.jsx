import React from 'react'
import './Resume.css'
const Resume = () => {
    const skill =['java','C++','C','Python','HTML5','CSS3','JavaSript','CSS3','CSS3','CSS3','CSS3','CSS3','CSS3','CSS3','CSS3','CSS3']
  return (
    <div className='resume'>
      
       <div className='resume-heading'>
       <h1>Resume</h1>
       </div>
        
        <div className='resume-info'>
        <div className="resume-left">
            <div className="heading">
                <h2>Education</h2>
            </div>
            <div className='content'>
                <div>
                    <p>2021-2025</p>
                    <p>Netaji Subhash Enginnering College Kolakta</p>
                    <p>B.Tech in Computer Science and Engineering</p>
                </div>
                <div>
                    <p>2021-2025</p>
                    <p>Netaji Subhash Enginnering College Kolakta</p>
                    <p>B.Tech in Computer Science and Engineering</p>
                </div>
            </div>
        </div>
        <div className="resume-right">
        <div className="heading">
                <h2>Experience</h2>
            </div>
            <div className='content'>
            <div>
                    <p>2021-2025</p>
                    <p>Netaji Subhash Enginnering College Kolakta</p>
                    <p>B.Tech in Computer Science and Engineering</p>
                </div>
                <div>
                    <p>2021-2025</p>
                    <p>Netaji Subhash Enginnering College Kolakta</p>
                    <p>B.Tech in Computer Science and Engineering</p>
                </div>
            </div>
        </div>
        </div>
      
      <div className='skills'>
        <div className="work-skills">
            <div className="name">
                <h2>Work Skills</h2>
            </div>
            <div className="work-skill-name">
                {
                    skill.map((skill)=>{
                        return(
                            <p>{skill}</p>
                        )
                    })
                }
            </div>

        </div>
        <div className="soft-skills">
        <div className="name">
                <h2>Soft Skills</h2>
            </div>
            <div className="work-skill-name">
                {
                    skill.map((skill)=>{
                        return(
                            <p>{skill}</p>
                        )
                    })
                }
            </div>
        </div>
      </div>
    </div>
  )
}

export default Resume
