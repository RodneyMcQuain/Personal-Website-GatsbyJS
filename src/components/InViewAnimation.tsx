import React, { useEffect, useRef, RefObject } from "react"
import { useAddCssClass } from "../services/useAddCssClass";

interface IInViewAnimationProps {
    children: JSX.Element;
    className?: string;
}

type ContainerElement = HTMLElement;

const InViewAnimation = ({ children, className }: IInViewAnimationProps) => {
    const containerRef = useRef<ContainerElement>();
    const inViewAppear = useScrollAnimation(containerRef);

    return (
        <section ref={containerRef} className={`${className} in-view-hide ${inViewAppear}`}>
            {children}
        </section>
    );
};

const useScrollAnimation = (containerRef: RefObject<ContainerElement>): string => {
    const [mightBeInViewAppear, shouldAddInViewAppear] = useAddCssClass("in-view-appear");

    useEffect(() => {
        const scrollContainerEvent = () => {
            const isInViewport = isElementInViewport(containerRef.current);
            shouldAddInViewAppear(isInViewport);
        };        
        window.addEventListener("scroll", scrollContainerEvent);
        window.dispatchEvent(new Event("scroll"));

        return () => window.removeEventListener("scroll", scrollContainerEvent);
    }, []);

    return mightBeInViewAppear;
};

const isElementInViewport = (containerElement: ContainerElement): boolean => {
    const rect = containerElement.getBoundingClientRect();

    return (
        rect.top > -1 * containerElement.offsetHeight 
        && rect.top < window.innerHeight
    );
};

export default InViewAnimation;