import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Project from '../components/Projects/Project';
import Layout from '../components/Layout/layout';
import SEO from '../components/seo';
import ContactMe from '../components/Contact/ContactMe';
import HeaderContentLayout from '../components/Layout/HeaderContentLayout';

const Projects = ({ projects }) => (
    <Layout>
        <SEO title="Projects" />
        <HeaderContentLayout title="Projects">
            <div className="row display-flex">
                {projects.map(project => <Project key={project.node.id} project={project.node} />)}
            </div>
            <ContactMe />
        </HeaderContentLayout>
    </Layout>
);

const ProjectsStaticQuery = () => (
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

export default ProjectsStaticQuery;