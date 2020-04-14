import React, { useState, useEffect } from 'react';
import { LETTER_ANIMATION_DURATION } from '../../../../styles/helpers/_variables.scss';

const LETTER_ANIMATION_DURATION_MS = Number(LETTER_ANIMATION_DURATION?.replace("ms", ""));
const name = "Rodney McQuain";
const letters = name.split("");
const ANIMATION_DELAY = 50;

interface INameAndLogoProps {
    isHovered: boolean;
}

const NameAndLogo = ({ isHovered }: INameAndLogoProps) => (
    <span className="logo" aria-label={name}>
        {letters.map((letter, i) => (
            <Letter letter={letter} animationDelay={i * ANIMATION_DELAY} isHovered={isHovered} />
        ))}
    </span>
);

interface ILetterProps {
    letter: string;
    animationDelay: number;
    isHovered: boolean;
}

const Letter = ({ letter, animationDelay, isHovered }: ILetterProps) => {
    const [isAnimated, setIsAnimated] = useState(false);

    useEffect(() => {
        if (isHovered && !isAnimated) {
            setTimeout(() => setIsAnimated(true), animationDelay);
            setTimeout(() => setIsAnimated(false), animationDelay + ANIMATION_DELAY + LETTER_ANIMATION_DURATION_MS);
        }
    }, [isHovered, animationDelay]);

    return letter === ' '
        ? <span aria-hidden="true">&nbsp;</span>
        : <span className={isAnimated ? 'animate-letter' : ''} aria-hidden="true">{letter}</span>;
};

export default NameAndLogo;