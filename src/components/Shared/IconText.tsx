import React from 'react';
import Icon from './Icon';
import { IconType } from '../../types/IconType';

type IconPosition = 'before' | 'after';

interface IIconTextProps {
    icon: IconType;
    text: string;
    className?: string;
    iconPosition?: IconPosition;
    ariaLabel?: string;
}

const IconText = ({
    icon,
    text,
    className,
    iconPosition = 'before',
}: IIconTextProps) => (
    <>
        {
            iconPosition === 'before'
                ? <IconBeforeText icon={icon} text={text} className={className} />
                : <IconAfterText icon={icon} text={text} className={className} />
        }
    </>
);

const IconBeforeText = ({ icon, text, className }) => <><Icon icon={icon} className={className} />{'\u00A0'}{text}</>
const IconAfterText = ({ icon, text, className }) => <>{text}{'\u00A0'}<Icon icon={icon} className={className} /></>

export default IconText;