import { configureStore } from '@reduxjs/toolkit';
import AllDataSlice from './AllDataSlice';

const Store = configureStore({
    reducer: {
        AllData: AllDataSlice,
    },
});

export default Store;
