import React from 'react';
import PropTypes from "prop-types"
import Icon from '../Icon';

const ReadTime = ({ wordCount }) => {
    const AVERAGE_WORDS_READ_PER_MINUTE = 225;
    const MINUTES = Math.round(wordCount / AVERAGE_WORDS_READ_PER_MINUTE); 
    const MINUTES_OR_MINUTE = MINUTES <= 1 ? "Minute" : "Minutes";
    const displayMinutes = `${MINUTES} ${MINUTES_OR_MINUTE}`;

    return (
        <div data-title={`Time to read: ${displayMinutes}`} className="-small-text">
            <Icon icon="fa fa-clock-o" /> {displayMinutes} 
        </div>
    );
}

ReadTime.propTypes = {
    wordCount: PropTypes.number
}

export default ReadTime;