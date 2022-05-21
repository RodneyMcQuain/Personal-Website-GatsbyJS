import React from 'react';

interface JobTimeSpanProps {
    startDate: string;
    endDate: string | null;
}

const JobTimeSpan = ({ startDate, endDate }: JobTimeSpanProps) => (
    <div className="-small-text -gray-text">{startDate} – {endDate ?? "Present"} ~ {getTimeWorked(startDate, endDate)}</div>
);

const getTimeWorked = (from: string, to: string | null): string => {
    const fromDate = new Date(from);

    to = to ?? new Date().toString();
    const toDate = new Date(to);

    return getFormattedTimeWorked(fromDate, toDate);
}

const NUMBER_OF_MONTHS_IN_YEAR = 12;

const getFormattedTimeWorked = (startDate: Date, endDate: Date): string => {
    const monthDifference = getTotalMonthDifference(startDate, endDate);
    
    const yearCount = Math.floor(monthDifference / NUMBER_OF_MONTHS_IN_YEAR);
    if (yearCount === 0) return getMonthFormatted(monthDifference);

    const monthsIntoMostRecentYear = monthDifference % NUMBER_OF_MONTHS_IN_YEAR;
    if (monthsIntoMostRecentYear === 0) return `${getYearFormatted(yearCount)}`;

    return `${getYearFormatted(yearCount)} ${getMonthFormatted(monthsIntoMostRecentYear)}`; 
};

const getYearFormatted = (numberOfYears: number): string => `${numberOfYears} Year${numberOfYears === 1 ? '' : 's'}`;
const getMonthFormatted = (numberOfMonths: number): string => `${numberOfMonths} Month${numberOfMonths === 1 ? '' : 's'}`;

const getTotalMonthDifference = (startDate: Date, endDate: Date): number => {
    const yearDifferenceInMonths = (endDate.getFullYear() - startDate.getFullYear()) * NUMBER_OF_MONTHS_IN_YEAR;
    return yearDifferenceInMonths + (endDate.getMonth() - startDate.getMonth());
};

export default JobTimeSpan;