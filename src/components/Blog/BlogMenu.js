import React, { useEffect } from 'react';
import { FEATURED_IMG_VIEWPORT_HEIGHT } from '../../styles/helpers/_variables.scss';
import { useAddCssClass } from '../../services/useAddCssClass';
import BlogPostsList from './BlogPostsList';
import { useFunctionThrottle } from '../../services/useFunctionThrottle';

const BlogMenu = ({posts, currentPostName, isOpen, tableOfContents}) => {
    const sidebarOffsetTopClass = useMenu();
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

const useMenu = () => {
    const [mightBeSidebarOffsetTop, shouldAddSidebarOffsetTop] = useAddCssClass("offset-by-featured-image");
    const debouncedSetMenuHeightOffset = useFunctionThrottle(() => setSidebarHeightOffset(shouldAddSidebarOffsetTop), 500);

    useEffect(() => {
        window.addEventListener("scroll", debouncedSetMenuHeightOffset);
        return () => window.removeEventListener("scroll", debouncedSetMenuHeightOffset);
    }, []);
    
    return mightBeSidebarOffsetTop;
};

const setSidebarHeightOffset = shouldAddSidebarOffsetTop => {
    const FEATURED_IMG_VIEWPORT_HEIGHT_NUMBER = FEATURED_IMG_VIEWPORT_HEIGHT.replace("vh", "");
    const FEATURED_IMG_PIXEL_HEIGHT = document.body.clientHeight * (FEATURED_IMG_VIEWPORT_HEIGHT_NUMBER / window.innerHeight);
    const isInViewport = isFeaturedImageNotInViewport(FEATURED_IMG_PIXEL_HEIGHT);
    shouldAddSidebarOffsetTop(isInViewport);
}

const isFeaturedImageNotInViewport = FEATURED_IMG_PIXEL_HEIGHT => window.pageYOffset > FEATURED_IMG_PIXEL_HEIGHT;

export default BlogMenu;