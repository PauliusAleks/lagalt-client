import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getProjectBannersAsync = createAsyncThunk(
    'project/getProjectBannersAsync',
    async (arg, {rejectWithValue}) => {
        try {
            const {project}= await axios.get(`https://lagaltapi.azurewebsites.net/api/projects/getProjectBanners`)
            return project;
        }
        catch (error) {
            rejectWithValue(error.response.data);
        }
    }
);

export const projectSlice = createSlice({
    name: 'projects',
    initialState: {
        project: []
    },
    reducers: {},
    extraReducers: {
        [getProjectBannersAsync.fulfilled] : (state, {payload}) => {
            state.project = payload;
        }
    }
})

export const {setProject} = projectSlice.actions
export default projectSlice.reducer