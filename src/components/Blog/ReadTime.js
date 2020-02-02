import React from 'react';
import PropTypes from "prop-types"
import Icon from '../Icon';
import AriaText from '../AriaText';

const ReadTime = ({ wordCount }) => {
    const AVERAGE_WORDS_READ_PER_MINUTE = 225;
    const MINUTES = Math.round(wordCount / AVERAGE_WORDS_READ_PER_MINUTE); 
    const MINUTES_OR_MINUTE = MINUTES <= 1 ? "Minute" : "Minutes";
    const displayMinutes = `${MINUTES} ${MINUTES_OR_MINUTE}`;

    return (
        <AriaText altText={`Time to read: ${displayMinutes}`} className="-small-text">
            <Icon icon="fa fa-clock-o" /> {displayMinutes} 
        </AriaText>
    );
}

ReadTime.propTypes = {
    wordCount: PropTypes.number
}

export default ReadTime;