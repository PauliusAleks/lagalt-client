import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const baseURL = "https://lagaltapi.azurewebsites.net";
const debugBaseURL = "https://localhost:7125";


export const getContributorProjectsAsync = createAsyncThunk(
    'user/getContributorProjectsAsync',
    async (id) => {
        const response = await fetch(`${baseURL}/api/users/${id}/contributorProjects`)
        if(response.ok){
            const result = response.json()
            return result;
        }
    }
)
export const userProjectsSlice = createSlice({
    name: 'userProjects',
    initialState: {
        project: []
    },
    reducers: {},
    extraReducers: {
        [getContributorProjectsAsync.fulfilled] : (state, action) => {
            state.project = action.payload;
        }
    }
})

export default userProjectsSlice.reducer