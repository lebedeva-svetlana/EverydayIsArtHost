import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { NavLink, Link } from "react-router-dom";
import '../styles/Header.scss';

function Header() {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const isDesktop = useMediaQuery({
        query: '(min-width: 980px)'
    });

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
                    </div>
                }
                {(isDesktop || isNavOpen) && <>
                    <NavLink to="/random/tretyakov" className={({ isActive }) => (isActive ? active : normal)}>Третьяковская галерея</NavLink>
                    <NavLink to="/random/vam" className={({ isActive }) => (isActive ? active : normal)}>Музей Виктории и Альберта</NavLink>
                    <div className="nav-line"></div>
                    <NavLink to="/about" className={({ isActive }) => (isActive ? active : normal)}>О проекте</NavLink>
                    <NavLink to="/termsofuse" className={({ isActive }) => (isActive ? active : normal)}>Условия использования</NavLink>
                </>}

            </nav>
        </header >
    );
}

export default Header;