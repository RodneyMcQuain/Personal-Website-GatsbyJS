import React, { useState } from 'react';
import InViewAnimation from '../components/InViewAnimation';
import ValidationText from '../components/Contact/ValidationText';
import SuccessText from '../components/Contact/SuccessText';
import Layout from '../components/Layout/layout';
import SEO from '../components/seo';
import ContactIcon from '../components/Contact/ContactIcon';

const THIS_PAGE = "/";

const Contact = () => {
    const [formData, setformData] = useState({
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
        const updatedFieldValue = event.target.value;
        const newformData = {...formData, [key]: updatedFieldValue};
        setformData(newformData);
    }
    
    const handleSubmit = event => {
        event.preventDefault();

        const form = event.target;
        fetch(THIS_PAGE, {
            method: 'POST',
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams({
                "form-name": form.getAttribute('name'),
                ...formData
            })
                .toString() 
        })
            .then(() => {
                const emptyForm = createEmptyForm(formData);
                setformData(emptyForm);
                setIsSuccess(true);
                setIsValidationTextDisplayed(false);
            })
            .catch(() => setIsSuccess(false));
    };

    return (
        <Layout>
            <InViewAnimation>
                <SEO title="Contact" />
                <div className="container">
                    <div className="page-header">
                        <h1 id="contact">Contact</h1>
                    </div>

                    <div className="col-xs-12">
                        <div className="center-container contact-container -curved-border">
                            <ValidationText formData={formData} setIsError={setIsError} isDisplayed={isValidationTextDisplayed} />
                            <form 
                                name="contact-form" 
                                id="contact-form" 
                                method="POST" 
                                onSubmit={e => handleSubmit(e)}
                                action={THIS_PAGE}
                                data-netlify="true" 
                                data-netlify-honeypot="bot-field" 
                            >
                                <input type="hidden" name="bot-field" />
                                <input type="hidden" name="form-name" value="contact-form" />
                                <FormField 
                                    name={"name"} 
                                    placeholder={"Name"}
                                    value={formData.name}                                     
                                    handleOnChange={handleOnChange}
                                    setIsValidationTextDisplayed={setIsValidationTextDisplayed}
                                />

                                <FormField 
                                    name={"email"} 
                                    placeholder={"Email"}
                                    value={formData.email}                                     
                                    handleOnChange={handleOnChange}
                                    setIsValidationTextDisplayed={setIsValidationTextDisplayed}
                                />

                                <FormField 
                                    name={"subject"} 
                                    placeholder={"Subject"}
                                    value={formData.subject}                                     
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
                                        value={formData.message}
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
                                        <ContactIcon /> Send Email
                                    </button>
                                </div>
                            </form>
                            <SuccessText isSuccess={isSuccess} isValidationTextDisplayed={isValidationTextDisplayed} />
                        </div>
                    </div>
                </div>
            </InViewAnimation>
        </Layout>
    );
};

const FormField = ({name, placeholder, value, handleOnChange, setIsValidationTextDisplayed}) => (
    <div>
        <label htmlFor={name}>{placeholder}</label>
        <input
            id={name}
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

const createEmptyForm = formData => {
    let emptyForm = {...formData};
    Object.keys(emptyForm)
        .forEach(key => emptyForm[key] = "");
    return emptyForm;
};

export default Contact;