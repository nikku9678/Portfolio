import React from 'react'
import './Resume.css'
const Resume = () => {
    const skill =['java','C++','C','Python','HTML5','CSS3','JavaSript','Bootstrap','React.js','Material UI','Node.js','Express.js','MongoDB']
    const soft_skill =['Teamwork']
  return (
    <div className='resume' id='resume'>
      
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
                    <p>2018-2020</p>
                    <p>A.N College Patna</p>
                    <p>B.Tech in Computer Science and Engineering</p>
                </div>
                <div>
                    <p>2016-2018</p>
                    <p>S S Sansthan Ganguli Manigachi Darbhanga</p>
                 
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
                    soft_skill.map((skill)=>{
                        return(
                            <p>{skill}</p>
                        )
                    })
                }
            </div>
        </div>
      </div>

      <div className="whatIdo">
        <div>
            <h2>What I Do</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit explicabo a nostrum mollitia maxime nesciunt id! Reprehenderit nam pariatur id.</p>
        </div>
      </div>
    </div>
  )
}

export default Resume
