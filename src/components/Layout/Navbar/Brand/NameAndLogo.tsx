import React, { useState, useEffect } from 'react';
import { LETTER_ANIMATION_DURATION } from '../../../../styles/helpers/_variables.scss';

const LETTER_ANIMATION_DURATION_MS = Number(LETTER_ANIMATION_DURATION.replace("ms", ""));
const letters = ['R', 'o', 'd', 'n', 'e', 'y', ' ', 'M', 'c', 'Q', 'u', 'a', 'i', 'n'];
const ANIMATION_DELAY = 50;

interface INameAndLogoProps {
    isHovered: boolean;
}

const NameAndLogo = ({ isHovered }: INameAndLogoProps) => (
    <span className="logo">
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
        ? <span>&nbsp;</span>
        : <span className={isAnimated ? 'animate-letter' : ''}>{letter}</span>;
};

export default NameAndLogo;