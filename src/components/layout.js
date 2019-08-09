import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import '../styles/stylesheet.scss';
import 'bootstrap/dist/js/bootstrap.js';

const Layout = (props) => {
  const {children} = props;

  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
