import React from 'react';
import TwitterIcon from '../Icons/TwitterIcon';
import IconText from '../IconText';
import ShareButton from './ShareButton';
import { twitter } from '../../../styles/layout/components/Shared/ShareButtons/TwitterShareButton.module.scss';

interface ITwitterShareButtonProps {
    encodedTextContent: string;
    url: string;
    sharedMediaType: string;
}

const TwitterShareButton = ({ encodedTextContent, url, sharedMediaType }: ITwitterShareButtonProps) => (
    <ShareButton 
        className={twitter} 
        ariaLabel={`Share this ${sharedMediaType} on Twitter`} 
        href={`https://twitter.com/intent/tweet?text=${encodedTextContent}&url=${url}`}
    >
        <IconText icon={<TwitterIcon />} text="Share" />
    </ShareButton>
);

export default TwitterShareButton;