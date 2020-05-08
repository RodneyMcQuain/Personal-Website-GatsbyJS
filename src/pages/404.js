import React from 'react';
import Layout from '../components/Layout/layout';
import SEO from '../components/seo';
import InViewAnimation from '../components/InViewAnimation';
import '../styles/layout/_404.scss';

const NotFoundPage = () => (
    <Layout>
        <InViewAnimation>
            <div className="padding-container">
                <SEO title="404: Not found" />
                <h1 className="glitch" data-text="404">404</h1>
                <p>You just hit a route that doesn&#39;t exist...</p>
            </div>
        </InViewAnimation>
    </Layout>
)

export default NotFoundPage
