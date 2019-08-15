import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Project from './Project';
import InViewAnimation from '../InViewAnimation';

const Projects = ({projects}) => (
    <InViewAnimation>
        <div className="container">
            <div className="page-header">
                <h1><span id="projects"></span>Projects</h1>
            </div>

            <div className="row display-flex">
                {projects.map(project => <Project key={project.node.id} project={project.node} />)}
            </div>
        </div>
    </InViewAnimation>
);

export default () => (
    <StaticQuery
        query={graphql`
            query {    
                allProjectsJson {
                    edges {
                        node {
                            id
                            title
                            imageUrl
                            technologies
                            description
                            gitHubUrl
                        }
                    }
                }
            }
        `}
        render={data => <Projects projects={data.allProjectsJson.edges} />}
    />
);