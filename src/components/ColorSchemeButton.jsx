import { useMediaQuery } from "react-responsive";
import { useState, useEffect } from "react";

import Icon from '../assets/images/colorScheme.svg';

import '../styles/ColorSchemeButton.scss';

function ColorSchemeButton() {
    const [isDark, setIsDark] = useState(false);
    const prefersColorScheme = useMediaQuery(
        {
            query: "(prefers-color-scheme: dark)",
        },
        undefined,
        (isSchemeDark) => setIsDark(isSchemeDark)
    );

    useEffect(() => {
        isDark ? document.body.classList.add('dark') :
            document.body.classList.remove('dark');
    }, [isDark]);

    function handleClick() {
        setIsDark(!isDark);
    }

    return (
        <button onClick={handleClick} className="change-color-scheme">
            <img src={Icon} className="color-scheme-icon"></img>
        </button >
    );
}

export default ColorSchemeButton;