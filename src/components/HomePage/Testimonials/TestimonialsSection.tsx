import React from 'react';
import HeaderContentLayout from '../../Layout/HeaderContentLayout';
import { TESTIMONIALS_HASH } from '../../../services/homePageHashes';
import Testimonials from './Testimonials';

const TestimonialsSection = () => (
    <HeaderContentLayout title="Testimonials" id={TESTIMONIALS_HASH} isDark>
        <p className="-secondary-text">A condensed collection of quotes from a past annual review by my peers.</p>
        <Testimonials />
    </HeaderContentLayout>
);

export default TestimonialsSection;