import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import InViewAnimation from '../../InViewAnimation';
import Job from './Job';
import { IJob } from './IJob';
import '../../../styles/layout/_timeline.scss';

interface IWorkTimelineProps {
    work: INode[];
}

interface INode {
    node: IJob;
}

const Timeline = ({ work }: IWorkTimelineProps) => (
    <InViewAnimation>
        <div className="container">
            <div className="page-header">
                <h1 id="work-experience">Work Experience</h1>
            </div>

            <div className="timeline">
                {work.map(({ node }) => <Job work={node} />)}
            </div>
        </div>
    </InViewAnimation>
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