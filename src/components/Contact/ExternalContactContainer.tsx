import React from 'react';
import GitHubFollowButton from './GitHubFollowButton';
import LinkedInConnectButton from './LinkedInConnectButton';
import { externalContactContainer } from '../../styles/layout/components/Contact/ExternalContactContainer.module.scss';

const ExternalContactContainer = () => (
    <div className={externalContactContainer}>
        <LinkedInConnectButton />
        <GitHubFollowButton />
    </div>
);

export default ExternalContactContainer;