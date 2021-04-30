import React, { useState, useEffect } from 'react';
import PropTypes from "prop-types";
import { validationText as validationTextClass } from '../../styles/layout/components/Contact/ValidationText.module.scss';
import { statusText, showText } from '../../styles/layout/components/Contact/statusText.module.scss';

const ValidationText = ({ formData, setIsError, isDisplayed }) => {
    const validationText = useContactFormValidation(formData, setIsError);

    return (
        <p
            className={
                `${statusText} ${validationTextClass} 
                ${isDisplayed && validationText ? showText : ''}`
            }
        >
            {validationText}
        </p>
    );
};

const useContactFormValidation = (formData, setIsError) => {
    const [validationText, setValidationText] = useState("");

    useEffect(() => {
        let newValidationText = !isValidEmail(formData.email) ? "Please provide a valid email." : "";
        newValidationText = atLeastOneEmpty(formData) ? "Please fill in empty fields." : newValidationText;
        setValidationText(newValidationText);

        const isError = atLeastOneEmpty(formData) || !isValidEmail(formData.email);
        setIsError(isError);
    }, [formData]);

    return validationText;
}

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

ValidationText.propTypes = {
    formData: PropTypes.object.isRequired,
    setIsError: PropTypes.func.isRequired,
    isDisplayed: PropTypes.bool.isRequired,
}

export default ValidationText;