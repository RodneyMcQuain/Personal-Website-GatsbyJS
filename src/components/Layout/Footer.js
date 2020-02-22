import React from 'react';
import Icon from '../Icon';

const Footer = () => (
    <footer className="dark-section">
        <p className="footer-copyright">© {new Date().getFullYear()} Copyright: Rodney McQuain</p>

        <div className="footer-icons">
            <a className="btn footer-icon" href="https://github.com/RodneyMcQuain/" aria-label="Go to my GitHub" title="My GitHub">
                <Icon icon="fa fa-github" />
            </a>
            <a className="btn footer-icon" href="https://www.linkedin.com/in/rodneymcquain/" aria-label="Go to my LinkedIn" title="My LinkedIn">
                <Icon icon="fa fa-linkedin" />
            </a>
        </div>
    </footer>
);

export default Footer;