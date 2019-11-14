import React from "react";

const PublishedOnDate = ({date}) => (
    <div title={`Published on: ${date}`} className="-small-text">
        <span className="fa fa-calendar" /> {date}
    </div>
);

export default PublishedOnDate;