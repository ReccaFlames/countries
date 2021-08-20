import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { history } from './utils/history';
import App from './App';
import Navbar from './components/navbar/Navbar';

ReactDOM.render(
    <React.StrictMode>
        <Router history={history}>
            <Navbar />
            <App />
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);
