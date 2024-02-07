import { useNavigate } from "react-router-dom";
import { useState } from "react";

import './Login.scss';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
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

        if (!response.ok) {
            setSummaryError('Неверный email или пароль.');
            return;
        }
        let token = await response.json();
        localStorage.setItem('user', JSON.stringify({ email, token: token }));
        //props.setLoggedIn(true);
        //setEmail(email);
        navigate('/');
    }

    return (
        <div className="login">
            <div className="aut-group">
                <input value={email} placeholder="Email" onChange={e => setEmail(e.target.value)} type="email" className={emailError.length != 0 ? "aut-input-error" : "aut-input"} />
                <p className="aut-error">{emailError}</p>
            </div>
            <div className="aut-group">
                <input value={password} placeholder="Пароль" onChange={e => setPassword(e.target.value)} type="password" className={passwordError.length != 0 ? "aut-input-error" : "aut-input"} />
                {/*                <p className="aut-group-info">Пароль должен состоять из шести или более символов латинского алфавита. Содержать цифру, специальный символ, а также заглавную и строчную буквы.</p>*/}
                <p className="aut-error">{passwordError}</p>
            </div>
            <button type="button" onClick={login} className="aut-button">Войти</button>
            <p className="aut-summary-error">{summaryError}</p>
            <div className="aut-need-another">
                <p className="aut-need-another-text">У вас нет аккаунта?</p>
                <button type="button" className="aut-another-button">Зарегистрироваться</button>
            </div>
        </div>
    );
}

export default Login;