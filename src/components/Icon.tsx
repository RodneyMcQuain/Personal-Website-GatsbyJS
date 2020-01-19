import React from 'react';

interface IIconProps {
    icon: string;
}

const Icon = ({ icon }: IIconProps) => <span className={icon} aria-hidden='true' />;

export default Icon;