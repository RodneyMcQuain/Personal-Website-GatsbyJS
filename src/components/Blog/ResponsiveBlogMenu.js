import React, { useState } from 'react';
import BlogMenu from './BlogMenu';

const ResponsiveBlogMenu = ({posts, currentPostName, tableOfContents}) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <> 
            <BlogMenu posts={posts} currentPostName={currentPostName} isOpen={isOpen} tableOfContents={tableOfContents} />
            <button 
                className="btn blog-menu-btn hidden-md hidden-lg" 
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Show Blog Menu"
            >
                <span className={`fa ${isOpen ? "fa-times" : "fa-ellipsis-h"}`}></span>
            </button>
        </>
    );
};

export default ResponsiveBlogMenu;