import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const baseURL = "https://lagaltapi.azurewebsites.net";
const debugBaseURL = "https://localhost:7125";

export const getSkillsAsync = createAsyncThunk(
    'project/getSkillsAsync',
    async () => {
        const response = await fetch(`${baseURL}/api/skills`)
        if(response.ok){
            const result = response.json()
            return result;
        }
    }
)

export const skillsSlice = createSlice({
    name: 'skills',
    initialState: {
       skills: []
    },
    reducers: {
        
    },extraReducers: {
        [getSkillsAsync.fulfilled] : (state, {payload}) => {
            state.skills = payload;
        }
    }
})


export default skillsSlice.reducer