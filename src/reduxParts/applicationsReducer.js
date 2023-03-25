import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const baseURL = "https://lagaltapi.azurewebsites.net";
const debugBaseURL = "https://localhost:7125";
export const getProjectApplicationAsync = createAsyncThunk(
    'project/getProjectApplicationAsync',
    async (id) => {
        const response = await fetch(baseURL+`/api/applications/getAllApplicationsInProject/${id}`)
        if(response.ok){
            const result = response.json()
            return result;
        }
    }
)

export const applicationsSlice = createSlice({
    name: 'applications',
    initialState: {
        applications: []
    },
    reducers: {},
    extraReducers: {
        [getProjectApplicationAsync.fulfilled] : (state, {payload}) => {
            state.applications = payload;
        }
    }
})
export default applicationsSlice.reducer