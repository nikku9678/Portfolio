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
      <div className='top'>
        <h1>Projects</h1>
        
      </div>
      <div className="categories">
          <button onClick={() => handleCategoryChange('All')}>All</button>
          <button onClick={() => handleCategoryChange('Frontend')}>Frontend</button>
          <button onClick={() => handleCategoryChange('Backend')}>Backend</button>
        </div>
      <div className="project-card">
        {filteredData.map((project, index) => (
          <div key={index}>
            <ProjectCard
              Img={project.Img}
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
