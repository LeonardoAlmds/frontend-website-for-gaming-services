import React from 'react';

import 'Form.css';

const Form = ({ 
    onSubmit,
    error,
    button,
}) => {
    
    return (
        <form onSubmit={onSubmit}>
            <div>
                <input
                    type={field.type}
                    id={field.id}
                    value={field.value}
                    placeholder={field.placeholder}
                    onChange={field.onChange}
                    maxLength={field.maxLength || undefined}
                    minLength={field.minLength || undefined}
                    readOnly={field.readOnly || false}
                    className={field.readOnly ? 'input-read-only' : ''}
                />
            </div>
            <button type="submit">{button}</button>
            {error && <p>{error}</p>}
        </form>
    );
}

export default Form;