import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch, useSelector } from 'react-redux';
import { searchPhraseChange } from '../../pages/filters/filtersSlice';
import { AppState } from '../../utils/redux/rootReducer';
import './searchbar.scss';

const SearchBar = () => {
    const dispatch = useDispatch();
    const onSearchPhraseChange = (searchPhrase: string) => dispatch(searchPhraseChange(searchPhrase));
    const { searchPhrase } = useSelector((state: AppState) => state.filters);

    return (
        <div className="input-group">
            <FontAwesomeIcon className="icon" icon={faSearch} />
            <input
                className="input-text"
                type="text"
                id="myInput"
                placeholder="Search for country.."
                onChange={(e) => onSearchPhraseChange(e.target.value)}
                value={searchPhrase}
            />
        </div>
    );
};

export default SearchBar;
