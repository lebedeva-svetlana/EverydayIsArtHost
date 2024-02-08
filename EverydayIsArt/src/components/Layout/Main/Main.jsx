import PropTypes from 'prop-types';

import ColorSchemeButton from '../../Common/ColorSchemeButton/ColorSchemeButton.jsx';
import LoginLink from '../../Authorization/LoginLink/LoginLink.jsx';

import useIsDesktop from '../../../hooks/useIsDesktop.jsx';

import './Main.scss';

function Main({ children }) {
    const isDesktop = useIsDesktop();

    let mainBar = <div className="main-bar">
        <ColorSchemeButton></ColorSchemeButton>
        <LoginLink></LoginLink>
    </div>;

    return (
        <>
            {isDesktop && mainBar}
            <main className="main">
                {children}
            </main>
        </>
    );
}

Main.propTypes = {
    children: PropTypes.node
};

export default Main;