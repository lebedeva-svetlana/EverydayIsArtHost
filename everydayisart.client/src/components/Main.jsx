import { useMediaQuery } from 'react-responsive';

import ColorSchemeButton from './ColorSchemeButton.jsx';

import '../styles/Main.scss';

function Main({ children }) {
    const isDesktop = useMediaQuery({
        query: '(min-width: 980px)'
    });

    return (
        <>
            {isDesktop && <ColorSchemeButton></ColorSchemeButton>}
            <main className="main">
                {children}
            </main>
        </>
    );
}

export default Main;