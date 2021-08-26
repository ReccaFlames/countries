import Currency from './currency';
import Language from './language';

type Country = {
    name: string;
    nativeName: string;
    alpha3Code: string;
    flag: string;
    population: number;
    region: string;
    capital: string;
    subregion: string;
    topLevelDomain: string;
    currencies: Array<Currency>;
    languages: Array<Language>;
    borders: Array<string>;
};

export default Country;
