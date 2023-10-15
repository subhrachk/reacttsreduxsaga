import { configureStore, getType } from "@reduxjs/toolkit";
import counterReducer from './Components/Shared/Store/Counter/CounterSlice';

const store = configureStore({
    reducer : {
        counter : counterReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch ;

export default store;