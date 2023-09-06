import { configureStore } from '@reduxjs/toolkit'
import CounterReducer from "./Features/Counter/CounterSlice";
import logger from "./Middleware/Logger.js"; // my own logger
// import logger from 'redux-logger' // package logger

const store = configureStore({
    reducer: {
        counter: CounterReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})

export default store;