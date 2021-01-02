import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar/Navbar';
import '../../styles/stylesheet.scss';
import { MAIN_CONTENT_ID } from './mainContentId';
import SkipToContent from './SkipToContent';

const Layout = ({ children }) => (
    <>
        <SkipToContent />
        <Navbar />
        <main id={MAIN_CONTENT_ID}>{children}</main>
        <Footer />
    </>
);

export default Layout;
