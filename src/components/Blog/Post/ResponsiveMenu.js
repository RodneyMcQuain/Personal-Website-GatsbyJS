import React, { useEffect, useState } from 'react';
import BlogMenu from './Menu';
import NavButton from '../../Shared/NavButton';
import CloseOnOutsideClick from '../../Shared/CloseOnOutsideClick';
import { MAX_FOOTER_HEIGHT_REM } from '../../../styles/helpers/variables/variables';
import { useAddCssClass } from '../../../services/useAddCssClass';
import { useFunctionThrottle } from '../../../services/useFunctionThrottle';
import { getViewportHeight } from '../../../services/dimensions';
import { FaEllipsisH } from 'react-icons/fa';

const ResponsiveMenu = ({ posts, currentPostName, tableOfContents }) => {
    const [isOpen, setIsOpen] = useState(false);
    const mightBeFooterInView = useOffsetByFooter();

    return (
        <CloseOnOutsideClick setIsOpen={setIsOpen}>
            <BlogMenu 
                posts={posts} 
                currentPostName={currentPostName} 
                isOpen={isOpen} 
                tableOfContents={tableOfContents} 
                mightBeFooterInView={mightBeFooterInView} 
            />
            <NavButton
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                extraClasses={`btn blog-menu-btn hidden-md hidden-lg -layered-box-shadow ${mightBeFooterInView}`}
                closedIcon={<FaEllipsisH />}
                ariaLabel="Blog Menu"
            />
        </CloseOnOutsideClick>
    );
};

const useOffsetByFooter = () => {
    const [mightBeFooterInView, shouldAddFooterInView] = useAddCssClass("footer-in-view");
    const debouncedSetMenuHeightOffset = useFunctionThrottle(() => setMenuButtonHeightOffset(shouldAddFooterInView), 500);

    useEffect(() => {
        window.addEventListener("scroll", debouncedSetMenuHeightOffset);
        return () => window.removeEventListener("scroll", debouncedSetMenuHeightOffset);
    }, []);

    return mightBeFooterInView;
}

const setMenuButtonHeightOffset = shouldAddFooterInView => {
    const isFooterInViewport = document.documentElement.scrollTop >= getFooterInViewportStartingPixel();
    shouldAddFooterInView(isFooterInViewport);
}
const getFooterInViewportStartingPixel = () => document.body.offsetHeight - getViewportHeight() - MAX_FOOTER_HEIGHT_REM;

export default ResponsiveMenu;