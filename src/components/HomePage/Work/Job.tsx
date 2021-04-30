import React from 'react';
import { IJob } from './IJob';
import SingleWhiteSpace from '../../Shared/SingleWhiteSpace';
import { contentContainer, content, company as companyClass } from '../../../styles/layout/components/HomePage/Work/Timeline.module.scss';

interface IJobProps {
    work: IJob;
}

const Job = ({ work: { title, company, city, state, startDate, endDate } }: IJobProps) => {
    const monthDifference = getMonthDifference(startDate, endDate);

    return (
        <div className={contentContainer}>
            <div className={`${content} -curved-border -layered-box-shadow`}>
                <h2>{title}</h2>
                <div className={`${companyClass} -small-text`}>
                    {company} |<SingleWhiteSpace />
                    <span className="-small-text -gray-text">{city}, {state}</span>
                </div>
                <div className="-small-text -gray-text">
                    {startDate} – {endDate ?? "Present"} ~ {monthDifference} Month{monthDifference === 1 ? '' : 's'}
                </div>
            </div>
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

export default Job;