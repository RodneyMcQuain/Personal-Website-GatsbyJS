import React from 'react';
import '../../styles/layout/_preloader.scss';

const Preloader = () => (
    <div id="preloader-overlay">
        <div id="preloader-wrapper">
            <div id="preloader-spinner">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    </div>
);

export default Preloader;