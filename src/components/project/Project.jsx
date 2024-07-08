import React, { useState } from 'react';
import './Project.css';
import ProjectCard from './ProjectCard';
import data from './ProjectData';

const Project = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredData = selectedCategory === 'All'
    ? data
    : data.filter(project => project.category === selectedCategory);

  return (
    <div className='project'>
      {/* <div className='hr'></div> */}
      <div className='top'>
        <span className='hr-one'></span>
        <span><h1>Projects</h1></span>
        <span className='hr-two'></span>
        
      </div>
      <div className="categories">
          <button onClick={() => handleCategoryChange('All')}>All</button>
          <button onClick={() => handleCategoryChange('Frontend')}>Frontend</button>
          <button onClick={() => handleCategoryChange('Backend')}>Backend</button>
        </div>
      <div className="project-card">
        {filteredData.map((project, index) => (
          <div key={index} className='pp'>
            <ProjectCard
              Img={project.Img}
              id={project.id}
              tools={project.tools}
              title={project.title}
              demo={project.demo}
              github={project.github}
              data={project.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
