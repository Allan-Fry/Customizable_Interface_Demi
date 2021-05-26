import { configureStore } from '@reduxjs/toolkit';
import entriesReducer from "./entries/entriesSlice";
import gridsReducer from "./grids/gridsSlice";


export const store = configureStore({
    reducer:{
        entries: entriesReducer,
        grids: gridsReducer,

    },
});