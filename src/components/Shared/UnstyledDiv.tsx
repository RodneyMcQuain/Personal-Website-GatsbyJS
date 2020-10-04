import React from 'react';

interface UnstyledDiv {
    children: string | JSX.Element | JSX.Element[];
}

const UnstyledDiv = ({ children }: UnstyledDiv) => <div style={{fontSize: 'initial'}}>{children}</div>

export default UnstyledDiv;