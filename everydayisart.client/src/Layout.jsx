import './styles/Layout.scss';
import Header from './components/Header.jsx';
import Main from './components/Main.jsx';

function Layout({ children }) {
    return (
        <>
            <Header></Header>
            <Main>{children}</Main>
        </>
    );
}

export default Layout;