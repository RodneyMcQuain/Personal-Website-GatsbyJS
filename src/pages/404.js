import React from 'react';
import Layout from '../components/Layout/layout';
import SEO from '../components/seo';
import InViewAnimation from '../components/InViewAnimation';
import '../styles/layout/_404.scss';
import GameOfLife from '../components/404/GameOfLife';

const NotFoundPage = () => (
    <Layout>
        <InViewAnimation>
            <div className="not-found-container">
                <SEO title="404: Not found" />
                <h1 className="glitch" data-text="404">404</h1>
                <p>You just hit a route that doesn&#39;t exist...</p>
            </div>
            <GameOfLife />
        </InViewAnimation>
    </Layout>
)

export default NotFoundPage;
