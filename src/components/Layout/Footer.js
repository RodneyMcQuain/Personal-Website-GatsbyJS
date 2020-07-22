import React from 'react';
import Icon from '../Shared/Icon';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import '../../styles/layout/_footer.scss';

const Footer = () => (
    <footer className="dark-section">
        <p className="footer-copyright">© 2018-{new Date().getFullYear()} Rodney McQuain</p>

        <div className="footer-icons">
            <a className="btn footer-icon" href="https://github.com/RodneyMcQuain/" aria-label="Go to my GitHub" title="My GitHub">
                <Icon icon={<FaGithub />} />
            </a>
            <a className="btn footer-icon" href="https://www.linkedin.com/in/rodneymcquain/" aria-label="Go to my LinkedIn" title="My LinkedIn">
                <Icon icon={<FaLinkedinIn />} />
            </a>
        </div>
    </footer>
);

export default Footer;