import React from 'react';
import IconText from '../Shared/IconText';
import { FaGithub } from '@meronex/icons/fa';
import ImageTopCard from '../Shared/ImageTopCard';
import '../../styles/layout/_project.scss';

const Project = ({ project: { image, title, technologies, description, gitHubUrl } }) => (
    <ImageTopCard 
        image={image.childImageSharp.fluid}
        imageAltText={`${title} project`}
        className="col-lg-4 col-md-4 col-sm-6 col-xs-12 project-container margin-container upscale-container"
        hasInnerMargin
    >
        <LanguageTags technologies={technologies} />
        <h2>{title}</h2>
        <p>{description}</p>
        <a className="btn" href={gitHubUrl} aria-label={`Go to GitHub for my ${title} project`}>
            <IconText icon={<FaGithub />} text="GitHub" />
        </a>
    </ImageTopCard>
);

const LanguageTags = ({ technologies }) => (
    <ul className="language-tag">
        {technologies.map(technology => <li key={technology}>{technology}</li>)}
    </ul>
);

export default Project;