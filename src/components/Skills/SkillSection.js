import React from 'react';

const SkillSection = ({skillSection}) => (
    <div className="-top-margin col-lg-4 col-md-4 col-sm-4 col-xs-12">
        <h2>{skillSection.title}</h2>
        <ul className="technologies">
            {skillSection.skills.map(skill => <li key={skill}>{skill}</li>)}
        </ul>
    </div>
);

export default SkillSection;