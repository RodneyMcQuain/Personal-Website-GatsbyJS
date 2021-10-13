import React from 'react';
import Img from 'gatsby-image';
import { AllChildren } from '../../types/AllChildren';
import { figure } from '../../styles/layout/components/Shared/Figure.module.scss';

interface FigureProps {
    className: string;
    imageClassName: string;
    altText: string;
    fluidImage: any;
    children: AllChildren;
}

const Figure = ({ className, imageClassName, fluidImage, altText, children }: FigureProps) => (
    <figure className={`${figure} ${className}`}>
        <Img fluid={fluidImage} className={`${imageClassName} -layered-box-shadow`} alt={altText} />
        <figcaption className="-small-text">
            <em>
                {children}
            </em>
        </figcaption>
    </figure>
);

export default Figure;
