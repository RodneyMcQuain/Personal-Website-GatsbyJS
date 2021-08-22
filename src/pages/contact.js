import React from 'react';
import Layout from '../components/Layout/layout';
import SEO from '../components/Shared/SEO';
import ContactForm from '../components/Contact/ContactForm';
import HeaderContentLayout from '../components/Layout/HeaderContentLayout';
import ExternalContactContainer from '../components/Contact/ExternalContactContainer';

const Contact = () => (
    <Layout>
        <SEO title="Contact" />
        <HeaderContentLayout title="Contact">
            <p className="-secondary-text">Feel free to reach out to me through my social media accounts or the email form below!</p>
            <ExternalContactContainer />
            <ContactForm />
        </HeaderContentLayout>
    </Layout>
);

export default Contact;