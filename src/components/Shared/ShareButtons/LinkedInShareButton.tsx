import React from 'react';
import ShareButton from './ShareButton';
import IconText from '../IconText';
import { linkedin } from '../../../styles/layout/components/Shared/ShareButtons/LinkedInShareButton.module.scss';
import LinkedInIcon from '../Icons/LinkedInIcon';

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