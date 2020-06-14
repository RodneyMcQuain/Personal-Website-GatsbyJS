import React from "react";
import Icon from '../../Shared/Icon';
import AriaText from "../../Shared/AriaText";

const PublishedOnDate = ({ date }) => (
    <AriaText altText={`Published on: ${date}`} className="-small-text">
        <Icon icon="fa fa-calendar" /> {date}
    </AriaText>
);

export default PublishedOnDate;