import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import FullDate from '../components/FullDate';

export default function Template({ data }) {
  const post = data.markdownRemark;

  return (
    <Layout>
      <div className="container">
        <FullDate style="left-align blog-post-date-spacing" date={post.frontmatter.date} />
        <div className="page-header">
          <h1 className="left-align blog-title">{post.frontmatter.title}</h1>
        </div>
        <div className="markdown-body" dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        author
        date
      }
    }
  }
`