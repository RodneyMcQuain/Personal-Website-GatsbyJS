import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout/layout';
import SEO from '../components/seo';
import InViewAnimation from '../components/InViewAnimation';
import BlogCard from '../components/Blog/BlogCard';

const BlogPosts = ({ data }) => (
    <Layout>
        <InViewAnimation>
            <div className="container">
                <SEO title="Blog" />
                <div className="page-header">
                    <h1>Blog Posts</h1>
                </div>

                {data.allMarkdownRemark.edges.map(post => <BlogCard post={post} />)}
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

export default BlogPosts;