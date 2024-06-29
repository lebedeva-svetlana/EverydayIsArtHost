import { useState } from 'react';
import { NavLink } from "react-router-dom";

import ColorSchemeButton from '../../Common/ColorSchemeButton/ColorSchemeButton.jsx';
import Title from '../Title/Title.jsx';

import useIsDesktop from '../../../hooks/useIsDesktop.jsx';

import './Header.scss';

function Header() {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const isDesktop = useIsDesktop();

    function inverseNavOpen() {
        setIsNavOpen(!isNavOpen);
    }

    function getNavLinkClass(isActive) {
        let normal = "nav-link";
        let active = normal + " nav-link-active";
        return isActive ? active : normal;
    }

    let mobileHeader = <div className="header-mobile">
        <Title></Title>
        <button onClick={inverseNavOpen} className="button-symbol">☰</button>
        <ColorSchemeButton></ColorSchemeButton>
    </div>;

    let fullNav = <>
        <NavLink to="/random/all" className={({ isActive }) => getNavLinkClass(isActive)}>Общая галерея</NavLink>
        <div className="line"></div>
        <NavLink to="/random/tretyakov" className={({ isActive }) => getNavLinkClass(isActive)}>Третьяковская галерея</NavLink>
        <NavLink to="/random/vam" className={({ isActive }) => getNavLinkClass(isActive)}>Музей Виктории и Альберта</NavLink>
        <NavLink to="/random/metmuseum" className={({ isActive }) => getNavLinkClass(isActive)}>Метрополитен-музей</NavLink>
        <div className="line"></div>
        <NavLink to="/about" className={({ isActive }) => getNavLinkClass(isActive)}>О проекте</NavLink>
        <NavLink to="/termsofuse" className={({ isActive }) => getNavLinkClass(isActive)}>Условия использования</NavLink>
    </>;

    return (
        <header className="header">
            <nav className="nav">
                {isDesktop ? <Title></Title> : mobileHeader}
                {(isDesktop || isNavOpen) && fullNav}
            </nav>
        </header>
    );
}

export default Header;