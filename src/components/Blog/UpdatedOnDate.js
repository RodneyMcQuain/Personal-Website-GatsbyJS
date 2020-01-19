import React from "react";
import Icon from '../Icon';

const UpdatedOnDate = ({date}) => (
    date 
        ? (
            <div title={`Updated on: ${date}`} className="-small-text">
                <Icon icon="fa fa-edit" /> {date}
            </div>
        )
        : null
);

export default UpdatedOnDate;