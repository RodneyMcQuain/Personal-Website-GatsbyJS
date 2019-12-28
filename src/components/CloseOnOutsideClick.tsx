import React, { ReactNode, useEffect, useRef } from 'react';
import { SetIsOpen } from '../types/SetIsOpen';

interface ICloseOnOutsideClickProps {
    children: ReactNode;
    setIsOpen: SetIsOpen;
    className: string;
}

const CloseOnOutsideClick = (
    { children, setIsOpen, className }: ICloseOnOutsideClickProps
): JSX.Element => {
    const wrapperRef = useRef<HTMLDivElement>(null);
    useOutsideClick(wrapperRef, setIsOpen);

    return <div ref={wrapperRef} className={className}>{children}</div>;
}

function useOutsideClick(ref: React.RefObject<HTMLDivElement>, setIsOpen: SetIsOpen) {
    function handleClickOutside(event: MouseEvent | any) {
        event.stopPropagation();

        if (!ref?.current.contains(event.target)) {
            for (const element of ref.current.children)
                element.classList.remove('open-navbar');
        
            setIsOpen(false);
        }
    }

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);
}

export default CloseOnOutsideClick;