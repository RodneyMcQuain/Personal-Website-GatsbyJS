import React from 'react';
import PropTypes from 'prop-types';
import BlogIcon from './BlogIcon';
import { FaRegClock } from 'react-icons/fa';

const ReadTime = ({ wordCount }) => {
    const AVERAGE_WORDS_READ_PER_MINUTE = 225;
    const MINUTES = Math.round(wordCount / AVERAGE_WORDS_READ_PER_MINUTE); 
    const MINUTES_OR_MINUTE = MINUTES <= 1 ? "Minute" : "Minutes";
    const displayMinutes = `${MINUTES} ${MINUTES_OR_MINUTE}`;

    return (
        <BlogIcon icon={<FaRegClock />} displayText={displayMinutes} altText={`Time to read: ${displayMinutes}`} />
    );
}

ReadTime.propTypes = {
    wordCount: PropTypes.number
}

export default ReadTime;