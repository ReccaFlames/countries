import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import Button from '../button/Button';
import './navbar.scss';

const Navbar = () => (
    <header>
        <nav className="header__nav header__nav_shadow">
            <Link className="header__logo" to="/">
                Where in the world?
            </Link>
            <Button icon={<FontAwesomeIcon icon={faMoon} />} text="Dark mode" />
        </nav>
    </header>
);

export default Navbar;
