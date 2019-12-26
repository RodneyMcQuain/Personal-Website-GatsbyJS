import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Project from '../components/Projects/Project';
import InViewAnimation from '../components/InViewAnimation';
import Layout from '../components/Layout/layout';
import SEO from '../components/seo';

const Projects = ({projects}) => (
    <Layout>
        <InViewAnimation>
            <SEO title="Projects" />
            <div className="container">
                <div className="page-header">
                    <h1 id="projects">Projects</h1>
                </div>

                <div className="row display-flex">
                    {projects.map(project => <Project key={project.node.id} project={project.node} />)}
                </div>
            </div>
        </InViewAnimation>
    </Layout>
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
                            image {
                                childImageSharp {
                                    fluid {
                                        ...GatsbyImageSharpFluid
                                    }
                                }
                            }
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