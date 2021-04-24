import React, { useState, useEffect} from 'react'
import SingleWhiteSpace from '../../../Shared/SingleWhiteSpace';
import { animateLetter } from '../../../../styles/layout/components/Layout/Navbar/Brand/AnimatedLetter.module.scss';
import { LETTER_ANIMATION_DURATION_MS } from '../../../../styles/helpers/variables/variables';

interface IAnimatedLetterProps {
    letter: string;
    animationDelay: number;
    isHovered: boolean;
}

const AnimatedLetter = ({ letter, animationDelay, isHovered }: IAnimatedLetterProps) => {
    const [isAnimated, setIsAnimated] = useState(false);

    useEffect(() => {
        if (isHovered && !isAnimated) {
            console.log(LETTER_ANIMATION_DURATION_MS);
            setTimeout(() => setIsAnimated(true), animationDelay);
            setTimeout(() => setIsAnimated(false), animationDelay + LETTER_ANIMATION_DURATION_MS);
        }
    }, [isHovered, animationDelay]);

    return letter === ' '
        ? <span aria-hidden="true"><SingleWhiteSpace /></span>
        : <span className={isAnimated ? animateLetter : ''} aria-hidden="true">{letter}</span>;
};

export default AnimatedLetter;