import React from 'react';
import Layout from '../components/Layout/layout';
import SEO from '../components/Shared/SEO';
import InViewAnimation from '../components/Shared/InViewAnimation';
import { notFoundContainer, glitch } from '../styles/layout/pages/404.module.scss';
import GameOfLife from '../components/404/GameOfLife';

const NotFoundPage = () => (
    <Layout>
        <InViewAnimation>
            <div className={notFoundContainer}>
                <SEO title="404: Not found" />
                <h1 className={glitch} data-text="404">404</h1>
                <p>You just hit a route that doesn&#39;t exist...</p>
            </div>
            <GameOfLife className="-offset-by-footer" />
        </InViewAnimation>
    </Layout>
)

export default NotFoundPage;
