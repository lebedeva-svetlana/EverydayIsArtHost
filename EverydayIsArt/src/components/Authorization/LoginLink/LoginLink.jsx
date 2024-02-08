import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

import './LoginLink.scss';

function LoginLink() {
    const [loggedIn, setLoggedIn] = useState(true);

    useEffect(() => {
        let user = JSON.parse(localStorage.getItem('user'))
        if (!user || !user.token) {
            setLoggedIn(false);
            return;
        }

        //fetch("http://localhost:3080/verify", {
        //    method: "POST",
        //    headers: {
        //        'jwt-token': user.token
        //    }
        //})
        //    .then(r => r.json())
        //    .then(r => {
        //        setLoggedIn('success' === r.message)
        //        setEmail(user.email || "")
        //    })
    }, []);

    if (loggedIn) {
        return <Link to="/user" className="aut-link">Профиль</Link>
    }
    else {
        return <Link to="/login" className="aut-link">Вход</Link>
    }
}

export default LoginLink;