import Header from './components/Header.jsx';
import Main from './components/Main.jsx';

import './styles/Layout.scss';
import './styles/_media.scss';

function Layout({ children }) {
    return (
        <>
            <Header></Header>
            <Main>{children}</Main>
        </>
    );
}

export default Layout;