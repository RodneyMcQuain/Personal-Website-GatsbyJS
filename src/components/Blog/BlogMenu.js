import React, { useEffect } from 'react';
import { FEATURED_IMG_VIEWPORT_HEIGHT } from '../../styles/helpers/_variables.scss';
import { useAddCssClass } from '../../services/useAddCssClass';
import BlogPostsList from './BlogPostsList';

const BlogMenu = ({posts, currentPostName, isOpen, tableOfContents}) => {
    const sidebarOffsetTopClass = useSidebar();
    const mightOpenMenu = isOpen ? "open-blog-menu" : "";

    return (
        <div className={`blog-menu -curved-border padding-container ${sidebarOffsetTopClass} ${mightOpenMenu}`}>
            <h1>Table of Contents</h1>
            <div dangerouslySetInnerHTML={{ __html: tableOfContents }} />
            <br />
            <h1>More Blog Posts</h1>
            <BlogPostsList posts={posts} currentPostName={currentPostName} />
        </div>
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

export default BlogMenu;