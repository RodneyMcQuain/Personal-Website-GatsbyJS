import React, { useState } from 'react';

export const useAddCssClass = className => {
    const [css, setCss] = useState("");

    const shouldAddClass = isClass => {
        const mightBeClass = isClass ? className : "";
        setCss(mightBeClass);
    };

    return [css, shouldAddClass]; 
}