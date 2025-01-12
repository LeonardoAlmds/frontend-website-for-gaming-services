import React, { useState } from 'react';
import Form from '../../components/Form/Form';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.svg';

const Signup = () => {
    const [formatData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });
    const [error, setError] = useState('');

    const handleChanges = (e) => {
        setFormData({
            ...formatData,
            [e.target.id]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!formatData.name || !formatData.email || !formatData.password) {
            setError('All fields are required');
            return;
        }
        setError('');
        console.log('Form submitted:', formatData);
    }

    const fields = [
        {
            label: '',
            type: 'text',
            id: 'name',
            value: formatData.name,
            placeholder: 'Name',
            onChange: handleChanges
        },
        {
            label: '',
            type: 'email',
            id: 'email',
            value: formatData.email,
            placeholder: 'Email',
            onChange: handleChanges
        },
        {
            label: '',
            type: 'password',
            id: 'password',
            value: formatData.password,
            placeholder: 'Password',
            onChange: handleChanges
        }
    ];

    return (
        <div className='login-container'>
            <img src={logo} alt="logo" />
            <Form 
                fields={fields}
                error={error}
                onSubmit={handleSubmit}
                button="Cadastrar"
            />

            <div className='login-options'>
                <h4>Já tem uma conta? <Link to="/login">Entrar</Link></h4>
            </div>
        </div>
    );
};

export default Signup;