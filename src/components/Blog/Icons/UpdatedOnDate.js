import React from 'react';
import AriaText from '../../Shared/AriaText';
import IconText from '../../Shared/IconText';
import { FaUserEdit } from 'react-icons/fa';

const UpdatedOnDate = ({ date }) => (
    date 
        ? (
            <AriaText altText={`Updated on: ${date}`} className="-small-text">
                <IconText icon={<FaUserEdit />} text={date} />
            </AriaText>
        )
        : null
);

export default UpdatedOnDate;