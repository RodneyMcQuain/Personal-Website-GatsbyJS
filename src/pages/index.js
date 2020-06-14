import React from 'react';
import Layout from '../components/Layout/layout';
import SEO from '../components/Shared/seo';
import HomePage from '../components/HomePage/HomePage';

const IndexPage = () => (
    <Layout>
        <SEO title="Home Page" />
        <HomePage />
    </Layout>
)

export default IndexPage
