import React from 'react';
import Card from '../../Shared/Card';
import { Testimonial as TestimonialType } from './TestimonialTypes';
import { testimonialQuote, testimonialCard } from '../../../styles/layout/components/HomePage/Testimonials/Testimonial.module.scss';

interface TestimonialProps {
    testimonial: TestimonialType;
}

const Testimonial = ({ testimonial }: TestimonialProps) => (
    <div className="margin-container col-xs-12 col-sm-6 col-md-4 col-lg-4">
        <Card className={`${testimonialCard}`}>
            <blockquote className={`${testimonialQuote} -secondary-text`}>{testimonial.quote}</blockquote>
        </Card>
    </div>
);

export default Testimonial;