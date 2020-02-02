import React from "react";
import Icon from '../../Icon';
import AriaText from "../../AriaText";

const PublishedOnDate = ({ date }) => (
    <AriaText altText={`Published on: ${date}`} className="-small-text">
        <Icon icon="fa fa-calendar" /> {date}
    </AriaText>
);

export default PublishedOnDate;