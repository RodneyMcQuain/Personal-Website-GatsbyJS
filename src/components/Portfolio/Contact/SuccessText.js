
import React from 'react';

const SuccessText = ({isSuccess, isValidationTextDisplayed}) => (
    <div id="success-text" style={{display: isSuccess && !isValidationTextDisplayed ? "block" : "none"}}>
        <div>Thanks for getting in touch!</div>
        <div>I will get back to you within 24 hours.</div>
    </div>
);

export default SuccessText;