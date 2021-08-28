import { Link } from 'react-router-dom';
import ThemeSwitcher from '../themeswitcher/ThemeSwitcher';
import './navbar.scss';

const Navbar = () => (
    <header>
        <nav className="header__nav header__nav_shadow">
            <Link className="header__logo" to="/">
                Where in the world?
            </Link>
            <ThemeSwitcher />
        </nav>
    </header>
);

export default Navbar;
