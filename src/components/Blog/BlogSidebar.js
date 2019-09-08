import React, { useState, useEffect } from 'react';
import Link from 'gatsby-link';
import { FEATURED_IMG_VIEWPORT_HEIGHT } from '../../templates/BlogPost';

const BlogSidebar = ({posts}) => {
    const sidebarOffsetTopClass = useSidebar();

    return (
        <ul className={"blog-sidebar -curved-border padding-container " + sidebarOffsetTopClass}>
            <li key={0}><Link to={'blog-posts'}>
                <span>All Posts</span>
            </Link></li>

            {posts.map(post => {
                const { node } = post;
                const { title, path } = node.frontmatter;

                return (
                    <li key={node.id}><Link to={path}>
                        <span>{title}</span>
                    </Link></li>
                );
            })}
        </ul>
    )
};

const useSidebar = () => {
    const [sidebarOffsetTopClass, setSidebarOffsetTopClass] = useState("");

    useEffect(() => {
        const setSidebarHeightOffset = () => {
            const FEATURED_IMG_PIXEL_HEIGHT = document.body.clientHeight * (FEATURED_IMG_VIEWPORT_HEIGHT / window.innerHeight);
            const sidebarClassName = window.pageYOffset > FEATURED_IMG_PIXEL_HEIGHT ? "blog-sidebar-offset-top" : ""
            setSidebarOffsetTopClass(sidebarClassName);
        }

        window.addEventListener("scroll", setSidebarHeightOffset);
        return () => window.removeEventListener("scroll", setSidebarHeightOffset);
    });

    return sidebarOffsetTopClass;
};

export default BlogSidebar;