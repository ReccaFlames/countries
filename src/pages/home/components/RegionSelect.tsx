import { useDispatch, useSelector } from 'react-redux';
import Select from '../../../components/select/Select';
import { AppState } from '../../../utils/redux/rootReducer';
import { regionFilterChange } from '../../filters/filtersSlice';

const RegionSelect = () => {
    const regions = ['all', 'africa', 'americas', 'asia', 'europe', 'oceania'];

    const dispatch = useDispatch();
    const onRegionFilterChange = (region: string) => dispatch(regionFilterChange(region));
    const { region } = useSelector((state: AppState) => state.filters);

    return (
        <Select
            style={{ marginBottom: '2rem' }}
            options={regions}
            defaultOption={region}
            onSelect={onRegionFilterChange}
        />
    );
};

export default RegionSelect;
