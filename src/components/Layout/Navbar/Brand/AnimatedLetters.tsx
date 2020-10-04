import React from 'react';
import AnimatedLetter from './AnimatedLetter';

const ANIMATION_DELAY = 50;

interface IAnimatedLettersProp {
    isHovered: boolean;
    letters: string[];
}

const AnimatedLetters = ({ isHovered, letters }: IAnimatedLettersProp) => (
    <>
        {letters.map((letter, i) => (
            <AnimatedLetter letter={letter} animationDelay={i * ANIMATION_DELAY} isHovered={isHovered} />
        ))}
    </>
);

export default AnimatedLetters;