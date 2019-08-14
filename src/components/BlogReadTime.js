import React from 'react';
import PropTypes from "prop-types"

const BlogReadTime = ({wordCount}) => {
    const AVERAGE_READ_PER_MINUTE = 225;
    const MINUTES = Math.round(wordCount / AVERAGE_READ_PER_MINUTE); 

    return (
        <p className="fa fa-clock-o blog-small-text left-align">
            <span className="blog-small-text"> {MINUTES} Minute Read</span>
        </p>
    );
}

BlogReadTime.propTypes = {
    wordCount: PropTypes.number
}

export default BlogReadTime;