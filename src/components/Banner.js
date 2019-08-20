import React, { useEffect, useState } from 'react';

const backgroundImage = `
    linear-gradient(
        rgba(0, 0, 0, 0.5),
        rgba(0, 0, 0, 0.5)
    ), 
    url(code.jpg)
`;

const Banner = () => {
    const [fadeHeader, setFadeHeader] = useState("banner-hide");
    const [fadeTextAndButton, setFadeTextAndButton] = useState("banner-hide");

    useEffect(() => {
        const fadeHeaderTimer = setTimeout(() => setFadeHeader("banner-appear"), 250);
        const fadeTextAndButtonTimer = setTimeout(() => setFadeTextAndButton("banner-appear"), 1500);
  
        return () => {
            clearTimeout(fadeHeaderTimer);
            clearTimeout(fadeTextAndButtonTimer);        
        }
    }, []);

    return (
        <header 
        style={{ backgroundImage: backgroundImage }} 
        id="banner-img"
        >
            <div className="col-xl-12 col-md-12 col-sm-12 col-xs-12" id="banner-container">
                <h1 id="banner-header" className={fadeHeader}>Rodney McQuain</h1>
                <p id="banner-text" className={fadeTextAndButton}>
                    Hello, I am a computer science major looking for an opportunity
                    to test my skills and grow as a developer.
                </p>
                <div id="banner-btn-container" className={fadeTextAndButton}>
                    <a id="banner-btn" className="-curved-border" href="#about-me">
                        Learn About Me
                    </a>
                </div>
            </div>
        </header>
    )
};

export default Banner;