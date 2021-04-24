import React from 'react';
import { IconType } from '../../types/IconType';
import { icon as iconClass } from '../../styles/layout/components/Shared/Icon.module.scss';

interface IIconProps {
    icon: IconType;
    className?: string;
}

const Icon = ({ icon, className = '' }: IIconProps) => (
    <span aria-hidden='true' className={`icon ${iconClass} ${className}`}>{icon}</span>
); 

export default Icon;