import Authorization from '../Authorization.jsx';
function Register() {
    return (
        <Authorization isLogin={false} autButtonText='Зарегистрироваться' autAnotherLink='/login' autAnotherText='У вас уже есть аккаунт?' autAnotherLinkText='Войти'></Authorization>
    );
}

export default Register;