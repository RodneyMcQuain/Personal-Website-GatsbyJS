import React from 'react';
import Link from 'gatsby-link';

const BlogSidebar = ({posts}) => (
    <ul className="blog-sidebar -curved-border padding-container">
        <li><Link to={'blog-posts'}>
            <span>All Posts</span>
        </Link></li>

        {posts.map(post => {
                const { node } = post;
                const { title, path } = node.frontmatter;

                return (
                    <>
                        <li><Link to={path}>
                            <span>{title}</span>
                        </Link></li>
                    </>
                );
            })
        }
    </ul>
);

export default BlogSidebar;