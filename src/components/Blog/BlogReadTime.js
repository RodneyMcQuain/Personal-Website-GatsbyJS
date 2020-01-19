import React from 'react';
import PropTypes from "prop-types"
import Icon from '../Icon';

const BlogReadTime = ({ wordCount }) => {
    const AVERAGE_WORDS_READ_PER_MINUTE = 225;
    const MINUTES = Math.round(wordCount / AVERAGE_WORDS_READ_PER_MINUTE); 

    return (
        <div className="-small-text">
            <Icon icon="fa fa-clock-o" /> {MINUTES} Minute Read
        </div>
    );
}

BlogReadTime.propTypes = {
    wordCount: PropTypes.number
}

export default BlogReadTime;