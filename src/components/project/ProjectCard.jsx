import React from 'react'
const ProjectCard = ({id, tools, data, title, demo, github, Img }) => {

  return (
    <div className='card'>
        <div className='card-img'>
            <img src={Img} />
        </div>

        <div className="card-info">
            <h2>{title}</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, aliquid?</p>
        </div>

        <div className="card-bottom">
            <div className='p-no'>
            <h2>{id}</h2>
            </div>

            <div className='btn'>
            <button><a href={demo} target='_blank'><i class="fa-solid fa-arrow-right"></i></a></button>
            <button><a href={github} target='_blank'><i class="fa-solid fa-arrow-right"></i></a></button>
            </div>
        </div>
      
    </div>
  )
}

export default ProjectCard
