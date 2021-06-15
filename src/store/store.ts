import { configureStore, Action } from '@reduxjs/toolkit'

import ReduxThunk from "redux-thunk";
import axiosMiddleware from "redux-axios-middleware";

import { ThunkAction } from "redux-thunk";

import { ListState } from "./listSlice";

import ListSliceReducer from "./listSlice";

export type AppThunk = ThunkAction<void, ListState, unknown, Action<string>>;


const store = configureStore({
    reducer: {
        listState: ListSliceReducer
    },
    middleware: [ReduxThunk],
});

export type RootState = ReturnType<typeof store.getState>

export default store;
