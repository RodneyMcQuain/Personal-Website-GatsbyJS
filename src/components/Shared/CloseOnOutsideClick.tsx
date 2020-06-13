import React, { ReactNode, useEffect, useRef } from 'react';
import { SetIsOpen } from '../../types/SetIsOpen';

interface ICloseOnOutsideClickProps {
    children: ReactNode;
    setIsOpen: SetIsOpen;
    className?: string;
}

const CloseOnOutsideClick = (
    { children, setIsOpen, className }: ICloseOnOutsideClickProps
): JSX.Element => {
    const wrapperRef = useRef<HTMLDivElement>(null);
    useOutsideClick(wrapperRef, setIsOpen);

    return <div ref={wrapperRef} className={className}>{children}</div>;
}

const useOutsideClick = (ref: React.RefObject<HTMLDivElement>, setIsOpen: SetIsOpen) => {
    const handleClickOutside = (event: MouseEvent | any): void => {
        event.stopPropagation();

        if (!ref?.current.contains(event.target))
            setIsOpen(false);
    }

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);
}

export default CloseOnOutsideClick;