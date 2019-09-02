import React from 'react';

const Footer = () => (
    <footer className="dark-section">
        <div className="row">
            <div className="col-sm-6">
                <p>© {new Date().getFullYear()} Copyright: Rodney McQuain</p>
            </div>

            <div className="col-sm-6">
                <a className="btn" href="https://github.com/RodneyMcQuain/" aria-label="Go to my GitHub">
                    <span className="fa fa-github"><span> My GitHub</span></span>
                </a>
                <a className="btn" href="https://www.linkedin.com/in/rodneymcquain/" aria-label="Go to my LinkedIn">
                    <span className="fa fa-linkedin"><span> My LinkedIn</span></span>
                </a>
            </div>
        </div>
    </footer>
);

export default Footer;