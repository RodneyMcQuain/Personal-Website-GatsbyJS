import React from 'react';
import { Link } from 'gatsby';
import InViewAnimation from './InViewAnimation';
import ContactIcon from '../Contact/ContactIcon';
import { CONTACT_ROUTE } from '../../services/routes';
import styles from '../../styles/layout/components/Shared/ContactMe.module.scss';
const { contactMe, contactMeTextWrapper, contactMeText, contactMeButton } = styles;

const ContactMe = () => (
    <InViewAnimation>
        <section className={contactMe}>
            <hr />
            <div>
                <div className={contactMeTextWrapper}>
                    <div className={contactMeText}>Like what you see?</div>
                    <div className={contactMeText}>Have any advice or questions?</div>
                </div>
                <Link to={`/${CONTACT_ROUTE}`} className={`btn ${contactMeButton} -layered-box-shadow`}>
                    <ContactIcon /> Contact Me
                </Link>
            </div>
        </section>
    </InViewAnimation>
);

export default ContactMe;