import React, { useEffect, useState } from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout/layout';
import SEO from '../components/seo';
import InViewAnimation from '../components/InViewAnimation';
import BlogCard from '../components/Blog/BlogCard';
import BlogCategoryDropdown from '../components/Blog/BlogCategoryDropdown';
import { ALL_FILTER } from '../components/Blog/ALL_FILTER';

const BlogPosts = ({ data }) => {
    const { edges } = data.allMarkdownRemark;
    const [currentCategory, setCurrentCategory] = useState(getInitialCategoryFilter());

    return (
        <Layout>
            <InViewAnimation>
                <div className="container">
                    <SEO title="Blog" />
                    <div className="page-header">
                        <h1>Blog Posts</h1>
                    </div>

                    <BlogCategoryDropdown 
                        categories={getDistinctCategories(edges)} 
                        filter={currentCategory} 
                        setFilter={setCurrentCategory} 
                    />

                    {edges.map(post => <BlogCard post={post} categoryFilter={currentCategory} />)}
                </div>
            </InViewAnimation>
        </Layout>     
    );
}

const getDistinctCategories = (edges) => [...new Set(edges.map(edge => edge.node.frontmatter.category))];
const getInitialCategoryFilter = () => {
    const locationSearch = typeof window !== 'undefined' && window.location.search; // Needs window type check to pass Gatsby build
    const queryStringCategoryOrAll = new URLSearchParams(locationSearch).get('category') || ALL_FILTER;
    return queryStringCategoryOrAll;
};

export const pageQuery = graphql`
    query BlogIndexQuery {
        allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
            edges {
                node {
                    id
                    excerpt
                    frontmatter {
                        path
                        title
                        date(formatString: "MMMM DD, YYYY")
                        featuredImage {
                            childImageSharp {
                                fluid(maxWidth: 800) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                        category
                    }
                }
            }
        }
    }
`

export default BlogPosts;