import ColorSchemeButton from '../../Common/ColorSchemeButton/ColorSchemeButton.jsx';
import LoginLink from '../../Authorization/LoginLink/LoginLink.jsx';

import useDesktop from '../../../hooks/useDesktop.jsx';

import './Main.scss';

function Main({ children }) {
    const isDesktop = useDesktop();

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