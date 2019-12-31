
import React from 'react';

const SuccessText = ({ isSuccess, isValidationTextDisplayed }) => (
    <div id="success-text" className={isSuccess && !isValidationTextDisplayed ? 'show-text' : ''}>
        <br />
        <div>Thanks for getting in touch!</div>
        <div>I will get back to you within 24 hours.</div>
    </div>
);

export default SuccessText;