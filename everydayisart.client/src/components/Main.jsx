import ColorSchemeButton from './ColorSchemeButton.jsx';
import '../styles/Main.scss';

function Main({ children }) {
    return (
        <>
            <ColorSchemeButton></ColorSchemeButton>
            <main className="main">
                {children}
            </main>
        </>
    );
}

export default Main;