import React from 'react';
import SingleWhiteSpace from '../../Shared/SingleWhiteSpace';
import PaddingCard from '../../Shared/PaddingCard';
import JobTimeSpan from './JobTimeSpan';
import NotablePointsList from './NotablePointsList';
import { IJob } from './IJob';
import { contentContainer, content, company as companyClass } from '../../../styles/layout/components/HomePage/Work/Timeline.module.scss';

interface IJobProps {
    work: IJob;
}

const Job = ({ work: { title, company, city, state, startDate, endDate, notablePoints } }: IJobProps) => (
    <div className={contentContainer}>
        <PaddingCard className={content}>
            <h2>{title}</h2>
            <div className={`${companyClass} -small-text`}>
                {company} |<SingleWhiteSpace />
                <span className="-small-text -gray-text">{city}, {state}</span>
            </div>
            <JobTimeSpan startDate={startDate} endDate={endDate} />
            {notablePoints && <NotablePointsList notablePoints={notablePoints} />}
        </PaddingCard>
    </div>
);

export default Job;