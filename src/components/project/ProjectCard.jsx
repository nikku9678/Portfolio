import React from 'react'
const ProjectCard = ({ tools, data, title, demo, github, Img }) => {

  return (
    <div className='card'>
        <div className='card-img'>
            <img src={Img} />
        </div>

        <div className="card-info">
            <h2>{title}</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, aliquid?</p>
        </div>

        <div className="btn">
            <button><a href={demo} target='_blank'>Live</a></button>
            <button><a href={github} target='_blank'>Github</a></button>
        </div>
      
    </div>
  )
}

export default ProjectCard
