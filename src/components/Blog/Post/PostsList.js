import React from 'react';
import Link from 'gatsby-link';
import { BLOG_ROUTE } from '../../../services/routes';

const PostsList = ({ posts, currentPostName }) => (
    <ul>
        <li key={0}>
            <Link to={`/${BLOG_ROUTE}`}>
                All Posts
            </Link>
        </li>

        {posts.map(post => {
            const { node } = post;
            const { title, path } = node.frontmatter;

            return title === currentPostName
                ? null
                : (
                    <li key={node.id}>
                        <Link to={path}>
                            {title}
                        </Link>
                    </li>
                );
        })}
    </ul>
);

export default PostsList;