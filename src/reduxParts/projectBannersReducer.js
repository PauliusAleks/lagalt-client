import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { storageSave } from "../utils/storage";
import axios from "axios";
const baseURL = "https://lagaltapi.azurewebsites.net";
const debugBaseURL = "https://localhost:7125";
export const getProjectBannersAsync = createAsyncThunk(
    'project/getProjectBannersAsync',
    async () => {
        const response = await fetch(`${debugBaseURL}/api/projects/banners`)
        if(response.ok){
            const result = response.json()
            return result;
        }
    }
)

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
        /*
        ,
        [getProjectBannersAsync.fulfilled]: (state, action) =>{
            storageSave("banners", action.payload)
        } */
    }
})

export const {setProject} = projectSlice.actions
export default projectSlice.reducer