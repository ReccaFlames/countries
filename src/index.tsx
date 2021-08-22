import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { history } from './utils/history';
import App from './App';
import Navbar from './components/navbar/Navbar';
import configureStore from './utils/redux/configureStore';
import { Provider } from 'react-redux';

const store = configureStore();

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Router history={history}>
                <Navbar />
                <App />
            </Router>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
