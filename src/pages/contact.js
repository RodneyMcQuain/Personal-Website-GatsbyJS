import React from 'react';
import Layout from '../components/Layout/layout';
import SEO from '../components/Shared/SEO';
import ContactForm from '../components/Contact/ContactForm';
import HeaderContentLayout from '../components/Layout/HeaderContentLayout';

const Contact = () => (
    <Layout>
        <SEO title="Contact" />
        <HeaderContentLayout title="Contact">
            <ContactForm />
        </HeaderContentLayout>
    </Layout>
);

export default Contact;