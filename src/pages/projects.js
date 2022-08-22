import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Project from '../components/Projects/Project';
import Layout from '../components/Layout/layout';
import SEO from '../components/Shared/SEO';
import ContactMe from '../components/Shared/ContactMe';
import HeaderContentLayout from '../components/Layout/HeaderContentLayout';

const Projects = ({ projects, blogPostPathToMetadata }) => (
    <Layout>
        <SEO title="Projects" />
        <HeaderContentLayout title="Projects">
            <div className="row display-flex">
                {projects.map(({ node: project }) => <Project key={project.id} project={{...project, associatedBlogPostMetadata: blogPostPathToMetadata.get(project.associatedBlogPostPath)}} />)}
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
                                    fluid(maxWidth: 500, quality: 100) {
                                        ...fluidImage
                                    }
                                }
                            }
                            technologies
                            description
                            gitHubUrl
                            siteUrl
                            associatedBlogPostPath
                        }
                    }
                }
                allMarkdownRemark {
                    nodes {
                        frontmatter {
                            path
                            title
                        }
                    }
                }
            }
        `}
        render={data => <Projects projects={data.allProjectsJson.edges} blogPostPathToMetadata={getBlogPostPathToMetadata(data.allMarkdownRemark.nodes)} />}
    />
);

const getBlogPostPathToMetadata = blogPosts => {
    var map = new Map();
    for (const blogPost of blogPosts) map.set(blogPost.frontmatter.path, blogPost.frontmatter);
    return map;
}

export default ProjectsStaticQuery;