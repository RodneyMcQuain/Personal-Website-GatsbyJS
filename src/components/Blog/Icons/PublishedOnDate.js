import React from 'react';
import AriaText from '../../Shared/AriaText';
import IconText from '../../Shared/IconText';
import { FaCalendarAlt } from 'react-icons/fa';

const PublishedOnDate = ({ date }) => (
    <AriaText altText={`Published on: ${date}`} className="-small-text">
        <IconText icon={<FaCalendarAlt />} text={date} />
    </AriaText>
);

export default PublishedOnDate;