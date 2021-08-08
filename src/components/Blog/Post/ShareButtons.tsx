import React from 'react';
import { shareButtonContainer } from '../../../styles/layout/components/Blog/Post/ShareButtons.module.scss';
import TwitterShareButton from '../../Shared/ShareButtons/TwitterShareButton';
import LinkedInShareButton from '../../Shared/ShareButtons/LinkedInShareButton';
import FacebookShareButton from '../../Shared/ShareButtons/FacebookShareButton';
import { graphql, useStaticQuery } from 'gatsby';

interface IShareButtonsProps {
    textContent: string;
    url: string;
    sharedMediaType: string;
}

const ShareButtons = ({ textContent, url, sharedMediaType }: IShareButtonsProps) => {
    const siteMetadata = useStaticQuery(siteMetadataQuery);
    const fullUrl = siteMetadata.site.siteMetadata.siteUrl + url;
    const encodedTitle = encodeURI(textContent);

    return (
        <div className={shareButtonContainer}>
            <TwitterShareButton encodedTextContent={encodedTitle} url={fullUrl} sharedMediaType={sharedMediaType} />
            <LinkedInShareButton url={fullUrl} sharedMediaType={sharedMediaType} />
            <FacebookShareButton url={fullUrl} sharedMediaType={sharedMediaType} />
        </div>
    );
}

const siteMetadataQuery = graphql`
    query {
        site {
            siteMetadata {
                siteUrl
            }
        }
    }
`;

export default ShareButtons;