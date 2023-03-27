import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const baseURL = "https://lagaltapi.azurewebsites.net";
const debugBaseURL = "https://localhost:7125";

export const getProjectApplicationAsync = createAsyncThunk(
    'applications/getProjectApplicationAsync',
    async (project) => {
        const response = await fetch(`${baseURL}/api/Applications/getAllApplicationsInProject/${project.id}`)
        if(response.ok){
            const result = await response.json()
             return result;
        }});

export const applicationsSlice = createSlice({
    name: 'applications',
    initialState: {
        applications: []
    },
    reducers: {
        setApplications: (state,action) => {
            state.applications = action.payload
        }
    },
    extraReducers: {
        [getProjectApplicationAsync.fulfilled] : (state, action) => {
            console.log(action.payload)
            state.applications = action.payload;
        }
    }
})

export const {setApplications} = applicationsSlice.actions
export default applicationsSlice.reducer