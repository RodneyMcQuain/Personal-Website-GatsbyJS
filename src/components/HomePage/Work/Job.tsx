import React from 'react';
import { IJob } from './IJob';
import SingleWhiteSpace from '../../Shared/SingleWhiteSpace';
import { contentContainer, content, company as companyClass } from '../../../styles/layout/components/HomePage/Work/Timeline.module.scss';
import JobTimeSpan from './JobTimeSpan';
import NotablePointsList from './NotablePointsList';

interface IJobProps {
    work: IJob;
}

const Job = ({ work: { title, company, city, state, startDate, endDate, notablePoints } }: IJobProps) => (
    <div className={contentContainer}>
        <div className={`${content} -curved-border -layered-box-shadow`}>
            <h2>{title}</h2>
            <div className={`${companyClass} -small-text`}>
                {company} |<SingleWhiteSpace />
                <span className="-small-text -gray-text">{city}, {state}</span>
            </div>
            <JobTimeSpan startDate={startDate} endDate={endDate} />
            {notablePoints && <NotablePointsList notablePoints={notablePoints} />}
        </div>
    </div>
);

export default Job;