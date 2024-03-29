import React, { useEffect } from 'react';
import { useAddCssClass } from '../../../services/useAddCssClass';
import ParametricCurves from './ParametricCurves/ParametricCurves';
import CycleItems from './CycleItems';
import IconText from '../../Shared/IconText';
import { FaChevronDown } from '@meronex/icons/fa';
import SingleWhiteSpace from '../../Shared/SingleWhiteSpace';
import {
    banner,
    bannerContainer,
    bannerHeader,
    bannerText,
    bannerHide,
    bannerAppear,
    bounce,
    minorPulse,
    bannerButtonContainer,
    bannerButton,
    bannerButtonIcon,
} from '../../../styles/layout/components/HomePage/Banner/Banner.module.scss';

const itemsToCycle = [
    "a Software Generalist",
    "a Professional Namer of Things",
    "a Semi-Professional eSports Player",
    "an Empathetic Mentor",
    "a Pragmatic Nerd",
    "a Compendious Consultant",
    "a Feedback Seeker",
];

const HEADER_DISPLAY_DELAY_MS = 250;
const BUTTON_AND_TEXT_DISPLAY_DELAY_MS = HEADER_DISPLAY_DELAY_MS + 1250;

const Banner = () => {
    const [fadeHeader, fadeTextAndButton] = useBannerFade();

    return (
        <header className={banner}>
            <div className={`${bannerContainer} col-xl-12 col-md-12 col-sm-12 col-xs-12`}>
                <h1 className={`${bannerHeader} ${bannerHide} ${fadeHeader}`}>Rodney McQuain</h1>
                <p className={`${bannerText} ${bannerHide} ${fadeTextAndButton}`}>
                    Hello, I'm<SingleWhiteSpace /><CycleItems items={itemsToCycle} initialDelay={BUTTON_AND_TEXT_DISPLAY_DELAY_MS} />
                    <br />
                    Who's always looking for an opportunity to test my skills and grow
                </p>
                <div className={`${bannerButtonContainer} ${minorPulse} ${bannerHide} ${fadeTextAndButton}`}>
                    <a className={`${bannerButton} -curved-border`} href="#about-me">
                        <IconText
                            text="Learn About Me"
                            icon={<FaChevronDown />}
                            className={`${bannerButtonIcon} ${bounce}`}
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
    const [mightBeHeaderTransition, shouldAddHeaderTransition] = useAddCssClass(bannerAppear);
    const [mightBeTextAndButtonTransition, shouldAddTextAndButtonTransition] = useAddCssClass(bannerAppear);

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