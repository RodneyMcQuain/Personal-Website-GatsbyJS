import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Institution from './Institution';
import InViewAnimation from '../../InViewAnimation';

const Education = ({institutions}) => (
    <InViewAnimation>
        <div className="dark-section">
            <div className="container">
                <div className="page-header">
                    <h1 id="education">Education</h1>
                </div>

                {institutions.map(institution => <Institution key={institution.node.id} institution={institution.node} />)}
            </div>
        </div>
    </InViewAnimation>
);

export default () => (
    <StaticQuery
        query={graphql`
            query {    
                allInstitutionsJson {
                    edges {
                        node {
                            id
                            institution
                            image {
                                childImageSharp {
                                    fluid {
                                        ...GatsbyImageSharpFluid
                                    }
                                }
                            }
                            location
                            degree
                            graduationDate
                            gpa
                        }
                    }
                }
            }
        `}
        render={data => <Education institutions={data.allInstitutionsJson.edges} />}
    />
);