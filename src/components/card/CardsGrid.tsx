import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Country from '../../models/country';
import { fetchCountries, filteredCountries } from '../../pages/countries/countreisSlice';
import CountryCard from '../../pages/home/components/CountryCard';
import { AppState } from '../../utils/redux/rootReducer';
import './cardsgrid.scss';

const CardsGrid: React.FC = () => {
    const status = useSelector((state: AppState) => state.countries.status);
    const filtered = useSelector(filteredCountries);

    const dispatch = useDispatch();

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchCountries());
        }
    }, []);

    return (
        <ul className="cards">
            {filtered.map((country: Country, index: number) => {
                return <CountryCard key={index} country={country} link={`/country/${country.alpha3Code}`} />;
            })}
        </ul>
    );
};

export default CardsGrid;
