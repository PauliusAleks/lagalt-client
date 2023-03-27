import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const baseURL = "https://lagaltapi.azurewebsites.net";
const debugBaseURL = "https://localhost:7125";

export const getProjectApplicationAsync = createAsyncThunk(
    'applications/getProjectApplicationAsync',
    async (project) => {
        const response = await fetch(baseURL+`/api/Applications/getAllApplicationsInProject/${project.id}`)
        if(response.ok){
            const result = await response.json()
            // return result;
            //test below:
            
            const applicationUserPromises = result.map(async (application) => {
                const userResponse = await fetch(baseURL+`/api/Users/${application.userId}`);
                const userData = await userResponse.json();
                return { ...application, user: userData }; 
        });
        
        const applicationsWithUser = await Promise.all(applicationUserPromises);
        return applicationsWithUser; 
    };
});

export const applicationsSlice = createSlice({
    name: 'applications',
    initialState: {
        applications: []
    },
    reducers: {},
    extraReducers: {
        [getProjectApplicationAsync.fulfilled] : (state, action) => {
            console.log(action.payload)
            state.applications = action.payload;
        }
    }
})

export default applicationsSlice.reducer