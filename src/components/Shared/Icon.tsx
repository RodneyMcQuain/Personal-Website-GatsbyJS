import React from 'react';
import { IconType } from '../../types/IconType';
import styles from '../../styles/layout/components/Shared/Icon.module.scss';

interface IIconProps {
    icon: IconType;
    className?: string;
}

const Icon = ({ icon, className = '' }: IIconProps) => (
    <span aria-hidden='true' className={`icon ${styles.icon} ${className}`}>{icon}</span>
); 

export default Icon;