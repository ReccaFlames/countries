import { Route, Switch } from 'react-router-dom';
import Country from './pages/country/Country';
import Home from './pages/home/Home';
import './styles.scss';

const App = () => (
    <Switch>
        <Route path="/country" component={Country} />
        <Route path="/" component={Home} />
    </Switch>
);

export default App;
