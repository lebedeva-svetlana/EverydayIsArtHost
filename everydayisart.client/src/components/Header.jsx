import { NavLink, Link } from "react-router-dom";
import '../styles/Header.scss';

function Header() {
    let normal = "nav-link";
    let active = normal + " nav-link-active";

    return (
        <header className="header">
            <nav className="nav">
                <Link to="/" className="header-link">
                    <h1 className="header-title">
                        Everyday<span className="header-title-is">Is</span>Art
                    </h1>
                </Link>
                <NavLink to="/random/tretyakov" className={({ isActive }) => (isActive ? active : normal)}>Третьяковская галерея</NavLink>
                <div className="nav-line"></div>
                <NavLink to="/about" className={({ isActive }) => (isActive ? active : normal)}>О проекте</NavLink>
                <NavLink to="/termsofuse" className={({ isActive }) => (isActive ? active : normal)}>Условия использования</NavLink>
            </nav>
        </header >
    );
}

export default Header;