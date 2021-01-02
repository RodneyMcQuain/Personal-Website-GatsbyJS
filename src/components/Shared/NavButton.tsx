import React from 'react';
import { SetIsOpen } from '../../types/SetIsOpen';
import Icon from './Icon';
import IconText from '../Shared/IconText';
import { FaTimes } from '@meronex/icons/fa';
import { IconType } from '../../types/IconType';
import styles from '../../styles/layout/components/Shared/NavButton.module.scss';
const { navButton, clicked } = styles;

interface INavButtonProps {
    isOpen: boolean;
    setIsOpen: SetIsOpen;
    openIcon?: IconType;
    closedIcon: IconType;
    text?: string;
    extraClasses: string;
    ariaLabel: string;
}

const NavButton = ({
    isOpen,
    setIsOpen,
    openIcon = <FaTimes />,
    closedIcon,
    text = null,
    extraClasses,
    ariaLabel
}: INavButtonProps) => {
    const icon = isOpen ? openIcon : closedIcon;
    const className = isOpen ? clicked : '';

    return (
        <button
            className={`${navButton} ${extraClasses}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label={`Show ${ariaLabel}`}
            aria-expanded={isOpen}
        >
            {
                text
                    ? (
                        <IconText
                            icon={icon}
                            text={text}
                            className={className}
                            iconPosition='after'
                        />
                    )
                    : (
                        <Icon
                            icon={icon}
                            className={className}
                        />
                    )
            }
        </button>
    );
}


export default NavButton;