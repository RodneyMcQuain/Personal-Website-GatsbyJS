import React from 'react';
import SkillSection from './SkillSection';
import skills from '../../data/skills';

const Skills = () => (
    <section className="dark-section">
        <div className="container">
            <div className="page-header">
                <h1><span id="skills"></span>Skills</h1>
            </div>

            {skills.map(skillSection => <SkillSection key={skillSection.title} skillSection={skillSection} />)} 
        </div>
    </section>
);

export default Skills;