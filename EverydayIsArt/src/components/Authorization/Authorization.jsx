import PropTypes from 'prop-types';
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";

import './Authorization.scss';

function Authorization({ autButtonText, autAnotherLink, autAnotherLinkText, autAnotherText, isLogin }) {
    const [email, setEmail] = useState('');
    const [loginName, setLoginName] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [loginNameError, setLoginNameError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [summaryError, setSummaryError] = useState('');

    const navigate = useNavigate();

    function checkEmail() {
        if (email.length == 0) {
            setEmailError('Введите email.');
            return false;
        }
        if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
            setEmailError("Введите корректный email.");
            return false;
        }

        return true;
    }

    function checkPassword() {
        if (password.length == 0) {
            setPasswordError('Введите пароль.');
            return false;
        }
        if (!/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^*-]).{6,20}$/.test(password)) {
            setPasswordError('Введите корректный пароль.');
            return false;
        }
        return true;
    }

    function checkLogin() {
        if (loginName.length == 0) {
            setLoginNameError('Введите логин.');
            return false;
        }
        if (!/^[a-zA-Z0-9_]{4,20}$/.test(loginName) || !/[a-zA-Z]+/.test(loginName)) {
            setLoginNameError('Введите корректный логин.');
            return false;
        }
        return true;
    }

    async function login() {
        let isEmailValid = checkEmail();
        let isPasswordValid = checkPassword();
        setSummaryError('');
        if (!(isEmailValid && isPasswordValid)) {
            return;
        }
        setEmailError('');
        setPasswordError('');

        let url = `${import.meta.env.VITE_URL_API}/user/login`;
        let response;

        try {
            response = await fetch(url, {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    username: email,
                    password: password
                })
            });
        }
        catch (error) {
            setSummaryError('Что-то пошло не так! Повторите попытку позже.');
            return;
        }

        let result = await response.json();

        if (!response.ok) {
            setSummaryError(result);
            return;
        }

        localStorage.setItem('user', JSON.stringify({ email, token: result }));
        navigate('/');
    }

    async function register() {
        let isEmailValid = checkEmail();
        let isPasswordValid = checkPassword();
        let isLoginValid = checkLogin();

        setSummaryError('');
        if (!(isEmailValid && isPasswordValid && isLoginValid)) {
            return;
        }

        setEmailError('');
        setPasswordError('');
        setLoginNameError('');

        let url = `${import.meta.env.VITE_URL_API}/user/register`;
        let response;

        try {
            response = await fetch(url, {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                    username: loginName
                })
            });
        }
        catch (error) {
            setSummaryError('Что-то пошло не так! Повторите попытку позже.');
            return;
        }

        let result = await response.json();

        if (!response.ok) {
            setSummaryError(result);
            return;
        }
        
        localStorage.setItem('user', JSON.stringify({ email, token: result }));
        navigate('/');
    }

    let loginGroup = <div className="aut-group">
        <input value={loginName} placeholder="Логин" onChange={e => setLoginName(e.target.value)} type="text" className={loginNameError.length != 0 ? "aut-input-error" : "aut-input"} />
        <p className="aut-group-info">Длина логина должна составлять от четырёх до двадцати символов. Он может содержать только латинские буквы, цифры и символ подчёркивания.</p>
        <p className="aut-error">{loginNameError}</p>
    </div>;

    return (
        <div className="aut">
            {!isLogin && loginGroup}
            <div className="aut-group">
                <input value={email} placeholder="Email" onChange={e => setEmail(e.target.value)} type="email" className={emailError.length != 0 ? "aut-input-error" : "aut-input"} />
                <p className="aut-error">{emailError}</p>
            </div>
            <div className="aut-group">
                <input value={password} placeholder="Пароль" onChange={e => setPassword(e.target.value)} type="password" className={passwordError.length != 0 ? "aut-input-error" : "aut-input"} />
                {!isLogin && <p className="aut-group-info">Длина пароля должна составлять от шести до двадцати символов латинского алфавита. Содержать цифру, специальный символ, а также заглавную и строчную буквы.</p>}
                <p className="aut-error">{passwordError}</p>
            </div>
            <button type="button" onClick={isLogin ? login : register} className="aut-button">{autButtonText}</button>
            <p className="aut-summary-error">{summaryError}</p>
            <div className="aut-need-another">
                <p className="aut-need-another-text">{autAnotherText}</p>
                <Link to={autAnotherLink} className="aut-another-link">{autAnotherLinkText}</Link>
            </div>
        </div>
    );
}

Authorization.propTypes = {
    autButtonText: PropTypes.string,
    autAnotherLinkText: PropTypes.string,
    autAnotherLink: PropTypes.string,
    autAnotherText: PropTypes.string,
    isLogin: PropTypes.bool
};

export default Authorization;