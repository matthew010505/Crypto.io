import {configureStore} from "@reduxjs/toolkit";
import { cryptoApi } from "../Services/cryptoApi";
import { configureMiddleware } from 'redux-thunk';
import { setupListeners } from '@reduxjs/toolkit/query';

const store=configureStore({
    reducer:{[cryptoApi.reducerPath]:cryptoApi.reducer,},
    middleware:(getDefaultMiddleware)=>
    getDefaultMiddleware().concat(cryptoApi.middleware),
});
setupListeners(store.dispatch);

export default store;