import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './rootReducer';

const configureMiddleware = () => {
    const middleware = applyMiddleware(thunk, logger);
    return composeWithDevTools(middleware);
};

const configureStore = () => {
    const composedEnhancers = configureMiddleware();
    return createStore(rootReducer, composedEnhancers);
};

export default configureStore;
