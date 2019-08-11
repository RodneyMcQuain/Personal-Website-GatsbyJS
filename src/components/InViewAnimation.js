import React, { useState, useEffect, useRef } from "react"

const InViewAnimation = props => {
    const container = useRef();
    const [inViewAppear, setInViewAppear] = useState("");

    const isElementInViewport = () => {
        const rect = container ? container.current.getBoundingClientRect() : false;

        return (
            (rect) &&
            (rect.top > -1 * container.current.offsetHeight) &&
            (rect.top < window.innerHeight)
        );
    }
    
    const scrollContainerEvent = () => {
        const className = isElementInViewport() ? "in-view-appear" : "";
        setInViewAppear(className);
    }
    
    useEffect(() => {
        window.addEventListener("scroll", scrollContainerEvent);
        window.dispatchEvent(new Event("scroll"));

        return () => window.removeEventListener("scroll", scrollContainerEvent);
    }, []);

    return (
        <section ref={container} className={`in-view-hide ${inViewAppear}`}>
            {props.children}
        </section>
    );
};

export default InViewAnimation;