import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import SkillSection from './SkillSection';
import InViewAnimation from '../../InViewAnimation';
import '../../../styles/layout/_technologies.scss';

const Skills = ({skills}) => (
    <InViewAnimation>    
        <div className="container">
            <div className="page-header">
                <h1 id="skills">Skills</h1>
            </div>

            {skills.map(skillSection => <SkillSection key={skillSection.node.id} skillSection={skillSection.node} />)} 
        </div>
    </InViewAnimation>
);

export default () => (
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