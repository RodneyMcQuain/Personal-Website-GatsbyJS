import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import SkillSection from './SkillSection';
import { SKILLS_HASH } from '../../../services/homePageHashes';
import HeaderContentLayout from '../../Layout/HeaderContentLayout';

const Skills = ({ skills }) => (
    <HeaderContentLayout title="Skills" id={SKILLS_HASH} isDark>
        <div class="row display-flex">
            {skills.map(skillSection => <SkillSection key={skillSection.node.id} skillSection={skillSection.node} />)}
        </div>
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