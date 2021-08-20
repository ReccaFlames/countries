import { Route, Switch } from 'react-router-dom';
import Country from './pages/country/Country';
import Home from './pages/home/Home';
import './styles.scss';

const App = () => (
    <main>
        <Switch>
            <Route path="/country" component={Country} />
            <Route path="/" component={Home} />
        </Switch>
    </main>
);

export default App;
