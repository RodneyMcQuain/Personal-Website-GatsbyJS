import React, { useState } from 'react';
import BlogMenu from './BlogMenu';
import NavButton from '../NavButton';
import CloseOnOutsideClick from '../CloseOnOutsideClick';

const ResponsiveBlogMenu = ({posts, currentPostName, tableOfContents}) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <CloseOnOutsideClick setIsOpen={setIsOpen}> 
            <BlogMenu posts={posts} currentPostName={currentPostName} isOpen={isOpen} tableOfContents={tableOfContents} />
            <NavButton
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                extraClasses="btn blog-menu-btn hidden-md hidden-lg"
                closedIcon="fa-ellipsis-h"
                ariaLabel="Blog Menu"
            />
        </CloseOnOutsideClick>
    );
};

export default ResponsiveBlogMenu;