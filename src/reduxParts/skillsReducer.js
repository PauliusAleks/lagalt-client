import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";



export const getSkillsAsync = createAsyncThunk(
    'project/getSkillsAsync',
    async () => {
        const response = await fetch(`https://lagaltapi.azurewebsites.net/api/skills`)
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