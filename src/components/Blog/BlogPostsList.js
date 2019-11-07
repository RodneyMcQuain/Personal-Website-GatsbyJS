import React from 'react';
import Link from 'gatsby-link';

const BlogPostsList = ({posts, currentPostName}) => (
    <ul>
        <li key={0}><Link to={'blog-posts'}>
            <span>All Posts</span>
        </Link></li>

        {posts.map(post => {
            const { node } = post;
            const { title, path } = node.frontmatter;

            return title === currentPostName 
                ? null
                : (
                    <li key={node.id}><Link to={path}>
                        <span>{title}</span>
                    </Link></li>
                );
        })}
    </ul>
);

export default BlogPostsList;