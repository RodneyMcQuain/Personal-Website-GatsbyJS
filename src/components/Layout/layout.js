import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar/Navbar';
import '../../styles/stylesheet.scss';
import '../../styles/layout/_skip-to-content.scss';

const MAIN_CONTENT_ID = 'main-content';

const Layout = ({ children }) => (
    <>
        <SkipToContent />
        <Navbar />
        <main id={MAIN_CONTENT_ID}>{children}</main>
        <Footer />
    </>
);

const SkipToContent = () => (
    <a href={`#${MAIN_CONTENT_ID}`} className={"skip-to-content -layered-box-shadow"}>Skip to Content</a>
);

export default Layout;
