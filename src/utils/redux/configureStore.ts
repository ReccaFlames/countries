import rootReducer from './rootReducer';
import { configureStore } from '@reduxjs/toolkit';

const configureAppStore = () => {
    return configureStore({
        reducer: rootReducer,
    });
};

export default configureAppStore;
