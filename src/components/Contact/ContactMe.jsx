import React from 'react';
import { Link } from 'gatsby';
import InViewAnimation from '../InViewAnimation';
import ContactIcon from './ContactIcon';
import '../../styles/layout/_contact-me.scss';
import { CONTACT_ROUTE } from '../../services/routes';

const ContactMe = () => (
    <InViewAnimation>
        <section className="contact-me">
            <hr />
            <div>
                <div className="contact-me-text-wrapper">
                    <div className="contact-me-text">Like what you see?</div>
                    <div className="contact-me-text">Have any advice or questions?</div>
                </div>
                <Link to={`/${CONTACT_ROUTE}`} className="btn contact-me-btn minor-pulse">
                    <ContactIcon /> Contact Me
                </Link>
            </div>
        </section>
    </InViewAnimation>
);

export default ContactMe;