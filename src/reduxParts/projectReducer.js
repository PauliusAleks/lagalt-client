import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getProjectBannersAsync = createAsyncThunk(
    'project/getProjectBannersAsync',
    async () => {
        const response = await fetch(`https://lagaltapi.azurewebsites.net/api/projects/banners`)
        if(response.ok){
            const result = response.json()
            return result;
        }
    }
)
export const getAdminProjectAsync = createAsyncThunk(
    'project/getProjectAsync',
    async (id) => {
        const response = await fetch(`https://lagaltapi.azurewebsites.net/api/projects/admin/${id}`)
        if(response.ok){
            const result = response.json()
            return result;
        }
    }
)
export const getContributorProjectAsync = createAsyncThunk(
    'project/getProjectAsync',
    async (id) => {
        const response = await fetch(`https://lagaltapi.azurewebsites.net/api/projects/contributor/${id}`)
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
        name: "",
        category: "", //enum
        progress: "", //enum
        description: "",
        gitURL: "",
        imageUrls: [],
        neededSkillsName: [],
        admins:[],
        contributors: []
    },
    reducers: {
        setProject: (state, action) => {
            state.id = action.payload.id;
            state.name = action.payload.name;
            state.category = action.payload.category;
            state.progress = action.payload.progress;
            state.description = action.payload.description;
            state.gitURL = action.payload.gitURL;
            state.imageUrls = action.payload.imageUrls;
            state.neededSkillsName = action.payload.neededSkillsName;
            state.admins = action.payload.admins;
            state.contributors = action.payload.contributors;
        }
    },
    extraReducers: {
        [getAdminProjectAsync.fulfilled] : (state, action) => {
            state.id = action.payload.id;
            state.name = action.payload.name;
            state.category = action.payload.category;
            state.progress = action.payload.progress;
            state.description = action.payload.description;
            state.gitURL = action.payload.gitURL;
            state.imageUrls = action.payload.imageUrls;
            state.neededSkillsName = action.payload.neededSkillsName;
            state.admins = action.payload.admins;
            state.contributors = action.payload.contributors;
        },
        [getContributorProjectAsync.fulfilled] : (state, action) => {
            state.name = action.payload.name;
            state.category = action.payload.category;
            state.progress = action.payload.progress;
            state.description = action.payload.description;
            state.gitURL = action.payload.gitURL;
            state.imageUrls = action.payload.imageUrls;
            state.neededSkillsName = action.payload.neededSkillsName;
            state.admins = action.payload.admins;
            state.contributors = action.payload.contributors;
        }
    }
})

export const {setProject} = projectSlice.actions
export default projectSlice.reducer