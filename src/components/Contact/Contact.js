import React, { useState } from 'react';
import InViewAnimation from '../InViewAnimation';
import ValidationText from './ValidationText';
import SuccessText from './SuccessText';

const Contact = () => {
    const [formElements, setFormElements] = useState({
        name: "", 
        email: "",
        subject: "",
        message: "", 
    });
    const [isError, setIsError] = useState(true);
    const [isSuccess, setIsSuccess] = useState(false);
    const [isValidationTextDisplayed, setIsValidationTextDisplayed] = useState(false);
    
    const handleOnChange = event => {
        const key = event.target.name;
        const updatedValue = event.target.value;
        const newFormElements = {...formElements, [key]: updatedValue};
        setFormElements(newFormElements);
    }
    
    const handleSubmit = event => {
        event.preventDefault();
        fetch('/', {
           method: 'POST',
           headers: { "Content-Type": "application/x-www-form-urlencoded" },
           body: JSON.stringify(formElements) 
        })
        .then(() => {
            const emptyForm = createEmptyForm(formElements);
            setFormElements(emptyForm);
            setIsSuccess(true);
            setIsValidationTextDisplayed(false);
        })
        .catch(() => setIsSuccess(false));
    };

    return (
        <InViewAnimation>
            <div className="container">
                <div className="page-header">
                    <h1><span id="contact"></span>Contact</h1>
                </div>

                <div className="col-xs-12">
                    <div className="center-container contact-container -curved-border">
                        <ValidationText formElements={formElements} setIsError={setIsError} isDisplayed={isValidationTextDisplayed} />
                        <form 
                            name="contact-form" 
                            id="contact-form" 
                            data-netlify="true" 
                            data-netlify-honeypot="bot-field" 
                            method="POST" 
                            onSubmit={e => handleSubmit(e)}
                        >
                            <input type="hidden" name="bot-field" />
                            <input type="hidden" name="form-name" value="contact-form" />
                            <FormField 
                                name={"name"} 
                                placeholder={"Name"}
                                value={formElements.name}                                     
                                handleOnChange={handleOnChange}
                                setIsValidationTextDisplayed={setIsValidationTextDisplayed}
                            />

                            <FormField 
                                name={"email"} 
                                placeholder={"Email"}
                                value={formElements.email}                                     
                                handleOnChange={handleOnChange}
                                setIsValidationTextDisplayed={setIsValidationTextDisplayed}
                            />

                            <FormField 
                                name={"subject"} 
                                placeholder={"Subject"}
                                value={formElements.subject}                                     
                                handleOnChange={handleOnChange}
                                setIsValidationTextDisplayed={setIsValidationTextDisplayed}
                            />

                            <div>
                                <label htmlFor="message">Message</label>
                                <textarea 
                                    id="message"
                                    name="message" 
                                    className="form-control input-lg" 
                                    placeholder="Message"
                                    value={formElements.message}
                                    onChange={e => handleOnChange(e)}
                                    onFocus={() => setIsValidationTextDisplayed(true)}
                                    required 
                                />
                            </div>

                            <div>
                                <button 
                                    type="submit" 
                                    name="submit" 
                                    className="btn btn-lg" 
                                    aria-label="Send Email" 
                                    disabled={isError}
                                >
                                    <span className="fa fa-envelope" aria-hidden="true"></span> Send Email
                                </button>
                            </div>
                        </form>
                        <br />
                        <SuccessText isSuccess={isSuccess} isValidationTextDisplayed={isValidationTextDisplayed} />
                    </div>
                </div>
            </div>
        </InViewAnimation>
    );
};

const FormField = ({name, placeholder, value, handleOnChange, setIsValidationTextDisplayed}) => (
    <div>
        <label htmlFor={name}>{placeholder}</label>
        <input 
            type="text" 
            name={name} 
            className="form-control input-lg"
            placeholder={placeholder}
            value={value}
            onChange={e => handleOnChange(e)}
            onFocus={() => setIsValidationTextDisplayed(true)}
            required 
        />
    </div>
);

const createEmptyForm = formElements => {
    let emptyForm = {...formElements};
    Object.keys(emptyForm)
        .forEach(key => emptyForm[key] = "");
    return emptyForm;
};

export default Contact;