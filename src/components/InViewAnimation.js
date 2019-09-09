import React, { useState, useEffect, useRef } from "react"

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
    const [inViewAppear, setInViewAppear] = useState("");

    useEffect(() => {
        const wrappedScrollContainerEvent = () => scrollContainerEvent(containerRef, setInViewAppear);
        window.addEventListener("scroll", wrappedScrollContainerEvent);
        window.dispatchEvent(new Event("scroll"));

        return () => window.removeEventListener("scroll", wrappedScrollContainerEvent);
    }, []);

    return inViewAppear;
};

const scrollContainerEvent = (containerRef, setInViewAppear) => {
    const className = isElementInViewport(containerRef) ? "in-view-appear" : "";
    setInViewAppear(className);
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