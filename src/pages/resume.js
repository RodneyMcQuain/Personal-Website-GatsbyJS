import React, { useState } from 'react';
import { Document, Page } from "react-pdf";
import Layout from '../components/layout';
import InViewAnimation from '../components/InViewAnimation';
import SEO from '../components/seo';
import { SizeMe } from 'react-sizeme'

const RESUME_FILE_NAME = "documents/Rodney McQuain - Resume 12-10-2018.pdf";

const Resume = () => (
    <Layout>
        <InViewAnimation>
            <SEO title="Rodney McQuain - Resume" />
            <div className="container">
                <div className="page-header">
                    <h1>Resume</h1>
                </div>

                <SizeMe>
                    {({size}) => (
                        <Document 
                            className={loadedClassName} 
                            file={RESUME_FILE_NAME}
                            onLoadSuccess={() => setLoadedClassName("resume")}
                        >
                            <Page 
                                pageNumber={1}
                                width={size.width}
                            />
                        </Document>
                    )}
                </SizeMe>

                <button className="btn">
                    <a href={RESUME_FILE_NAME} download>
                        <span className="fa fa-download">
                            <span> Download My Resume</span>
                        </span>
                    </a>
                </button>
            </div>
        </InViewAnimation>
    </Layout>
);

export default Resume;