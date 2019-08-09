import React from 'react';
import Link from 'gatsby-link';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import FullDate from '../components/FullDate';

const BlogPage = ({ data }) => {
    return (
        <Layout>
            <div className="container">
                <SEO title="Rodney McQuain - Blog" />
                <div className="page-header">
                    <h1>Latest Posts</h1>
                </div>
                        
                <div className="margin-container upscale-container project-container col-xs-6 col-sm-4 col-md-3">
                    <div className="-curved-border padding-container">
                        {data.allMarkdownRemark.edges.map(post => {
                            const { node } = post;
                            const { title, date, path } = node.frontmatter;

                            return (
                                <div key={node.id}>
                                    <h2>{title}</h2>
                                    <FullDate date={date} />
                                    <p>{node.excerpt}</p>
                                    <Link className="btn" to={path}>
                                        <span>Read More</span>
                                    </Link>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </Layout>     
    )
};

export const pageQuery = graphql`
    query BlogIndexQuery {
        allMarkdownRemark {
            edges {
                node {
                    id
                    excerpt
                    frontmatter {
                        path
                        title
                        date
                        author
                    }
                }
            }
        }
    }
`

export default BlogPage;