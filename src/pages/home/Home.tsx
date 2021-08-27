import CardsGrid from '../../components/card/CardsGrid';
import SearchBar from '../../components/searchbar/SearchBar';
import RegionSelect from './components/RegionSelect';
import './home.scss';

const Home = () => (
    <div className="home-content">
        <SearchBar />
        <RegionSelect />
        <CardsGrid />
    </div>
);

export default Home;
