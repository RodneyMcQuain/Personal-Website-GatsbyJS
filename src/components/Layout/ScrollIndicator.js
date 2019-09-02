import React, { useEffect, useState } from "react"

const ScrollIndicator = () => {
    const [width, setWidth] = useState("0%");

    useEffect(() => {
        const scrollIndicatorEvent = () => {
            const scroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrollPercent = (scroll / height) * 100;
            setWidth(scrollPercent + "%");
        };
 
        window.addEventListener("scroll", scrollIndicatorEvent);

        return () => window.removeEventListener("scroll", scrollIndicatorEvent);
    }, []);

    return (
        <div id="scroll-indicator" style={{width: width}}></div>
    );
}

export default ScrollIndicator;