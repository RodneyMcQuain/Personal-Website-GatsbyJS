import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import '../styles/stylesheet.scss';

const Layout = ({children}) => (
    <>
        <Navbar />
        <main>{children}</main>
        <Footer />
    </>
);

export default Layout;
