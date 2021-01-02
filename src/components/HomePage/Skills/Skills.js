import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import SkillSection from './SkillSection';
import { SKILLS_HASH } from '../../../services/homePageHashes';
import HeaderContentLayout from '../../Layout/HeaderContentLayout';

const Skills = ({ skills }) => (
    <HeaderContentLayout title="Skills" id={SKILLS_HASH} isDark>
        {skills.map(skillSection => <SkillSection key={skillSection.node.id} skillSection={skillSection.node} />)}
    </HeaderContentLayout>
);

const SkillsStaticQuery = () => (
    <StaticQuery
        query={graphql`
            query {    
                allSkillsJson {
                    edges {
                        node {
                            id
                            title
                            skills
                        }
                    }
                }
            }
        `}
        render={data => <Skills skills={data.allSkillsJson.edges} />}
    />
);

export default SkillsStaticQuery;