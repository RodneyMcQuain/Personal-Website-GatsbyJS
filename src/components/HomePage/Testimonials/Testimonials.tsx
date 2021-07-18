import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import Testimonial from './Testimonial';
import { Testimonial as TestimonialType } from './TestimonialTypes';

interface TestimonialsProps {
    testimonials: TestimonialType[];
}

const Testimonials = ({ testimonials }: TestimonialsProps) => (
    <div className="row display-flex">
        {testimonials.map(t => <Testimonial key={t.id} testimonial={t} />)}
    </div>
);

const TestimonialsStaticQuery = () => (
    <StaticQuery
        query={graphql`
            query {    
                allTestimonialsJson {
                    edges {
                        node {
                            id
                            quote
                        }
                    }
                }
            }
        `}
        render={data => <Testimonials testimonials={data.allTestimonialsJson.edges.map(e => e.node)} />}
    />
);

export default TestimonialsStaticQuery;