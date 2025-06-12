import { configureStore } from '@reduxjs/toolkit';
import DashStore from './DashSlice';

const Store  = configureStore({
    reducer:{
        'val': DashStore
    }
});

export default Store;