import React from 'react';
import PropTypes from 'prop-types';
import AriaText from '../../Shared/AriaText';
import IconText from '../../Shared/IconText';
import { FaRegClock } from 'react-icons/fa';

const ReadTime = ({ wordCount }) => {
    const AVERAGE_WORDS_READ_PER_MINUTE = 225;
    const MINUTES = Math.round(wordCount / AVERAGE_WORDS_READ_PER_MINUTE); 
    const MINUTES_OR_MINUTE = MINUTES <= 1 ? "Minute" : "Minutes";
    const displayMinutes = `${MINUTES} ${MINUTES_OR_MINUTE}`;

    return (
        <AriaText altText={`Time to read: ${displayMinutes}`} className="-small-text">
            <IconText icon={<FaRegClock />} text={displayMinutes} /> 
        </AriaText>
    );
}

ReadTime.propTypes = {
    wordCount: PropTypes.number
}

export default ReadTime;