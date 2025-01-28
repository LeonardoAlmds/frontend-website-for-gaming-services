import './Login.css';

import React, { useState } from 'react';
import Form from '../../components/Form/Form';
import { Link } from 'react-router-dom';

import { FaFacebook, FaGoogle, FaGithub} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import logo from '../../assets/logo.svg';

const login = () => {

    const [formatData, setFormData] = useState({
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
        if(!formatData.email || !formatData.password) {
            setError('All fields are required');
            return;
        }
        setError('');
        console.log('Form submitted:', formatData);
    }

    const fields = [
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
                button="Entrar"
            />

            <div className='login-options'>
                <Link to="/forgot-password" className="forgot-password">
                    <h3>Esqueceu a senha?</h3>
                </Link>

                <h4>Não tem uma conta? <Link to="/signup">Cadastre-se</Link></h4>
            </div>

            <div className="social-login">
                <div>
                    <button>
                        <FaGoogle />
                    </button>
                    <h4>Google</h4> 
                </div>
                <div>
                    <button>
                        <FaFacebook />
                    </button>
                    <h4>Facebook</h4> 
                </div>
                <div>
                    <button>
                        <FaXTwitter />
                    </button>
                    <h4>X</h4> 
                </div>
                <div>
                    <button>
                        <FaGithub />
                    </button>
                    <h4>Github</h4> 
                </div>
            </div>

            <h5>K+ é protegido por reCAPTCHA e está sujeito à <Link to="/Politcs">Política de Privacidade</Link> e aos <Link to="/Terms">Termos de Serviço</Link> do Google.</h5>
        </div>
    );
};

export default login;