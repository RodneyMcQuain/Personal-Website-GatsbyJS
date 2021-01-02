
import React from 'react';
import successTextStyles from '../../styles/layout/components/Contact/SuccessText.module.scss';
import statusTextStyles from '../../styles/layout/components/Contact/statusText.module.scss';
const { statusText, showText } = statusTextStyles;

const SuccessText = ({ isSuccess, isValidationTextDisplayed }) => (
    <div 
        className={
            `${statusText} ${successTextStyles.successText} 
            ${isSuccess && !isValidationTextDisplayed ? showText : ''}`
        }
    >
        <br />
        <div>Thanks for getting in touch!</div>
        <div>I will get back to you within 24 hours.</div>
    </div>
);

export default SuccessText;