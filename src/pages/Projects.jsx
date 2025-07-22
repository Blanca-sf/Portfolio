import React from 'react';
import ProjectCard from '../components/ProjectCard';
import './Projects.css'; // Asegúrate de que este archivo exista o elimínalo si no lo usas

const Projects = () => {
  const projectData = [
    {
      title: 'PrepUp',
      description: 'Practice interviews anywhere, on the go! PrepUp is a mobile app that prepares users to interviews in their field of study.',
      image: '/images/PrepUp.png', // ✅ desde public/images
    },
    {
      title: 'Sweetqueue',
      description: 'A web app that modernizes bakery management.',
      image: '/images/Sweetqueue.png', // ✅ desde public/images
    },
    {
      title: 'Falcon',
      description: 'Student web app with digital ID, class finder, and campus maps.',
      image: '/images/Falcon.png', // ✅ desde public/images
    },
  ];

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-list">
        {projectData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
