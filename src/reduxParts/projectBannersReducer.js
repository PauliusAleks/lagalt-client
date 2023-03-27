import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { storageSave } from "../utils/storage";
import keycloak from "../keycloak";
import axios from "axios";
const baseURL = "https://lagaltapi.azurewebsites.net";
const debugBaseURL = "https://localhost:7125";

export const createHeaders = () => {
    return {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${keycloak.token}`
    }
}

export const getProjectBannersAsync = createAsyncThunk(
    'projects/getProjectBannersAsync',

    async () => {
        const response = await fetch(`${baseURL}/api/projects/banners`, {
            headers: createHeaders()
        })
        if(response.ok){
            const result = response.json()
            return result;
        }
    }
)
export const getContributorProjectsAsync = createAsyncThunk(
    'user/getContributorProjectsAsync',
    async (id) => {
        const response = await fetch(`https://lagaltapi.azurewebsites.net/api/users/${id}/contributorProjects`)
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
    reducers: {
        addProject: (state, action) => {
            console.log(action.payload)
           //state.project = action.payload
        }
    },
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

export const {setProject, addProject} = projectSlice.actions
export default projectSlice.reducer