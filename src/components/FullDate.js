import React from 'react';
import PropTypes from "prop-types"

const FullDate = props => (
    <p className={`fa fa-calendar blog-small-text ${props.style}`}>
        <span className="blog-small-text"> {getFullDate(props.date)}</span>
    </p>
);

FullDate.propTypes = {
    style: PropTypes.string,
    date: PropTypes.string,
}

const getFullDate = date => {
    const dateObj = new Date(date);
    const month = getMonthName(dateObj);
    const day = getDayWithOrdinalIndicator(dateObj);

    return `${month} ${day}, ${dateObj.getFullYear()}`;
}

const getMonthName = dateObj => {
    const month = [
        "January", 
        "February", 
        "March", 
        "April", 
        "May", 
        "June",
        "July", 
        "August", 
        "September", 
        "October", 
        "November", 
        "December"
    ];

    return month[dateObj.getMonth()];
}

const getDayWithOrdinalIndicator = dateObj => {
    let day = dateObj.getUTCDate().toString();
    const lastDigitOfDay = day[day.length - 1];
    
    if (lastDigitOfDay === '1')
        day += "st";
    else if (lastDigitOfDay === '2')
        day += "nd";
    else if (lastDigitOfDay === '3')
        day += "rd";
    else
        day += "th";
    
    return day;
}

export default FullDate;