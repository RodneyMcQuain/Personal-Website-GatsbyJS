import React from 'react';
import Icon from './Icon';
import { IconType } from '../../types/IconType';
import SingleWhiteSpace from './SingleWhiteSpace';

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

const IconBeforeText = ({ icon, text, className }) => <><Icon icon={icon} className={className} /><SingleWhiteSpace />{text}</>
const IconAfterText = ({ icon, text, className }) => <>{text}<SingleWhiteSpace /><Icon icon={icon} className={className} /></>

export default IconText;