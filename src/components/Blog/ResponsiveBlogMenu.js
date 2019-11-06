import React, { useState } from 'react';
import BlogMenu from './BlogMenu';

const ResponsiveBlogMenu = ({posts, currentPostName}) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <> 
            <BlogMenu posts={posts} currentPostName={currentPostName} isOpen={isOpen} />
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