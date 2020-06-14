import React from 'react';

const SkillSection = ({ skillSection: { title, skills} }) => (
    <div className="-top-margin col-lg-4 col-md-4 col-sm-4 col-xs-12">
        <h2 className="-left-align skill-section-title">{title}</h2>
        <ul className="skill-section-list">
            {skills.map(skill => <li className="item -left-align" key={skill}>{skill}</li>)}
        </ul>
    </div>
);

export default SkillSection;