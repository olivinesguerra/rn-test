import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { AppThunk } from "./store";

export interface ListState {
    list: object[];
    loading: boolean;
    errors: string;
};

const initialState: ListState = {
    list: [],
    loading: false,
    errors: "",
};

const listSlice = createSlice({
    name: "list",
    initialState,
    reducers: {
        setLoading: (state, { payload }: PayloadAction<boolean>) => {
            state.loading = payload;
        },

        setErrors: (state, { payload }: PayloadAction<string>) => {
            state.errors = payload;
        },

        setList: (state, { payload }: PayloadAction<object[]>) => {
            state.list = payload;
        },
    },
});

export const { setLoading, setErrors, setList } = listSlice.actions;

export default listSlice.reducer;

export const listSelector = (state: ListState) => state;

export const getList = (): AppThunk => {
    return async (dispatch) => {
        dispatch(setLoading(true));
        try {
            const res = await axios.get(
                `https://jsonplaceholder.typicode.com/posts`
            );
            console.log("meow");
            // console.log(res.data);
            dispatch(setLoading(false));
            dispatch(setList(res.data));
        } catch (error) {
            dispatch(setErrors(error.message));
            dispatch(setLoading(false));
        }
    };
};