import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import FullDate from '../components/FullDate';
import InViewAnimation from '../components/InViewAnimation';
import BlogSidebar from '../components/BlogSidebar';
import BlogReadTime from '../components/BlogReadTime';

export default function Template({ data }) {
    const post = data.thisPost;

    return (
        <Layout>
            <InViewAnimation>
                <div className="container">
                    <div className="col-md-9">
                        <div className="blog-small-text-spacing">
                           <FullDate style="left-align" date={post.frontmatter.date} />
                           <BlogReadTime wordCount={post.wordCount.words} />
                        </div>
                        
                        <div className="page-header">
                            <h1 className="left-align blog-title">{post.frontmatter.title}</h1>
                        </div>
                        <div className="markdown-body" dangerouslySetInnerHTML={{ __html: post.html }} />
                    </div>
                    <div className="hidden-sm col-md-3">
                        <BlogSidebar posts={data.recentPosts.edges} />
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
            }
            wordCount {
                words
            }
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