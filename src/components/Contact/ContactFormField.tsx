import React, { ChangeEvent } from 'react';
import { IContactFormData } from '../../types/ContactFormData';

interface IContactFormFieldProps {
    name: string;
    placeholder: string;
    value: string;
    formData: IContactFormData;
    setFormData: (formData: IContactFormData) => void; 
    setIsValidationTextDisplayed: (isValidationTextDisplayed: boolean) => void;
    isTextArea?: boolean;
}

const ContactFormField = ({
    name, 
    placeholder, 
    value, 
    formData,
    setFormData,
    setIsValidationTextDisplayed,
    isTextArea = false
}: IContactFormFieldProps) => (
    <div>
        <label htmlFor={name}>{placeholder}</label>
        {
            isTextArea
                ? (
                    <textarea
                        id={name}
                        name={name} 
                        className="form-control input-lg"
                        placeholder={placeholder}
                        value={value}
                        onChange={e => handleOnChange(e, formData, setFormData)}
                        onFocus={() => setIsValidationTextDisplayed(true)}
                        required
                    />
                )
                : (
                    <input
                        id={name}
                        type="text" 
                        name={name} 
                        className="form-control input-lg"
                        placeholder={placeholder}
                        value={value}
                        onChange={e => handleOnChange(e, formData, setFormData)}
                        onFocus={() => setIsValidationTextDisplayed(true)}
                        required
                    />
                )
        }
    </div>
);

const handleOnChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, 
    formData: IContactFormData, 
    setFormData: (formData: IContactFormData) => void
): void => {
    const key = event.target.name;
    const updatedFieldValue = event.target.value;
    const newformData = {...formData, [key]: updatedFieldValue};
    setFormData(newformData);
}

export default ContactFormField;