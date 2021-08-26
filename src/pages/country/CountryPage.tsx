import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import Country from '../../models/country';
import Currency from '../../models/currency';
import Language from '../../models/language';
import { AppState } from '../../utils/redux/rootReducer';
import { selectAllCountries, selectCountryByAlpha3Code } from '../countries/countreisSlice';
import './countryPage.scss';

interface CountryPageParams {
    countryId: string;
}

const CountryPage = () => {
    const { countryId } = useParams<CountryPageParams>();
    const country = useSelector((state: AppState) => selectCountryByAlpha3Code(state, countryId));
    const countries = useSelector(selectAllCountries);

    return (
        <section className="country-details">
            <button onClick={() => history.back()} className="link-button">
                <FontAwesomeIcon icon={faArrowLeft} />
                Back
            </button>
            <img className="country-flag" src={country?.flag} alt={`${country?.name} flag`} />
            <h2>{country?.name}</h2>
            <div style={{ paddingBottom: '2rem' }}>
                <PropertyRow title="Native Name" value={country?.nativeName} />
                <PropertyRow title="Populaton" value={country?.population} />
                <PropertyRow title="Region" value={country?.region} />
                <PropertyRow title="Sub Region" value={country?.subregion} />
                <PropertyRow title="Capital" value={country?.capital} />
            </div>
            <div style={{ paddingBottom: '2rem' }}>
                <PropertyRow title="Top Level Domain" value={country?.topLevelDomain} />
                <PropertyRow
                    title="Currencies"
                    value={country?.currencies.map((currency: Currency) => currency.code).join(', ')}
                />
                <PropertyRow
                    title="Languages"
                    value={country?.languages.map((language: Language) => language.name).join(', ')}
                />
            </div>
            <div>
                <div style={{ fontWeight: 700 }}>Border Countries:</div>
                <ul className="border-countries">
                    {country?.borders.map((code, index) => {
                        return (
                            <li key={index}>
                                <Link to={`/country/${code}`} className="link-button">
                                    {countries.find((value: Country) => value.alpha3Code === code)?.name}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </section>
    );
};

const PropertyRow = ({ title, value }: { title: string; value?: string | number }) => (
    <div className="property-row">
        <span>{title}: </span>
        {value}
    </div>
);

export default CountryPage;
