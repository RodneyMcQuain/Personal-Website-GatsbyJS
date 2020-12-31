import React from 'react';
import { AllChildren } from '../../types/AllChildren';

interface UnstyledDiv {
    children: AllChildren;
}

const UnstyledDiv = ({ children }: UnstyledDiv) => <div style={{fontSize: 'initial'}}>{children}</div>

export default UnstyledDiv;