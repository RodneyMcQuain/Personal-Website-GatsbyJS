import React from 'react';

const Footer = () => (
    <footer className="dark-section">
        <div className="container">
            <p className="footer-copyright">© {new Date().getFullYear()} Copyright: Rodney McQuain</p>

            <div>
                <a className="btn footer-icon" href="https://github.com/RodneyMcQuain/" aria-label="Go to my GitHub" title="My GitHub">
                    <span className="fa fa-github"></span>
                </a>
                <a className="btn footer-icon" href="https://www.linkedin.com/in/rodneymcquain/" aria-label="Go to my LinkedIn" title="My LinkedIn">
                    <span className="fa fa-linkedin"></span>
                </a>
            </div>
        </div>
    </footer>
);

export default Footer;