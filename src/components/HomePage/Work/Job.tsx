import React from 'react';
import { IWork } from './IWork';

interface IJobProps {
    work: IWork;
}

const Job = ({ work: { title, company, city, state, startDate, endDate } }: IJobProps) => (
    <div className="content-container">
        <div className="content -curved-border -layered-box-shadow">
            <h2>{title}</h2>
            <div className="-small-text company">
                {company} |&nbsp;
                <span className="-small-text -gray-text">{city}, {state}</span>
            </div>
            <div className="-small-text -gray-text">
                {startDate} - {endDate ?? "Present"}
            </div>
        </div>
    </div>
);

export default Job;