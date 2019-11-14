import React from "react";

const UpdatedOnDate = ({date}) => (
    date 
        ? (
            <div title={`Updated on: ${date}`} className="-small-text">
                <span className="fa fa-edit" /> {date}
            </div>
        )
        : null
);

export default UpdatedOnDate;