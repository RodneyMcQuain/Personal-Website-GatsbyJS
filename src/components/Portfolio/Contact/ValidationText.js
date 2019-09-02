import React, { useState, useEffect } from 'react';
import PropTypes from "prop-types"

const ValidationText = ({formData, setIsError, isDisplayed}) => {
    const [validationText, setValidationText] = useState("");

    useEffect(() => {
        const atLeastOneEmpty = formData => {
            for (const key in formData)
                if (formData[key].trim() === "")
                    return true;
            
            return false;
        }
        const isValidEmail = email => {
            const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return email && email.match(EMAIL_REGEX);
        }
    
        let newValidationText = !isValidEmail(formData.email) ? "Please provide a valid email." : "";
        newValidationText = atLeastOneEmpty(formData) ? "Please fill in empty fields." : newValidationText;
        setValidationText(newValidationText);
    
        const isError = atLeastOneEmpty(formData) || !isValidEmail(formData.email); 
        setIsError(isError);
    }, [formData]);

    return <p id="validation-text" style={{display: isDisplayed && validationText ? 'block' : 'none'}}>{validationText}</p>;
};

ValidationText.propTypes = {
    formData: PropTypes.object.isRequired,
    setIsError: PropTypes.func.isRequired,
    isDisplayed: PropTypes.bool.isRequired,
}

export default ValidationText;