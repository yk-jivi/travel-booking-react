import { configureStore } from "@reduxjs/toolkit";
import travelsReducer from '../store/travelSlice.js';
import loggerMiddleware from './middleware.js';

export const store = configureStore({
    reducer: {
        travels: travelsReducer,
    },
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(loggerMiddleware),
});