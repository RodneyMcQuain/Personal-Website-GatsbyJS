import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout/layout';
import FullDate from '../components/Blog/FullDate';
import InViewAnimation from '../components/InViewAnimation';
import ResponsiveBlogMenu from '../components/Blog/ResponsiveBlogMenu';
import BlogReadTime from '../components/Blog/BlogReadTime';
import SEO from '../components/seo';
import Img from 'gatsby-image';

export default function Template({ data }) {
    const post = data.thisPost;
    const frontmatter = post.frontmatter;
    const featuredFluidImage = frontmatter.featuredImage.childImageSharp.fluid;

    return (
        <Layout>
            <InViewAnimation>
                <Img className="blog-featured-image" fluid={featuredFluidImage} />
                <div className="container">
                    <SEO 
                        title={frontmatter.title} 
                        image={featuredFluidImage} 
                        description={post.excerpt}
                    />
                    <div className="col-xs-12 col-sm-12 col-md-9">
                        <div className="blog-small-text-spacing">
                           <FullDate style="left-align" date={frontmatter.date} />
                           <BlogReadTime wordCount={post.wordCount.words} />
                        </div>

                        <div className="page-header">
                            <h1 className="left-align blog-title">{frontmatter.title}</h1>
                        </div>
                        <div className="markdown-body" dangerouslySetInnerHTML={{ __html: post.html }} />
                    </div>
                    <div className="col-md-3">
                        <ResponsiveBlogMenu posts={data.recentPosts.edges} currentPostName={frontmatter.title} tableOfContents={post.tableOfContents} />
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
                date
                featuredImage {
                    childImageSharp {
                        fluid {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
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
`