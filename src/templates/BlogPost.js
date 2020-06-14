import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout/layout';
import InViewAnimation from '../components/Shared/InViewAnimation';
import ResponsiveBlogMenu from '../components/Blog/Post/ResponsiveMenu';
import SEO from '../components/Shared/seo';
import Img from 'gatsby-image';
import ContactMe from '../components/Contact/ContactMe';
import AdjacentPostNavigation from '../components/Blog/Post/AdjacentPostNavigation';
import HeaderIcons from '../components/Blog/Post/HeaderIcons';
import Markdown from '../components/Shared/Markdown';
import HeaderTitle from '../components/Shared/HeaderTitle';
import '../styles/layout/blog/post/_blog-post.scss';

const BlogPostTemplate = ({ data, pageContext }) => {
    const { html, excerpt, tableOfContents, wordCount } = data.thisPost;
    const { title, date, lastUpdatedDate, category, tags } = data.thisPost.frontmatter;
    const featuredFluidImage = data.thisPost.frontmatter.featuredImage.childImageSharp.fluid;
    const blogPostGridClasses = "col-xs-12 col-sm-12 col-md-9";

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
                    <div className={`${blogPostGridClasses} -layered-box-shadow blog-post-content`}>
                        <header>
                            <HeaderIcons
                                date={date}
                                lastUpdatedDate={lastUpdatedDate}
                                wordCount={wordCount.words}
                                category={category}
                                tags={tags}
                            />
                            <HeaderTitle title={title} className="-left-align" isHeaderElement={false} />
                        </header>

                        <Markdown html={html} />
                        <AdjacentPostNavigation
                            previous={pageContext.previous ? pageContext.previous.frontmatter : null}
                            next={pageContext.next ? pageContext.next.frontmatter : null}
                        />
                    </div>
                    <div className="col-md-3">
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