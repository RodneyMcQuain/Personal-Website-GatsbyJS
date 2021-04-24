import React from 'react';
import { skillSectionTitle, skillSectionList, item } from '../../../styles/layout/components/HomePage/Skills/SkillsSection.module.scss';

const SkillSection = ({ skillSection: { title, skills} }) => (
    <div className="-top-margin col-lg-4 col-md-4 col-sm-4 col-xs-12">
        <h2 className={`-left-align ${skillSectionTitle}`}>{title}</h2>
        <ul className={skillSectionList}>
            {skills.map(skill => <li className={`${item} -left-align`} key={skill}>{skill}</li>)}
        </ul>
    </div>
);

export default SkillSection;