import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { AppThunk } from "./store";

export interface PostItem {
    userId: number;
    id: number;
    title: string;
    body: string;
};

export interface ListState {
    list: PostItem[];
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

        setList: (state, { payload }: PayloadAction<PostItem[]>) => {
            state.list = payload;
        },
    },
});

export const { setLoading, setErrors, setList } = listSlice.actions;

export default listSlice.reducer;

export const listSelector = (state: { listState: ListState }) => state.listState;

export const getList = (): AppThunk => {
    return async (dispatch) => {
        dispatch(setLoading(true));
        try {
            const res = await axios.get(
                `https://jsonplaceholder.typicode.com/posts`
            );
            dispatch(setLoading(false));
            dispatch(setList(res.data));
        } catch (error) {
            dispatch(setErrors(error.message));
            dispatch(setLoading(false));
        }
    };
};