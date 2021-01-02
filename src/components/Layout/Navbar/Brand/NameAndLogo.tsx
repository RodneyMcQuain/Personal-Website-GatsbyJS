import React, { useEffect } from 'react';
import { useAddCssClass } from '../../../../services/useAddCssClass';
import AnimatedLetters from './AnimatedLetters';
import styles from '../../../../styles/layout/components/Layout/Navbar/Brand/NameAndLogo.module.scss';
const { logo, animate } = styles;

const name = "Rodney McQuain";
const letters = name.split("");

interface INameAndLogoProps {
    isHovered: boolean;
}

const NameAndLogo = ({ isHovered }: INameAndLogoProps) => {
    const [mightBeAnimated, shouldAnimate] = useAddCssClass(animate);
    useEffect(() => { isHovered && shouldAnimate(true); }, [isHovered, shouldAnimate]); 

    return (
        <span 
            className={`${logo} ${mightBeAnimated}`} 
            aria-label={name}             
            onAnimationIteration={() => !isHovered && shouldAnimate(false)}
        >
            <AnimatedLetters isHovered={isHovered} letters={letters} />
        </span>
    );
}

export default NameAndLogo;