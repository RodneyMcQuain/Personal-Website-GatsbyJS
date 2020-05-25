import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Institution from './Institution';
import InViewAnimation from '../../InViewAnimation';
import '../../../styles/layout/_education.scss';
import { EDUCATION_HASH } from '../../../services/homePageHashes';

const Education = ({ institutions }) => (
    <InViewAnimation>
        <div className="dark-section">
            <div className="container">
                <div className="page-header">
                    <h1 id={EDUCATION_HASH}>Education</h1>
                </div>

                {institutions.map(institution => <Institution key={institution.node.id} institution={institution.node} />)}
            </div>
        </div>
    </InViewAnimation>
);

const EducationStaticQuery = () => (
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

export default EducationStaticQuery;