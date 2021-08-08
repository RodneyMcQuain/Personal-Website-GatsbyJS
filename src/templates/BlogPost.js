import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout/layout';
import InViewAnimation from '../components/Shared/InViewAnimation';
import ResponsiveBlogMenu from '../components/Blog/Post/ResponsiveMenu';
import SEO from '../components/Shared/SEO';
import Img from 'gatsby-image';
import ContactMe from '../components/Shared/ContactMe';
import AdjacentPostNavigation from '../components/Blog/Post/AdjacentPostNavigation';
import HeaderIcons from '../components/Blog/Post/HeaderIcons';
import ShareButtons from '../components/Blog/Post/ShareButtons';
import Markdown from '../components/Shared/Markdown';
import HeaderTitle from '../components/Shared/HeaderTitle';
import { blogFeaturedImage, blogPostTitle, blogPostContent } from '../styles/layout/templates/BlogPost.module.scss';

const BlogPostTemplate = ({ data, pageContext }) => {
    const { html, excerpt, tableOfContents, wordCount: { words }, frontmatter } = data.thisPost;
    const { path, title, date, lastUpdatedDate, featuredImageAltText, category, tags } = frontmatter;
    const featuredFluidImage = frontmatter.featuredImage.childImageSharp.fluid;
    const blogPostGridClasses = "col-xs-12 col-sm-12 col-md-7";

    return (
        <Layout>
            <InViewAnimation>
                <Img className={blogFeaturedImage} fluid={featuredFluidImage} alt={featuredImageAltText} />
                <div className="container">
                    <SEO
                        title={title}
                        image={featuredFluidImage.src}
                        description={excerpt}
                        type={'article'}
                        canonicalPath={path}
                    />
                    <div className={`${blogPostGridClasses} -layered-box-shadow ${blogPostContent}`}>
                        <article>
                            <header>
                                <HeaderIcons
                                    date={date}
                                    lastUpdatedDate={lastUpdatedDate}
                                    wordCount={words}
                                    category={category}
                                    tags={tags}
                                />
                                <HeaderTitle title={title} className={`-left-align ${blogPostTitle}`} isHeaderElement={false} />
                            </header>

                            <Markdown html={html} />
                        </article>

                        <ShareButtons textContent={`Check out "${title}"`} url={path} sharedMediaType="blog post" />
                        
                        <AdjacentPostNavigation
                            previous={pageContext.previous ? pageContext.previous.frontmatter : null}
                            next={pageContext.next ? pageContext.next.frontmatter : null}
                        />
                    </div>
                    <div className="col-md-5">
                        <ResponsiveBlogMenu posts={data.recentPosts.edges} currentPostName={title} tableOfContents={tableOfContents} />
                    </div>
                    <div className={blogPostGridClasses}>
                        <ContactMe />
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
                        fluid(maxWidth: 1920, quality: 100) {
                            ...fluidImage
                        }
                    }
                }
                featuredImageAltText
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