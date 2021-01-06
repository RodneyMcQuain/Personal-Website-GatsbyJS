import React, { useState } from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout/layout';
import SEO from '../components/Shared/SEO';
import BlogCard from '../components/Blog/Posts/Card';
import BlogCategoryDropdown from '../components/Blog/Posts/CategoryDropdown';
import TagDropdown from '../components/Blog/Posts/TagDropdown';
import { ALL_FILTER } from '../components/Blog/ALL_FILTER';
import TagPills from '../components/Blog/Posts/TagPills';
import HeaderContentLayout from '../components/Layout/HeaderContentLayout';
import { isBrowser } from '../services/browser';
import styles from '../styles/layout/pages/blog-posts.module.scss';

const BlogPosts = ({ data }) => {
    const { edges, categories, tags } = data.allMarkdownRemark;
    const [currentCategory, setCurrentCategory] = useState(getInitialCategoryFilter());
    const [currentTags, setCurrentTags] = useState([]);

    return (
        <Layout>
            <SEO title="Blog" />
            <HeaderContentLayout title="Blog Posts">
                <div className={styles.blogFilters}>
                    <BlogCategoryDropdown
                        categories={categories.map(category => category.category)}
                        filter={currentCategory}
                        setFilter={setCurrentCategory}
                    />

                    <TagDropdown
                        tags={tags.map(tag => tag.tag)}
                        categoryFilter={currentCategory}
                        tagFilters={currentTags}
                        setTagFilters={setCurrentTags}
                    />

                    <TagPills tagFilters={currentTags} setTagFilters={setCurrentTags} />
                </div>

                <div className="row display-flex">
                    {edges.map(post => <BlogCard post={post} categoryFilter={currentCategory} tagFilters={currentTags} />)}
                </div>
            </HeaderContentLayout>
        </Layout>
    );
}

const getInitialCategoryFilter = () => {
    const locationSearch = isBrowser() && window.location.search;
    const queryStringCategoryOrAll = new URLSearchParams(locationSearch).get('category') || ALL_FILTER;
    return queryStringCategoryOrAll;
};

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