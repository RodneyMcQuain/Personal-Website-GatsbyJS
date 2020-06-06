import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Institution from './Institution';
import '../../../styles/layout/_education.scss';
import { EDUCATION_HASH } from '../../../services/homePageHashes';
import HeaderContentLayout from '../../Layout/HeaderContentLayout';

const Education = ({ institutions }) => (
    <HeaderContentLayout title="Education" id={EDUCATION_HASH} isDark={true}>
        {institutions.map(institution => <Institution key={institution.node.id} institution={institution.node} />)}
    </HeaderContentLayout>
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