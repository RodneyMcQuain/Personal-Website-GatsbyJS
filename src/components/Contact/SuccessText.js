
import React from 'react';
import { successText } from '../../styles/layout/components/Contact/SuccessText.module.scss';
import { statusText, showText } from '../../styles/layout/components/Contact/statusText.module.scss';

const SuccessText = ({ isSuccess, isValidationTextDisplayed }) => (
    <div 
        className={
            `${statusText} ${successText} 
            ${isSuccess && !isValidationTextDisplayed ? showText : ''}`
        }
    >
        <br />
        <div>Thanks for getting in touch!</div>
        <div>I will get back to you within 24 hours.</div>
    </div>
);

export default SuccessText;