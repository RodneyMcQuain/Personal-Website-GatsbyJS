import React from 'react';
import Img from "gatsby-image";
import Icon from '../Icon';

const Project = ({ project }) => (
    <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 project-container margin-container upscale-container">
        <div className="-curved-border -layered-box-shadow">
            <Img fluid={project.image.childImageSharp.fluid} className="container-top-image" alt={`${project.title} project`} />
            <div className="padding-container">
                <ul className="language-tag">
                    {project.technologies.map(technology => <li key={technology}>{technology}</li>)}
                </ul>
                <h2 className="-top-margin">{project.title}</h2>
                <p>{project.description}</p>
                <a className="btn" href={project.gitHubUrl} aria-label={`Go to GitHub for my ${project.title} project`}>
                    <Icon icon="fa fa-github" /> GitHub
                </a>
            </div>
        </div>
    </div>
);

export default Project;