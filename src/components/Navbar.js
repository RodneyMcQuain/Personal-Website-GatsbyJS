import React from 'react';
import Scrollspy from 'react-scrollspy';
import { Link } from 'gatsby';

const Navbar = () => (
    <nav className="navbar navbar-fixed-top navbar-inverse" id="nav-parent">
        <div id="scroll-indicator"></div>
        <div className="container-fluid">
            <div className="navbar-header">
                <button 
                    className="navbar-toggle" 
                    data-toggle="collapse" 
                    data-target="#nav-child" 
                    aria-label="Dropdown for navigation bar"
                >
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
            </div>

            <div>
                <div className="collapse navbar-collapse" id="nav-child">
                    <Scrollspy 
                        className="nav navbar-nav"
                        items={['about-me', 'education', 'projects', 'skills']} 
                        currentClassName='active'
                    >
                        <li><Link className="anchor" to={'/blog-posts'}>
                            <span className="fa fa-pencil"><span> Blog</span></span>
                        </Link></li>
                        <li><Link className="anchor" to={'/#about-me'}>About Me</Link></li>
                        <li><Link className="anchor" to={'/#education'}>Education</Link></li>
                        <li><Link className="anchor" to={'/#projects'}>Projects</Link></li>
                        <li><Link className="anchor" to={'/#skills'}>Skills</Link></li>
                        <li><Link className="anchor" to={'/#contact'}>Contact</Link></li>
                        <li><a className="anchor" href="assets/documents/Resume Updated 12-10-2018.pdf" download>
                            <span className="fa fa-download"><span> Resume</span></span>
                        </a></li>
                    </Scrollspy>
                </div>
            </div>
        </div>
    </nav>
);

export default Navbar;