import CardsGrid from '../../components/card/CardsGrid';
import Country from '../../models/country';
import CountryCard from './components/CountryCard';
import './home.scss';

const Home = () => (
    <div className="home-content">
        <CardsGrid>
            {Array.from(Array(16).keys()).map((i: number) => {
                return <UsaCard key={i} />;
            })}
        </CardsGrid>
    </div>
);

const UsaCard = () => {
    const usa = {
        name: 'United States of America',
        flag: 'https://restcountries.eu/data/usa.svg',
        population: 32394700,
        region: 'Americans',
        capital: 'Washington, D.C.',
    } as Country;

    return <CountryCard country={usa} />;
};

export default Home;
