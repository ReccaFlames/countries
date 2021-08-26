import { Redirect, Route, Switch } from 'react-router-dom';
import CountryPage from './pages/country/CountryPage';
import Home from './pages/home/Home';
import './styles.scss';

const App = () => (
    <main>
        <Switch>
            <Route path="/country/:countryId" component={CountryPage} />
            <Route path="/" component={Home} />
            <Redirect to="/" />
        </Switch>
    </main>
);

export default App;
