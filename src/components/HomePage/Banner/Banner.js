import React, { useEffect } from 'react';
import { useAddCssClass } from '../../../services/useAddCssClass';
import ParametricCurves from './ParametricCurves';
import '../../../styles/layout/banner/_banner.scss';

const Banner = () => {
    const [fadeHeader, fadeTextAndButton] = useBannerFade();

    return (
        <header className="banner">
            <div className="banner-container col-xl-12 col-md-12 col-sm-12 col-xs-12">
                <h1 className={`banner-header banner-hide ${fadeHeader}`}>Rodney McQuain</h1>
                <p className={`banner-text banner-hide ${fadeTextAndButton}`}>
                    Hello, I am a computer science major looking for an opportunity
                    to test my skills and grow as a developer.
                </p>
                <div className={`banner-btn-container minor-pulse banner-hide ${fadeTextAndButton}`}>
                    <a className="banner-btn -curved-border" href="#about-me">
                        Learn About Me <span className="fa fa-chevron-down bounce" />
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