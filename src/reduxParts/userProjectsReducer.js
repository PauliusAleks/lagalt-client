import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";



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