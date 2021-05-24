import { configureStore } from '@reduxjs/toolkit';
import entriesReducer from "./entries/entriesSlice";


export const store = configureStore({
    reducer:{
        entries: entriesReducer,
    },
});