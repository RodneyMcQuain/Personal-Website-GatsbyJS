import React from 'react';
import { AllChildren } from '../../types/AllChildren';

interface CardProps {
    children: AllChildren;
    className?: string;
}

const Card = ({ children, className = '' }: CardProps) => (
    <div className={`-curved-border -layered-box-shadow ${className}`}>{children}</div>
);

export default Card;