import React from 'react';

interface JobTimeSpanProps {
    startDate: string;
    endDate: string;
}

const JobTimeSpan = ({ startDate, endDate }: JobTimeSpanProps) => {
    const monthDifference = getMonthDifference(startDate, endDate);
    return (
        <div className="-small-text -gray-text">
            {startDate} – {endDate ?? "Present"} ~ {monthDifference} Month{monthDifference === 1 ? '' : 's'}
        </div>
    );
}

const getMonthDifference = (from: string, to: string): number => {
    const NUMBER_OF_MONTHS_IN_YEAR = 12;
    const fromDate = new Date(from);

    to = to ?? new Date().toString();
    const toDate = new Date(to);

    const yearDifferenceInMonths = (toDate.getFullYear() - fromDate.getFullYear()) * NUMBER_OF_MONTHS_IN_YEAR;
    return yearDifferenceInMonths - fromDate.getMonth() + toDate.getMonth();
};

export default JobTimeSpan;