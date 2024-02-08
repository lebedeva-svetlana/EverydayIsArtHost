import { useState } from 'react';
import { NavLink, Link } from "react-router-dom";

import ColorSchemeButton from '../../Common/ColorSchemeButton/ColorSchemeButton.jsx';
import LoginLink from '../../Authorization/LoginLink/LoginLink.jsx';

import useDesktop from '../../../hooks/useDesktop.jsx';

import './Header.scss';

function Header() {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const isDesktop = useDesktop();

    let normal = "nav-link";
    let active = normal + " nav-link-active";

    function handleClick() {
        setIsNavOpen(!isNavOpen);
    }

    let title = <Link to="/" className="header-link">
        <h1 className="header-title">
            Everyday<span className="header-title-is">Is</span>Art
        </h1>
    </Link>;

    return (
        <header className="header">
            <nav className="nav">
                {isDesktop ? title :
                    <div className="header-mobile">
                        {title}
                        <button onClick={handleClick} className="button-symbol">☰</button>
                        <ColorSchemeButton></ColorSchemeButton>
                        <LoginLink></LoginLink>
                    </div>
                }
                {(isDesktop || isNavOpen) && <>
                    <NavLink to="/random/all" className={({ isActive }) => (isActive ? active : normal)}>Общая галерея</NavLink>
                    <div className="nav-line"></div>
                    <NavLink to="/random/tretyakov" className={({ isActive }) => (isActive ? active : normal)}>Третьяковская галерея</NavLink>
                    <NavLink to="/random/vam" className={({ isActive }) => (isActive ? active : normal)}>Музей Виктории и Альберта</NavLink>
                    <NavLink to="/random/metmuseum" className={({ isActive }) => (isActive ? active : normal)}>Метрополитен-музей</NavLink>
                    <div className="nav-line"></div>
                    <NavLink to="/about" className={({ isActive }) => (isActive ? active : normal)}>О проекте</NavLink>
                    <NavLink to="/termsofuse" className={({ isActive }) => (isActive ? active : normal)}>Условия использования</NavLink>
                </>}
            </nav>
        </header >
    );
}

export default Header;