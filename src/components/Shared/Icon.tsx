import React from 'react';
import { IconType } from '../../types/IconType';
import '../../styles/layout/_icon.scss';

interface IIconProps {
    icon: IconType;
    className?: string;
}

const Icon = ({ icon, className = '' }: IIconProps) => (
    <span aria-hidden='true' className={`icon ${className}`}>{icon}</span>
); 

export default Icon;