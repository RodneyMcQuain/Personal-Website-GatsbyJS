import React from 'react';
import ShareButton from './ShareButton';
import IconText from '../IconText';
import LinkedInIcon from '../Icons/LinkedInIcon';
import { linkedin } from '../../../styles/layout/components/Shared/linkedInButtonStyle.module.scss';

interface ILinkedInShareButtonProps {
    url: string;
    sharedMediaType: string;
}

const LinkedInShareButton = ({ url, sharedMediaType }: ILinkedInShareButtonProps) => (
    <ShareButton 
        className={linkedin} 
        ariaLabel={`Share this ${sharedMediaType} on LinkedIn`} 
        href={`https://www.linkedin.com/shareArticle?url=${url}`}
    >
        <IconText icon={<LinkedInIcon />} text="Share" />
    </ShareButton>
);

export default LinkedInShareButton;