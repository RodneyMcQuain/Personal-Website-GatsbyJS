import React from 'react';
import { Document, Page } from 'react-pdf';
import Layout from '../components/Layout/layout';
import SEO from '../components/Shared/seo';
import { SizeMe } from 'react-sizeme';
import Icon from '../components/Shared/Icon';
import { FaDownload } from 'react-icons/fa';
import HeaderContentLayout from '../components/Layout/HeaderContentLayout';

const RESUME_FILE_NAME = "documents/Rodney McQuain - Resume 12-10-2018.pdf";

const Resume = () => (
    <Layout>
        <SEO title="Resume" />
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

            <button className="btn">
                <a href={RESUME_FILE_NAME} download>
                    <span>
                        <Icon icon={<FaDownload />} /> Download My Resume
                    </span>
                </a>
            </button>
        </HeaderContentLayout>
    </Layout>
);

export default Resume;