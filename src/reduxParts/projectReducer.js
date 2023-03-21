import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { storageSave } from "../utils/storage";

export const createProjectAsync = createAsyncThunk(
    'project/createProjectAsync',
    async (projectData) => {
        const response = await fetch(`https://lagaltapi.azurewebsites.net/api/projects/createProject`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(projectData)
        })
        if(response.ok){
            const result = response.json()
            return result;
        }
    }
)

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
        neededSkills: [],
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
            state.neededSkills = action.payload.neededSkills;
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
            state.neededSkills = action.payload.neededSkills;
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
            state.neededSkills = action.payload.neededSkills;
            state.admins = action.payload.admins;
            state.contributors = action.payload.contributors;
        },
        [createProjectAsync.fulfilled] : (state, action) => {
            const newProject = action.payload;
            state.name = newProject.name;
            state.category = newProject.category;
            state.progress = newProject.progress;
            state.description = newProject.description;
            state.gitURL = newProject.gitURL;
            state.imageUrls = newProject.imageUrls;
            state.neededSkills = newProject.neededSkills;
        },
        [createProjectAsync.rejected] : (state, action) => {
            state.error = action.error.message;
        },
        [getProjectBannersAsync.fulfilled]: (state, action) =>{
            storageSave("banners", action.payload)
        }
    }
})

export const {setProject} = projectSlice.actions
export default projectSlice.reducer