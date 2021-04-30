import React from 'react'
import Img from 'gatsby-image';
import { imageTopCard, contentPadding, innerMargin } from '../../styles/layout/components/Shared/ImageTopCard.module.scss';
import { AllChildren } from '../../types/AllChildren';

interface IImageTopCardProps {
    children: AllChildren;
    image: any;
    imageAltText: string;
    className?: string;
    hasInnerMargin?: boolean;
}

const ImageTopCard = ({ children, image, imageAltText, className = '', hasInnerMargin = false }: IImageTopCardProps) => (
    <div className={`${imageTopCard} ${className}`}>
        <div className="-curved-border -layered-box-shadow">
            <Img fluid={image} className="container-top-image" alt={imageAltText} />
            <div className={`${contentPadding} ${hasInnerMargin ? innerMargin : ''}`}>
                {children}
            </div>
        </div>
    </div>
);

export default ImageTopCard;