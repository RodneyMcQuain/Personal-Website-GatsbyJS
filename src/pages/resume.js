import React from 'react';
import { Document, Page } from 'react-pdf';
import Layout from '../components/Layout/layout';
import SEO from '../components/Shared/SEO';
import { SizeMe } from 'react-sizeme';
import IconText from '../components/Shared/IconText';
import { FaDownload } from '@meronex/icons/fa';
import HeaderContentLayout from '../components/Layout/HeaderContentLayout';

const RESUME_FILE_NAME = "documents/Rodney McQuain - Resume 12-10-2018.pdf";

const Resume = () => (
    <Layout>
        <SEO title="Resume" shouldNotIndex />
        <HeaderContentLayout title="Resume">
            <SizeMe>
                {({ size }) => (
                    <Document file={RESUME_FILE_NAME}>
                        <Page
                            pageNumber={1}
                            width={size.width}
                        />
                    </Document>
                )}
            </SizeMe>

            <a className="btn -secondary-text" href={RESUME_FILE_NAME} download>
                <IconText icon={<FaDownload />} text="Download My Resume" />
            </a>
        </HeaderContentLayout>
    </Layout>
);

export default Resume;