import Header from './Header/Header.jsx';
import Main from './Main/Main.jsx';

import './Layout.scss';
import '../Common/media.scss';

function Layout({ children }) {
    return (
        <>
            <Header></Header>
            <Main>{children}</Main>
        </>
    );
}

export default Layout;