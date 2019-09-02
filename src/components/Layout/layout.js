import React, { useState, useEffect } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import Preloader from './Preloader';
import '../../styles/stylesheet.scss';

const Layout = ({children}) => {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setIsLoading(false);
    }, []);

    return isLoading 
        ? <Preloader />
        : (
            <>
                <Navbar />
                <main>{children}</main>
                <Footer />
            </>
        );
};

export default Layout;
