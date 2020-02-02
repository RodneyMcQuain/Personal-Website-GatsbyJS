import React from "react";
import Icon from '../../Icon';
import AriaText from "../../AriaText";

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