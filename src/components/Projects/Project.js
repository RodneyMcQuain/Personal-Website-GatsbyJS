import React from 'react';
import IconText from '../Shared/IconText';
import ImageTopCard from '../Shared/ImageTopCard';
import ExternalLinkButton from '../Shared/ExternalLinkButton';
import { FaGithub } from '@meronex/icons/fa';
import MdcWeb from '@meronex/icons/mdc/MdcWeb';
import { projectContainer, projectLinkContainer, languageTag } from '../../styles/layout/components/Projects/Project.module.scss';

const Project = ({ project: { image, title, technologies, description, gitHubUrl, siteUrl } }) => (
    <ImageTopCard
        image={image.childImageSharp.fluid}
        imageAltText={`${title} project`}
        className={`${projectContainer} col-lg-4 col-md-4 col-sm-6 col-xs-12 margin-container upscale-container`}
        hasInnerMargin
    >
        <LanguageTags technologies={technologies} />
        <h2>{title}</h2>
        <p>{description}</p>
        <div className={projectLinkContainer}>
            {siteUrl && (
                <ExternalLinkButton href={siteUrl} ariaLabel={`Go to the live site for ${title}`}>
                    <IconText icon={<MdcWeb />} text="Live Site" />
                </ExternalLinkButton>
            )}
            <ExternalLinkButton href={gitHubUrl} ariaLabel={`Go to GitHub for my ${title} project`}>
                <IconText icon={<FaGithub />} text="GitHub" />
            </ExternalLinkButton>
        </div>
    </ImageTopCard>
);

const LanguageTags = ({ technologies }) => (
    <ul className={languageTag}>
        {technologies.map(technology => <li key={technology}>{technology}</li>)}
    </ul>
);

export default Project;