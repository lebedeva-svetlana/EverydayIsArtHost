import { useState, useEffect } from "react";

import Icon from '../../../assets/images/colorScheme.svg';

import './ColorSchemeButton.scss';

function ColorSchemeButton() {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        let isThemeDark = isStorageThemeDark();
        if (isThemeDark || isDark) {
            document.body.classList.add('dark');
            setThemeToStorage('dark');
        }
        else {
            document.body.classList.remove('dark');
            setThemeToStorage('light');
        }
    }, [isDark]);

    function isStorageThemeDark() {
        let storageTheme = localStorage.getItem('theme');
        return storageTheme !== 'dark';
    }

    function setThemeToStorage(theme) {
        let storageTheme = localStorage.getItem('theme');
        if (storageTheme !== theme) {
            localStorage.setItem('theme', theme);
        }
    }

    function inverseColorTheme() {
        setIsDark(!isDark);
    }

    return (
        <button onClick={inverseColorTheme} className="change-color-scheme">
            <img src={Icon} className="color-scheme-icon"></img>
        </button>
    );
}

export default ColorSchemeButton;