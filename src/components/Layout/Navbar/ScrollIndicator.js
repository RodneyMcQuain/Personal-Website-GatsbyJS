import React, { useEffect, useState } from "react"
import styles from '../../../styles/layout/components/Layout/Navbar/ScrollIndicator.module.scss';

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
        <div id={styles.scrollIndicator} style={{ width: width }}></div>
    );
}

export default ScrollIndicator;