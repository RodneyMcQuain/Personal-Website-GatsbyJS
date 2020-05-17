import React from 'react';
import Icon from './Icon';

interface IIconTextProps {
    icon: string;
    text: string;
}

const IconText = ({ icon, text }: IIconTextProps) => (
    <span>
        <Icon icon={icon} />&nbsp;{text}
    </span>
);

export default IconText;