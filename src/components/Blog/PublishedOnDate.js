import React from "react";
import Icon from '../Icon';

const PublishedOnDate = ({date}) => (
    <div data-title={`Published on: ${date}`} className="-small-text">
        <Icon icon="fa fa-calendar" /> {date}
    </div>
);

export default PublishedOnDate;