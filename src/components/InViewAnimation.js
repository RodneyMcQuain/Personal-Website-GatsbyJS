import React, { useEffect, useRef } from "react"
import { useAddCssClass } from "../services/useAddCssClass";

const InViewAnimation = props => {
    const containerRef = useRef();
    const inViewAppear = useScrollAnimation(containerRef);

    return (
        <section ref={containerRef} className={`in-view-hide ${inViewAppear}`}>
            {props.children}
        </section>
    );
};

const useScrollAnimation = containerRef => {
    const [mightBeInViewAppear, shouldAddInViewAppear] = useAddCssClass("in-view-appear");

    useEffect(() => {
        const scrollContainerEvent = () => {
            const className = isElementInViewport(containerRef);
            shouldAddInViewAppear(className);
        };        
        window.addEventListener("scroll", scrollContainerEvent);
        window.dispatchEvent(new Event("scroll"));

        return () => window.removeEventListener("scroll", scrollContainerEvent);
    }, []);

    return mightBeInViewAppear;
};

const isElementInViewport = containerRef => {
    const rect = containerRef ? containerRef.current.getBoundingClientRect() : false;

    return (
        (rect) &&
        (rect.top > -1 * containerRef.current.offsetHeight) &&
        (rect.top < window.innerHeight)
    );
};

export default InViewAnimation;