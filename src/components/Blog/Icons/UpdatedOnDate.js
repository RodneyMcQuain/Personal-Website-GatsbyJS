import React from "react";
import Icon from '../../Shared/Icon';
import AriaText from "../../Shared/AriaText";

const UpdatedOnDate = ({ date }) => (
    date 
        ? (
            <AriaText altText={`Updated on: ${date}`} className="-small-text">
                <Icon icon="fa fa-edit" /> {date}
            </AriaText>
        )
        : null
);

export default UpdatedOnDate;