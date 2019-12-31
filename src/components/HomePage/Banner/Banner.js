import React, { useEffect } from 'react';
import { useAddCssClass } from '../../../services/useAddCssClass';
import ParametricCurves from './ParametricCurves';

const Banner = () => {
    const [fadeHeader, fadeTextAndButton] = useBannerFade();

    return (
        <header id="banner">
            <div className="col-xl-12 col-md-12 col-sm-12 col-xs-12" id="banner-container">
                <h1 id="banner-header" className={`banner-hide ${fadeHeader}`}>Rodney McQuain</h1>
                <p id="banner-text" className={`banner-hide ${fadeTextAndButton}`}>
                    Hello, I am a computer science major looking for an opportunity
                    to test my skills and grow as a developer.
                </p>
                <div id="banner-btn-container" className={`minor-pulse banner-hide ${fadeTextAndButton}`}>
                    <a id="banner-btn" className="-curved-border" href="#about-me">
                        Learn About Me
                    </a>
                </div>
            </div>
            <ParametricCurves />
        </header>
    )
};

const useBannerFade = () => {
    const [mightBeHeaderTransition, shouldAddHeaderTransition] = useAddCssClass("banner-appear");
    const [mightBeTextAndButtonTransition, shouldAddTextAndButtonTransition] = useAddCssClass("banner-appear");

    useEffect(() => {
        const headerTimer = setTimeout(() => shouldAddHeaderTransition(true), 250);
        const textAndButtonTimer = setTimeout(() => shouldAddTextAndButtonTransition(true), 1500);
  
        return () => {
            clearTimeout(headerTimer);
            clearTimeout(textAndButtonTimer);        
        }
    }, []);

    return [mightBeHeaderTransition, mightBeTextAndButtonTransition];
};

export default Banner;