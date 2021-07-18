import React from 'react';
import { AllChildren } from '../../types/AllChildren';
import Card from './Card';

interface PaddingCardProps {
    children: AllChildren;
    className?: string;
}

const PaddingCard = ({ children, className = '' }: PaddingCardProps) => (
    <Card className={`padding-container ${className}`}>
        {children}
    </Card>
);

export default PaddingCard;