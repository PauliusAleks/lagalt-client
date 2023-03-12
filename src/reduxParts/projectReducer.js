import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const getProjectAsync = createAsyncThunk(
    'project/getProjectAsync',
    async (id) => {
        const response = await fetch("Endpoint + id")
        if(response.ok){
            const result = response.json()
            return result;
        }
    }
)
export const projectSlice = createSlice({
    name: 'project',
    initialState: {
        id: null,
        name: "name",
        category: 0, //enum
        progress: 0, //enum
        description: "description",
        gitURL: "gitUrl",
        imageURLs: [],
        neededSkills: [],
        admins:[],
        contributors: []
    },
    reducers: {
        setProject: (state, action) => {
            state.name = action.payload.name;
            state.category = action.payload.category;
            state.progress = action.payload.progress;
            state.description = action.payload.description;
            state.gitURL = action.payload.gitURL;
            state.imageURLs = action.payload.imageURLs;
            state.neededSkills = action.payload.neededSkills;
            state.admins = action.payload.admins;
            state.contributors = action.payload.contributors;
        }
    },
    extraReducers: {
        [getProjectAsync.fulfilled] : (state, action) => {
            state.id = action.payload.id;
            state.name = action.payload.name;
            state.category = action.payload.category;
            state.progress = action.payload.progress;
            state.description = action.payload.description;
            state.gitURL = action.payload.gitURL;
            state.imageURLs = action.payload.imageURLs;
            state.neededSkills = action.payload.neededSkills;
            state.admins = action.payload.admins;
            state.contributors = action.payload.contributors;
        }
    }
})

export const {setProject} = projectSlice.actions
export default projectSlice.reducer