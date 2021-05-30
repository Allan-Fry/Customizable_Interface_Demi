import { configureStore } from '@reduxjs/toolkit';
import accountSlice from './account/accountSlice';
import entriesReducer from "./entries/entriesSlice";
import gamesSlice from './games/gamesSlice';
import gridsReducer from "./grids/gridsSlice";


export const store = configureStore({
    reducer:{
        entries: entriesReducer,
        grids: gridsReducer,
        games: gamesSlice,
        accounts: accountSlice
    },
});