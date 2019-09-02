import React from 'react';
import Link from 'gatsby-link';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import FullDate from '../components/FullDate';
import InViewAnimation from '../components/InViewAnimation';
import Img from 'gatsby-image';

const BlogPage = ({ data }) => (
    <Layout>
        <InViewAnimation>
            <div className="container">
                <SEO title="Blog" />
                <div className="page-header">
                    <h1>Blog Posts</h1>
                </div>

                {data.allMarkdownRemark.edges.map(post => {
                    const { node } = post;
                    const { title, date, path, featuredImage } = node.frontmatter;

                    return (
                        <div className="margin-container upscale-container project-container col-xs-12 col-sm-6 col-md-4 col-lg-3">
                            <div className="-curved-border">
                                <div key={node.id}>
                                    <Img className="container-top-image" fluid={featuredImage.childImageSharp.fluid} />
                                    <div className="padding-container">
                                        <h2>{title}</h2>
                                        <FullDate date={date} />
                                        <p>{node.excerpt}</p>
                                        <Link className="btn" to={path}>
                                            <span>Read More</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </InViewAnimation>
    </Layout>     
);

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
                        featuredImage {
                            childImageSharp {
                                fluid(maxWidth: 800) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`

export default BlogPage;