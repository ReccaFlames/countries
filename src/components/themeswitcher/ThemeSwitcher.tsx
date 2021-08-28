import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import Button from '../button/Button';

const ThemeSwitcher = () => {
    const [themeState, setThemeState] = useState(false);

    useEffect(() => {
        const getTheme = localStorage.getItem('Theme');
        if (getTheme === 'dark') {
            setThemeState(true);
        }
    }, []);

    useEffect(() => {
        if (themeState) {
            localStorage.setItem('Theme', 'dark');
            document.body.classList.add('dark');
        } else {
            localStorage.setItem('Theme', 'light');
            document.body.classList.remove('dark');
        }
    }, [themeState]);

    return (
        <Button
            onClick={() => setThemeState(!themeState)}
            icon={<FontAwesomeIcon icon={themeState ? faSun : faMoon} />}
            text={themeState ? 'Light mode' : 'Dark mode'}
        />
    );
};

export default ThemeSwitcher;
