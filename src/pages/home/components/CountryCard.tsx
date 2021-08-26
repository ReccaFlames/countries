import Card from '../../../components/card/Card';
import Country from '../../../models/country';

const CountryCard = ({ country, link }: { country: Country; link: string }) => (
    <Card title={country.name} image={country.flag} link={link}>
        <ul style={{ listStyleType: 'none', paddingLeft: 0, margin: 0 }}>
            <li style={{ paddingBottom: '0.5rem' }}>
                <b>Population:</b> {country.population}
            </li>
            <li style={{ paddingBottom: '0.5rem' }}>
                <b>Region:</b> {country.region}
            </li>
            <li>
                <b>Capital:</b> {country.capital}
            </li>
        </ul>
    </Card>
);

export default CountryCard;
