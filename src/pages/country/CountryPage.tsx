import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { AppState } from '../../utils/redux/rootReducer';
import { selectCountryByAlpha3Code } from '../countries/countreisSlice';

interface CountryPageParams {
    countryId: string;
}

const CountryPage = () => {
    const { countryId } = useParams<CountryPageParams>();
    const country = useSelector((state: AppState) => selectCountryByAlpha3Code(state, countryId));

    return (
        <section>
            <h1>{country.name}</h1>
            <Link to="/">
                <FontAwesomeIcon icon={faLongArrowAltLeft} /> Go Back
            </Link>
        </section>
    );
};

export default CountryPage;
