import React from 'react';
import { MAIN_CONTENT_ID } from './mainContentId';
import styles from '../../styles/layout/components/Layout/SkipToContent.module.scss';

const SkipToContent = () => (
    <a href={`#${MAIN_CONTENT_ID}`} className={`${styles.skipToContent} -layered-box-shadow`}>Skip to Content</a>
);

export default SkipToContent;