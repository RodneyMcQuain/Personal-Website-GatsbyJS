import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout/layout';
import InViewAnimation from '../components/InViewAnimation';
import ResponsiveBlogMenu from '../components/Blog/Post/ResponsiveMenu';
import SEO from '../components/seo';
import Img from 'gatsby-image';
import BlogReadTime from '../components/Blog/ReadTime';
import PublishedOnDate from '../components/Blog/PublishedOnDate';
import UpdatedOnDate from '../components/Blog/UpdatedOnDate';
import Category from '../components/Blog/Category';
import Tags from '../components/Blog/Tags';
import ContactMe from '../components/Contact/ContactMe';
import AdjacentPostNavigation from '../components/Blog/Post/AdjacentPostNavigation';

const BlogPostTemplate = ({ data, pageContext }) => {
    const { html, excerpt, tableOfContents, wordCount } = data.thisPost;
    const { title, date, lastUpdatedDate, category, tags } = data.thisPost.frontmatter;
    const featuredFluidImage = data.thisPost.frontmatter.featuredImage.childImageSharp.fluid;

    return (
        <Layout>
            <InViewAnimation>
                <Img className="blog-featured-image" fluid={featuredFluidImage} />
                <div className="container">
                    <SEO 
                        title={title} 
                        image={featuredFluidImage} 
                        description={excerpt}
                    />
                    <div className="col-xs-12 col-sm-12 col-md-9">
                        <div className="blog-header-icons">
                            <PublishedOnDate date={date} />
                            <UpdatedOnDate date={lastUpdatedDate} />
                            <BlogReadTime wordCount={wordCount.words} />
                            <Category category={category} />
                            <Tags tags={tags} />
                        </div>

                        <div className="page-header">
                            <h1 className="-left-align">{title}</h1>
                        </div>
                        <div className="markdown-body" dangerouslySetInnerHTML={{ __html: html }} />
                        <AdjacentPostNavigation 
                            previous={pageContext.previous ? pageContext.previous.frontmatter : null} 
                            next={pageContext.next ? pageContext.next.frontmatter : null} 
                        />
                        <ContactMe />
                    </div>
                    <div className="col-md-3">
                        <ResponsiveBlogMenu posts={data.recentPosts.edges} currentPostName={title} tableOfContents={tableOfContents} />
                    </div>
                </div>
            </InViewAnimation>
        </Layout>
    );
}

export const pageQuery = graphql`
    query BlogPostByPath($path: String!) {
        thisPost: markdownRemark(frontmatter: { path: { eq: $path } }) {
            html
            frontmatter {
                path
                title
                date(formatString: "MMMM DD, YYYY")
                featuredImage {
                    childImageSharp {
                        fluid {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
                lastUpdatedDate(formatString: "MMMM DD, YYYY")
                category
                tags
            }
            wordCount {
                words
            }
            excerpt
            tableOfContents(pathToSlugField: "frontmatter.path")
        }
        recentPosts: allMarkdownRemark(limit: 5) {
            edges {
                node {
                    id
                    frontmatter {
                        path
                        title
                    }
                }
            }
        }
    }
`;

export default BlogPostTemplate;