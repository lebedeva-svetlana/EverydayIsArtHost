import PropTypes from 'prop-types';

import ColorSchemeButton from '../../Common/ColorSchemeButton/ColorSchemeButton.jsx';
import LoginLink from '../../Authorization/LoginLink/LoginLink.jsx';

import useDesktop from '../../../hooks/useDesktop.jsx';

import './Main.scss';

function Main({ children }) {
    const isDesktop = useDesktop();

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