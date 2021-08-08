import React from 'react';
import FacebookIcon from '../Icons/FacebookIcon';
import IconText from '../IconText';
import { facebook } from '../../../styles/layout/components/Shared/ShareButtons/FacebookShareButton.module.scss';
import ShareButton from './ShareButton';

interface IFacebookShareButtonProps {
    url: string;
    sharedMediaType: string;
}

const FacebookShareButton = ({ url, sharedMediaType }: IFacebookShareButtonProps) => (
    <ShareButton 
        className={facebook}    
        ariaLabel={`Share this ${sharedMediaType} on Facebook`} 
        href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}
    >
        <IconText icon={<FacebookIcon />} text="Share" />
    </ShareButton>
);

export default FacebookShareButton;