import { useNavigate } from "react-router-dom";

import './Logout.scss';

function Logout() {
    const navigate = useNavigate();

    function logout() {
        localStorage.removeItem('user');
        navigate('/login');
    }

    return (
        <button onClick={logout} className="logout">Выйти</button>
    );
}

export default Logout;