import React from 'react';
import Project from './Project';
import projects from '../../data/projects';
import InViewAnimation from '../InViewAnimation';

const Projects = () => (
    <InViewAnimation>
        <div className="container">
            <div className="page-header">
                <h1><span id="projects"></span>Projects</h1>
            </div>

            <div className="row display-flex">
                {projects.map(project => <Project key={project.title} project={project} />)}
            </div>
        </div>
    </InViewAnimation>
);

export default Projects;