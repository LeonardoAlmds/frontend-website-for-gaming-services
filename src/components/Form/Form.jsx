import React, { useState } from 'react';
import './Form.css';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Form = ({ 
    onSubmit, 
    fields, 
    error, 
    button 
}) => {

    const [passwordVisibility, setPasswordVisibility] = useState({});

    const togglePasswordVisibility = (fieldId) => {
        setPasswordVisibility((prevState) => ({
            ...prevState,
            [fieldId]: !prevState[fieldId],
        }));
    };

    return (
        <form onSubmit={onSubmit} className="form-container">
            {fields && fields.map((field, index) => (
                <div key={index} className="form-field">
                    {field.label && <label htmlFor={field.id || `field-${index}`}>{field.label}</label>}
                    <input
                        type={
                            field.type === 'password' && passwordVisibility[field.id]
                                ? 'text'
                                : field.type
                        }
                        id={field.id || `field-${index}`}
                        value={field.value}
                        placeholder={field.placeholder || ''}
                        onChange={field.onChange}
                        maxLength={field.maxLength || undefined}
                        minLength={field.minLength || undefined}
                        readOnly={field.readOnly || false}
                        className={field.readOnly ? 'input-read-only' : 'input-default'}
                    />
                    {field.type === 'password' && (
                        <button
                            type="button"
                            onClick={() => togglePasswordVisibility(field.id)}
                            className="password-toggle-button"
                        >
                            {passwordVisibility[field.id] ? <FaEyeSlash /> : <FaEye />}
                        </button>
                    )}
                </div>
            ))}
            <button type="submit" className="form-button">
                {button || 'Submit'}
            </button>
            {error && <p className="form-error">{error}</p>}
        </form>
    );
};

export default Form;