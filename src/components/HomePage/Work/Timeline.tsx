import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Job from './Job';
import { IJob } from './IJob';
import { WORK_HASH } from '../../../services/homePageHashes';
import HeaderContentLayout from '../../Layout/HeaderContentLayout';
import { timeline } from '../../../styles/layout/components/HomePage/Work/Timeline.module.scss';

interface IWorkTimelineProps {
    work: INode[];
}

interface INode {
    node: IJob;
}

const Timeline = ({ work }: IWorkTimelineProps) => (
    <HeaderContentLayout title="Work Experience" id={WORK_HASH}>
        <div className={timeline}>
            {work.map(({ node }) => <Job work={node} />)}
        </div>
    </HeaderContentLayout>
);

const WorkTimelineStaticQuery = () => (
    <StaticQuery
        query={graphql`
            query {    
                allWorkJson(sort: {fields: startDate, order: DESC}) {
                    edges {
                        node {
                            id
                            company
                            title
                            description
                            startDate(formatString: "MMMM DD, YYYY")
                            endDate(formatString: "MMMM DD, YYYY")
                            city
                            state
                        }
                    }
                }
            }
        `}
        render={data => <Timeline work={data.allWorkJson.edges} />}
    />
);

export default WorkTimelineStaticQuery;