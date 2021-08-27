import CardsGrid from '../../components/card/CardsGrid';
import SearchBar from '../../components/searchbar/SearchBar';
import './home.scss';

const Home = () => (
    <div className="home-content">
        <SearchBar />
        <CardsGrid />
    </div>
);

export default Home;
