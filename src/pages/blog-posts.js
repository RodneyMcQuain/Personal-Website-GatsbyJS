import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout/layout';
import SEO from '../components/Shared/SEO';
import HeaderContentLayout from '../components/Layout/HeaderContentLayout';
import BlogContentContainer from '../components/Blog/Posts/ContentContainer';

const BLOG_TITLE = "Blog";

const BlogPosts = ({ data: { allMarkdownRemark: { edges, categories, tags } } }) => (
    <Layout>
        <SEO title={BLOG_TITLE} description="The home for my reflections on effectively building software." />
        <HeaderContentLayout title={BLOG_TITLE}>
            <BlogContentContainer
                posts={edges}
                categories={categories.map(c => c.category)}
                tags={tags.map(t => t.tag)}
            />
        </HeaderContentLayout>
    </Layout>
);

export const pageQuery = graphql`
    query BlogIndexQuery {
        allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
            categories: group(field: frontmatter___category) {
                category: fieldValue
            }
            tags: group(field: frontmatter___tags) {
                tag: fieldValue
            }
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
                                    ...fluidImage
                                }
                            }
                        }
                        featuredImageAltText
                        category
                        tags
                    }
                }
            }
        }
    }
`

export default BlogPosts;