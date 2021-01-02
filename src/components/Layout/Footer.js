import React from 'react';
import Icon from '../Shared/Icon';
import { FaGithub, FaLinkedinIn } from '@meronex/icons/fa';
import styles from '../../styles/layout/components/Layout/Footer.module.scss';
const { footer, footerIcons, footerCopyright, footerIcon } = styles;

const Footer = () => (
    <footer id={footer} className="dark-section">
        <p className={footerCopyright}>© 2018-{new Date().getFullYear()} Rodney McQuain</p>

        <div className={footerIcons}>
            <a className={`btn ${footerIcon}`} href="https://github.com/RodneyMcQuain/" aria-label="Go to my GitHub" title="My GitHub">
                <Icon icon={<FaGithub />} />
            </a>
            <a className={`btn ${footerIcon}`} href="https://www.linkedin.com/in/rodneymcquain/" aria-label="Go to my LinkedIn" title="My LinkedIn">
                <Icon icon={<FaLinkedinIn />} />
            </a>
        </div>
    </footer>
);

export default Footer;