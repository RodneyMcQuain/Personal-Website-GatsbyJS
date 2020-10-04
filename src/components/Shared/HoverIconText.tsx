import React from 'react'
import AriaText from './AriaText';
import IconText from './IconText';
import { IconType } from '../../types/IconType';

interface IHoverIconText {
    icon: IconType;
    displayText: string;
    altText: string;
    className?: string;
}

const HoverIconText = ({ icon, displayText, altText, className }: IHoverIconText) => (
    <AriaText altText={altText} className={className}>
        <IconText icon={icon} text={displayText} />
    </AriaText>
);

export default HoverIconText;