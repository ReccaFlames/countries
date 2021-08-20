import React from 'react';
import ReactDOM from 'react-dom';
import { Link, Router } from 'react-router-dom';
import { history } from './utils/history';
import App from './App';

ReactDOM.render(
    <React.StrictMode>
        <Router history={history}>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/country">Country</Link>
                </li>
            </ul>
            <App />
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);
