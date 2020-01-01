import React from 'react';
import InViewAnimation from '../components/InViewAnimation';
import Layout from '../components/Layout/layout';
import SEO from '../components/seo';
import ContactForm from '../components/Contact/ContactForm';

const Contact = () => (
    <Layout>
        <InViewAnimation>
            <SEO title="Contact" />
            <div className="container">
                <div className="page-header">
                    <h1 id="contact">Contact</h1>
                </div>

                <ContactForm />
            </div>
        </InViewAnimation>
    </Layout>
);

export default Contact;