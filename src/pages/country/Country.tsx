import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const Country = () => (
    <Link to="/">
        <FontAwesomeIcon icon={faLongArrowAltLeft} /> Go Back
    </Link>
);

export default Country;
