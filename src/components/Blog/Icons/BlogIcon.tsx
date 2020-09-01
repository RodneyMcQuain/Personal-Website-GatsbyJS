import React from 'react'
import AriaText from '../../Shared/AriaText';
import IconText from '../../Shared/IconText';
import { IconType } from '../../../types/IconType';

interface IBlogIcon {
    icon: IconType;
    displayText: string;
    altText: string;
}

const BlogIcon = ({ icon, displayText, altText }: IBlogIcon) => (
    <AriaText altText={altText} className="-small-text -minor-vertical-padding">
        <IconText icon={icon} text={displayText} />
    </AriaText>
);

export default BlogIcon;