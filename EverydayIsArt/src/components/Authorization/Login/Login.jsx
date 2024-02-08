import Authorization from '../Authorization.jsx';

import '../Authorization.scss';

function Login() {
    return (
        <Authorization isLogin={true} autButtonText='Войти' autAnotherLink='/register' autAnotherText='У вас нет аккаунта?' autAnotherLinkText='Зарегистрироваться'></Authorization>
    );
}

export default Login;