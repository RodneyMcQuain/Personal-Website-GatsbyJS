import React, { useEffect } from 'react';
import Link from 'gatsby-link';
import { FEATURED_IMG_VIEWPORT_HEIGHT } from '../../styles/helpers/_variables.scss';
import { useAddCssClass } from '../../services/useAddCssClass';

const BlogSidebar = ({posts, currentPostName}) => {
    const sidebarOffsetTopClass = useSidebar();

    return (
        <ul className={"blog-sidebar -curved-border padding-container " + sidebarOffsetTopClass}>
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
};

const useSidebar = () => {
    const [mightBeSidebarOffsetTop, shouldAddSidebarOffsetTop] = useAddCssClass("offset-by-featured-image");

    useEffect(() => {
        const setSidebarHeightOffset = () => {
            const FEATURED_IMG_VIEWPORT_HEIGHT_NUMBER = FEATURED_IMG_VIEWPORT_HEIGHT.replace("vh", "");
            const FEATURED_IMG_PIXEL_HEIGHT = document.body.clientHeight * (FEATURED_IMG_VIEWPORT_HEIGHT_NUMBER / window.innerHeight);
            const isInViewport = isFeaturedImageNotInViewport(FEATURED_IMG_PIXEL_HEIGHT);
            shouldAddSidebarOffsetTop(isInViewport);
        }

        window.addEventListener("scroll", setSidebarHeightOffset);
        return () => window.removeEventListener("scroll", setSidebarHeightOffset);
    }, []);

    return mightBeSidebarOffsetTop;
};

const isFeaturedImageNotInViewport = FEATURED_IMG_PIXEL_HEIGHT => window.pageYOffset > FEATURED_IMG_PIXEL_HEIGHT;

export default BlogSidebar;