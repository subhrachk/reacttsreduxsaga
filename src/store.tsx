import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './Components/Shared/Store/Counter/CounterSlice';
import blogReducer from './Components/Shared/Store/Blogs/BlogSlice';




const store = configureStore({
    reducer : {
        counter : counterReducer,
        blogs : blogReducer
    }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;


export default store;