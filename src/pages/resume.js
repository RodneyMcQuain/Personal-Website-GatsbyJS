import React from 'react';
import Layout from '../components/Layout/layout';
import SEO from '../components/Shared/SEO';
import IconText from '../components/Shared/IconText';
import { FaDownload } from '@meronex/icons/fa';
import HeaderContentLayout from '../components/Layout/HeaderContentLayout';

const RESUME_FILE_PATH = "/documents/Rodney McQuain - Resume - August 2022.pdf";

const Resume = () => (
    <Layout>
        <SEO title="Resume" />
        <HeaderContentLayout title="Resume">
            <embed src={RESUME_FILE_PATH} width="100%" height="800rem" />
            <br />
            <a className="btn -secondary-text" href={RESUME_FILE_PATH} download>
                <IconText icon={<FaDownload />} text="Download My Resume" />
            </a>
        </HeaderContentLayout>
    </Layout>
);

export default Resume;