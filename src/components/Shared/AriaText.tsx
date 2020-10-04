import React, { ReactNode } from 'react';

interface IAriaTextProps {
    children: ReactNode;
    altText: string;
    className: string;
}

const AriaText = ({ children, altText, className }: IAriaTextProps) => (
    <span 
        data-title={altText}
        role="text"
        aria-label={altText}
        className={className}
    >
        {children}
    </span>
);

export default AriaText;