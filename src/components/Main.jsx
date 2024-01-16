import { useMediaQuery } from 'react-responsive';

import ColorSchemeButton from './ColorSchemeButton.jsx';
import LoginLink from './LoginLink.jsx';

import '../styles/Main.scss';

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