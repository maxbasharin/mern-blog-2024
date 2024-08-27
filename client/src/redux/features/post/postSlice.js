import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../../utils/axios';

const initialState = {
    post: [],
    popularPosts: [],
    loading: false,
};

export const createPost = createAsyncThunk(
    'post/createPost', 
    async (params) => {
        try {
            const { data } = await axios.post('/posts', params);
            return data;
        } catch (error) {
            console.log(error);
            throw error; // добавлено для правильного завершения промиса с ошибкой
        }
    }
);

export const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(createPost.pending, (state) => {
                state.loading = true;
            })
            .addCase(createPost.fulfilled, (state, action) => {
                state.loading = false;
                state.post.push(action.payload); // исправлено с `state.posts` на `state.post`
            })
            .addCase(createPost.rejected, (state) => {
                state.loading = false;
            });
    },
});

export default postSlice.reducer;
