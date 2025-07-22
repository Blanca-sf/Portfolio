import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ title, description, image }) => {
    return (
        <div className="project-card">
            <img src={image} alt={`${title} screenshot`} />
            <div className="project-content">
                <h3>{title}</h3>
                <p>{description}</p>
                <button>More</button>
            </div>
        </div>
    );
};

export default ProjectCard;
