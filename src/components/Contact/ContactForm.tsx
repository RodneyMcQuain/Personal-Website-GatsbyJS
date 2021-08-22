import React, { useState } from 'react';
import PaddingCard from '../Shared/PaddingCard';
import ContactFormField from './ContactFormField';
import ContactIcon from './ContactIcon';
import SuccessText from './SuccessText';
import ValidationText from './ValidationText';
import { IContactFormData } from '../../types/ContactFormData';
import { contactContainer } from '../../styles/layout/components/Contact/ContactForm.module.scss';

const emptyForm = {
    name: "",
    email: "",
    subject: "",
    message: "",
};

const THIS_PAGE = "/";
const CONTACT_FORM_NAME = "contact-form";

const ContactForm = () => {
    const [formData, setFormData] = useState<IContactFormData>(emptyForm);
    const [isError, setIsError] = useState(true);
    const [isSuccess, setIsSuccess] = useState(false);
    const [isValidationTextDisplayed, setIsValidationTextDisplayed] = useState(false);

    const handleSubmit = event => {
        event.preventDefault();

        fetch(THIS_PAGE, {
            method: 'POST',
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: getNetlifyBody(formData),
        })
            .then(() => {
                setFormData(emptyForm);
                setIsSuccess(true);
                setIsValidationTextDisplayed(false);
            })
            .catch(() => setIsSuccess(false));
    };

    return (
        <PaddingCard className={`${contactContainer} center-container`}>
            <h2>Send Me an Email</h2>
            <ValidationText formData={formData} setIsError={setIsError} isDisplayed={isValidationTextDisplayed} />
            <form
                name={CONTACT_FORM_NAME}
                id={CONTACT_FORM_NAME}
                method="POST"
                onSubmit={e => handleSubmit(e)}
                action={THIS_PAGE}
                data-netlify="true"
                data-netlify-honeypot="bot-field"
            >
                <input type="hidden" name="bot-field" />
                <input type="hidden" name="form-name" value={CONTACT_FORM_NAME} />
                <ContactFormField
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    formData={formData}
                    setFormData={setFormData}
                    setIsValidationTextDisplayed={setIsValidationTextDisplayed}
                />

                <ContactFormField
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    formData={formData}
                    setFormData={setFormData}
                    setIsValidationTextDisplayed={setIsValidationTextDisplayed}
                />

                <ContactFormField
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    formData={formData}
                    setFormData={setFormData}
                    setIsValidationTextDisplayed={setIsValidationTextDisplayed}
                />

                <ContactFormField
                    name="message"
                    placeholder="Message"
                    value={formData.message}
                    formData={formData}
                    setFormData={setFormData}
                    setIsValidationTextDisplayed={setIsValidationTextDisplayed}
                    isTextArea={true}
                />

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
        </PaddingCard>
    );
};

const getNetlifyBody = (formData: IContactFormData): string => (
    new URLSearchParams({
        "form-name": CONTACT_FORM_NAME,
        ...formData
    })
        .toString()
);

export default ContactForm;