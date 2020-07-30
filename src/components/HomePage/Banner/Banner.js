import React, { useEffect } from 'react';
import { useAddCssClass } from '../../../services/useAddCssClass';
import ParametricCurves from './ParametricCurves';
import CycleItems from './CycleItems';
import IconText from '../../Shared/IconText';
import { FaChevronDown } from 'react-icons/fa';
import SingleWhiteSpace from '../../Shared/SingleWhiteSpace';
import '../../../styles/layout/banner/_banner.scss';

const itemsToCycle = [
    "Full-Stack Web Developer",
    "Competitive Super Smash Bros. Melee Player",
    "Computer Science Student",
];

const HEADER_DISPLAY_DELAY_MS = 250;
const BUTTON_AND_TEXT_DISPLAY_DELAY_MS = HEADER_DISPLAY_DELAY_MS + 1250;

const Banner = () => {
    const [fadeHeader, fadeTextAndButton] = useBannerFade();

    return (
        <header className="banner">
            <div className="banner-container col-xl-12 col-md-12 col-sm-12 col-xs-12">
                <h1 className={`banner-header banner-hide ${fadeHeader}`}>Rodney McQuain</h1>
                <p className={`banner-text banner-hide ${fadeTextAndButton}`}>
                    Hello, I'm a<SingleWhiteSpace /><CycleItems items={itemsToCycle} initialDelay={BUTTON_AND_TEXT_DISPLAY_DELAY_MS} />
                    <div>
                        Who's always looking for an opportunity to test my skills and grow
                    </div>
                </p>
                <div className={`banner-btn-container minor-pulse banner-hide ${fadeTextAndButton}`}>
                    <a className="banner-btn -curved-border" href="#about-me">
                        <IconText 
                            text="Learn About Me" 
                            icon={<FaChevronDown />} 
                            className="banner-btn-icon bounce" 
                            iconPosition="after" 
                        />
                    </a>
                </div>
            </div>
            <ParametricCurves />
        </header>
    );
};

const useBannerFade = () => {
    const [mightBeHeaderTransition, shouldAddHeaderTransition] = useAddCssClass("banner-appear");
    const [mightBeTextAndButtonTransition, shouldAddTextAndButtonTransition] = useAddCssClass("banner-appear");

    useEffect(() => {
        const headerTimer = setTimeout(() => shouldAddHeaderTransition(true), HEADER_DISPLAY_DELAY_MS);
        const textAndButtonTimer = setTimeout(() => shouldAddTextAndButtonTransition(true), BUTTON_AND_TEXT_DISPLAY_DELAY_MS);

        return () => {
            clearTimeout(headerTimer);
            clearTimeout(textAndButtonTimer);
        }
    }, []);

    return [mightBeHeaderTransition, mightBeTextAndButtonTransition];
};

export default Banner;