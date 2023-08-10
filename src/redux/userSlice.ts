import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchGitHubUser, GitHubUserResponse } from '../api/githubAPI';

export const getUser = createAsyncThunk('user/getUser', async (username: string, { rejectWithValue }) => {
    try {
        const data = await fetchGitHubUser(username);
        return data as GitHubUserResponse;
    } catch (err) {
        return rejectWithValue(err);
    }
});

interface UserState {
    user: GitHubUserResponse | null;
    loading: 'idle' | 'pending' | 'succeeded' | 'failed';
    error: any;
}

const initialState: UserState = {
    user: null,
    loading: 'idle',
    error: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        clearState: (state) => {
            state.user = null;
            state.error = null;
            state.loading = 'idle';
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getUser.pending, (state) => {
                state.loading = 'pending';
            })
            .addCase(getUser.fulfilled, (state, action) => {
                state.loading = 'succeeded';
                state.user = action.payload;
                state.error = null;
            })
            .addCase(getUser.rejected, (state, action) => {
                state.loading = 'failed';

                if (action.payload === 404) {
                    state.error = 'Not found';
                } else if (action.payload === 500) {
                    state.error = 'Something wrong with the server';
                } else {
                    state.error = 'An error occurred';
                }
            })
    },
});

export const { clearState } = userSlice.actions;
export default userSlice.reducer;
