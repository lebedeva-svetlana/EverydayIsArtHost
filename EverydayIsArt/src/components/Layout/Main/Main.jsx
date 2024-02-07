import { useMediaQuery } from 'react-responsive';

import ColorSchemeButton from '../../Common/ColorSchemeButton/ColorSchemeButton.jsx';
import LoginLink from '../../Authorization/LoginLink/LoginLink.jsx';

import './Main.scss';

function Main({ children }) {
    const isDesktop = useMediaQuery({
        query: '(min-width: 980px)'
    });

    return (
        <>
            {isDesktop && <div className="main-bar">
                <ColorSchemeButton></ColorSchemeButton>
                <LoginLink></LoginLink>
            </div>}
            <main className="main">
                {children}
            </main>
        </>
    );
}

export default Main;