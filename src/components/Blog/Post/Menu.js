import React, { useEffect } from 'react';
import { FEATURED_IMG_VIEWPORT_HEIGHT } from '../../../styles/helpers/variables/variables';
import { useAddCssClass } from '../../../services/useAddCssClass';
import BlogPostsList from './PostsList';
import { useFunctionThrottle } from '../../../services/useFunctionThrottle';
import { getViewportHeight } from '../../../services/dimensions';
import { blogMenu, offsetByFeaturedImage, open as openClass } from '../../../styles/layout/components/Blog/Post/Menu.module.scss';

const Menu = ({ posts, currentPostName, isOpen, tableOfContents, mightBeFooterInView }) => {
    const sidebarOffsetTopClass = useMenu();
    const mightOpenMenu = isOpen ? openClass : "";

    return (
        <div className={
            `${blogMenu} -curved-border -layered-box-shadow padding-container 
            ${sidebarOffsetTopClass} ${mightOpenMenu} ${mightBeFooterInView}`
        }>
            <h1>Table of Contents</h1>
            <div dangerouslySetInnerHTML={{ __html: tableOfContents }} />
            <br />
            <h1>More Blog Posts</h1>
            <BlogPostsList posts={posts} currentPostName={currentPostName} />
        </div>
    );
};

const useMenu = () => {
    const [mightBeSidebarOffsetTop, shouldAddSidebarOffsetTop] = useAddCssClass(offsetByFeaturedImage);
    const debouncedSetMenuHeightOffset = useFunctionThrottle(() => setSidebarHeightOffset(shouldAddSidebarOffsetTop), 500);

    useEffect(() => {
        window.addEventListener("scroll", debouncedSetMenuHeightOffset);
        return () => window.removeEventListener("scroll", debouncedSetMenuHeightOffset);
    }, []);

    return mightBeSidebarOffsetTop;
};

const setSidebarHeightOffset = shouldAddSidebarOffsetTop => {
    const CLIENT_HEIGHT = getViewportHeight();
    const FEATURED_IMG_PIXEL_HEIGHT = (CLIENT_HEIGHT * FEATURED_IMG_VIEWPORT_HEIGHT) / 100;
    const isInViewport = isFeaturedImageNotInViewport(FEATURED_IMG_PIXEL_HEIGHT);
    shouldAddSidebarOffsetTop(isInViewport);
}

const isFeaturedImageNotInViewport = FEATURED_IMG_PIXEL_HEIGHT => window.pageYOffset > FEATURED_IMG_PIXEL_HEIGHT;

export default Menu;